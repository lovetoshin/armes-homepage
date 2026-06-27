import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogCategoryContent from "@/components/pages/BlogCategoryContent";
import { BLOG_CATEGORIES, categorySlug, categoryFromSlug } from "@/lib/posts";
import { categoryIntro } from "@/lib/i18n-data";
import { hreflangAlternates } from "@/lib/i18n";

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({ category: categorySlug(category) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = categoryFromSlug(category);
  if (!cat) return { title: "Blog | ARMES" };
  return {
    title: `${cat} 글 모음 | ARMES Blog`,
    description: categoryIntro(cat, "ko") || `${cat} 관련 아르메스 블로그 글 모음입니다.`,
    alternates: {
      canonical: `/blog/category/${category}`,
      languages: hreflangAlternates(`/blog/category/${category}`),
    },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = categoryFromSlug(category);
  if (!cat) notFound();
  return <BlogCategoryContent category={cat} locale="ko" />;
}
