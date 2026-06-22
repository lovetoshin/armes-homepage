import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects, STATUS_META, type ProjectStatus } from "@/lib/projects";

export const metadata: Metadata = {
  title: "프로젝트 | ARMES",
  description:
    "아르메스가 만든 AI 프로젝트 — SellerAI, RewardTalk, TravelMoa 등. 운영중·준비중·연구중 프로젝트를 한눈에 살펴보세요.",
  alternates: { canonical: "/projects" },
};

// 상태 표시 순서: 운영중 → 준비중 → 연구중
const groupOrder: ProjectStatus[] = ["live", "soon", "research"];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">
            Projects
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#191F28] tracking-tight leading-[1.15] mb-5 keep-all">
            아르메스가 만드는 AI 프로젝트
          </h1>
          <p className="text-[#4E5968] text-lg leading-relaxed max-w-2xl mx-auto keep-all">
            이미지·언어·비전·위치 기술로 일상의 여러 영역에
            실제 서비스를 만들어 갑니다. 각 프로젝트의 자세한 내용은
            해당 서비스에서 확인하세요.
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
                  {STATUS_META[status].label}
                </h2>
                <span className="text-sm text-[#B0B8C1] font-semibold">{list.length}</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {list.map((p) => (
                  <ProjectCard key={p.key} project={p} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
