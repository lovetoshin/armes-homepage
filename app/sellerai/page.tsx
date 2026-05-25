import type { Metadata } from "next";
import Link from "next/link";
import ArmesMark from "@/components/ArmesMark";

export const metadata: Metadata = {
  title: "Seller AI | ARMES — AI 이미지 자동화 도구",
  description: "쿠팡·스마트스토어 셀러를 위한 AI 기반 이미지·상세페이지 생성 도구. 모델컷 생성, 누끼컷, 제품 교체, 상세페이지 자동화까지.",
};

const tools = [
  {
    icon: "📸",
    badge: "AI",
    badgeColor: "text-blue-400 bg-blue-500/10",
    borderColor: "border-blue-500/20",
    title: "모델컷 / 제품컷 생성",
    desc: "상품 사진 한 장으로 카테고리별 최적 구도의 모델 착용 컷 4장을 자동 생성합니다.",
    details: ["정면·측면·앉은 포즈·자유 포즈 4컷 동시 생성", "상의/하의/신발/모자/가방 등 카테고리별 최적화", "여성·남성 모델 선택 가능", "50T / 생성"],
  },
  {
    icon: "✂️",
    badge: "AI",
    badgeColor: "text-green-400 bg-green-500/10",
    borderColor: "border-green-500/20",
    title: "모델컷 → 누끼컷",
    desc: "모델 착용 사진에서 제품만 깔끔하게 투명 PNG로 추출합니다.",
    details: ["최대 8장 동시 처리", "슬롯마다 포즈 개별 지정 가능", "그림자 추가 옵션", "50T / 생성"],
  },
  {
    icon: "👤",
    badge: "AI",
    badgeColor: "text-purple-400 bg-purple-500/10",
    borderColor: "border-purple-500/20",
    title: "누끼컷 → 모델컷",
    desc: "제품 누끼 사진을 올리면 모델이 착용한 사진으로 자동 변환합니다.",
    details: ["최대 8장 동시 처리", "슬롯마다 성별·포즈 개별 지정", "모자/선글라스/상의/하의 등 지원", "50T / 생성"],
  },
  {
    icon: "🔄",
    badge: "AI",
    badgeColor: "text-orange-400 bg-orange-500/10",
    borderColor: "border-orange-500/20",
    title: "제품 교체",
    desc: "모델 사진과 제품 사진을 합성해 자연스럽게 제품을 교체합니다.",
    details: ["최대 4쌍 동시 처리", "①모델사진 ②제품사진 순으로 입력", "교체 제품 종류 텍스트로 지정", "50T / 생성"],
  },
  {
    icon: "📄",
    badge: "자동화",
    badgeColor: "text-pink-400 bg-pink-500/10",
    borderColor: "border-pink-500/20",
    title: "상세페이지 생성",
    desc: "상품 정보를 입력하면 쿠팡·스마트스토어에 최적화된 HTML 상세페이지를 즉시 생성합니다.",
    details: ["브랜드 프로필 저장 및 재사용", "배송·교환·반품 정책 자동 포함", "상품정보 고시 자동 생성", "250T / 생성"],
  },
  {
    icon: "🗂️",
    badge: "보관함",
    badgeColor: "text-zinc-400 bg-zinc-500/10",
    borderColor: "border-zinc-500/20",
    title: "생성 보관함",
    desc: "지금까지 생성한 모든 이미지와 상세페이지를 한 곳에서 관리합니다.",
    details: ["이미지 다운로드 (PNG/JPG)", "상세페이지 JPG 다운로드", "생성 이력 전체 보관", "무제한"],
  },
];

const plans = [
  { name: "스타터",    token: "5,000 T",   price: "9,900",   desc: "처음 시작하는 셀러",       highlight: false },
  { name: "프로",      token: "30,000 T",  price: "49,900",  desc: "월 활성 셀러 추천",        highlight: true  },
  { name: "비즈니스",  token: "100,000 T", price: "149,900", desc: "대량 작업이 필요한 셀러",   highlight: false },
];

