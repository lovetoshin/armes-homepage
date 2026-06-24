import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://armes.co.kr";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: [
      `${base}/sitemap.xml`,
      "https://www.armes.co.kr/sellerai/sitemap.xml",
      // ARMES Tools 정식 출시 후 tools 사이트맵 주소 확정되면 다시 추가
      // (개발중 동안 404 주소를 광고하지 않음)
    ],
  };
}
