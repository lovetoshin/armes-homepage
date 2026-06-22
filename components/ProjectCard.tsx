import { STATUS_META, type Project } from "@/lib/projects";

/**
 * 프로젝트 카드 — 이름 + 한 줄 소개 + 상태 뱃지 + (운영중이면) 바로가기.
 * 회사 허브 원칙: 여기까지만. 긴 소개/기능 설명은 각 프로젝트가 책임진다.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const status = STATUS_META[project.status];
  const isLive = project.status === "live" && project.href;

  const inner = (
    <>
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-2xl bg-[#F2F4F6] flex items-center justify-center text-2xl">
          {project.icon}
        </div>
        <span
          className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full ${status.chip}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </span>
      </div>

      <h3 className="text-[#191F28] font-extrabold text-lg mb-2">{project.name}</h3>
      <p className="text-[#4E5968] text-sm leading-relaxed mb-5 keep-all">
        {project.tagline}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-medium text-[#8B95A1] bg-[#F8FAFF] border border-[#E5E8EB] px-2 py-0.5 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>

      {isLive ? (
        <span className="inline-flex items-center gap-1.5 text-[#3182F6] font-bold text-sm">
          바로가기
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      ) : (
        <span className="inline-flex items-center text-[#B0B8C1] font-semibold text-sm">
          {status.label}
        </span>
      )}
    </>
  );

  const cardClass =
    "block bg-white rounded-3xl border border-[#E5E8EB] p-6 h-full transition-shadow";

  // 운영중이면 외부 앱으로 바로가기, 그 외에는 클릭 없는 정적 카드
  if (isLive) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClass} hover:shadow-[0_4px_20px_rgba(49,130,246,0.12)] hover:border-[#C5D8FB]`}
      >
        {inner}
      </a>
    );
  }

  return <div className={cardClass}>{inner}</div>;
}
