import Link from "next/link";
import { projects } from "@/lib/projects";
import { localize, type Locale } from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";
import { projectName, projectTagline } from "@/lib/i18n-data";

/**
 * 글 하단 "관련 서비스" 카드 — frontmatter relatedServices에 명시한 글에만 노출(강제 홍보 금지).
 * 본문과 관련 있는 자사 서비스만 자연스럽게 연결한다.
 * - 운영중 + 외부주소 있으면 앱으로, 그 외에는 프로젝트 상세 페이지로 연결.
 */
export default function RelatedServices({
  keys,
  locale = "ko",
}: {
  keys: string[];
  locale?: Locale;
}) {
  const items = keys
    .map((k) => projects.find((p) => p.key === k))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (items.length === 0) return null;

  return (
    <section className="mt-14 p-6 lg:p-8 rounded-3xl bg-[#F8FAFF] border border-[#EAF0FB]">
      <p className="text-xs text-[#3182F6] font-bold uppercase tracking-widest mb-1.5">
        Related Service
      </p>
      <h2 className="text-lg font-extrabold text-[#191F28] mb-5 keep-all">
        {getUI(locale).common.relatedServiceTitle}
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((p) => {
          const isLive = p.status === "live" && p.href;
          const inner = (
            <>
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#E5E8EB] flex items-center justify-center text-xl flex-shrink-0">
                {p.icon}
              </div>
              <div className="min-w-0">
                <h3 className="text-[#191F28] font-bold text-[15px] mb-0.5">{projectName(p.key, locale, p.name)}</h3>
                <p className="text-[#6B7684] text-[13px] leading-relaxed keep-all line-clamp-2">
                  {projectTagline(p.key, locale, p.tagline)}
                </p>
              </div>
            </>
          );
          const cls =
            "flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#E5E8EB] hover:border-[#C5D8FB] hover:shadow-[0_4px_16px_rgba(49,130,246,0.10)] transition-all";
          return isLive ? (
            <a key={p.key} href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>
              {inner}
            </a>
          ) : (
            <Link key={p.key} href={localize(`/projects/${p.key}`, locale)} className={cls}>
              {inner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
