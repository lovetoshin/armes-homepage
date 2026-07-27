// 여행모아(TravelMoa) 딜 조회 — armes.co.kr/travelmoa/deal/[id] 웹 페이지 전용.
//
// ⚠️ 여기서 읽는 수파베이스는 "여행모아" 수파베이스다(아르메스 본체 수파베이스와 별개).
//    반드시 TRAVELMOA_ 이름표가 붙은 환경변수만 쓴다 → 아르메스 본체와 절대 안 섞임.
//    - TRAVELMOA_SUPABASE_URL       : 여행모아 수파베이스 주소
//    - TRAVELMOA_SUPABASE_ANON_KEY  : 공개 읽기(anon) 키 (전권 service_role 아님 — 읽기만)
//
// 수파베이스 클라이언트 라이브러리를 새로 깔지 않고, 공개 읽기 키로 REST를 직접 호출한다
// (블로그부스터가 travel_deals를 읽는 방식과 동일 — 아르메스 프로젝트 의존성을 늘리지 않음).

const BASE = process.env.TRAVELMOA_SUPABASE_URL
const KEY = process.env.TRAVELMOA_SUPABASE_ANON_KEY

// 여행모아 travel_deals 한 건(딜 페이지에 필요한 필드만)
export interface TravelmoaAgency {
  name: string
  logo_url: string | null
  url: string | null
}
export interface TravelmoaDeal {
  id: string
  deal_type: 'package' | 'flight'   // package=패키지여행, flight=항공권
  title: string
  destination: string | null
  nights: number | null             // 몇 박 (패키지)
  departure_date: string | null     // 출발일 (YYYY-MM-DD)
  return_date: string | null        // 귀국일
  original_price: number | null     // 정가(있을 때만 — 여행모아 쪽에서 오염값은 이미 null 처리됨)
  sale_price: number                // 특가(실제 판매가)
  discount_rate: number | null      // 할인율(%)
  image_url: string | null          // 대표 사진
  deal_url: string                  // 실제 예약처(여행사) 주소
  is_domestic: boolean              // true=국내, false=해외
  region1: string | null            // 해외=대륙, 국내=시도
  region2: string | null            // 해외=나라, 국내=시군구
  departure_city: string | null     // 출발지(서울/부산…)
  is_published: boolean             // 현재 노출 중인지
  expires_at: string | null         // 판매 마감 시각(있으면)
  agency: TravelmoaAgency | null    // 여행사(조인)
}

// 딜 id 로 한 건 조회. 없거나 오류면 null.
export async function fetchTravelmoaDeal(id: string): Promise<TravelmoaDeal | null> {
  if (!BASE || !KEY) {
    console.error('[travelmoa] 환경변수 TRAVELMOA_SUPABASE_URL / TRAVELMOA_SUPABASE_ANON_KEY 누락')
    return null
  }
  // travel_deals.id 는 UUID — 형식에 안 맞는 입력은 요청도 보내지 않고 차단
  if (!/^[0-9a-fA-F-]{16,40}$/.test(id)) return null

  const select = '*,agency:travel_agencies(name,logo_url,url)'
  const url =
    `${BASE}/rest/v1/travel_deals` +
    `?id=eq.${encodeURIComponent(id)}` +
    `&select=${encodeURIComponent(select)}` +
    `&limit=1`

  try {
    const res = await fetch(url, {
      headers: { apikey: KEY, Authorization: `Bearer ${KEY}` },
      next: { revalidate: 300 }, // 5분마다 최신 가격 반영(실시간에 가깝되 서버 부담 최소)
    })
    if (!res.ok) {
      console.error('[travelmoa] 조회 실패', res.status, await res.text().catch(() => ''))
      return null
    }
    const rows = (await res.json()) as TravelmoaDeal[]
    return Array.isArray(rows) ? rows[0] ?? null : null
  } catch (e) {
    console.error('[travelmoa] 조회 예외', e)
    return null
  }
}

// ── 화면 표시용 도우미 ─────────────────────────────────────────
export const dealTypeLabel = (d: TravelmoaDeal) => (d.deal_type === 'flight' ? '항공권' : '패키지')
export const regionScopeLabel = (d: TravelmoaDeal) => (d.is_domestic ? '국내' : '해외')

// 목적지 표기: destination 우선, 없으면 지역(나라/시군구 → 대륙/시도)
export function placeLabel(d: TravelmoaDeal): string {
  return d.destination || d.region2 || d.region1 || ''
}

// 기간 표기: 패키지=박수, 없으면 출발~귀국 날짜
export function durationLabel(d: TravelmoaDeal): string {
  if (d.nights && d.nights > 0) return `${d.nights}박 ${d.nights + 1}일`
  return ''
}

// 날짜 YYYY-MM-DD → 'YYYY.MM.DD'
export const fmtDate = (s: string | null) => (s ? s.replaceAll('-', '.') : '')

// 원화 콤마
export const fmtWon = (n: number) => n.toLocaleString('ko-KR')

// 판매 종료 여부(미노출 또는 마감시각 경과)
export function isDealClosed(d: TravelmoaDeal, now: Date): boolean {
  if (!d.is_published) return true
  if (d.expires_at && new Date(d.expires_at).getTime() < now.getTime()) return true
  return false
}

// ── 일정표(세부정보) 조회 ─────────────────────────────────────
// 앱 딜 상세 화면과 100% 동일한 데이터. DB가 아니라 여행모아 수파베이스의
// "공개 스토리지 JSON"에 저장돼 있다(itineraries/{dealId}.json). 공개라 anon키도 불필요.
// 핵심혜택·해외의료지원·일자별 일정표·포함/불포함 — 수집된 딜만 존재(없으면 null).
export interface ItineraryItem {
  type: 'spot' | 'meal' | 'move' | 'etc'
  text: string
}
export interface ItineraryDay {
  day: number
  date: string | null
  dow: string | null
  items: ItineraryItem[]
}
export interface Itinerary {
  source: string
  code: string
  days: ItineraryDay[]
  keyPoints?: string[]    // 핵심 혜택(대주제 헤더 + 항목이 섞여 옴)
  medicalSupport?: string // 해외 긴급 의료지원 / 여행자보험
  includes?: string       // 포함사항
  excludes?: string       // 불포함사항
  collected_at: string
}

export async function fetchTravelmoaItinerary(dealId: string): Promise<Itinerary | null> {
  if (!BASE) return null
  if (!/^[0-9a-fA-F-]{16,40}$/.test(dealId)) return null
  try {
    const res = await fetch(
      `${BASE}/storage/v1/object/public/itineraries/${dealId}.json`,
      { next: { revalidate: 300 } },
    )
    if (!res.ok) return null
    const data = (await res.json()) as Itinerary
    // 상세일정·핵심포인트·의료지원·포함/불포함 중 하나라도 있어야 표시
    if (
      !data?.days?.length &&
      !data?.keyPoints?.length &&
      !data?.medicalSupport &&
      !data?.includes &&
      !data?.excludes
    )
      return null
    return data
  } catch {
    return null
  }
}
