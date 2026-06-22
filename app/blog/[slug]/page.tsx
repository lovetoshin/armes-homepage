import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { getPost, getSlugs } from "@/lib/posts";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://armes.co.kr";

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
  return {
    title: `${post.title} | ARMES Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      ...(post.thumbnail ? { images: [post.thumbnail] } : {}),
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

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      articleSection: post.category,
      author: { "@type": "Organization", name: "ARMES" },
      publisher: { "@type": "Organization", name: "ARMES" },
      mainEntityOfPage: `${SITE}/blog/${slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 2, name: post.title, item: `${SITE}/blog/${slug}` },
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
              <span className="text-[#B0B8C1]">{post.category}</span>
            </>
          )}
        </nav>

        {post.category && (
          <span className="inline-block text-[11px] font-bold text-[#3182F6] bg-[#EBF3FF] px-2.5 py-1 rounded-full mb-4">
            {post.category}
          </span>
        )}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-[#191F28] tracking-tight leading-[1.25] mb-4 keep-all">
          {post.title}
        </h1>
        <p className="text-[#B0B8C1] text-sm font-medium mb-10">{post.date.replace(/-/g, ".")}</p>

        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

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
