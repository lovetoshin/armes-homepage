"use client";

import { useState } from "react";

const plans = [
  {
    name: "무료",
    badge: null,
    badgeColor: "",
    price: "0",
    priceUnit: "원",
    token: "500",
    tokenColor: "text-[#3182F6]",
    tokenBg: "bg-[#EBF3FF]",
    desc: "가입 즉시 500토큰 지급",
    usage: "이미지 약 10장 또는\n상세페이지 2개 가능",
    btnLabel: "무료로 시작하기",
    btnStyle: "bg-[#191F28] hover:bg-[#333D4B] text-white",
    href: "https://www.armes.co.kr/sellerai/studio/pricing",
  },
  {
    name: "스타터",
    badge: null,
    badgeColor: "",
    price: "29,000",
    priceUnit: "원/월",
    token: "5,000",
    tokenColor: "text-[#3182F6]",
    tokenBg: "bg-[#EBF3FF]",
    desc: "1인 셀러에게 딱",
    usage: "이미지 약 100장 또는\n상세페이지 25개 가능",
    btnLabel: "스타터 시작하기",
    btnStyle: "bg-[#3182F6] hover:bg-[#1B64DA] text-white",
    href: "https://www.armes.co.kr/sellerai/studio/pricing",
  },
  {
    name: "프로",
    badge: "인기",
    badgeColor: "bg-[#3182F6] text-white",
    price: "59,000",
    priceUnit: "원/월",
    token: "12,000",
    tokenColor: "text-[#3182F6]",
    tokenBg: "bg-[#EBF3FF]",
    desc: "브랜드를 키우는 셀러에게",
    usage: "이미지 약 240장 또는\n상세페이지 60개 가능",
    btnLabel: "프로 시작하기",
    btnStyle: "bg-[#3182F6] hover:bg-[#1B64DA] text-white",
    href: "https://www.armes.co.kr/sellerai/studio/pricing",
  },
  {
    name: "프로맥스",
    badge: "베스트",
    badgeColor: "bg-orange-500 text-white",
    price: "99,000",
    priceUnit: "원/월",
    token: "30,000",
    tokenColor: "text-orange-500",
    tokenBg: "bg-orange-50",
    desc: "브랜드 운영에 최적",
    usage: "이미지 약 600장 또는\n상세페이지 150개 가능",
    btnLabel: "프로맥스 시작하기",
    btnStyle: "bg-orange-500 hover:bg-orange-600 text-white",
    href: "https://www.armes.co.kr/sellerai/studio/pricing",
  },
  {
    name: "엔터프라이즈",
    badge: null,
    badgeColor: "",
    price: "문의",
    priceUnit: "",
    token: "무제한",
    tokenColor: "text-[#191F28]",
    tokenBg: "bg-[#F2F4F6]",
    desc: "대량·전담 지원이 필요하다면",
    usage: "맞춤 제공\n전담 매니저 배정",
    btnLabel: "문의하기",
    btnStyle: "bg-[#191F28] hover:bg-[#333D4B] text-white",
    href: "https://www.armes.co.kr/sellerai/studio/pricing",
  },
];

export default function SellerPricingCards() {
  const [selected, setSelected] = useState(2);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
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
            <span className="text-2xl font-extrabold text-[#191F28]">{plan.price}</span>
            {plan.priceUnit && <span className="text-xs text-[#8B95A1]">{plan.priceUnit}</span>}
          </div>

          {/* 체크 설명 */}
          <div className="flex items-center gap-1.5 mb-4">
            <svg className="w-4 h-4 text-[#3182F6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs text-[#4E5968]">{plan.desc}</span>
          </div>

          {/* 토큰 박스 */}
          <div className={`${plan.tokenBg} rounded-2xl p-4 mb-4`}>
            <p className={`text-xl font-extrabold ${plan.tokenColor} mb-1`}>
              {plan.token} <span className="text-sm font-semibold">토큰</span>
            </p>
            <p className="text-xs text-[#4E5968] whitespace-pre-line leading-relaxed">{plan.usage}</p>
          </div>

          {/* CTA */}
          <a
            href={plan.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`mt-auto block text-center py-3 rounded-2xl font-extrabold text-sm transition-all ${plan.btnStyle}`}
          >
            {plan.btnLabel}
          </a>
        </div>
      ))}
    </div>
  );
}