export default function SellerAIPage() {
  return (
    <div className="min-h-screen bg-[#09090B]">

      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#09090B]/90 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArmesMark size={28} invert={true} />
            <span className="font-bold text-white text-[15px]">ARMES</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              홈으로
            </Link>
            <Link href="/contact" className="text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-full font-semibold transition-all">
              문의하기
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/[0.08] border border-violet-500/[0.18] text-xs text-violet-400 font-semibold mb-6">
            ✦ Seller AI · 출시 예정
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            쿠팡·스마트스토어 셀러를 위한
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">AI 이미지 자동화</span>
          </h1>
          <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            상품 사진 한 장으로 모델 착용컷을 만들고, 누끼를 따고,
            상세페이지까지 — 반복 작업을 AI가 대신합니다.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.02] shadow-lg shadow-violet-500/25"
          >
            얼리버드 신청하기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-zinc-400">
            <span className="text-amber-400">🪙</span>
            사진 생성 <strong className="text-white">50T</strong>
            <span className="text-zinc-700">·</span>
            상세페이지 생성 <strong className="text-white">250T</strong>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="max-w-6xl mx-auto px-5 lg:px-8 pb-24">
        <div className="text-center mb-14">
          <p className="text-xs text-zinc-600 font-semibold uppercase tracking-widest mb-3">AI Tools</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">6가지 이미지 자동화 도구</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {tools.map((tool) => (
            <div key={tool.title} className={`p-6 rounded-3xl bg-white/[0.03] border ${tool.borderColor} hover:bg-white/[0.05] transition-all`}>
              <div className="w-12 h-12 rounded-2xl bg-white/[0.06] flex items-center justify-center mb-4 text-2xl">{tool.icon}</div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-white font-bold text-base">{tool.title}</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${tool.badgeColor}`}>{tool.badge}</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">{tool.desc}</p>
              <ul className="space-y-1.5">
                {tool.details.map((d, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-zinc-600">
                    <span className="w-1 h-1 rounded-full bg-zinc-700 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="text-center mb-14">
          <p className="text-xs text-zinc-600 font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">토큰 요금제</h2>
          <p className="text-zinc-500">사용한 만큼만 차감되는 토큰 방식. 만료 없이 충전된 토큰은 계속 사용 가능합니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-24">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative p-7 rounded-3xl border transition-all ${plan.highlight ? "bg-violet-500/[0.08] border-violet-500/40 shadow-lg shadow-violet-500/10" : "bg-white/[0.03] border-white/[0.08]"}`}>
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-violet-600 text-white text-[11px] font-bold px-3 py-1 rounded-full">추천</span>
                </div>
              )}
              <p className="text-zinc-400 text-sm font-medium mb-1">{plan.name}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-white">₩{plan.price}</span>
                <span className="text-zinc-600 text-sm">/월</span>
              </div>
              <p className="text-amber-400 font-semibold text-sm mb-2">🪙 {plan.token}</p>
              <p className="text-zinc-600 text-xs mb-6">{plan.desc}</p>
              <Link href="/contact" className={`block text-center py-3 rounded-2xl font-semibold text-sm transition-all ${plan.highlight ? "bg-violet-600 hover:bg-violet-500 text-white" : "bg-white/[0.06] hover:bg-white/[0.1] text-zinc-300 border border-white/[0.08]"}`}>
                신청하기
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-3xl bg-white/[0.03] border border-white/[0.07]">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">출시 알림을 먼저 받아보세요</h3>
          <p className="text-zinc-500 mb-7">얼리버드 신청 시 첫 달 50% 할인 혜택을 드립니다.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-[15px] hover:bg-zinc-100 transition-all hover:scale-[1.02]">
            얼리버드 신청하기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.05] py-8">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-zinc-700 text-xs">© 2024 주식회사 아르메스. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">이용약관</Link>
            <Link href="/contact" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">문의하기</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
