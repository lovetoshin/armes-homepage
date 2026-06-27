import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AboutContent from "@/components/pages/AboutContent";
import { ABOUT } from "@/lib/dict-pages";
import {
  localeFromSegment,
  hreflangAlternates,
  localize,
  OG_LOCALE,
  LOCALE_SEGMENT,
  PREFIXED_LOCALES,
} from "@/lib/i18n";

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
  const t = ABOUT[locale];
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: {
      canonical: localize("/about", locale),
      languages: hreflangAlternates("/about"),
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDesc,
      type: "website",
      locale: OG_LOCALE[locale],
      siteName: "ARMES",
    },
  };
}

export default async function LocalizedAbout({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = localeFromSegment(lang);
  if (!locale || locale === "ko") notFound();
  return <AboutContent locale={locale} />;
}
