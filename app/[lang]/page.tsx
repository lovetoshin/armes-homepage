import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CompanyHero from "@/components/sections/CompanyHero";
import Showcase from "@/components/sections/Showcase";
import TechnologySection from "@/components/sections/TechnologySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CompanyCTA from "@/components/sections/CompanyCTA";
import Footer from "@/components/Footer";
import {
  localeFromSegment,
  hreflangAlternates,
  localize,
  OG_LOCALE,
  HTML_LANG,
  LOCALE_SEGMENT,
  PREFIXED_LOCALES,
  type Locale,
} from "@/lib/i18n";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.armes.co.kr";

// 영어/중국어 홈 메타데이터(한국어 메타는 루트 app/layout.tsx가 담당)
const HOME_META: Record<Exclude<Locale, "ko">, { title: string; description: string }> = {
  en: {
    title: "ARMES — AI-driven services for everyday life",
    description:
      "ARMES builds AI-powered services people actually use across online shopping, local life and travel. We run SellerAI and ARMES Tools, and are preparing RewardTalk, TravelMoa and CocoPing.",
  },
  "zh-Hans": {
    title: "ARMES — 用AI改变日常的服务型企业",
    description:
      "ARMES运用AI打造真正实用的日常服务，涵盖网购、本地生活与旅行。我们运营SellerAI与ARMES Tools，并正在筹备RewardTalk、TravelMoa与CocoPing。",
  },
  "zh-Hant": {
    title: "ARMES — 以AI改變日常的服務型企業",
    description:
      "ARMES運用AI打造真正實用的日常服務，涵蓋網購、在地生活與旅行。我們營運SellerAI與ARMES Tools，並正在籌備RewardTalk、TravelMoa與CocoPing。",
  },
};

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((l) => ({ lang: LOCALE_SEGMENT[l] }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = localeFromSegment(lang);
  if (!locale || locale === "ko") return {};
  const m = HOME_META[locale];
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: localize("/", locale),
      languages: hreflangAlternates("/"),
    },
    openGraph: {
      title: m.title,
      description: m.description,
      type: "website",
      locale: OG_LOCALE[locale],
      siteName: "ARMES",
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description },
  };
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = localeFromSegment(lang);
  if (!locale || locale === "ko") notFound();
  const m = HOME_META[locale];

  const orgId = `${SITE}/#organization`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": orgId,
      name: "ARMES",
      alternateName: "주식회사 아르메스",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/armes-logo.png` },
      description: m.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE}/#website-${locale}`,
      name: "ARMES",
      url: `${SITE}${localize("/", locale)}`,
      inLanguage: HTML_LANG[locale],
      publisher: { "@id": orgId },
    },
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <CompanyHero locale={locale} />
        <Showcase locale={locale} />
        <TechnologySection locale={locale} />
        <ProjectsSection locale={locale} />
        <CompanyCTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
