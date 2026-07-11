import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects, STATUS_META, type ProjectStatus } from "@/lib/projects";
import { PROJECTS_PAGE } from "@/lib/dict-pages";
import { statusLabel } from "@/lib/i18n-data";
import { type Locale } from "@/lib/i18n";

// 상태 표시 순서: 운영중 → 배포대기중 → 개발중 → 준비중 → 연구중
const groupOrder: ProjectStatus[] = ["live", "pending", "dev", "soon", "research"];

// 그룹마다 카드 개수·성격이 달라 열 수를 따로 준다
// (운영중=이미지 큰 카드 2열 / 개발중=한 줄 일렬 4열 / 그 외=3열)
const GRID_COLS: Record<ProjectStatus, string> = {
  live: "sm:grid-cols-2",
  pending: "sm:grid-cols-2 lg:grid-cols-3",
  dev: "sm:grid-cols-2 lg:grid-cols-4",
  soon: "sm:grid-cols-2 lg:grid-cols-3",
  research: "sm:grid-cols-2 lg:grid-cols-3",
};

// 프로젝트 목록 본문 — 한국어/영어/중국어 공유
export default function ProjectsContent({ locale = "ko" }: { locale?: Locale }) {
  const t = PROJECTS_PAGE[locale];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">
            Projects
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#191F28] tracking-tight leading-[1.15] mb-5 keep-all">
            {t.h1}
          </h1>
          <p className="text-[#4E5968] text-lg leading-relaxed max-w-2xl mx-auto keep-all">
            {t.heroDesc}
          </p>
        </div>
      </div>

      {/* 상태별 그룹 */}
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-20 space-y-16">
        {groupOrder.map((status) => {
          const list = projects.filter((p) => p.status === status);
          if (list.length === 0) return null;
          return (
            <section key={status}>
              <div className="flex items-center gap-2.5 mb-7">
                <span className={`w-2 h-2 rounded-full ${STATUS_META[status].dot}`} />
                <h2 className="text-lg font-extrabold text-[#191F28]">
                  {statusLabel(status, locale)}
                </h2>
                <span className="text-sm text-[#B0B8C1] font-semibold">{list.length}</span>
              </div>
              {status === "dev" ? (
                /* 개발중: 1열=월드링고(세로 폰스샷) · 2열=나머지 3개 세로 일렬 · 3·4열 비움 */
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
                  <ProjectCard project={list[0]} locale={locale} />
                  <div className="flex flex-col gap-5">
                    {list.slice(1).map((p) => (
                      <ProjectCard key={p.key} project={p} locale={locale} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className={`grid ${GRID_COLS[status]} gap-5 items-start`}>
                  {list.map((p) => (
                    <ProjectCard key={p.key} project={p} locale={locale} />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>

      <Footer locale={locale} />
    </div>
  );
}
