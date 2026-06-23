"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

// 데스크탑 그리드 콘텐츠 폭(px) — 모바일은 이 폭으로 그린 뒤 화면에 맞춰 통째로 축소
const DESIGN_W = 1088;

/**
 * 홈의 Projects 섹션 — 대표 프로젝트를 카드로 미리 보여주고, 전체는 /projects로.
 */
export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // 모바일에서는 데스크탑 쇼케이스를 비율 그대로 통째로 축소(글자·사진·간격 비율 100% 동일, 크기만 작아짐)
  const clipRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [stageH, setStageH] = useState<number | undefined>(undefined);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const clip = clipRef.current;
    const stage = stageRef.current;
    if (!clip || !stage) return;
    const update = () => {
      const avail = clip.clientWidth; // 화면(폰)에서 쓸 수 있는 가로폭
      const s = Math.min(1, avail / DESIGN_W); // 데스크탑이면 1(축소 안 함), 좁으면 비율만큼 축소
      setScale(s);
      // 축소하면 원래 높이도 같이 줄여서 아래 빈 공간을 없앤다(offsetHeight는 transform 영향 안 받음)
      setStageH(s < 1 ? stage.offsetHeight * s : undefined);
      setReady(true);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(clip);
    ro.observe(stage); // 이미지 로딩으로 높이 바뀌면 다시 계산
    return () => ro.disconnect();
  }, []);

  // 정사각형 와꾸 배치 — 홈에 노출할 7개를 키로 직접 선택(후삼국지 제외, 전체는 /projects)
  const byKey = (k: string) => projects.find((p) => p.key === k)!;
  // 1행: 폰 3개 / 셀러AI는 2칸 폭으로 크게 / 3열엔 코코핑 아래로 작은 카드 3개
  // 모든 화면에서 데스크탑과 토시 하나 안 틀리게 동일 배치(lg: 분기 제거) — 모바일은 작게·깨알 글씨여도 동일 와꾸
  const cells = [
    // 1행: 폰 3개 (아래 행과 간격)
    { p: byKey("rewardtalk"), cls: "col-start-1 row-start-1 mb-2" },
    { p: byKey("travelmoa"), cls: "col-start-2 row-start-1 mb-2" },
    { p: byKey("cocoping"), cls: "col-start-3 row-start-1 mb-2" },
    // 셀러AI 2칸(크기 유지) + 그 아래 후삼국지 2칸 → PhotoSort와 라인 맞춤
    { p: byKey("sellerai"), cls: "col-start-1 col-span-2 row-start-2 row-span-2" },
    { p: byKey("hoosamgukji"), cls: "col-start-1 col-span-2 row-start-4" },
    // 3열(코코핑 아래): 세로로 나란히
    { p: byKey("tools"), cls: "col-start-3 row-start-2" },
    { p: byKey("rankingpangpang"), cls: "col-start-3 row-start-3" },
    { p: byKey("photosort"), cls: "col-start-3 row-start-4" },
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

        {/* 데스크탑은 그대로(scale=1), 모바일은 이 쇼케이스를 비율 그대로 통째로 축소 */}
        <div
          ref={clipRef}
          className="overflow-hidden"
          style={stageH !== undefined ? { height: stageH } : undefined}
        >
          <div
            ref={stageRef}
            style={{
              width: DESIGN_W,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              opacity: ready ? 1 : 0,
              transition: "opacity 0.2s ease",
            }}
          >
            {/* 1행(폰)=auto, 2~4행=1fr 균등 → 오른쪽 세로줄 3개 카드 높이 동일 */}
            <div className="grid grid-cols-3 gap-5 [grid-template-rows:auto_1fr_1fr_1fr]">
              {cells.map((c, i) => (
                <motion.div
                  key={c.p.key}
                  className={`${c.cls} h-full`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 * i }}
                >
                  <ProjectCard project={c.p} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
