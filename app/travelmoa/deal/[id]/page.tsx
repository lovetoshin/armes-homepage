// 여행모아 딜 상세 웹 페이지 — https://www.armes.co.kr/travelmoa/deal/{딜id}
//
// 용도: 블로그부스터가 블로그 글 하단에 붙이는 "여행모아 특가" 링크의 착지 페이지.
//   앱이 없는 사람도 웹에서 딜을 보고 [예약하기]로 실제 여행사에 연결된다.
//
// ⭐ 앱 딜 상세 화면(app/src/app/deal/[id].tsx)과 100% 동일한 정보를 보여준다:
//   여행사·사진·배지·목적지·여행일정정보·가격·핵심혜택·해외의료지원·일자별 일정표·포함/불포함.
// 데이터: 여행모아 수파베이스(기본정보=REST, 일정표=공개 스토리지 JSON) — lib/travelmoa.ts.
// 레이아웃: 전역 Navbar가 이미 깔리므로(app/layout.tsx) 여기선 본문만. 아르메스 토스풍 색상 통일.

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  fetchTravelmoaDeal,
  fetchTravelmoaItinerary,
  dealTypeLabel,
  regionScopeLabel,
  placeLabel,
  durationLabel,
  fmtDate,
  fmtWon,
  isDealClosed,
  type ItineraryItem,
} from '@/lib/travelmoa'

export const revalidate = 300 // 5분마다 최신 가격/일정 재검증

const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.travelmoa.app'

// 일정 항목 유형별 이모지·색 (앱 아이콘과 대응)
const ITNR_EMOJI: Record<ItineraryItem['type'], string> = {
  spot: '📍',
  meal: '🍴',
  move: '🚌',
  etc: '•',
}
const ITNR_COLOR: Record<ItineraryItem['type'], string> = {
  spot: '#3182F6',
  meal: '#D97706',
  move: '#059669',
  etc: '#8B95A1',
}

// 카톡·블로그 공유 시 미리보기(제목·사진·가격)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const deal = await fetchTravelmoaDeal(id)
  if (!deal) return { title: '여행모아 특가', robots: { index: false } }
  const desc = `${regionScopeLabel(deal)} ${dealTypeLabel(deal)} · 특가 ${fmtWon(deal.sale_price)}원`
  return {
    title: `${deal.title} | 여행모아 특가`,
    description: desc,
    openGraph: {
      title: deal.title,
      description: desc,
      images: deal.image_url ? [deal.image_url] : [],
      type: 'website',
    },
  }
}

