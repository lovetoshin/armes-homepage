import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { PostType, PostMeta, Post } from "./posts-meta";

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

// 단건: frontmatter + 본문 HTML
export function getPost(type: PostType, slug: string): Post | null {
  const file = path.join(dir(type), `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const contentHtml = marked.parse(content, { async: false }) as string;

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    excerpt: String(data.excerpt ?? ""),
    thumbnail: data.thumbnail ? String(data.thumbnail) : undefined,
    category: data.category ? String(data.category) : undefined,
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
