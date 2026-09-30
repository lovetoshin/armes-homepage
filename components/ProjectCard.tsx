import Link from "next/link";
import { STATUS_META, type Project } from "@/lib/projects";
import { localize, type Locale } from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";
import { statusLabel, projectTagline, projectName } from "@/lib/i18n-data";

/**
 * 프로젝트 카드 — (썸네일 있으면 실제 화면) + 이름 + 한 줄 소개 + 상태 뱃지.
 * 카드 전체를 누르면 해당 프로젝트의 상세 설명 페이지(/projects/[key])로 이동한다.
 * (운영중 앱으로의 바로가기는 상세 페이지 안의 버튼에서 연결)
 */
export default function ProjectCard({
  project,
  locale = "ko",
}: {
  project: Project;
  locale?: Locale;
}) {
  const status = STATUS_META[project.status];
  const hasThumb = !!project.thumbnail;
  // 후삼국지는 게임 화면이 아직 없어 인물 초상화 3장으로 보여 준다(블로그 /blog/hoosamguk-characters 와 같은 구성)
  const portraits =
    project.key === "hoosamgukji"
      ? [
          { name: "왕건", src: "/projects/hoosamgukji-wanggeon.webp" },
          { name: "궁예", src: "/projects/hoosamgukji-gungye.webp" },
          { name: "견훤", src: "/projects/hoosamgukji-gyeonhwon.webp" },
        ]
      : null;
  const name = projectName(project.key, locale, project.name);
  const tagline = projectTagline(project.key, locale, project.tagline);

  const statusBadge = (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full ${status.chip}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
      {statusLabel(project.status, locale)}
    </span>
  );

  // 소개(이름·한 줄 소개·기술 태그·자세히 보기) — 모든 카드 공통
  const intro = (
    <div className={`flex flex-col min-w-0 p-5 sm:p-6 ${portraits ? "" : "basis-1/2 shrink-0 justify-center"}`}>
      <h3 className="text-[#191F28] font-extrabold text-lg mb-2 keep-all">{name}</h3>
      <p className="text-[#4E5968] text-sm leading-relaxed mb-5 keep-all text-balance">
        {tagline}
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

      {/* 오직 이 "자세히 보기"만 눌러야 상세 페이지로 이동(사진/카드 터치로는 이동 안 함) */}
      <Link
        href={localize(`/projects/${project.key}`, locale)}
        className="group/cta pt-5 inline-flex items-center gap-1.5 text-[#3182F6] font-bold text-sm w-fit"
      >
        {getUI(locale).common.readMore}
        <svg className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );

  const cardBase = "h-full bg-white rounded-3xl border border-[#E5E8EB] overflow-hidden";

  // ① 후삼국지 — 가로 2줄: 위 띠 = 인물 초상화 3장(왕건·궁예·견훤), 아래 띠 = 소개 (형님 확정 2026-09-30)
  if (portraits) {
    return (
      <div className={`${cardBase} flex flex-col`}>
        <div className="relative flex-1 bg-[#F2F4F6] flex items-center justify-center px-5 sm:px-6 pt-14 pb-6">
          <span className="absolute top-4 right-4 shadow-[0_1px_6px_rgba(0,0,0,0.12)] rounded-full">
            {statusBadge}
          </span>
          <div className="flex gap-2.5 sm:gap-3.5 w-full max-w-[480px]">
            {portraits.map((p) => (
              <figure key={p.name} className="flex-1 min-w-0 flex flex-col items-center gap-3 m-0">
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[#E5E8EB] shadow-[0_10px_28px_rgba(25,31,40,0.14)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={`${name} ${p.name}`} className="w-full h-full object-cover block" style={{ objectPosition: "center 30%" }} />
                </div>
                <figcaption className="text-[#191F28] font-bold text-[15px]">{p.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        {intro}
      </div>
    );
  }

  // ② 앱 카드 — 세로 2줄: 왼쪽 기둥 = 앱 화면, 오른쪽 기둥 = 소개 (비율 1:1, 형님 확정 2026-09-30)
  // 카드 자체는 클릭 영역이 아니다 — 사진/본문 터치로는 이동하지 않고, 안쪽 "자세히 보기"로만 이동
  return (
    <div className={`${cardBase} flex flex-row md:min-h-[460px]`}>
      <div className="relative basis-1/2 shrink-0 min-w-0 bg-[#F2F4F6] flex items-center justify-center px-3 sm:px-5 pt-12 pb-5 sm:pb-7">
        <span className="absolute top-4 left-4 shadow-[0_1px_6px_rgba(0,0,0,0.12)] rounded-full">
          {statusBadge}
        </span>
        {hasThumb ? (
          <div className="w-full max-w-[230px] aspect-[591/1200] rounded-[20px] overflow-hidden border border-[#E5E8EB] bg-white shadow-[0_10px_28px_rgba(25,31,40,0.12)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.thumbnail}
              alt={name}
              className="w-full h-full object-cover object-top block"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl">
            {project.icon}
          </div>
        )}
      </div>
      {intro}
    </div>
  );
}