export default async function TravelmoaDealPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const [deal, itinerary] = await Promise.all([
    fetchTravelmoaDeal(id),
    fetchTravelmoaItinerary(id),
  ])

  // 존재하지 않거나 판매 종료 → 404 대신 부드러운 안내(오래된 블로그 링크 대비)
  if (!deal || isDealClosed(deal, new Date())) {
    return <ClosedCard />
  }

  const hasDiscount =
    deal.original_price != null &&
    deal.discount_rate != null &&
    deal.original_price > deal.sale_price

  const place = placeLabel(deal)
  const duration = durationLabel(deal)
  const agencyName = deal.agency?.name ?? ''

  return (
    <div className="min-h-screen bg-white text-[#191F28] pt-20 pb-28">
      <div className="max-w-2xl mx-auto px-5">

        {/* 여행사 */}
        {deal.agency && (
          <div className="flex items-center gap-2 mb-4">
            {deal.agency.logo_url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={deal.agency.logo_url}
                alt={deal.agency.name}
                className="h-6 w-auto object-contain"
              />
            )}
            <span className="text-sm font-semibold text-[#4E5968]">{deal.agency.name}</span>
          </div>
        )}

        {/* 대표 사진 */}
        <div className="rounded-2xl overflow-hidden bg-[#F2F4F6] aspect-[4/3] mb-5">
          {deal.image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={deal.image_url} alt={deal.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#8B95A1] text-sm">
              ✈ 여행 이미지 준비 중
            </div>
          )}
        </div>

        {/* 배지: 국내/해외 · 패키지/항공 */}
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge>{regionScopeLabel(deal)}</Badge>
          <Badge>{deal.deal_type === 'flight' ? '✈ 항공' : '🧳 패키지'}</Badge>
        </div>

        {/* 제목 */}
        <h1 className="text-xl lg:text-2xl font-extrabold leading-snug tracking-tight mb-2">
          {deal.title}
        </h1>

        {/* 목적지 */}
        {place && (
          <div className="flex items-start gap-1 text-[#3182F6] mb-5">
            <span className="mt-0.5">📍</span>
            <span className="text-sm font-semibold">{place}</span>
          </div>
        )}

        {/* 여행 일정 정보 */}
        {(deal.departure_date || deal.return_date || deal.nights != null) && (
          <SectionCard title="여행 일정 정보">
            <div className="grid grid-cols-3 gap-3">
              {duration && <InfoCell label="일정" value={duration} />}
              {deal.departure_date && <InfoCell label="출발일" value={fmtDate(deal.departure_date)} />}
              {deal.return_date && <InfoCell label="귀국일" value={fmtDate(deal.return_date)} />}
              {deal.departure_city && <InfoCell label="출발지" value={deal.departure_city} />}
            </div>
          </SectionCard>
        )}

        {/* 가격 */}
        <SectionCard title="특가 가격">
          {hasDiscount && (
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-[#8B95A1]">정상가</span>
              <span className="text-[#8B95A1] line-through text-sm">
                {fmtWon(deal.original_price as number)}원
              </span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <span className="text-[28px] font-extrabold tracking-tight text-[#3182F6]">
              {fmtWon(deal.sale_price)}원
            </span>
            {hasDiscount && (
              <span className="px-2 py-1 rounded-lg bg-[#FEE2E2] text-[#DC2626] text-xs font-bold">
                {deal.discount_rate}% 할인
              </span>
            )}
          </div>
          <p className="text-xs text-[#8B95A1] mt-1">
            1인 기준 · 유류할증료 포함 · 최종 가격은 여행사에서 확인
          </p>
        </SectionCard>

        {/* 핵심 혜택 한눈에 보기 */}
        {itinerary?.keyPoints && itinerary.keyPoints.length > 0 && (
          <SectionCard title="핵심 혜택 한눈에 보기">
            {itinerary.keyPoints.map((kp, i) => {
              // 대주제 헤더: ■…■ / 【…】 / 이모지 시작 / *단어  → 소제목으로, 나머지는 체크항목
              const isHeader =
                /^[■◆▶【[]/.test(kp) ||
                /^[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(kp) ||
                /^\*\S/.test(kp)
              const clean = kp
                .replace(/^[*■◆▶【\][]+|[■◆】\]]+$/g, '')
                .replace(/^[-ㆍ•◎]\s*/, '')
                .trim()
              return isHeader ? (
                <p key={i} className="text-sm font-bold text-[#191F28] mt-2 first:mt-0">
                  {clean}
                </p>
              ) : (
                <div key={i} className="flex items-start gap-1.5">
                  <span className="text-[#3182F6] mt-0.5 text-xs">✓</span>
                  <span className="text-[13px] text-[#191F28] leading-relaxed">{clean}</span>
                </div>
              )
            })}
          </SectionCard>
        )}

        {/* 해외 긴급 의료지원 */}
        {itinerary?.medicalSupport && (
          <SectionCard title="해외 긴급 의료지원">
            <div className="flex items-start gap-1.5">
              <span className="mt-0.5">🚑</span>
              <span className="text-[13px] text-[#191F28] leading-relaxed">
                {itinerary.medicalSupport}
              </span>
            </div>
          </SectionCard>
        )}

        {/* 여행 일정표 */}
        {itinerary && itinerary.days.length > 0 && (
          <SectionCard title="여행 일정표">
            <div className="space-y-4">
              {itinerary.days.map(day => (
                <div key={day.day} className="space-y-1.5">
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-[#3182F6] text-white text-xs font-bold">
                    {day.day}일차
                  </span>
                  {day.items.length === 0 ? (
                    <p className="text-[13px] text-[#8B95A1] pl-1">자유 일정</p>
                  ) : (
                    day.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 pl-1">
                        <span className="text-xs mt-0.5" style={{ color: ITNR_COLOR[item.type] }}>
                          {ITNR_EMOJI[item.type]}
                        </span>
                        <span className="text-[13px] text-[#191F28] leading-relaxed">{item.text}</span>
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#8B95A1] mt-3">
              가장 빠른 출발일 기준 일정입니다. 출발일에 따라 일부 달라질 수 있습니다.
            </p>
          </SectionCard>
        )}

        {/* 포함사항 */}
        {itinerary?.includes && (
          <SectionCard title="포함사항">
            <p className="text-[13px] text-[#191F28] leading-relaxed whitespace-pre-line">
              {itinerary.includes}
            </p>
          </SectionCard>
        )}

        {/* 불포함사항 */}
        {itinerary?.excludes && (
          <SectionCard title="불포함사항">
            <p className="text-[13px] text-[#191F28] leading-relaxed whitespace-pre-line">
              {itinerary.excludes}
            </p>
          </SectionCard>
        )}

        {/* 예약 안내 */}
        <div className="flex items-start gap-2 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] p-4 mt-5">
          <span className="text-[#1D4ED8]">ℹ️</span>
          <p className="text-xs text-[#1E40AF] leading-relaxed">
            아래 버튼을 누르면 <b>{agencyName || '여행사'}</b> 사이트의 해당 상품 페이지로 이동합니다.
            예약 및 결제는 여행사 사이트에서 직접 진행하세요. 여행모아는 여러 여행사의 특가를 모아 보여주는 서비스입니다.
          </p>
        </div>

        {/* 앱 유도 */}
        <div className="mt-8 pt-6 border-t border-[#E5E8EB] text-center">
          <p className="text-sm text-[#4E5968] mb-3">더 많은 여행사 특가를 한눈에</p>
          <a
            href={PLAY_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3182F6] hover:underline"
          >
            여행모아 앱 다운로드 →
          </a>
        </div>
      </div>

      {/* 하단 고정 예약 버튼 */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-[#E5E8EB] px-5 py-3">
        <div className="max-w-2xl mx-auto">
          <a
            href={deal.deal_url}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="block w-full text-center bg-[#3182F6] hover:bg-[#1B64DA] transition-colors text-white font-bold text-base rounded-2xl py-4"
          >
            {agencyName ? `${agencyName} 사이트에서 예약하기` : '여행사 사이트에서 예약하기'}
          </a>
        </div>
      </div>
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-lg bg-[#EBF3FF] text-[#3182F6] text-xs font-bold">
      {children}
    </span>
  )
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#E5E8EB] bg-[#FBFCFD] p-5 mb-4">
      <p className="text-[11px] font-bold text-[#8B95A1] uppercase tracking-wider mb-3">{title}</p>
      <div className="space-y-1.5">{children}</div>
    </div>
  )
}

function InfoCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-[#8B95A1] mb-0.5">{label}</p>
      <p className="text-sm font-bold text-[#191F28]">{value}</p>
    </div>
  )
}

// 종료·삭제된 딜(오래된 블로그 링크) 착지 화면
function ClosedCard() {
  return (
    <div className="min-h-screen bg-white text-[#191F28] pt-24 pb-16">
      <div className="max-w-md mx-auto px-5 text-center">
        <div className="text-4xl mb-4">🧳</div>
        <h1 className="text-xl font-extrabold mb-2">마감된 특가예요</h1>
        <p className="text-sm text-[#4E5968] leading-relaxed mb-6">
          찾으시는 여행 특가는 판매가 종료되었어요.<br />
          여행모아 앱에서 지금 뜨는 다른 특가를 확인해 보세요.
        </p>
        <a
          href={PLAY_STORE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#3182F6] hover:bg-[#1B64DA] transition-colors text-white font-bold text-sm rounded-xl px-6 py-3"
        >
          여행모아 앱 열기
        </a>
        <div className="mt-4">
          <Link href="/" className="text-xs text-[#8B95A1] hover:text-[#4E5968]">
            아르메스 홈으로
          </Link>
        </div>
      </div>
    </div>
  )
}
