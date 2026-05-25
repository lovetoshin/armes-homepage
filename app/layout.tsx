import type { Metadata } from "next";
import { Geist } from "next/font/google";
import ContactProvider from "@/components/ContactProvider";
import NotifyProvider from "@/components/NotifyProvider";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://armes.co.kr"),
  title: "ARMES — 일상의 소비와 지역을 연결하는 로컬 플랫폼",
  description:
    "ARMES는 사용자와 지역 매장을 하나의 멤버십 경험으로 연결하는 차세대 로컬 플랫폼입니다. RewardTalk, Seller AI, 지역 공동구매로 로컬 생태계를 재정의합니다.",
  keywords: ["리워드", "멤버십", "공동구매", "로컬플랫폼", "리워드톡", "셀러AI", "지역혜택"],
  openGraph: {
    title: "ARMES — 차세대 로컬 플랫폼",
    description: "사용자와 지역 매장을 하나의 멤버십 경험으로 연결합니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "ARMES",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARMES — 차세대 로컬 플랫폼",
    description: "사용자와 지역 매장을 하나의 멤버십 경험으로 연결합니다.",
  },
  robots: {
    index: true,
    follow: true,
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
            {children}
          </NotifyProvider>
        </ContactProvider>
      </body>
    </html>
  );
}
