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
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.armes.co.kr";
  return {
    rules: [
      // AI 학습/크롤러 봇 전면 차단 (ISR 폭증 근본 차단)
      ...AI_BOTS.map((ua) => ({ userAgent: ua, disallow: "/" })),
      // 검색엔진 봇은 명시 허용 → 검색 노출(SEO)은 그대로 유지
      // 국내 검색(네이버 Yeti·다음 Daumoa)도 명시 허용 — 국내 SEO 유입의 핵심.
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Yeti", allow: "/" },
      { userAgent: "Daumoa", allow: "/" },
      // 그 외 전체 허용(기존 보안 규칙 유지)
      // + 아르메스툴 외국어 경로(/tools/{언어}/)는 크롤 차단 — 이미 색인에서 제거 완료(noindex 목적 달성)이므로
      //   더는 크롤을 열어둘 이유가 없다. 봇이 외국어 페이지 수천 개를 반복 크롤해 Fast Origin Transfer가
      //   폭증하던 문제를 근본 차단(한국어 /tools/·/tools/ko/ 는 허용해 광고·SEO 유지). [[armes-vercel-bot-defense]]
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/tools/en/",
          "/tools/ja/",
          "/tools/zh-cn/",
          "/tools/zh-tw/",
          "/tools/es/",
          "/tools/pt-br/",
          "/tools/fr/",
          "/tools/de/",
        ],
      },
    ],
    sitemap: [
      `${base}/sitemap.xml`,
      "https://www.armes.co.kr/sellerai/sitemap.xml",
      // 아르메스툴 사이트맵 — 한국어 도구 316개 URL. 배포·200 확인 완료라 검색엔진에 정식 노출.
      // 국내 트래픽 유입의 핵심(구글·네이버가 이 사이트맵으로 도구 페이지를 발견). 외국어는 이미 sitemap에서 제외됨.
      "https://www.armes.co.kr/tools/sitemap.xml",
      // 아르메스 라이프 사이트맵 — 생활 계산기 19 URL(ko 전용). 2026-07-25 추가.
      "https://www.armes.co.kr/life/sitemap.xml",
    ],
  };
}
