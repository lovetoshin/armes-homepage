import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

// 홈의 블로그 최신글 섹션 — 순수 서버 컴포넌트로 렌더해 글 제목·요약이 HTML에
// 그대로 담기게 한다(검색엔진이 사이트의 실제 콘텐츠를 바로 인식하도록).
// 200편 블로그가 푸터에만 숨어 있던 문제를 해결: 홈에서 바로 노출 + 내부링크.
export default function LatestBlog() {
  const posts = getAllPosts("blog", "ko").slice(0, 9);
  if (posts.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[13px] font-bold text-[#1d62f0]">ARMES 블로그</p>
            <h2 className="mt-1 text-[24px] font-extrabold text-gray-900 sm:text-[28px]">
              쇼핑몰·생활을 바꾸는 이야기
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-gray-500">
              쇼핑몰 운영 노하우부터 유용한 도구 사용법까지 — 실제로 도움이 되는 글을 씁니다.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden shrink-0 rounded-xl border border-gray-200 px-4 py-2.5 text-[13px] font-bold text-gray-600 transition-colors hover:border-[#1d62f0] hover:text-[#1d62f0] sm:inline-block"
          >
            블로그 전체 보기 →
          </Link>
        </div>

        {/* 목록형 — 왼쪽 이미지, 오른쪽 제목+요약 2줄 (블로그 페이지와 동일한 PostCard 재사용) */}
        <div className="flex flex-col border-t border-[#F2F4F6]">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} type="blog" locale="ko" />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-block rounded-xl border border-gray-200 px-5 py-2.5 text-[14px] font-bold text-gray-600 hover:border-[#1d62f0] hover:text-[#1d62f0]"
          >
            블로그 전체 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
