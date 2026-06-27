import PostCard from "@/components/PostCard";
import type { PostMeta, PostType } from "@/lib/posts-meta";
import { type Locale } from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";

/**
 * 글 하단 관련 글(내부링크) — 같은 카테고리·태그 기반으로 자동 노출.
 */
export default function RelatedPosts({
  posts,
  type,
  locale = "ko",
}: {
  posts: PostMeta[];
  type: PostType;
  locale?: Locale;
}) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-[#E5E8EB]">
      <h2 className="text-xl font-extrabold text-[#191F28] mb-7 keep-all">
        {getUI(locale).common.relatedReadTitle}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} type={type} locale={locale} />
        ))}
      </div>
    </section>
  );
}
