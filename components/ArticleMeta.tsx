import Link from "next/link";
import { categorySlug, type PostMeta, type PostType } from "@/lib/posts-meta";

function fmt(d?: string) {
  return d ? d.replace(/-/g, ".") : "";
}

/**
 * 글 상세 상단 메타 — 카테고리(블로그는 카테고리 인덱스로 링크) · 작성자 · 발행/수정일 · 읽는 시간 · 태그.
 * 개인명 노출 없음(작성자는 회사명 기준).
 */
export default function ArticleMeta({
  post,
  type,
}: {
  post: PostMeta;
  type: PostType;
}) {
  const showUpdated = post.updated && post.updated !== post.date;

  return (
    <div className="mb-8">
      {post.category && (
        <div className="mb-4">
          {type === "blog" ? (
            <Link
              href={`/blog/category/${categorySlug(post.category)}`}
              className="inline-block text-[12px] font-bold text-[#3182F6] bg-[#EBF3FF] px-3 py-1.5 rounded-full hover:bg-[#DCEAFE] transition-colors"
            >
              {post.category}
            </Link>
          ) : (
            <span className="inline-block text-[12px] font-bold text-[#3182F6] bg-[#EBF3FF] px-3 py-1.5 rounded-full">
              {post.category}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-[#8B95A1]">
        <span className="font-semibold text-[#4E5968]">{post.author}</span>
        <span className="text-[#D1D6DB]">·</span>
        <span>발행 {fmt(post.date)}</span>
        {showUpdated && (
          <>
            <span className="text-[#D1D6DB]">·</span>
            <span>수정 {fmt(post.updated)}</span>
          </>
        )}
        {post.readingTime ? (
          <>
            <span className="text-[#D1D6DB]">·</span>
            <span>{post.readingTime}분 읽기</span>
          </>
        ) : null}
      </div>

      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {post.tags.map((t) => (
            <span
              key={t}
              className="text-[12px] font-medium text-[#6B7684] bg-[#F2F4F6] px-2.5 py-1 rounded-md"
            >
              #{t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
