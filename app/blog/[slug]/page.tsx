import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/pages/ArticleContent";
import { getPost, getSlugs, getRelatedPosts, postLocales } from "@/lib/posts";
import { localize, HTML_LANG } from "@/lib/i18n";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.armes.co.kr";

function absUrl(p?: string) {
  if (!p) return undefined;
  return p.startsWith("http") ? p : `${SITE}${p}`;
}

export function generateStaticParams() {
  return getSlugs("blog", "ko").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("blog", slug, "ko");
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
    alternates: { canonical: `/blog/${slug}`, languages },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE}/blog/${slug}`,
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

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost("blog", slug, "ko");
  if (!post) notFound();
  const related = getRelatedPosts("blog", slug, "ko", 6);
  return <ArticleContent post={post} related={related} type="blog" locale="ko" />;
}
