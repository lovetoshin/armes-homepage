import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { getAllPosts, BLOG_CATEGORIES } from "@/lib/posts";
import { BLOG_PAGE } from "@/lib/dict-pages";
import { type Locale } from "@/lib/i18n";

// 블로그 목록 본문 — 한국어/영어/중국어 공유. 번역된 글만 해당 언어 목록에 나온다.
export default function BlogListContent({ locale = "ko" }: { locale?: Locale }) {
  const posts = getAllPosts("blog", locale);
  const t = BLOG_PAGE[locale];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">Blog</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#191F28] tracking-tight leading-[1.15] mb-5 keep-all">
            {t.h1}
          </h1>
          <p className="text-[#4E5968] text-lg leading-relaxed max-w-2xl mx-auto keep-all">
            {t.heroDesc}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-20">
        <BlogList posts={posts} categories={BLOG_CATEGORIES} type="blog" locale={locale} />
      </div>

      <Footer locale={locale} />
    </div>
  );
}
