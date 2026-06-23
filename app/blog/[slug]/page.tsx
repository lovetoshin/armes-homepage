import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ArticleMeta from "@/components/ArticleMeta";
import RelatedPosts from "@/components/RelatedPosts";
import RelatedServices from "@/components/RelatedServices";
import { getPost, getSlugs, getRelatedPosts, categorySlug } from "@/lib/posts";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://armes.co.kr";

function absUrl(p?: string) {
  if (!p) return undefined;
  return p.startsWith("http") ? p : `${SITE}${p}`;
}

export function generateStaticParams() {
  return getSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("blog", slug);
  if (!post) return { title: "Blog | ARMES" };
  const img = absUrl(post.thumbnail);
  return {
    title: `${post.title} | ARMES Blog`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: `/blog/${slug}` },
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
  const post = getPost("blog", slug);
  if (!post) notFound();

  const related = getRelatedPosts("blog", slug, 6);
  const img = absUrl(post.thumbnail);
  const wordCount = post.contentHtml.replace(/<[^>]+>/g, "").replace(/\s+/g, "").length;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      ...(img ? { image: [img] } : {}),
      datePublished: post.date,
      dateModified: post.updated || post.date,
      ...(post.category ? { articleSection: post.category } : {}),
      ...(post.tags.length ? { keywords: post.tags.join(", ") } : {}),
      wordCount,
      inLanguage: "ko-KR",
      author: { "@type": "Organization", name: post.author, url: SITE },
      publisher: {
        "@type": "Organization",
        name: "주식회사 아르메스",
        logo: { "@type": "ImageObject", url: `${SITE}/armes-logo.png` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/blog/${slug}` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Blog", item: `${SITE}/blog` },
        ...(post.category
          ? [{
              "@type": "ListItem",
              position: 2,
              name: post.category,
              item: `${SITE}/blog/category/${categorySlug(post.category)}`,
            }]
          : []),
        {
          "@type": "ListItem",
          position: post.category ? 3 : 2,
          name: post.title,
          item: `${SITE}/blog/${slug}`,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-5 lg:px-8 pt-28 pb-20 lg:pt-32">
        <nav className="text-sm text-[#8B95A1] mb-6">
          <Link href="/blog" className="hover:text-[#3182F6]">Blog</Link>
          {post.category && (
            <>
              <span className="mx-2">/</span>
              <Link
                href={`/blog/category/${categorySlug(post.category)}`}
                className="hover:text-[#3182F6]"
              >
                {post.category}
              </Link>
            </>
          )}
        </nav>

        <h1 className="text-3xl lg:text-4xl font-extrabold text-[#191F28] tracking-tight leading-[1.25] mb-5 keep-all">
          {post.title}
        </h1>

        <ArticleMeta post={post} type="blog" />

        {/* 커버 이미지 */}
        {post.thumbnail && (
          <div className="mb-10 rounded-3xl overflow-hidden border border-[#E5E8EB] bg-[#F2F4F6]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.thumbnail}
              alt={post.imageAlt || post.title}
              className="w-full h-auto block"
            />
          </div>
        )}

        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* 관련 서비스(명시한 글에만) */}
        <RelatedServices keys={post.relatedServices} />

        {/* 관련 글(내부링크) */}
        <RelatedPosts posts={related} type="blog" />

        <div className="mt-14 pt-8 border-t border-[#E5E8EB]">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[#3182F6] font-bold text-sm">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            목록으로
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
