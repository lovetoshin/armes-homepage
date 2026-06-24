import type { Metadata } from "next";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://armes.co.kr"),
  title: "ARMES — AI로 일상을 바꾸는 서비스 기업",
  description:
    "주식회사 아르메스는 AI·데이터·자동화·위치기술을 활용해 일상의 여러 영역에 실제 쓰이는 서비스를 만드는 AI 기반 서비스 기업입니다. SellerAI·ARMES Tools를 운영하고 RewardTalk·TravelMoa·CocoPing 등을 준비합니다.",
  keywords: ["아르메스", "ARMES", "AI 기반 서비스 기업", "AI 서비스", "SellerAI", "RewardTalk", "AI 자동화"],
  openGraph: {
    title: "ARMES — AI로 일상을 바꾸는 서비스 기업",
    description: "AI·데이터·자동화·위치기술로 실제 쓰이는 서비스를 만드는 AI 기반 서비스 기업입니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "ARMES",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARMES — AI로 일상을 바꾸는 서비스 기업",
    description: "AI·데이터·자동화·위치기술로 실제 쓰이는 서비스를 만드는 AI 기반 서비스 기업입니다.",
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
    </html>
  );
}
