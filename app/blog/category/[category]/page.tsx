import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import {
  getPostsByCategory,
  BLOG_CATEGORIES,
  categorySlug,
  categoryFromSlug,
} from "@/lib/posts";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://armes.co.kr";

// 카테고리별 소개 문구(검색 의도 반영)
const INTRO: Record<string, string> = {
  AI: "AI로 이미지·상세페이지·콘텐츠를 더 빠르게 만드는 실전 활용법을 모았습니다.",
  쇼핑: "스마트스토어·온라인 판매와 알뜰 쇼핑에 바로 쓰는 정보와 노하우입니다.",
  여행: "항공권·여행 특가를 더 싸게, 더 똑똑하게 준비하는 방법을 정리합니다.",
  주유: "우리 동네 최저가 주유소와 기름값 아끼는 팁을 다룹니다.",
  전기차: "전기차 충전소 찾기와 충전 요금을 아끼는 방법을 안내합니다.",
  코스트코: "코스트코 할인 정보와 가격 변동, 가성비 쇼핑 팁을 모았습니다.",
  SEO: "검색 상위 노출과 블로그·로컬 SEO의 기본기를 쉽게 설명합니다.",
  생산성도구: "설치·가입 없이 브라우저에서 바로 쓰는 무료 도구 활용법입니다.",
  후삼국지: "후삼국 시대 인물과 역사, 전략 시뮬레이션 이야기를 다룹니다.",
};

// URL 슬러그는 영문 고정(/blog/category/ai, /shopping ...)
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
    description: INTRO[cat] ?? `${cat} 관련 아르메스 블로그 글 모음입니다.`,
    alternates: { canonical: `/blog/category/${category}` },
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

  const posts = getPostsByCategory("blog", cat);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${cat} 글 모음`,
      description: INTRO[cat] ?? "",
      url: `${SITE}/blog/category/${category}`,
      isPartOf: { "@type": "WebSite", name: "ARMES", url: SITE },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 2, name: cat, item: `${SITE}/blog/category/${category}` },
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
            <Link href="/blog" className="hover:text-[#3182F6]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[#B0B8C1]">{cat}</span>
          </nav>
          <p className="text-xs text-[#3182F6] font-bold uppercase tracking-widest mb-3">Category</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-[#191F28] tracking-tight leading-[1.15] mb-4 keep-all">
            {cat}
          </h1>
          <p className="text-[#4E5968] text-lg leading-relaxed max-w-2xl keep-all">
            {INTRO[cat]}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        {posts.length === 0 ? (
          <p className="text-center text-[#8B95A1] py-10">이 카테고리의 글을 준비 중입니다.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} type="blog" />
            ))}
          </div>
        )}

        <div className="mt-14 text-center">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[#3182F6] font-bold text-sm">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            전체 글 보기
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
