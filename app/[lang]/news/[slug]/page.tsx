import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/pages/ArticleContent";
import { getPost, getSlugs, getRelatedPosts, postLocales } from "@/lib/posts";
import {
  localeFromSegment,
  localize,
  HTML_LANG,
  OG_LOCALE,
  LOCALE_SEGMENT,
  PREFIXED_LOCALES,
} from "@/lib/i18n";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://armes.co.kr";

function absUrl(p?: string) {
  if (!p) return undefined;
  return p.startsWith("http") ? p : `${SITE}${p}`;
}

export function generateStaticParams() {
  const out: { lang: string; slug: string }[] = [];
  for (const loc of PREFIXED_LOCALES) {
    for (const slug of getSlugs("news", loc)) {
      out.push({ lang: LOCALE_SEGMENT[loc], slug });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = localeFromSegment(lang);
  if (!locale || locale === "ko") return {};
  const post = getPost("news", slug, locale);
  if (!post) return { title: "News | ARMES" };
  const img = absUrl(post.thumbnail);

  const languages: Record<string, string> = {};
  for (const loc of postLocales("news", slug)) {
    languages[HTML_LANG[loc]] = localize(`/news/${slug}`, loc);
  }
  languages["x-default"] = `/news/${slug}`;

  return {
    title: `${post.title} | ARMES News`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: localize(`/news/${slug}`, locale), languages },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE}${localize(`/news/${slug}`, locale)}`,
      locale: OG_LOCALE[locale],
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      section: post.category,
      tags: post.tags,
      ...(img ? { images: [{ url: img, width: 1200, height: 630, alt: post.imageAlt || post.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(img ? { images: [img] } : {}),
    },
  };
}

export default async function LocalizedNewsArticle({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = localeFromSegment(lang);
  if (!locale || locale === "ko") notFound();
  const post = getPost("news", slug, locale);
  if (!post) notFound();
  const related = getRelatedPosts("news", slug, locale, 3);
  return <ArticleContent post={post} related={related} type="news" locale={locale} />;
}
