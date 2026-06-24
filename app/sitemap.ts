import type { MetadataRoute } from "next";
import { getAllPosts, BLOG_CATEGORIES, categorySlug } from "@/lib/posts";
import { projects, type ProjectStatus } from "@/lib/projects";

// 서비스 상태별 우선순위(운영중 > 배포대기중 > 준비중 > 연구중)
const SERVICE_PRIORITY: Record<ProjectStatus, number> = {
  live: 0.8,
  pending: 0.7,
  soon: 0.6,
  research: 0.5,
};

// "YYYY-MM-DD" → ISO. 형식이 이상하면 현재 시각으로 대체.
function toIso(date: string, fallback: string): string {
  const d = new Date(date);
  return isNaN(d.getTime()) ? fallback : d.toISOString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://armes.co.kr";
  const now  = new Date().toISOString();

  const newsPosts = getAllPosts("news");
  const blogPosts = getAllPosts("blog");

  return [
    {
      url:              base,
      lastModified:     now,
      changeFrequency:  "weekly",
      priority:         1,
    },
    {
      url:              `${base}/projects`,
      lastModified:     now,
      changeFrequency:  "weekly",
      priority:         0.9,
    },
    {
      url:              `${base}/about`,
      lastModified:     now,
      changeFrequency:  "monthly",
      priority:         0.8,
    },
    {
      url:              `${base}/news`,
      lastModified:     now,
      changeFrequency:  "weekly",
      priority:         0.7,
    },
    {
      url:              `${base}/blog`,
      lastModified:     now,
      changeFrequency:  "weekly",
      priority:         0.7,
    },
    {
      url:              `${base}/contact`,
      lastModified:     now,
      changeFrequency:  "monthly",
      priority:         0.8,
    },
    {
      url:              `${base}/privacy`,
      lastModified:     now,
      changeFrequency:  "yearly",
      priority:         0.4,
    },
    {
      url:              `${base}/terms`,
      lastModified:     now,
      changeFrequency:  "yearly",
      priority:         0.4,
    },
    // 서비스(프로젝트) 상세 페이지 — 블로그 유입을 실제 서비스로 연결
    ...projects.map((p) => ({
      url:             `${base}/projects/${p.key}`,
      lastModified:    now,
      changeFrequency: "monthly" as const,
      priority:        SERVICE_PRIORITY[p.status],
    })),
    // Blog 카테고리 인덱스(키워드 허브)
    ...BLOG_CATEGORIES.map((cat) => ({
      url:             `${base}/blog/category/${categorySlug(cat)}`,
      lastModified:    now,
      changeFrequency: "weekly" as const,
      priority:        0.6,
    })),
    // News/Blog 개별 글 자동 등록 (수정일 우선)
    ...newsPosts.map((p) => ({
      url:             `${base}/news/${p.slug}`,
      lastModified:    toIso(p.updated || p.date, now),
      changeFrequency: "monthly" as const,
      priority:        0.6,
    })),
    ...blogPosts.map((p) => ({
      url:             `${base}/blog/${p.slug}`,
      lastModified:    toIso(p.updated || p.date, now),
      changeFrequency: "monthly" as const,
      priority:        0.6,
    })),
  ];
}
