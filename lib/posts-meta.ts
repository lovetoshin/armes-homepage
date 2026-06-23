// 타입·상수 전용 (node:fs 미사용) — 클라이언트 컴포넌트에서도 안전하게 import 가능.
// fs를 쓰는 파싱 로직은 lib/posts.ts(서버 전용)에 있다.

export type PostType = "news" | "blog";

// Blog 카테고리 (9종) — 검색 의도별 토픽 클러스터
export const BLOG_CATEGORIES = [
  "AI",
  "쇼핑",
  "여행",
  "주유",
  "전기차",
  "코스트코",
  "SEO",
  "생산성도구",
  "후삼국지",
] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

// News 카테고리 (5종) — News는 "회사 공식 소식" 전용 (인사이트/방법론 글은 Blog로 분리)
export const NEWS_CATEGORIES = [
  "서비스 출시",
  "업데이트",
  "제휴",
  "개발 현황",
  "공지",
] as const;
export type NewsCategory = (typeof NEWS_CATEGORIES)[number];

// 타입별 카테고리 목록(목록 필터·검증용)
export function categoriesFor(type: PostType): readonly string[] {
  return type === "news" ? NEWS_CATEGORIES : BLOG_CATEGORIES;
}

// Blog 카테고리 → URL 슬러그(영문 고정 — 한글 URL 인코딩 이슈 회피)
export const CATEGORY_SLUGS: Record<string, string> = {
  AI: "ai",
  쇼핑: "shopping",
  여행: "travel",
  주유: "fuel",
  전기차: "electric-car",
  코스트코: "costco",
  SEO: "seo",
  생산성도구: "productivity",
  후삼국지: "hoosamgukji",
};
const SLUG_TO_CATEGORY: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([k, v]) => [v, k]),
);
// 카테고리명 → 슬러그 (맵에 없으면 인코딩 fallback)
export function categorySlug(category: string): string {
  return CATEGORY_SLUGS[category] ?? encodeURIComponent(category);
}
// 슬러그 → 카테고리명 (없으면 undefined)
export function categoryFromSlug(slug: string): string | undefined {
  return SLUG_TO_CATEGORY[slug];
}

// 기본 작성자 — 개인명(신지한) 노출 금지, 회사명으로 통일
export const DEFAULT_AUTHOR = "주식회사 아르메스";

export interface PostMeta {
  slug: string;
  title: string;
  date: string; // 발행일 YYYY-MM-DD
  updated?: string; // 수정일 YYYY-MM-DD (없으면 발행일과 동일 취급)
  excerpt: string;
  thumbnail?: string; // 커버 이미지 경로 (필수 권장)
  imageAlt?: string; // 이미지 대체 텍스트(검색 키워드 포함)
  category?: string;
  tags: string[];
  author: string;
  readingTime: number; // 분
  relatedServices: string[]; // lib/projects.ts 의 key 배열 (관련 서비스 카드)
}

export interface Post extends PostMeta {
  contentHtml: string;
}
