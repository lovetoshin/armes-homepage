"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects, STATUS_META } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

/**
 * 홈의 Projects 섹션 — 대표 프로젝트를 카드로 미리 보여주고, 전체는 /projects로.
 */
export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // 홈에서는 대표 6개까지만 (운영중 우선 정렬)
  const order = { live: 0, soon: 1, research: 2 } as const;
  const preview = [...projects].sort((a, b) => order[a.status] - order[b.status]).slice(0, 6);

  // 실제 통계(허위 수치 없음 — 프로젝트 데이터에서 직접 계산)
  const stats = [
    { n: projects.length, label: "전체 프로젝트", dot: "bg-[#191F28]" },
    { n: projects.filter((p) => p.status === "live").length, label: "운영중", dot: STATUS_META.live.dot },
    { n: projects.filter((p) => p.status === "soon").length, label: "준비중", dot: STATUS_META.soon.dot },
    { n: projects.filter((p) => p.status === "research").length, label: "연구중", dot: STATUS_META.research.dot },
  ];

  return (
    <section id="projects" ref={ref} className="bg-white py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">
              Projects
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#191F28] tracking-tight keep-all">
              아르메스가 만든 프로젝트
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-[#3182F6] font-bold text-sm whitespace-nowrap"
          >
            전체 보기
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* 실제 통계 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB] px-5 py-4">
              <p className="text-3xl font-extrabold text-[#191F28]">{s.n}</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                <p className="text-xs text-[#8B95A1] font-semibold">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {preview.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.07 * i }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
