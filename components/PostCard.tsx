import Link from "next/link";
import type { PostMeta, PostType } from "@/lib/posts-meta";

/**
 * News/Blog 글 목록 카드 — 썸네일(있으면) + 카테고리 + 제목 + 요약 + 날짜.
 */
function formatDate(d: string) {
  // "2026-06-15" → "2026.06.15"
  return d ? d.replace(/-/g, ".") : "";
}

export default function PostCard({ post, type }: { post: PostMeta; type: PostType }) {
  return (
    <Link
      href={`/${type}/${post.slug}`}
      className="group block bg-white rounded-3xl border border-[#E5E8EB] overflow-hidden h-full transition-shadow hover:shadow-[0_4px_20px_rgba(49,130,246,0.12)] hover:border-[#C5D8FB]"
    >
      {/* 썸네일 (없으면 단색 영역) */}
      <div className="aspect-[16/9] bg-[#EBF3FF] overflow-hidden">
        {post.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#C5D8FB] text-4xl font-extrabold">
            ARMES
          </div>
        )}
      </div>

      <div className="p-6">
        {post.category && (
          <span className="inline-block text-[11px] font-bold text-[#3182F6] bg-[#EBF3FF] px-2.5 py-1 rounded-full mb-3">
            {post.category}
          </span>
        )}
        <h3 className="text-[#191F28] font-extrabold text-lg leading-snug mb-2 keep-all">
          {post.title}
        </h3>
        <p className="text-[#8B95A1] text-sm leading-relaxed mb-4 keep-all line-clamp-2">
          {post.excerpt}
        </p>
        <p className="text-[#B0B8C1] text-xs font-medium">{formatDate(post.date)}</p>
      </div>
    </Link>
  );
}
