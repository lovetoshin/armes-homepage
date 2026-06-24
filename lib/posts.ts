import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { DEFAULT_AUTHOR, type PostType, type PostMeta, type Post } from "./posts-meta";

// News / Blog 글을 content/*.md 에서 읽어 처리하는 유틸(서버 전용 — node:fs 사용).
// 글 본문은 Markdown 파일로 분리되어, 나중에 형님이 직접 교체/추가할 수 있다.
// 타입·상수(BLOG_CATEGORIES 등)는 클라이언트에서도 쓰도록 posts-meta.ts로 분리했다.
export * from "./posts-meta";

const ROOT = path.join(process.cwd(), "content");

function dir(type: PostType) {
  return path.join(ROOT, type);
}

// 해당 타입의 모든 .md 파일명(확장자 제외) 목록
export function getSlugs(type: PostType): string[] {
  const d = dir(type);
  if (!fs.existsSync(d)) return [];
  return fs
    .readdirSync(d)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

// 문자열/배열 frontmatter를 문자열 배열로 정규화 (쉼표 구분도 허용)
function toList(v: unknown): string[] {
  if (Array.isArray(v)) return v.map((x) => String(x).trim()).filter(Boolean);
  if (typeof v === "string") return v.split(",").map((x) => x.trim()).filter(Boolean);
  return [];
}

// 날짜 정규화: gray-matter가 따옴표 없는 date(예: 2026-05-27)를 Date 객체로 파싱하는 경우
// String() 변환 시 "Wed May 27 2026 ..." 형태가 되어 문자열 정렬이 깨진다 → YYYY-MM-DD로 통일.
function toISODate(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return v == null ? "" : String(v);
}

// 한국어 기준 읽는 시간(분) — 분당 약 500자, 최소 1분
function calcReadingTime(markdown: string): number {
  const chars = markdown.replace(/\s/g, "").length;
  return Math.max(1, Math.round(chars / 500));
}

// 단건: frontmatter + 본문 HTML
export function getPost(type: PostType, slug: string): Post | null {
  const file = path.join(dir(type), `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const contentHtml = marked.parse(content, { async: false }) as string;

  // thumbnail / image 둘 다 허용
  const thumbnail = data.thumbnail
    ? String(data.thumbnail)
    : data.image
      ? String(data.image)
      : undefined;

  // relatedServices / relatedService 둘 다 허용
  const relatedServices = toList(data.relatedServices ?? data.relatedService);

  return {
    slug,
    title: String(data.title ?? slug),
    date: toISODate(data.date),
    updated: data.updated ? toISODate(data.updated) : undefined,
    excerpt: String(data.excerpt ?? ""),
    thumbnail,
    imageAlt: data.imageAlt ? String(data.imageAlt) : undefined,
    category: data.category ? String(data.category) : undefined,
    tags: toList(data.tags),
    author: data.author ? String(data.author) : DEFAULT_AUTHOR,
    readingTime: calcReadingTime(content),
    relatedServices,
    contentHtml,
  };
}

// 목록: 본문 제외 메타만, 최신순 정렬
export function getAllPosts(type: PostType): PostMeta[] {
  return getSlugs(type)
    .map((slug) => {
      const post = getPost(type, slug);
      if (!post) return null;
      const { contentHtml: _omit, ...meta } = post;
      void _omit;
      return meta;
    })
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 카테고리별 글 (목록 페이지/카테고리 인덱스용)
export function getPostsByCategory(type: PostType, category: string): PostMeta[] {
  return getAllPosts(type).filter((p) => p.category === category);
}

// 관련 글 추출 — 같은 카테고리(+3점) + 태그 교집합(태그당 1점) 점수로 정렬,
// 부족하면 최신글로 채운다. 본문 하단 내부링크에 사용.
export function getRelatedPosts(
  type: PostType,
  slug: string,
  limit = 4,
): PostMeta[] {
  const all = getAllPosts(type);
  const current = all.find((p) => p.slug === slug);
  if (!current) return all.filter((p) => p.slug !== slug).slice(0, limit);

  const scored = all
    .filter((p) => p.slug !== slug)
    .map((p) => {
      let score = 0;
      if (p.category && p.category === current.category) score += 3;
      score += p.tags.filter((t) => current.tags.includes(t)).length;
      return { p, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.p.date < b.p.date ? 1 : -1; // 동점이면 최신순
    });

  return scored.slice(0, limit).map((s) => s.p);
}
