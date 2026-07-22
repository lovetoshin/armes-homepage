"use client";

import { useState } from "react";
import PostCard from "@/components/PostCard";
import type { PostMeta, PostType } from "@/lib/posts-meta";
import { type Locale } from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";
import { categoryLabel } from "@/lib/i18n-data";

const ALL = "__all__"; // 카테고리 "전체"를 가리키는 내부 식별자(언어 무관)

/**
 * News/Blog 공용 목록 + 카테고리 칩 필터(클라이언트).
 * categories는 호출하는 쪽에서 타입에 맞게 넘긴다(Blog 9종 / News 5종).
 */
export default function BlogList({
  posts,
  categories,
  type = "blog",
  locale = "ko",
}: {
  posts: PostMeta[];
  categories: readonly string[];
  type?: PostType;
  locale?: Locale;
}) {
  const [active, setActive] = useState<string>(ALL);
  const ui = getUI(locale).common;

  const filtered = active === ALL ? posts : posts.filter((p) => p.category === active);
  const chips = [ALL, ...categories];

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {chips.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              active === c
                ? "bg-[#3182F6] text-white"
                : "bg-[#F2F4F6] text-[#4E5968] hover:bg-[#E5E8EB]"
            }`}
          >
            {c === ALL ? ui.all : categoryLabel(c, locale)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-[#8B95A1] py-10">{ui.emptyPosts}</p>
      ) : (
        <div className="flex flex-col border-t border-[#F2F4F6]">
          {filtered.map((p) => (
            <PostCard key={p.slug} post={p} type={type} locale={locale} />
          ))}
        </div>
      )}
    </>
  );
}
