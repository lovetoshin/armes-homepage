import { STATUS_META, type Project } from "@/lib/projects";

/**
 * 프로젝트 카드 — 이름 + 설명 + 상태 + 바로가기. 4개+개발중 3개 모두 동일 양식(제품군 통일).
 * 회사 허브 원칙: 여기까지만. 실제 화면 캡쳐는 Hero에서만 사용한다.
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
      <p className="text-[#4E5968] text-sm leading-relaxed mb-4 keep-all">
        {project.tagline}
      </p>

      <div className="flex items-center gap-1.5 text-[13px] text-[#4E5968] mb-4">
        <svg className="w-4 h-4 text-[#B0B8C1] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
        <span className="keep-all">{project.audience}</span>
      </div>

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

      {isLive ? (
        <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-[#3182F6] font-bold text-sm">
          바로가기
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      ) : (
        <span className="mt-auto pt-5 inline-flex items-center text-[#B0B8C1] font-semibold text-sm">
          {status.label}
        </span>
      )}
    </>
  );

  const cardClass =
    "flex flex-col bg-white rounded-3xl border border-[#E5E8EB] p-6 h-full transition-shadow";

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
