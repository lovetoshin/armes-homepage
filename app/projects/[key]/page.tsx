import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { projects, STATUS_META } from "@/lib/projects";
import { projectDetails } from "@/lib/project-details";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://armes.co.kr";

// 홈 프로젝트 섹션의 배치 순서 — 이전/다음 이동에 사용
const ORDER = [
  "rewardtalk",
  "travelmoa",
  "cocoping",
  "sellerai",
  "hoosamgukji",
  "tools",
  "rankingpangpang",
  "photosort",
];

const orderedKeys = ORDER.filter((k) => projects.some((p) => p.key === k));

export function generateStaticParams() {
  return projects.map((p) => ({ key: p.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}): Promise<Metadata> {
  const { key } = await params;
  const project = projects.find((p) => p.key === key);
  if (!project) return { title: "프로젝트 | ARMES" };
  const detail = projectDetails[key];
  return {
    title: `${project.name} | ARMES 프로젝트`,
    description: detail?.intro ?? project.tagline,
    alternates: { canonical: `/projects/${key}` },
    openGraph: {
      type: "website",
      title: `${project.name} | ARMES`,
      description: detail?.intro ?? project.tagline,
      ...(project.thumbnail ? { images: [project.thumbnail] } : {}),
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const project = projects.find((p) => p.key === key);
  if (!project) notFound();

  const detail = projectDetails[key];
  const status = STATUS_META[project.status];
  const isLive = project.status === "live" && !!project.href;

  // 이전/다음 프로젝트(배치 순서 기준)
  const idx = orderedKeys.indexOf(key);
  const prevKey = idx > 0 ? orderedKeys[idx - 1] : null;
  const nextKey = idx >= 0 && idx < orderedKeys.length - 1 ? orderedKeys[idx + 1] : null;
  const prev = prevKey ? projects.find((p) => p.key === prevKey) : null;
  const next = nextKey ? projects.find((p) => p.key === nextKey) : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "프로젝트", item: `${SITE}/projects` },
      { "@type": "ListItem", position: 2, name: project.name, item: `${SITE}/projects/${key}` },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="pt-28 pb-14 lg:pt-32 lg:pb-16 bg-[#F8FAFF] border-b border-[#EAF0FB]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <nav className="text-sm text-[#8B95A1] mb-7">
            <Link href="/projects" className="hover:text-[#3182F6]">프로젝트</Link>
            <span className="mx-2">/</span>
            <span className="text-[#B0B8C1]">{project.name}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{project.icon}</span>
            <span className={`inline-flex items-center gap-1.5 text-[12px] font-bold px-2.5 py-1 rounded-full ${status.chip}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
              {status.label}
            </span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-extrabold text-[#191F28] tracking-tight leading-[1.15] mb-4 keep-all">
            {project.name}
          </h1>
          <p className="text-[#4E5968] text-lg leading-relaxed max-w-2xl keep-all">
            {detail?.intro ?? project.tagline}
          </p>

          {/* 사용 기술 */}
          <div className="flex flex-wrap gap-1.5 mt-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[12px] font-medium text-[#4E5968] bg-white border border-[#E5E8EB] px-2.5 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>

          {/* 운영중이면 앱 바로가기 버튼 */}
          {isLive && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-2xl bg-[#3182F6] text-white font-bold text-[15px] hover:bg-[#1d62f0] transition-colors"
            >
              {detail?.ctaLabel ?? "바로가기"}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* 본문 */}
      <div className="max-w-4xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        {/* 실제 화면 */}
        {project.thumbnail && (
          <div className="mb-16 rounded-3xl overflow-hidden border border-[#E5E8EB] bg-[#F2F4F6]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.thumbnail}
              alt={`${project.name} 실제 화면`}
              className="w-full h-auto block"
            />
          </div>
        )}

        {detail ? (
          <>
            {/* 어떤 불편을 푸나 */}
            <section className="mb-16">
              <h2 className="text-2xl font-extrabold text-[#191F28] mb-4 keep-all">
                어떤 불편을 풀어주나요?
              </h2>
              <p className="text-[#4E5968] text-[17px] leading-[1.85] keep-all">
                {detail.problem}
              </p>
            </section>

            {/* 핵심 기능 */}
            <section className="mb-16">
              <h2 className="text-2xl font-extrabold text-[#191F28] mb-7 keep-all">
                {isLive ? "주요 기능" : "이런 기능을 준비합니다"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {detail.features.map((f) => (
                  <div
                    key={f.title}
                    className="p-6 rounded-2xl border border-[#E5E8EB] bg-white"
                  >
                    <h3 className="text-[#191F28] font-bold text-[17px] mb-2 keep-all">
                      {f.title}
                    </h3>
                    <p className="text-[#6B7684] text-[15px] leading-relaxed keep-all">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 이런 분께 */}
            <section className="mb-16">
              <h2 className="text-2xl font-extrabold text-[#191F28] mb-6 keep-all">
                이런 분께 도움이 됩니다
              </h2>
              <ul className="space-y-3">
                {detail.forWhom.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3182F6] flex-shrink-0" />
                    <span className="text-[#4E5968] text-[17px] leading-relaxed keep-all">{w}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 상태 안내(준비중/연구중) */}
            {detail.statusNote && (
              <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-[#EAF0FB] mb-4">
                <p className="text-[#4E5968] text-[15px] leading-relaxed keep-all">
                  <span className="font-bold text-[#3182F6]">안내</span> · {detail.statusNote}
                </p>
              </div>
            )}
          </>
        ) : (
          <p className="text-[#4E5968] text-[17px] leading-relaxed keep-all">
            {project.tagline}
          </p>
        )}

        {/* 이전/다음 프로젝트 */}
        <div className="mt-16 pt-10 border-t border-[#E5E8EB] grid grid-cols-2 gap-4">
          <div>
            {prev && (
              <Link href={`/projects/${prev.key}`} className="group block">
                <p className="text-xs text-[#B0B8C1] font-semibold mb-1.5">이전 프로젝트</p>
                <p className="text-[#191F28] font-bold group-hover:text-[#3182F6] transition-colors keep-all">
                  {prev.icon} {prev.name}
                </p>
              </Link>
            )}
          </div>
          <div className="text-right">
            {next && (
              <Link href={`/projects/${next.key}`} className="group block">
                <p className="text-xs text-[#B0B8C1] font-semibold mb-1.5">다음 프로젝트</p>
                <p className="text-[#191F28] font-bold group-hover:text-[#3182F6] transition-colors keep-all">
                  {next.name} {next.icon}
                </p>
              </Link>
            )}
          </div>
        </div>

        {/* 전체 목록 */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-[#3182F6] font-bold text-sm"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            전체 프로젝트 보기
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
