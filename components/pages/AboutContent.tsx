import Footer from "@/components/Footer";
import { ABOUT } from "@/lib/dict-pages";
import { type Locale } from "@/lib/i18n";

const VALUE_ICONS = ["🎯", "🤝", "🌱"];
const AREA_ICONS = ["🖼️", "🎁", "✈️"];

// 소개 페이지 본문 — 한국어/영어/중국어가 같은 틀을 공유하고 텍스트만 locale로 바꾼다.
// (작은 영문 eyebrow는 디자인 요소라 모든 언어 공통으로 둔다)
export default function AboutContent({ locale = "ko" }: { locale?: Locale }) {
  const t = ABOUT[locale];

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ARMES",
    legalName: "주식회사 아르메스",
    url: "https://www.armes.co.kr",
    logo: "https://www.armes.co.kr/armes-logo.png",
    email: "support.armes@gmail.com",
    telephone: "+82-10-4995-9867",
    taxID: "798-86-02943",
    founder: { "@type": "Person", name: "신지한" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support.armes@gmail.com",
      telephone: "+82-10-4995-9867",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "진접읍 경복대로 425-80, 4층 6406호",
      addressLocality: "남양주시",
      addressRegion: "경기도",
      addressCountry: "KR",
    },
  };

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
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#191F28] tracking-tight leading-[1.15] mb-5 keep-all text-balance">
            {t.heroTitle}
          </h1>
          <p className="text-[#4E5968] text-lg leading-relaxed max-w-2xl mx-auto keep-all text-balance">
            {t.heroDesc}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 lg:px-8 py-20 space-y-20">
        {/* 미션 */}
        <section>
          <p className="text-xs text-[#3182F6] font-bold uppercase tracking-widest mb-3">Mission</p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#191F28] leading-snug mb-4 keep-all text-balance">
            {t.missionTitle}
          </h2>
          <p className="text-[#4E5968] text-base lg:text-lg leading-relaxed keep-all">
            {t.missionDesc}
          </p>
        </section>

        {/* 비전 */}
        <section>
          <p className="text-xs text-[#3182F6] font-bold uppercase tracking-widest mb-3">Vision</p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#191F28] leading-snug mb-4 keep-all text-balance">
            {t.visionTitle}
          </h2>
          <p className="text-[#4E5968] text-base lg:text-lg leading-relaxed keep-all">
            {t.visionDesc}
          </p>
        </section>

        {/* 회사 철학 */}
        <section>
          <p className="text-xs text-[#3182F6] font-bold uppercase tracking-widest mb-6">Philosophy</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {t.values.map((v, i) => (
              <div key={v.title} className="bg-[#F8FAFF] border border-[#E5E8EB] rounded-3xl p-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-2xl mb-4">
                  {VALUE_ICONS[i]}
                </div>
                <h3 className="text-[#191F28] font-extrabold text-base mb-2">{v.title}</h3>
                <p className="text-[#8B95A1] text-sm leading-relaxed keep-all">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 대표 스토리 */}
        <section className="bg-[#F8FAFF] border border-[#E5E8EB] rounded-3xl p-8 lg:p-10">
          <p className="text-xs text-[#3182F6] font-bold uppercase tracking-widest mb-6">Founder</p>
          <div className="flex flex-col sm:flex-row gap-7 lg:gap-10 items-center sm:items-start">
            <div className="w-44 sm:w-48 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about/ceo.jpg"
                alt={t.founderPhotoAlt}
                className="w-full h-auto rounded-2xl border border-[#E5E8EB] object-cover block shadow-[0_4px_20px_rgba(49,130,246,0.10)]"
              />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#191F28] mb-1.5">{t.founderName}</h2>
              <p className="text-[#8B95A1] text-sm font-semibold mb-4">{t.founderRole}</p>
              <p className="text-[#4E5968] text-base leading-relaxed keep-all">{t.founderStory}</p>
            </div>
          </div>
        </section>

        {/* 사업 영역 */}
        <section>
          <p className="text-xs text-[#3182F6] font-bold uppercase tracking-widest mb-6">Business</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {t.areas.map((a, i) => (
              <div key={a.title} className="border border-[#E5E8EB] rounded-3xl p-6">
                <div className="text-2xl mb-3">{AREA_ICONS[i]}</div>
                <h3 className="text-[#191F28] font-extrabold text-base mb-2">{a.title}</h3>
                <p className="text-[#8B95A1] text-sm leading-relaxed keep-all">
                  {a.desc} <span className="whitespace-nowrap">({a.ref})</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 회사 정보 블록은 푸터 사업자정보와 중복이라 삭제(형님 지시 2026-07-22) */}
      </div>

      <Footer locale={locale} />
    </div>
  );
}
