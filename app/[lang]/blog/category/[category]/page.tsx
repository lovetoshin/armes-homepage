import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogCategoryContent from "@/components/pages/BlogCategoryContent";
import { BLOG_CATEGORIES, categorySlug, categoryFromSlug } from "@/lib/posts";
import { categoryLabel, categoryIntro } from "@/lib/i18n-data";
import {
  localeFromSegment,
  hreflangAlternates,
  localize,
  OG_LOCALE,
  LOCALE_SEGMENT,
  PREFIXED_LOCALES,
} from "@/lib/i18n";

export function generateStaticParams() {
  const out: { lang: string; category: string }[] = [];
  for (const loc of PREFIXED_LOCALES) {
    for (const category of BLOG_CATEGORIES) {
      out.push({ lang: LOCALE_SEGMENT[loc], category: categorySlug(category) });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}): Promise<Metadata> {
  const { lang, category } = await params;
  const locale = localeFromSegment(lang);
  if (!locale || locale === "ko") return {};
  const cat = categoryFromSlug(category);
  if (!cat) return { title: "Blog | ARMES" };
  const label = categoryLabel(cat, locale);
  return {
    title: `${label} | ARMES Blog`,
    description: categoryIntro(cat, locale),
    alternates: {
      canonical: localize(`/blog/category/${category}`, locale),
      languages: hreflangAlternates(`/blog/category/${category}`),
    },
    openGraph: {
      title: `${label} | ARMES Blog`,
      description: categoryIntro(cat, locale),
      type: "website",
      locale: OG_LOCALE[locale],
      siteName: "ARMES",
    },
  };
}

export default async function LocalizedBlogCategory({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}) {
  const { lang, category } = await params;
  const locale = localeFromSegment(lang);
  if (!locale || locale === "ko") notFound();
  const cat = categoryFromSlug(category);
  if (!cat) notFound();
  return <BlogCategoryContent category={cat} locale={locale} />;
}
