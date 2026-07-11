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

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.armes.co.kr";

function absUrl(p?: string) {
  if (!p) return undefined;
  return p.startsWith("http") ? p : `${SITE}${p}`;
}

// 번역본이 실제 존재하는 (언어, 글)만 정적 생성
export function generateStaticParams() {
  const out: { lang: string; slug: string }[] = [];
  for (const loc of PREFIXED_LOCALES) {
    for (const slug of getSlugs("blog", loc)) {
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
  const post = getPost("blog", slug, locale);
  if (!post) return { title: "Blog | ARMES" };
  const img = absUrl(post.thumbnail);

  const languages: Record<string, string> = {};
  for (const loc of postLocales("blog", slug)) {
    languages[HTML_LANG[loc]] = localize(`/blog/${slug}`, loc);
  }
  languages["x-default"] = `/blog/${slug}`;

  return {
    title: `${post.title} | ARMES Blog`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: localize(`/blog/${slug}`, locale), languages },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE}${localize(`/blog/${slug}`, locale)}`,
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

export default async function LocalizedBlogArticle({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = localeFromSegment(lang);
  if (!locale || locale === "ko") notFound();
  const post = getPost("blog", slug, locale);
  if (!post) notFound();
  const related = getRelatedPosts("blog", slug, locale, 6);
  return <ArticleContent post={post} related={related} type="blog" locale={locale} />;
}
