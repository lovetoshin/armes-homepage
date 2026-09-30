"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { type Locale } from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";

/**
 * 홈의 Projects 섹션 — 대표 프로젝트를 카드로 미리 보여주고, 전체는 /projects로.
 */
export default function ProjectsSection({ locale = "ko" }: { locale?: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const t = getUI(locale).home.projects;

  // 홈 프로젝트 배치 — 2블록. 대표 웹서비스(셀러AI·아르메스툴)는 위 Showcase로 분리됐으므로,
  // 여기서는 앱/개발중 프로젝트만 보여준다(중복 제거).
  // 핵심: 한 줄(row) 안에서는 카드 높이를 서로 맞춘다(stretch) — 글 줄수 차이로 카드가 튀어나오지 않게.
  // 모바일은 한 줄 2개(형님 확정 2026-07-22) — 통째 축소(scale) 방식은 글씨가 너무 작아져 폐기.
  const byKey = (k: string) => projects.find((p) => p.key === k)!;
  // ★한 줄에 카드 2개 × 3줄 (형님 확정 2026-09-30) — 휴대폰 폭에서는 한 줄에 1개.
  //   1줄 리워드톡|컷잇 · 2줄 코코핑|여행모아 · 3줄 월드링고|후삼국지
  const order = ["rewardtalk", "cutit", "cocoping", "travelmoa", "worldlingo", "hoosamgukji"];
  let animIdx = 0;
  const Card = (k: string) => {
    const i = animIdx++;
    return (
      <motion.div
        key={k}
        className="h-full"
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.06 * i }}
      >
        <ProjectCard project={byKey(k)} locale={locale} />
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="bg-[#F8FAFF] py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="mb-12">
          <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">
            Projects
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#191F28] tracking-tight keep-all text-balance">
            {t.h2}
          </h2>
        </div>

        {/* 한 줄 안에서는 카드 높이를 서로 맞춘다(stretch: 짧은 카드도 같은 줄 최대 높이로) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-stretch">
          {order.map((k) => Card(k))}
        </div>
      </div>
    </section>
  );
}
