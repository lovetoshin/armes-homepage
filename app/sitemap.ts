import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://armes.co.kr";
  const now  = new Date().toISOString();

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
  ];
}
