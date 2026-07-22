import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import ContactProvider from "@/components/ContactProvider";
import NotifyProvider from "@/components/NotifyProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.armes.co.kr"),
  title: "ARMES — 매일의 불편을 해결하는 생활 서비스 회사",
  description:
    "주식회사 아르메스는 쇼핑몰·지역 생활·여행 등 일상의 여러 영역에 실제 쓰이는 생활 서비스를 만드는 회사입니다. SellerAI·ARMES Tools를 운영하고 RewardTalk·TravelMoa·CocoPing 등을 준비합니다.",
  keywords: ["아르메스", "ARMES", "생활 서비스", "SellerAI", "ARMES Tools", "RewardTalk", "TravelMoa"],
  openGraph: {
    title: "ARMES — 매일의 불편을 해결하는 생활 서비스 회사",
    description: "쇼핑몰·지역 생활·여행 등 일상에 실제 쓰이는 생활 서비스를 만듭니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "ARMES",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARMES — 매일의 불편을 해결하는 생활 서비스 회사",
    description: "쇼핑몰·지역 생활·여행 등 일상에 실제 쓰이는 생활 서비스를 만듭니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "naver-site-verification": "1145ed3f39996b736528548bf4b4c5b4d7361c00",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geist.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="min-h-screen bg-[#09090B] text-white overflow-x-hidden">
        <ContactProvider>
          <NotifyProvider>
            <Navbar />
            {children}
          </NotifyProvider>
        </ContactProvider>
      </body>
      {/* Google AdSense — beforeInteractive면 서버 HTML <head>에 주입됨(심사봇이 코드 감지) */}
      <Script
        id="adsbygoogle-init"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4065600972538753"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
    </html>
  );
}
