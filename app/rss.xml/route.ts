import { getAllPosts } from "@/lib/posts";

// RSS 2.0 피드(/rss.xml) — 블로그+뉴스 전체 글 최신순.
// 네이버 서치어드바이저 "요청 > RSS 제출"용. 빌드 시 정적 생성되어
// 새 글 커밋·배포 때마다 자동 갱신된다(사이트맵과 동일한 흐름).
export const dynamic = "force-static";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.armes.co.kr";

// XML 특수문자 이스케이프(제목·요약에 &, <, > 등이 있어도 피드가 깨지지 않게)
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// "YYYY-MM-DD" → RFC-822 (RSS 표준 날짜 형식). 한국 정오 기준으로 고정해 시차로 날짜가 밀리지 않게 한다.
function toRfc822(date: string): string {
  const d = new Date(`${date}T12:00:00+09:00`);
  return isNaN(d.getTime()) ? new Date().toUTCString() : d.toUTCString();
}

export async function GET() {
  const items = [
    ...getAllPosts("blog").map((p) => ({ ...p, url: `${BASE}/blog/${p.slug}` })),
    ...getAllPosts("news").map((p) => ({ ...p, url: `${BASE}/news/${p.slug}` })),
  ].sort((a, b) => (a.date < b.date ? 1 : -1));

  const itemsXml = items
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${p.url}</link>
      <guid isPermaLink="true">${p.url}</guid>
      <description>${esc(p.excerpt)}</description>
      <pubDate>${toRfc822(p.date)}</pubDate>${p.category ? `
      <category>${esc(p.category)}</category>` : ""}
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>아르메스 블로그·뉴스</title>
    <link>${BASE}</link>
    <description>주식회사 아르메스의 블로그와 새소식 — 생활 서비스·커머스 실전 노하우</description>
    <language>ko</language>
    <lastBuildDate>${items[0] ? toRfc822(items[0].date) : new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
