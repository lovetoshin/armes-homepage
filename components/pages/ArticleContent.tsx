import Link from "next/link";
import Footer from "@/components/Footer";
import ArticleMeta from "@/components/ArticleMeta";
import RelatedPosts from "@/components/RelatedPosts";
import RelatedServices from "@/components/RelatedServices";
import { categorySlug, type Post, type PostMeta, type PostType } from "@/lib/posts-meta";
import { localize, HTML_LANG, type Locale } from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";
import { categoryLabel } from "@/lib/i18n-data";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://armes.co.kr";

function absUrl(p?: string) {
  if (!p) return undefined;
  return p.startsWith("http") ? p : `${SITE}${p}`;
}

// 블로그/뉴스 글 상세 본문 — 한국어/영어/중국어 공유. post/related는 라우트에서 언어별로 읽어 넘긴다.
export default function ArticleContent({
  post,
  related,
  type,
  locale = "ko",
}: {
  post: Post;
  related: PostMeta[];
  type: PostType;
  locale?: Locale;
}) {
  const ui = getUI(locale).common;
  const img = absUrl(post.thumbnail);
  const wordCount = post.contentHtml.replace(/<[^>]+>/g, "").replace(/\s+/g, "").length;
  const base = localize(`/${type}`, locale);
  const articleUrl = `${SITE}${localize(`/${type}/${post.slug}`, locale)}`;
  const isNews = type === "news";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": isNews ? "NewsArticle" : "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      ...(img ? { image: [img] } : {}),
      datePublished: post.date,
      dateModified: post.updated || post.date,
      ...(post.category ? { articleSection: categoryLabel(post.category, locale) } : {}),
      ...(post.tags.length ? { keywords: post.tags.join(", ") } : {}),
      wordCount,
      inLanguage: HTML_LANG[locale],
      author: { "@type": "Organization", name: post.author, url: SITE },
      publisher: {
        "@type": "Organization",
        name: "주식회사 아르메스",
        logo: { "@type": "ImageObject", url: `${SITE}/armes-logo.png` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: isNews ? "News" : "Blog", item: `${SITE}${base}` },
        ...(post.category && !isNews
          ? [{
              "@type": "ListItem",
              position: 2,
              name: categoryLabel(post.category, locale),
              item: `${SITE}${localize(`/blog/category/${categorySlug(post.category)}`, locale)}`,
            }]
          : []),
        {
          "@type": "ListItem",
          position: post.category && !isNews ? 3 : 2,
          name: post.title,
          item: articleUrl,
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
          <Link href={base} className="hover:text-[#3182F6]">{isNews ? "News" : "Blog"}</Link>
          {post.category && !isNews && (
            <>
              <span className="mx-2">/</span>
              <Link
                href={localize(`/blog/category/${categorySlug(post.category)}`, locale)}
                className="hover:text-[#3182F6]"
              >
                {categoryLabel(post.category, locale)}
              </Link>
            </>
          )}
        </nav>

        <h1 className="text-3xl lg:text-4xl font-extrabold text-[#191F28] tracking-tight leading-[1.25] mb-5 keep-all">
          {post.title}
        </h1>

        <ArticleMeta post={post} type={type} locale={locale} />

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

        <div className="post-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

        {/* 관련 서비스(명시한 글에만) */}
        <RelatedServices keys={post.relatedServices} locale={locale} />

        {/* 관련 글(내부링크) */}
        <RelatedPosts posts={related} type={type} locale={locale} />

        <div className="mt-14 pt-8 border-t border-[#E5E8EB]">
          <Link href={base} className="inline-flex items-center gap-1.5 text-[#3182F6] font-bold text-sm">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {ui.backToList}
          </Link>
        </div>
      </article>

      <Footer locale={locale} />
    </div>
  );
}
