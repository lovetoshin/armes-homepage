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
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "X-Frame-Options",            value: "DENY" },
          { key: "X-XSS-Protection",           value: "1; mode=block" },
          { key: "Referrer-Policy",            value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",         value: "camera=(), microphone=(), geolocation=(self)" },
          {
            key:   "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
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
      // ARMES Tools는 현재 개발중 — 옛/외부 주소(/tools, /tools/ko 등)로 들어와도
      // 404 대신 소개(랜딩) 페이지로 임시 안내한다. (정식 출시 시 이 두 규칙 제거)
      {
        source:      "/tools",
        destination: "/projects/tools",
        permanent:   false,
      },
      {
        source:      "/tools/:path*",
        destination: "/projects/tools",
        permanent:   false,
      },
      // www → non-www (도메인 설정 시 활성화)
      // {
      //   source:      "/:path*",
      //   has:         [{ type: "host", value: "www.armes.co.kr" }],
      //   destination: "https://armes.co.kr/:path*",
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
