import type { MetadataRoute } from "next";

// AI 학습·크롤러 봇 목록 — Vercel ISR Reads 폭증(하루 10만+ 반복 크롤)을 막기 위한 차단 대상.
// 검색 노출용 봇(Googlebot·Bingbot)은 아래에서 별도로 허용해 SEO는 그대로 유지한다.
const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "PerplexityBot",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "meta-externalagent",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://armes.co.kr";
  return {
    rules: [
      // AI 학습/크롤러 봇 전면 차단 (ISR 폭증 근본 차단)
      ...AI_BOTS.map((ua) => ({ userAgent: ua, disallow: "/" })),
      // 검색엔진 봇은 명시 허용 → 검색 노출(SEO)은 그대로 유지
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      // 그 외 전체 허용(기존 보안 규칙 유지)
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
    ],
    sitemap: [
      `${base}/sitemap.xml`,
      "https://www.armes.co.kr/sellerai/sitemap.xml",
      // ARMES Tools 정식 출시 후 tools 사이트맵 주소 확정되면 다시 추가
      // (개발중 동안 404 주소를 광고하지 않음)
    ],
  };
}
