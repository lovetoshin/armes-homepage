// 여행모아 딜 상세 웹 페이지 — https://www.armes.co.kr/travelmoa/deal/{딜id}
//
// 용도: 블로그부스터가 블로그 글 하단에 붙이는 "여행모아 특가" 링크의 착지 페이지.
//   앱이 없는 사람도 웹에서 딜(사진·특가·정가·할인율)을 보고 [예약하기]로 실제 여행사에 연결된다.
//
// 데이터: 여행모아 수파베이스(TRAVELMOA_ 환경변수)에서 공개 읽기(anon)로 조회 — lib/travelmoa.ts.
// 레이아웃: 전역 Navbar가 이미 깔리므로(app/layout.tsx) 여기선 본문만. 아르메스 토스풍 색상 통일.

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  fetchTravelmoaDeal,
  dealTypeLabel,
  regionScopeLabel,
  placeLabel,
  durationLabel,
  fmtDate,
  fmtWon,
  isDealClosed,
  type TravelmoaDeal,
} from '@/lib/travelmoa'

export const revalidate = 300 // 5분마다 최신 가격 재검증

const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.travelmoa.app'

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
  const deal = await fetchTravelmoaDeal(id)

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
  const dateRange =
    deal.departure_date
      ? `${fmtDate(deal.departure_date)}${deal.return_date ? ` ~ ${fmtDate(deal.return_date)}` : ''}`
      : ''

  return (
    <div className="min-h-screen bg-white text-[#191F28] pt-20 pb-16">
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
            <img
              src={deal.image_url}
              alt={deal.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#8B95A1] text-sm">
              이미지 준비 중
            </div>
          )}
        </div>

        {/* 배지 */}
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge>{regionScopeLabel(deal)}</Badge>
          <Badge>{dealTypeLabel(deal)}</Badge>
          {place && <Badge>{place}</Badge>}
        </div>

        {/* 제목 */}
        <h1 className="text-xl lg:text-2xl font-extrabold leading-snug tracking-tight mb-4">
          {deal.title}
        </h1>

        {/* 여행 정보 */}
        <div className="rounded-2xl border border-[#E5E8EB] divide-y divide-[#F2F4F6] mb-5">
          {duration && <InfoRow label="기간" value={duration} />}
          {dateRange && <InfoRow label="출발/귀국" value={dateRange} />}
          {deal.departure_city && <InfoRow label="출발지" value={deal.departure_city} />}
          {place && <InfoRow label="여행지" value={place} />}
        </div>

        {/* 가격 */}
        <div className="rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB] p-5 mb-5">
          {hasDiscount && (
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#F04452] font-extrabold text-lg">{deal.discount_rate}%</span>
              <span className="text-[#8B95A1] line-through text-sm">
                {fmtWon(deal.original_price as number)}원
              </span>
            </div>
          )}
          <div className="flex items-baseline gap-1">
            <span className="text-[28px] font-extrabold tracking-tight">{fmtWon(deal.sale_price)}</span>
            <span className="text-base font-bold text-[#4E5968]">원~</span>
          </div>
          <p className="text-xs text-[#8B95A1] mt-1">
            {deal.deal_type === 'flight' ? '항공권 요금' : '1인 기준 상품가'} · 여행사 사정에 따라 변동될 수 있어요
          </p>
        </div>

        {/* 예약 버튼 → 실제 여행사 예약처 */}
        <a
          href={deal.deal_url}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="block w-full text-center bg-[#3182F6] hover:bg-[#1B64DA] transition-colors text-white font-bold text-base rounded-2xl py-4"
        >
          {deal.agency?.name ? `${deal.agency.name}에서 예약하기` : '여행사에서 예약하기'}
        </a>

        <p className="text-xs text-[#8B95A1] text-center leading-relaxed mt-3">
          실제 예약·결제는 해당 여행사 페이지에서 진행됩니다.<br />
          여행모아는 여러 여행사의 특가를 모아 보여주는 서비스입니다.
        </p>

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

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-sm text-[#8B95A1]">{label}</span>
      <span className="text-sm font-semibold text-[#191F28] text-right">{value}</span>
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
