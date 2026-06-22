import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "파트너 문의 | ARMES",
  description: "ARMES 파트너십, 제휴, 투자 문의 및 고객 지원 연락처",
  alternates: { canonical: "/contact" },
};

const infoCards = [
  {
    icon: "🏪",
    title: "매장 파트너",
    desc: "RewardTalk 가맹점으로 등록하고 새로운 고객과 연결되세요. 멤버십 적립 설정부터 리워드 운영까지 지원합니다.",
    color: "bg-orange-50 border-orange-100",
  },
  {
    icon: "🤖",
    title: "Seller AI 파트너",
    desc: "AI로 이미지·상세페이지를 자동 생성하고 커머스 성장을 가속화하세요. 얼리버드 혜택을 놓치지 마세요.",
    color: "bg-blue-50 border-blue-100",
  },
  {
    icon: "🤝",
    title: "기업 제휴",
    desc: "ARMES 로컬 생태계와 함께 성장할 기업 파트너를 찾습니다. 다양한 협력 방식을 논의해보세요.",
    color: "bg-green-50 border-green-100",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="pt-24 pb-12 bg-[#F8FAFF]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#EBF3FF] text-[#3182F6] text-xs font-bold px-4 py-2 rounded-full mb-5">
            ✦ 파트너 문의
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#191F28] tracking-tight leading-[1.15] mb-4">
            ARMES와 함께
            <br />
            <span className="text-[#3182F6]">성장하세요</span>
          </h1>
          <p className="text-[#4E5968] text-[17px] leading-relaxed max-w-xl">
            매장 파트너, 셀러 파트너, 기업 제휴, 투자 문의까지 — 어떤 형태의 협력도 환영합니다.
            문의 주시면 1~2 영업일 내로 담당자가 연락드립니다.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14 pb-24">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">

          {/* Left: Info */}
          <div className="space-y-4">

            {/* 파트너 유형 카드 */}
            <div className="space-y-3">
              {infoCards.map((c) => (
                <div
                  key={c.title}
                  className={`p-5 rounded-2xl border ${c.color}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{c.icon}</span>
                    <div>
                      <h3 className="text-[#191F28] font-extrabold text-sm mb-1">{c.title}</h3>
                      <p className="text-[#4E5968] text-xs leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 직접 연락 */}
            <div className="p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB]">
              <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-4">직접 연락</p>
              <div className="space-y-3">
                {[
                  { icon: "📞", label: "대표번호", value: "010-4995-9867", href: "tel:01049959867" },
                  { icon: "✉️", label: "이메일",   value: "support.armes@gmail.com", href: "mailto:support.armes@gmail.com" },
                  { icon: "📍", label: "주소",     value: "경기도 남양주시 진접읍\n경복대로 425-80, 4층 6406호", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-base mt-0.5 w-5 text-center flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-xs text-[#8B95A1] mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-[#191F28] hover:text-[#3182F6] transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#191F28] whitespace-pre-line font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 운영 시간 */}
            <div className="p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB]">
              <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">운영 시간</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#4E5968]">평일</span>
                  <span className="text-[#191F28] font-semibold">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4E5968]">주말 · 공휴일</span>
                  <span className="text-[#8B95A1]">휴무</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4E5968]">평균 답변 시간</span>
                  <span className="text-[#3182F6] font-semibold">1~2 영업일</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border border-[#E5E8EB] rounded-3xl p-7 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <h2 className="text-lg font-extrabold text-[#191F28] mb-1">문의 보내기</h2>
            <p className="text-[#8B95A1] text-sm mb-7">모든 문의에 성실히 답변드립니다.</p>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#E5E8EB] py-8 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#C5C9CF] text-xs">© 2024 주식회사 아르메스. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-[#8B95A1] hover:text-[#4E5968] text-xs transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="text-[#8B95A1] hover:text-[#4E5968] text-xs transition-colors">이용약관</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
