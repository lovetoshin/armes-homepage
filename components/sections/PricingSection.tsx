import Link from "next/link";

// PG(포트원) 계약 심사 "상품 등록 유무" 통과용 — 가격이 반드시 서버렌더 HTML "텍스트"로 노출돼야 한다.
// (이미지·JS로만 그리면 심사 크롤러가 못 읽음) → 이 컴포넌트는 애니메이션 없는 순수 서버 컴포넌트.
// 셀러AI 요금은 실제 요금제(www.armes.co.kr/sellerai/studio/pricing)와 반드시 일치시킨다.

type Plan = {
  name: string;
  price: string;      // "원" 단위 텍스트
  unit?: string;      // 월/회 등
  desc: string;
  badge?: string;
};

// 셀러AI 월 구독 요금제 (라이브 검증 2026-07-11 — 임의 수정 금지, studio/pricing과 일치)
const SELLERAI_PLANS: Plan[] = [
  { name: "무료",         price: "0원",       unit: "월", desc: "500 토큰 (가입 즉시 지급)" },
  { name: "스타터",       price: "29,000원",  unit: "월", desc: "5,000 토큰" },
  { name: "프로",         price: "59,000원",  unit: "월", desc: "12,000 토큰", badge: "인기" },
  { name: "프로맥스",     price: "99,000원",  unit: "월", desc: "30,000 토큰", badge: "베스트" },
  { name: "엔터프라이즈", price: "문의",       unit: "",   desc: "맞춤 토큰 · 전담 지원" },
];

// 월드링고 화상 언어수업 요금제 (캠블리 요금 구조 참고 — 30분 1:1 화상·구독제, 첫 수업 무료)
const WORLDLINGO_PLANS: Plan[] = [
  { name: "무료 체험", price: "0원",       unit: "",   desc: "첫 수업 30분 무료" },
  { name: "주 2회",    price: "159,000원", unit: "월", desc: "30분 1:1 화상 · 월 8회" },
  { name: "주 3회",    price: "219,000원", unit: "월", desc: "30분 1:1 화상 · 월 12회", badge: "인기" },
  { name: "주 5회",    price: "349,000원", unit: "월", desc: "30분 1:1 화상 · 월 20회" },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="relative flex flex-col rounded-2xl border border-[#E5E8EB] bg-white p-6">
      {plan.badge && (
        <span className="absolute -top-2.5 left-6 rounded-full bg-[#3182F6] px-2.5 py-1 text-[11px] font-bold text-white">
          {plan.badge}
        </span>
      )}
      <p className="text-sm font-bold text-[#8B95A1]">{plan.name}</p>
      <p className="mt-2 text-2xl font-extrabold text-[#191F28]">
        {plan.price}
        {plan.unit && <span className="ml-1 text-sm font-medium text-[#8B95A1]">/ {plan.unit}</span>}
      </p>
      <p className="mt-2 text-sm text-[#4E5968] keep-all">{plan.desc}</p>
    </div>
  );
}

/**
 * 홈 "서비스 및 요금" 섹션 — 실제 유료 서비스와 가격을 텍스트로 노출(PG 심사 요건).
 */
export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#F9FAFB] py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#8B95A1]">
          Pricing
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#191F28] lg:text-4xl keep-all">
          서비스 및 요금
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#4E5968] keep-all text-balance">
          아르메스가 운영하는 유료 서비스의 실제 이용 요금입니다. 모든 요금은 부가가치세 별도이며,
          결제·환불(청약철회)은 각 서비스의 이용약관과 환불 정책을 따릅니다.
        </p>

        {/* 셀러AI */}
        <div className="mt-14">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-[#191F28]">
                셀러AI <span className="text-[#8B95A1]">— 이커머스 AI 이미지·상세페이지</span>
              </h3>
              <p className="mt-1 text-sm text-[#4E5968] keep-all">
                온라인 셀러를 위한 AI 상품 이미지·상세페이지 생성 서비스 (월 구독)
              </p>
            </div>
            <Link
              href="https://www.armes.co.kr/sellerai/studio/pricing"
              className="mt-2 inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-bold text-[#3182F6] sm:mt-0"
            >
              요금 자세히 보기
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {SELLERAI_PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="mt-4 text-[13px] text-[#8B95A1]">
            월 구독 기준 · 부가세 별도 · 연 구독 시 월 구독 대비 10% 할인
          </p>

          {/* 서비스 제공 기간 (전자상거래 표시의무 — 셀러AI 결제 심사 요건) */}
          <div className="mt-6 rounded-2xl border border-[#E5E8EB] bg-white p-6">
            <p className="mb-4 text-sm font-bold text-[#191F28]">서비스 제공 기간</p>
            <ul className="space-y-3 text-[13px] leading-relaxed text-[#4E5968] keep-all">
              <li>
                <span className="mb-0.5 block font-bold text-[#3182F6]">월 정기구독</span>
                결제일로부터 1개월(30일) 이용 후 자동 갱신되며, 매월 결제일과 동일한 날짜에 자동 결제됩니다.
              </li>
              <li>
                <span className="mb-0.5 block font-bold text-[#3182F6]">연 정기구독</span>
                결제일로부터 1년(365일) 이용 후 자동 갱신되며, 매년 결제일과 동일한 날짜에 자동 결제됩니다.
              </li>
              <li>
                <span className="mb-0.5 block font-bold text-[#3182F6]">토큰 팩 구매(일회성)</span>
                결제 즉시 토큰이 지급되며, 해당 플랜 혜택은 결제일로부터 1개월(30일)간 제공됩니다. 자동 갱신은 없습니다.
              </li>
            </ul>
            <p className="mt-4 border-t border-[#F2F4F6] pt-3 text-[12px] leading-relaxed text-[#8B95A1] keep-all">
              정기구독은 해지 전까지 매 결제주기마다 자동 결제·자동 갱신되며, 해지는 언제든 고객센터 또는 카카오톡 채널로 신청하실 수 있습니다.
            </p>
          </div>
        </div>

        {/* 월드링고 */}
        <div className="mt-16">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-extrabold text-[#191F28]">
              월드링고 <span className="text-[#8B95A1]">— 1:1 화상 한국어·영어·중국어</span>
            </h3>
            <p className="mt-1 text-sm text-[#4E5968] keep-all">
              한류 열풍을 타고 배우는 원어민 1:1 화상 언어 수업. 한국어를 중심으로 영어·중국어까지,
              강사별 예약제로 진행합니다. (첫 수업 30분 무료 체험)
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WORLDLINGO_PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="mt-4 text-[13px] text-[#8B95A1]">
            월 구독 기준 · 부가세 별도 · 3·12개월 장기 구독 시 최대 35% 할인
          </p>
        </div>
      </div>
    </section>
  );
}
