import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import ArmesMark from "@/components/ArmesMark";

export const metadata: Metadata = {
  title: "파트너 문의 | ARMES",
  description: "ARMES 파트너십, 제휴, 투자 문의 및 고객 지원 연락처",
};

const infoCards = [
  {
    icon: "🏪",
    title: "매장 파트너",
    desc: "RewardTalk 가맹점으로 등록하고 새로운 고객과 연결되세요. 멤버십 적립 설정부터 리워드 운영까지 지원합니다.",
  },
  {
    icon: "✦",
    title: "Seller AI",
    desc: "AI로 상세페이지를 자동 생성하고 커머스 성장을 가속화하세요. 첫 5개 페이지는 무료입니다.",
  },
  {
    icon: "🤝",
    title: "기업 제휴",
    desc: "ARMES 로컬 생태계와 함께 성장할 기업 파트너를 찾습니다. 다양한 협력 방식을 논의해보세요.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#09090B]">
      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#09090B]/90 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArmesMark size={28} />
            <span className="font-bold text-white text-[15px]">ARMES</span>
          </Link>
          <Link href="/" className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            홈으로
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 lg:px-8">
          <p className="text-xs text-zinc-600 font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            ARMES와 함께
            <br />
            <span className="gradient-text-brand">성장하세요</span>
          </h1>
          <p className="text-zinc-400 text-[17px] leading-relaxed max-w-xl">
            매장 파트너, 셀러 파트너, 기업 제휴, 투자 문의까지 — 어떤 형태의 협력도 환영합니다.
            문의 주시면 1~2 영업일 내로 담당자가 연락드립니다.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-5 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">

          {/* Left: Info */}
          <div className="space-y-6">
            {/* Info cards */}
            <div className="space-y-3">
              {infoCards.map((c) => (
                <div
                  key={c.title}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{c.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{c.title}</h3>
                      <p className="text-zinc-500 text-xs leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
              <p className="text-xs text-zinc-500 font-semibold uppercase tracking-widest mb-4">직접 연락</p>
              <div className="space-y-3">
                {[
                  { icon: "📞", label: "대표번호", value: "010-4995-9867", href: "tel:01049959867" },
                  { icon: "✉️", label: "이메일", value: "support@armes.co.kr", href: "mailto:support@armes.co.kr" },
                  { icon: "📍", label: "주소", value: "경기도 남양주시 진접읍\n경복대로 425-80, 4층 6406호", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-base mt-0.5 w-5 text-center flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-xs text-zinc-600 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-zinc-300 whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business hours */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
              <p className="text-xs text-zinc-500 font-semibold uppercase tracking-widest mb-3">운영 시간</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">평일</span>
                  <span className="text-white font-medium">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">주말 · 공휴일</span>
                  <span className="text-zinc-600">휴무</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">평균 답변 시간</span>
                  <span className="text-green-400 font-medium">1~2 영업일</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#111114] border border-white/[0.08] rounded-3xl p-7 lg:p-8">
            <h2 className="text-lg font-bold text-white mb-1">문의 보내기</h2>
            <p className="text-zinc-500 text-sm mb-7">모든 문의에 성실히 답변드립니다.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
