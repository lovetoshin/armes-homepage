// 타입·상수 전용 (node:fs 미사용) — 클라이언트 컴포넌트에서도 안전하게 import 가능.
// fs를 쓰는 파싱 로직은 lib/posts.ts(서버 전용)에 있다.

export type PostType = "news" | "blog";

// Blog 카테고리 (초기 3종)
export const BLOG_CATEGORIES = ["셀러 노하우", "AI 활용", "회사 이야기"] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export interface PostMeta {
  slug: string;
  title: string;
  date: string;        // YYYY-MM-DD
  excerpt: string;
  thumbnail?: string;
  category?: string;   // blog 전용
}

export interface Post extends PostMeta {
  contentHtml: string;
}
