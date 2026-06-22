import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

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
    // News/Blog 개별 글 자동 등록
    ...newsPosts.map((p) => ({
      url:             `${base}/news/${p.slug}`,
      lastModified:    toIso(p.date, now),
      changeFrequency: "monthly" as const,
      priority:        0.6,
    })),
    ...blogPosts.map((p) => ({
      url:             `${base}/blog/${p.slug}`,
      lastModified:    toIso(p.date, now),
      changeFrequency: "monthly" as const,
      priority:        0.6,
    })),
  ];
}
