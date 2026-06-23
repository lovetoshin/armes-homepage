import type { Metadata } from "next";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { getAllPosts, NEWS_CATEGORIES } from "@/lib/posts";

export const metadata: Metadata = {
  title: "News | ARMES",
  description:
    "아르메스의 공식 소식 — 서비스 출시, 업데이트, 제휴, 개발 현황, 공지를 전합니다.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const posts = getAllPosts("news");

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">News</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#191F28] tracking-tight leading-[1.15] mb-5 keep-all">
            아르메스 소식
          </h1>
          <p className="text-[#4E5968] text-lg leading-relaxed max-w-2xl mx-auto keep-all">
            서비스 출시와 제휴, 회사의 주요 소식을 전합니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-20">
        {posts.length === 0 ? (
          <p className="text-center text-[#8B95A1]">아직 등록된 소식이 없습니다.</p>
        ) : (
          <BlogList posts={posts} categories={NEWS_CATEGORIES} type="news" />
        )}
      </div>

      <Footer />
    </div>
  );
}
