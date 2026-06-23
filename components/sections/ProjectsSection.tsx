"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

/**
 * 홈의 Projects 섹션 — 대표 프로젝트를 카드로 미리 보여주고, 전체는 /projects로.
 */
export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // 정사각형 와꾸 배치 — 홈에 노출할 7개를 키로 직접 선택(후삼국지 제외, 전체는 /projects)
  const byKey = (k: string) => projects.find((p) => p.key === k)!;
  // 1행: 폰 3개 / 셀러AI는 2칸 폭으로 크게 / 3열엔 코코핑 아래로 작은 카드 3개
  const cells = [
    // 1행: 폰 3개 (아래 행과 간격을 주기 위해 lg:mb-2)
    { p: byKey("rewardtalk"), cls: "lg:col-start-1 lg:row-start-1 lg:mb-2" },
    { p: byKey("travelmoa"), cls: "lg:col-start-2 lg:row-start-1 lg:mb-2" },
    { p: byKey("cocoping"), cls: "lg:col-start-3 lg:row-start-1 lg:mb-2" },
    // 셀러AI 2칸(크기 유지) + 그 아래 후삼국지 2칸 → PhotoSort와 라인 맞춤
    { p: byKey("sellerai"), cls: "lg:col-start-1 lg:col-span-2 lg:row-start-2 lg:row-span-2" },
    { p: byKey("hoosamgukji"), cls: "lg:col-start-1 lg:col-span-2 lg:row-start-4" },
    // 3열(코코핑 아래): 세로로 나란히
    { p: byKey("tools"), cls: "lg:col-start-3 lg:row-start-2" },
    { p: byKey("rankingpangpang"), cls: "lg:col-start-3 lg:row-start-3" },
    { p: byKey("photosort"), cls: "lg:col-start-3 lg:row-start-4" },
  ];

  return (
    <section id="projects" ref={ref} className="bg-white py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 items-start lg:[grid-auto-rows:min-content]">
          {cells.map((c, i) => (
            <motion.div
              key={c.p.key}
              className={c.cls}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
            >
              <ProjectCard project={c.p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
