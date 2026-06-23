import type { Metadata } from "next";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { getAllPosts, BLOG_CATEGORIES } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | ARMES",
  description:
    "AI·쇼핑·여행·주유·전기차·코스트코·SEO·생산성도구까지 — 아르메스가 전하는 생활 속 정보와 노하우를 읽어보세요.",
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
            AI 활용법부터 쇼핑·여행·주유·코스트코 꿀팁까지, 생활에 바로 쓰는 정보를 나눕니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-20">
        <BlogList posts={posts} categories={BLOG_CATEGORIES} type="blog" />
      </div>

      <Footer />
    </div>
  );
}
