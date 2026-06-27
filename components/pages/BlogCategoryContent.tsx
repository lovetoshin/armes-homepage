import Link from "next/link";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";
import { categorySlug } from "@/lib/posts-meta";
import { CATEGORY_HUB } from "@/lib/category-hub";
import { CATEGORY_PAGE } from "@/lib/dict-pages";
import { categoryLabel, categoryIntro } from "@/lib/i18n-data";
import { localize, HTML_LANG, type Locale } from "@/lib/i18n";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://armes.co.kr";

// 블로그 카테고리 본문 — 한국어/영어/중국어 공유.
// 한국어는 긴 SEO 본문(CATEGORY_HUB), 그 외 언어는 한 줄 소개(categoryIntro)를 쓴다.
export default function BlogCategoryContent({
  category, // 한국어 카테고리명(내부 기준)
  locale = "ko",
}: {
  category: string;
  locale?: Locale;
}) {
  const slug = categorySlug(category);
  const posts = getPostsByCategory("blog", category, locale);
  const label = categoryLabel(category, locale);
  const intro = categoryIntro(category, locale);
  const t = CATEGORY_PAGE[locale];
  const paras = locale === "ko" ? CATEGORY_HUB[category] ?? [intro] : [intro];
  const blogHref = localize("/blog", locale);
  const catHref = localize(`/blog/category/${slug}`, locale);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${label}`,
      description: intro,
      url: `${SITE}${catHref}`,
      inLanguage: HTML_LANG[locale],
      isPartOf: { "@type": "WebSite", name: "ARMES", url: SITE },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Blog", item: `${SITE}${blogHref}` },
        { "@type": "ListItem", position: 2, name: label, item: `${SITE}${catHref}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-28 pb-14 lg:pt-32 lg:pb-16 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <nav className="text-sm text-[#8B95A1] mb-6">
            <Link href={blogHref} className="hover:text-[#3182F6]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[#B0B8C1]">{label}</span>
          </nav>
          <p className="text-xs text-[#3182F6] font-bold uppercase tracking-widest mb-3">Category</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-[#191F28] tracking-tight leading-[1.15] mb-5 keep-all">
            {label}
          </h1>
          <div className="space-y-3 max-w-3xl">
            {paras.map((para, i) => (
              <p key={i} className="text-[#4E5968] text-[15px] lg:text-base leading-[1.85] keep-all">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        {posts.length === 0 ? (
          <p className="text-center text-[#8B95A1] py-10">{t.comingSoon}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} type="blog" locale={locale} />
            ))}
          </div>
        )}

        <div className="mt-14 text-center">
          <Link href={blogHref} className="inline-flex items-center gap-1.5 text-[#3182F6] font-bold text-sm">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t.viewAll}
          </Link>
        </div>
      </div>

      <Footer locale={locale} />
    </div>
  );
}
