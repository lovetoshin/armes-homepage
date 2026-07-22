"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { type Locale } from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";

// 데스크탑 그리드 콘텐츠 폭(px) — 모바일은 이 폭으로 그린 뒤 화면에 맞춰 통째로 축소
const DESIGN_W = 1088;

/**
 * 홈의 Projects 섹션 — 대표 프로젝트를 카드로 미리 보여주고, 전체는 /projects로.
 */
export default function ProjectsSection({ locale = "ko" }: { locale?: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const t = getUI(locale).home.projects;

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

  // 홈 프로젝트 배치 — 2블록. 대표 웹서비스(셀러AI·아르메스툴)는 위 Showcase로 분리됐으므로,
  // 여기서는 앱/개발중 프로젝트만 보여준다(중복 제거).
  // 핵심: 한 줄(row) 안에서는 카드 높이를 서로 맞춘다(stretch) — 글 줄수 차이로 카드가 튀어나오지 않게.
  // 모바일은 이 배치를 비율 그대로 통째 축소(아래 scale 트릭).
  const byKey = (k: string) => projects.find((p) => p.key === k)!;
  const rowsGroup = ["rewardtalk", "travelmoa", "cocoping", "worldlingo"]; // 세로 화면 서비스 4개
  const devGroup = ["hoosamgukji", "photosort", "rankingpangpang"]; // 아이콘(개발중) 3개
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
            {/* 2블록 — 한 줄 안에서는 카드 높이를 서로 맞춘다(stretch: 짧은 카드도 같은 줄 최대 높이로) */}
            <div className="flex flex-col gap-5">
              {/* ① 세로 화면 서비스 4개 나란히 */}
              <div className="grid grid-cols-4 gap-5 items-stretch">
                {rowsGroup.map((k) => Card(k))}
              </div>
              {/* ② 개발중(아이콘) 3개 나란히 */}
              <div className="grid grid-cols-3 gap-5 items-stretch">
                {devGroup.map((k) => Card(k))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
