"use client";

import { useState } from "react";

const plans = [
  {
    name: "프리",
    badge: null,
    badgeColor: "",
    price: "무료",
    priceUnit: "",
    token: "1,000",
    tokenColor: "text-[#3182F6]",
    tokenBg: "bg-[#EBF3FF]",
    desc: "모든 기능 체험 가능",
    usage: "일반 생성 20장 또는\n상세페이지 4개 가능",
    btnLabel: "무료로 시작하기",
    btnStyle: "bg-[#191F28] hover:bg-[#333D4B] text-white",
    href: "https://www.armes.co.kr/sellerai/studio/pricing",
  },
  {
    name: "베이직",
    badge: "인기",
    badgeColor: "bg-[#3182F6] text-white",
    price: "29,900",
    priceUnit: "원/월",
    token: "5,000",
    tokenColor: "text-[#3182F6]",
    tokenBg: "bg-[#EBF3FF]",
    desc: "모든 AI 기능 사용 가능",
    usage: "일반 생성 100장 또는\n상세페이지 20개 가능",
    btnLabel: "베이직 시작하기",
    btnStyle: "bg-[#3182F6] hover:bg-[#1B64DA] text-white",
    href: "https://www.armes.co.kr/sellerai/studio/pricing",
  },
  {
    name: "프로",
    badge: "베스트",
    badgeColor: "bg-[#3182F6] text-white",
    price: "49,900",
    priceUnit: "원/월",
    token: "10,000",
    tokenColor: "text-[#3182F6]",
    tokenBg: "bg-[#EBF3FF]",
    desc: "모든 AI 기능 사용 가능",
    usage: "일반 생성 200장 또는\n상세페이지 40개 가능",
    btnLabel: "프로 시작하기",
    btnStyle: "bg-[#3182F6] hover:bg-[#1B64DA] text-white",
    href: "https://www.armes.co.kr/sellerai/studio/pricing",
  },
  {
    name: "엔터프라이즈",
    badge: null,
    badgeColor: "",
    price: "99,900",
    priceUnit: "원/월",
    token: "25,000",
    tokenColor: "text-orange-500",
    tokenBg: "bg-orange-50",
    desc: "모든 AI 기능 사용 가능",
    usage: "일반 생성 500장 또는\n상세페이지 100개 가능",
    btnLabel: "엔터프라이즈 시작",
    btnStyle: "bg-orange-500 hover:bg-orange-600 text-white",
    href: "https://www.armes.co.kr/sellerai/studio/pricing",
  },
];

export default function SellerPricingCards() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {plans.map((plan, i) => (
        <div
          key={plan.name}
          onClick={() => setSelected(i)}
          className={`relative rounded-3xl border-2 p-6 flex flex-col cursor-pointer bg-white transition-all duration-200 ${
            selected === i
              ? "border-[#3182F6] shadow-[0_0_0_4px_rgba(49,130,246,0.12)]"
              : "border-[#E5E8EB] hover:border-[#C5D8FB]"
          }`}
        >
          {/* 뱃지 */}
          {plan.badge && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${plan.badgeColor}`}>{plan.badge}</span>
            </div>
          )}

          {/* 선택 표시 */}
          {selected === i && (
            <div className="absolute top-4 right-4 w-5 h-5 bg-[#3182F6] rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}

          {/* 플랜명 */}
          <p className="text-sm font-semibold text-[#8B95A1] mb-1">{plan.name}</p>

          {/* 가격 */}
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-3xl font-extrabold text-[#191F28]">{plan.price}</span>
            {plan.priceUnit && <span className="text-sm text-[#8B95A1]">{plan.priceUnit}</span>}
          </div>

          {/* 체크 설명 */}
          <div className="flex items-center gap-1.5 mb-4">
            <svg className="w-4 h-4 text-[#3182F6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-[#4E5968]">{plan.desc}</span>
          </div>

          {/* 토큰 박스 */}
          <div className={`${plan.tokenBg} rounded-2xl p-4 mb-4`}>
            <p className={`text-2xl font-extrabold ${plan.tokenColor} mb-1`}>
              {plan.token} <span className="text-base font-semibold">토큰 제공</span>
            </p>
            <p className="text-xs text-[#4E5968] whitespace-pre-line leading-relaxed">{plan.usage}</p>
          </div>

          {/* CTA */}
          <a
            href={plan.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`mt-auto block text-center py-3.5 rounded-2xl font-extrabold text-sm transition-all ${plan.btnStyle}`}
          >
            {plan.btnLabel}
          </a>
        </div>
      ))}
    </div>
  );
}
