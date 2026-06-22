import type { Metadata } from "next";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | ARMES",
  description:
    "셀러 노하우, AI 활용, 회사 이야기 — 아르메스가 전하는 인사이트와 노하우를 읽어보세요.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts("blog");

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">Blog</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#191F28] tracking-tight leading-[1.15] mb-5 keep-all">
            인사이트 &amp; 노하우
          </h1>
          <p className="text-[#4E5968] text-lg leading-relaxed max-w-2xl mx-auto keep-all">
            셀러 노하우부터 AI 활용법, 회사 이야기까지 함께 나눕니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-20">
        <BlogList posts={posts} />
      </div>

      <Footer />
    </div>
  );
}
