"use client";

import { useState } from "react";
import PostCard from "@/components/PostCard";
import { BLOG_CATEGORIES, type PostMeta } from "@/lib/posts-meta";

/**
 * 블로그 목록 + 카테고리 칩 필터(클라이언트).
 */
export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState<string>("전체");

  const filtered = active === "전체" ? posts : posts.filter((p) => p.category === active);
  const chips = ["전체", ...BLOG_CATEGORIES];

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
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-[#8B95A1] py-10">해당 카테고리의 글이 아직 없습니다.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <PostCard key={p.slug} post={p} type="blog" />
          ))}
        </div>
      )}
    </>
  );
}
