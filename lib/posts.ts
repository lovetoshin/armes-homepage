import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { DEFAULT_AUTHOR, type PostType, type PostMeta, type Post } from "./posts-meta";
import { LOCALES, LOCALE_SEGMENT, DEFAULT_LOCALE, localize, type Locale } from "./i18n";

// News / Blog 글을 content/*.md 에서 읽어 처리하는 유틸(서버 전용 — node:fs 사용).
// 글 본문은 Markdown 파일로 분리되어, 나중에 형님이 직접 교체/추가할 수 있다.
// 타입·상수(BLOG_CATEGORIES 등)는 클라이언트에서도 쓰도록 posts-meta.ts로 분리했다.
//
// 다국어: 한국어는 content/{type}/*.md, 번역본은 content/{type}/{언어코드}/*.md 에 둔다.
// 번역본이 없는 글은 해당 언어 목록에 나타나지 않는다(어색한 미번역 노출·중복 방지).
export * from "./posts-meta";

const ROOT = path.join(process.cwd(), "content");

function dir(type: PostType, locale: Locale = DEFAULT_LOCALE) {
  const seg = LOCALE_SEGMENT[locale];
  return seg ? path.join(ROOT, type, seg) : path.join(ROOT, type);
}

// 이 글이 실제 번역되어 존재하는 언어 목록 — hreflang을 정확히 만들어 404 링크를 막는다.
export function postLocales(type: PostType, slug: string): Locale[] {
  return LOCALES.filter((loc) =>
    fs.existsSync(path.join(dir(type, loc), `${slug}.md`))
  );
}

// 해당 타입·언어의 모든 .md 파일명(확장자 제외) 목록
export function getSlugs(type: PostType, locale: Locale = DEFAULT_LOCALE): string[] {
  const d = dir(type, locale);
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
export function getPost(
  type: PostType,
  slug: string,
  locale: Locale = DEFAULT_LOCALE,
): Post | null {
  const file = path.join(dir(type, locale), `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  let contentHtml = marked.parse(content, { async: false }) as string;

  // 외국어 글: 본문 안의 /blog 내부링크를 같은 언어판으로 연결한다.
  // (/blog 만 [lang] 풀 라우트가 보장되고 모든 글이 번역되므로 안전.
  //  /projects/[key]·/news/하위경로는 [lang] 개별 라우트가 없어 그대로 둔다 — 404 방지.)
  if (locale !== DEFAULT_LOCALE) {
    contentHtml = contentHtml.replace(
      /href="(\/blog[^"]*)"/g,
      (_m, p) => `href="${localize(p, locale)}"`,
    );
    // A안(임시): 외국어판은 본문 속 이미지를 가린다.
    // 커버·인물캡션 등 그림에 한국어가 박혀 있어, 외국어 이미지로 재생성되기 전까지 노출하지 않는다.
    // (figure 블록 + 단독 이미지 문단 제거. 인용구·표·텍스트는 번역되어 있으므로 유지.)
    contentHtml = contentHtml
      .replace(/<figure[\s\S]*?<\/figure>/g, "")
      .replace(/<p>\s*<img[^>]*>\s*<\/p>/g, "");
  }

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
export function getAllPosts(type: PostType, locale: Locale = DEFAULT_LOCALE): PostMeta[] {
  return getSlugs(type, locale)
    .map((slug) => {
      const post = getPost(type, slug, locale);
      if (!post) return null;
      const { contentHtml: _omit, ...meta } = post;
      void _omit;
      return meta;
    })
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 카테고리별 글 (목록 페이지/카테고리 인덱스용)
export function getPostsByCategory(
  type: PostType,
  category: string,
  locale: Locale = DEFAULT_LOCALE,
): PostMeta[] {
  return getAllPosts(type, locale).filter((p) => p.category === category);
}

// 관련 글 추출 — 같은 카테고리(+3점) + 태그 교집합(태그당 1점) 점수로 정렬,
// 부족하면 최신글로 채운다. 본문 하단 내부링크에 사용.
export function getRelatedPosts(
  type: PostType,
  slug: string,
  locale: Locale = DEFAULT_LOCALE,
  limit = 4,
): PostMeta[] {
  const all = getAllPosts(type, locale);
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
