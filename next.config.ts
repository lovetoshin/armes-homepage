import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── 이미지 최적화 ──
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // 필요 시 외부 이미지 도메인 추가
      // { protocol: "https", hostname: "cdn.armes.co.kr" },
    ],
  },

  // ── 보안 헤더 ──
  async headers() {
    // 공통 보안 헤더(권한 정책 제외)
    const base = [
      { key: "X-Content-Type-Options",    value: "nosniff" },
      { key: "X-Frame-Options",            value: "DENY" },
      { key: "X-XSS-Protection",           value: "1; mode=block" },
      { key: "Referrer-Policy",            value: "strict-origin-when-cross-origin" },
      { key: "Strict-Transport-Security",  value: "max-age=63072000; includeSubDomains; preload" },
    ];
    return [
      {
        // ARMES Tools(/tools): 음성 녹음·화면 녹화 도구가 있어 마이크·화면공유를 '본인 사이트'에 한해 허용.
        // ※ COOP/COEP(SharedArrayBuffer 가속용)는 제거함 — 애드센스 광고 iframe(googleads.g.doubleclick.net)이
        //   COEP credentialless 환경에서 "연결 거부"로 깨졌기 때문(2026-06-26 형님 확인). AI 지우기는 단일스레드 자동 폴백.
        source: "/tools/:path*",
        headers: [
          ...base,
          { key: "Permissions-Policy", value: "camera=(self), microphone=(self), display-capture=(self), geolocation=(self)" },
        ],
      },
      {
        // 그 외 모든 경로: 마이크·카메라 차단(기존 정책 유지)
        source: "/((?!tools).*)",
        headers: [
          ...base,
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
        ],
      },
    ];
  },

  // ── 리다이렉트 ──
  async redirects() {
    return [
      // 기존 SellerAI 소개 페이지(/seller-info) 검색 유입은
      // 곧장 SellerAI 앱(https://www.armes.co.kr/sellerai/studio)으로 영구(301) 연결한다.
      // (Projects 목록을 거치지 않음 — 사용자는 SellerAI를 보러 온 것)
      {
        source:      "/seller-info",
        destination: "https://www.armes.co.kr/sellerai/studio",
        permanent:   true,
      },
      // 옛 주소(/tools 접두어 없이 배포되던 시절) → 현재 /tools/* 구조로 영구(308) 이전.
      // 구글이 과거 크롤한 /{언어}/{도구카테고리}/* 수백 개가 404 나던 것을 정리(검색 점수 회수·사이트 건전성).
      // 도구 카테고리로 시작하는 경로만 매칭 → 본체 자체 페이지(/ko/about 등)와 충돌 없음.
      // destination의 /tools/* 는 vercel.json rewrite로 아르메스툴(web_util)에 연결되고,
      // 옛 image 카테고리는 web_util next.config가 image-adjust 등으로 2차 리다이렉트한다.
      // 'tools'는 언어 화이트리스트(ko|en…)에 없으므로 무한 루프 없음.
      {
        source:      "/:lang(ko|en|ja|zh-cn|zh-tw|es|pt-br|fr|de)/:cat(image-convert|image-edit|image-adjust|image-background|image-create|image-color|id-photo|document|audio|video|calc|text|form|blog|file|pdf|dev|qr|image)/:rest*",
        destination: "/tools/:lang/:cat/:rest*",
        permanent:   true,
      },
      // www → non-www (도메인 설정 시 활성화)
      // {
      //   source:      "/:path*",
      //   has:         [{ type: "host", value: "www.armes.co.kr" }],
      //   destination: "https://www.armes.co.kr/:path*",
      //   permanent:   true,
      // },
    ];
  },

  // ── 번들 분석 (ANALYZE=true 환경 변수 시 활성화) ──
  // analyzer: process.env.ANALYZE === "true",

  // ── 압축 ──
  compress: true,

  // ── 파워드 바이 헤더 제거 ──
  poweredByHeader: false,
};

export default nextConfig;
