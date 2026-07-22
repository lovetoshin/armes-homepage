import Link from "next/link";
import type { PostMeta, PostType } from "@/lib/posts-meta";
import { localize, type Locale } from "@/lib/i18n";
import { categoryLabel, readingTimeText } from "@/lib/i18n-data";

/**
 * News/Blog 글 목록 행(목록형) — 왼쪽 썸네일, 오른쪽 카테고리 + 제목 + 요약 2줄 + 날짜.
 */
function formatDate(d: string) {
  // "2026-06-15" → "2026.06.15"
  return d ? d.replace(/-/g, ".") : "";
}

export default function PostCard({
  post,
  type,
  locale = "ko",
}: {
  post: PostMeta;
  type: PostType;
  locale?: Locale;
}) {
  return (
    <Link
      href={localize(`/${type}/${post.slug}`, locale)}
      className="group flex items-start gap-4 sm:gap-6 py-5 border-b border-[#F2F4F6]"
    >
      {/* 왼쪽 썸네일 (없으면 단색 영역) */}
      <div className="w-32 sm:w-52 shrink-0 aspect-[16/10] rounded-xl bg-[#EBF3FF] overflow-hidden">
        {post.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.thumbnail}
            alt={post.imageAlt || post.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#C5D8FB] text-xl font-extrabold">
            ARMES
          </div>
        )}
      </div>

      {/* 오른쪽 글 정보 */}
      <div className="flex-1 min-w-0">
        {post.category && (
          <span className="inline-block text-[11px] font-bold text-[#3182F6] bg-[#EBF3FF] px-2.5 py-0.5 rounded-full mb-2">
            {categoryLabel(post.category, locale)}
          </span>
        )}
        <h3 className="text-[#191F28] font-extrabold text-base sm:text-lg leading-snug mb-1.5 keep-all group-hover:text-[#3182F6] transition-colors">
          {post.title}
        </h3>
        <p className="text-[#8B95A1] text-sm leading-relaxed mb-2.5 keep-all line-clamp-2">
          {post.excerpt}
        </p>
        <p className="text-[#B0B8C1] text-xs font-medium">
          {formatDate(post.date)}
          {post.readingTime ? <> · {readingTimeText(post.readingTime, locale)}</> : null}
        </p>
      </div>
    </Link>
  );
}
