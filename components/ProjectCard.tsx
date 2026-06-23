import Link from "next/link";
import { STATUS_META, type Project } from "@/lib/projects";

/**
 * 프로젝트 카드 — (썸네일 있으면 실제 화면) + 이름 + 한 줄 소개 + 상태 뱃지.
 * 카드 전체를 누르면 해당 프로젝트의 상세 설명 페이지(/projects/[key])로 이동한다.
 * (운영중 앱으로의 바로가기는 상세 페이지 안의 버튼에서 연결)
 */
export default function ProjectCard({ project }: { project: Project }) {
  const status = STATUS_META[project.status];
  const hasThumb = !!project.thumbnail;

  const statusBadge = (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full ${status.chip}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
      {status.label}
    </span>
  );

  const inner = (
    <>
      {hasThumb ? (
        <div className="relative bg-[#F2F4F6]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.thumbnail}
            alt={`${project.name} 실제 화면`}
            className="w-full h-auto block"
          />
          <span className="absolute top-3 right-3 shadow-[0_1px_6px_rgba(0,0,0,0.12)] rounded-full">
            {statusBadge}
          </span>
        </div>
      ) : (
        <div className="flex items-start justify-between px-6 pt-6">
          <div className="w-12 h-12 rounded-2xl bg-[#F2F4F6] flex items-center justify-center text-2xl">
            {project.icon}
          </div>
          {statusBadge}
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-[#191F28] font-extrabold text-lg mb-2">{project.name}</h3>
        <p className="text-[#4E5968] text-sm leading-relaxed mb-5 keep-all">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium text-[#8B95A1] bg-[#F8FAFF] border border-[#E5E8EB] px-2 py-0.5 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-[#3182F6] font-bold text-sm">
          자세히 보기
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </>
  );

  const cardClass =
    "flex flex-col h-full bg-white rounded-3xl border border-[#E5E8EB] overflow-hidden transition-shadow";

  // 모든 프로젝트 카드는 상세 설명 페이지로 이동 (운영중 앱 바로가기는 상세 페이지 버튼에서 연결)
  return (
    <Link
      href={`/projects/${project.key}`}
      className={`${cardClass} hover:shadow-[0_4px_20px_rgba(49,130,246,0.12)] hover:border-[#C5D8FB]`}
    >
      {inner}
    </Link>
  );
}
