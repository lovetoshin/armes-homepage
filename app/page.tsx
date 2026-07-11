import type { Metadata } from "next";
import CompanyHero from "@/components/sections/CompanyHero";
import Showcase from "@/components/sections/Showcase";
import TechnologySection from "@/components/sections/TechnologySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CompanyIntro from "@/components/sections/CompanyIntro";
import LatestBlog from "@/components/sections/LatestBlog";
import CompanyCTA from "@/components/sections/CompanyCTA";
import Footer from "@/components/Footer";
import { hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: hreflangAlternates("/"),
  },
};

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.armes.co.kr";

// 구글이 ARMES(회사)와 사이트를 더 잘 이해하도록 — Organization + WebSite
// (SearchAction은 실제 검색 페이지가 없어 의도적으로 넣지 않음)
const orgId = `${SITE}/#organization`;
const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: "주식회사 아르메스",
    alternateName: "ARMES",
    url: SITE,
    logo: {
      "@type": "ImageObject",
      url: `${SITE}/armes-logo.png`,
    },
    description:
      "주식회사 아르메스는 AI·데이터·자동화·위치기술을 활용해 일상에 실제 쓰이는 서비스를 만드는 AI 기반 서비스 기업입니다. SellerAI·ARMES Tools를 운영하고 RewardTalk·TravelMoa·CocoPing 등을 개발합니다.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    name: "ARMES",
    url: SITE,
    inLanguage: "ko-KR",
    publisher: { "@id": orgId },
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <main>
        <CompanyHero />
        <Showcase />
        <TechnologySection />
        <CompanyIntro />
        <ProjectsSection />
        <LatestBlog />
        <CompanyCTA />
      </main>
      <Footer />
    </div>
  );
}
