import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "회사 소개 | ARMES",
  description:
    "아르메스는 AI 기술로 일상을 자동화하는 기술 회사입니다. 미션과 비전, 대표 신지한의 유통 16년 경험, 사업 영역을 소개합니다.",
  alternates: { canonical: "/about" },
};

// ⚠️ 미션/비전/철학 문구는 기존 사이트 톤을 종합한 안 — 형님 최종 검토 필요
const values = [
  {
    icon: "🎯",
    title: "실제로 쓰이는 기술",
    desc: "데모가 아니라 현장에서 매일 쓰이는 AI를 만듭니다. 기술은 일상의 문제를 풀 때 의미가 있습니다.",
  },
  {
    icon: "🤝",
    title: "첫 경험의 완성도",
    desc: "처음 만난 사용자가 떠나지 않도록, 출시 단계부터 완성형을 지향합니다.",
  },
  {
    icon: "🌱",
    title: "꾸준한 확장",
    desc: "한 분야에서 검증한 기술을 다음 프로젝트로 넓혀가며 회사의 역량을 쌓습니다.",
  },
];

const areas = [
  { icon: "🖼️", title: "커머스 AI", desc: "쇼핑몰 셀러를 위한 이미지·상세페이지 자동화 (SellerAI)" },
  { icon: "🎁", title: "로컬 생활", desc: "지역 매장과 사용자를 잇는 멤버십·공동구매 (RewardTalk)" },
  { icon: "✈️", title: "여행·라이프", desc: "여행과 일상을 돕는 위치 기반 서비스 (TravelMoa 등)" },
];

// 회사 신뢰 신호(Organization 구조화 데이터)
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ARMES",
  legalName: "주식회사 아르메스",
  url: "https://armes.co.kr",
  email: "support.armes@gmail.com",
  telephone: "+82-10-4995-9867",
  founder: { "@type": "Person", name: "신지한" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "진접읍 경복대로 425-80, 4층 6406호",
    addressLocality: "남양주시",
    addressRegion: "경기도",
    addressCountry: "KR",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Hero */}
      <div className="pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">
            About ARMES
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#191F28] tracking-tight leading-[1.15] mb-5 keep-all">
            AI 기술로 일상을 자동화하는 회사
          </h1>
          <p className="text-[#4E5968] text-lg leading-relaxed max-w-2xl mx-auto keep-all">
            주식회사 아르메스는 이미지·언어·비전·위치 기술을 바탕으로
            여러 분야의 AI 서비스를 직접 만들고 운영합니다.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 lg:px-8 py-20 space-y-20">
        {/* 미션 */}
        <section>
          <p className="text-xs text-[#3182F6] font-bold uppercase tracking-widest mb-3">Mission</p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#191F28] leading-snug mb-4 keep-all">
            기술을 일상에 닿게 한다
          </h2>
          <p className="text-[#4E5968] text-base lg:text-lg leading-relaxed keep-all">
            아무리 좋은 기술도 일상에서 쓰이지 않으면 의미가 없습니다.
            아르메스는 복잡한 AI를 누구나 쉽게 쓸 수 있는 서비스로 만들어,
            장사하는 분들과 일상의 소비자에게 실질적인 도움을 주는 것을 목표로 합니다.
          </p>
        </section>

        {/* 비전 */}
        <section>
          <p className="text-xs text-[#3182F6] font-bold uppercase tracking-widest mb-3">Vision</p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#191F28] leading-snug mb-4 keep-all">
            여러 분야로 확장하는 AI 서비스 회사
          </h2>
          <p className="text-[#4E5968] text-base lg:text-lg leading-relaxed keep-all">
            커머스에서 시작해 지역 생활, 여행, 콘텐츠까지 —
            한 분야에서 검증한 AI 역량을 다음 분야로 넓혀가며
            일상의 여러 순간에 아르메스의 기술이 자연스럽게 함께하도록 합니다.
          </p>
        </section>

        {/* 회사 철학 */}
        <section>
          <p className="text-xs text-[#3182F6] font-bold uppercase tracking-widest mb-6">Philosophy</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-[#F8FAFF] border border-[#E5E8EB] rounded-3xl p-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-2xl mb-4">
                  {v.icon}
                </div>
                <h3 className="text-[#191F28] font-extrabold text-base mb-2">{v.title}</h3>
                <p className="text-[#8B95A1] text-sm leading-relaxed keep-all">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 대표 스토리 */}
        <section className="bg-[#F8FAFF] border border-[#E5E8EB] rounded-3xl p-8 lg:p-10">
          <p className="text-xs text-[#3182F6] font-bold uppercase tracking-widest mb-3">Founder</p>
          <h2 className="text-2xl font-extrabold text-[#191F28] mb-4">대표 신지한</h2>
          <p className="text-[#4E5968] text-base leading-relaxed keep-all">
            유통 현장에서 16년을 보냈습니다. 상품을 팔고, 고객을 만나고,
            현장의 문제를 직접 겪으며 &ldquo;무엇이 진짜 불편한가&rdquo;를 배웠습니다.
            그 경험을 바탕으로, 장사하는 분들이 매일 반복하는 일을 AI가 대신하도록
            아르메스를 만들었습니다. 화려한 기술보다 현장에서 실제로 쓰이는 도구를
            우선합니다.
          </p>
        </section>

        {/* 사업 영역 */}
        <section>
          <p className="text-xs text-[#3182F6] font-bold uppercase tracking-widest mb-6">Business</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {areas.map((a) => (
              <div key={a.title} className="border border-[#E5E8EB] rounded-3xl p-6">
                <div className="text-2xl mb-3">{a.icon}</div>
                <h3 className="text-[#191F28] font-extrabold text-base mb-2">{a.title}</h3>
                <p className="text-[#8B95A1] text-sm leading-relaxed keep-all">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 회사 정보 (Trust) */}
        <section className="border-t border-[#E5E8EB] pt-10">
          <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-5">Company</p>
          <dl className="space-y-2.5 text-sm">
            <div className="flex gap-3">
              <dt className="text-[#8B95A1] w-24 font-semibold flex-shrink-0">회사명</dt>
              <dd className="text-[#191F28]">주식회사 아르메스 (ARMES)</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-[#8B95A1] w-24 font-semibold flex-shrink-0">대표자</dt>
              <dd className="text-[#191F28]">신지한</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-[#8B95A1] w-24 font-semibold flex-shrink-0">사업자등록번호</dt>
              <dd className="text-[#191F28]">798-86-02943</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-[#8B95A1] w-24 font-semibold flex-shrink-0">주소</dt>
              <dd className="text-[#191F28]">경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-[#8B95A1] w-24 font-semibold flex-shrink-0">이메일</dt>
              <dd className="text-[#191F28]">support.armes@gmail.com</dd>
            </div>
          </dl>
        </section>
      </div>

      <Footer />
    </div>
  );
}
