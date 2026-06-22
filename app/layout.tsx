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
  title: "ARMES — AI 기술로 일상을 자동화하는 회사",
  description:
    "주식회사 아르메스는 이미지·언어·비전·위치 기술로 일상의 여러 영역에 실제 쓰이는 AI 서비스를 만드는 기술 회사입니다. SellerAI, RewardTalk, TravelMoa 등을 운영·개발합니다.",
  keywords: ["아르메스", "ARMES", "AI 회사", "AI 기술", "SellerAI", "RewardTalk", "AI 자동화"],
  openGraph: {
    title: "ARMES — AI 기술로 일상을 자동화하는 회사",
    description: "이미지·언어·비전·위치 기술로 실제 쓰이는 AI 서비스를 만듭니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "ARMES",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARMES — AI 기술로 일상을 자동화하는 회사",
    description: "이미지·언어·비전·위치 기술로 실제 쓰이는 AI 서비스를 만듭니다.",
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
