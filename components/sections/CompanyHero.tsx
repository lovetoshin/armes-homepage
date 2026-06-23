"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useContact } from "@/components/ContactProvider";
import { projects, STATUS_META, type Project } from "@/lib/projects";

/**
 * 회사 Hero — "여러 AI 서비스를 운영하는 기술 회사" 인상.
 * 좌(60%) 회사 메시지 / 우(40%) 서비스 타일 4개(살짝 엇갈린 레이어).
 * 타일은 서비스 설명이 주인공, 캡쳐는 '존재 증명'용으로 작게, 상태는 작은 보조 점.
 */

// Hero 타일용 짧은 한 줄(카드 tagline보다 짧게 — 한 회사 제품군처럼)
const SHORT: Record<string, string> = {
  sellerai: "AI 상품 이미지 자동화",
  rewardtalk: "생활 혜택 플랫폼",
  travelmoa: "여행 특가 플랫폼",
  cocoping: "코스트코 할인 플랫폼",
};
const HERO_KEYS = ["sellerai", "rewardtalk", "travelmoa", "cocoping"];
const tiles = HERO_KEYS
  .map((k) => projects.find((p) => p.key === k))
  .filter((p): p is Project => !!p);

function Tile({ project }: { project: Project }) {
  const status = STATUS_META[project.status];
  const isLive = project.status === "live" && project.href;

  const body = (
    <>
      <div className="rounded-xl overflow-hidden bg-[#F2F4F6] border border-[#EBEEF1]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.thumbnail}
          alt={`${project.name} 화면`}
          className="w-full aspect-[16/10] object-cover object-top"
        />
      </div>
      <div className="px-1 pt-2.5">
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
          <span className="text-[#191F28] font-extrabold text-[13px]">{project.name}</span>
        </div>
        <p className="text-[#8B95A1] text-[11px] mt-0.5 leading-snug">{SHORT[project.key]}</p>
        {isLive ? (
          <span className="inline-flex items-center gap-0.5 text-[#3182F6] font-bold text-[11px] mt-1">
            바로가기
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        ) : (
          <span className="inline-block text-[#B0B8C1] text-[11px] mt-1">{status.label}</span>
        )}
      </div>
    </>
  );

  const wrap =
    "block bg-white rounded-2xl border border-[#E5E8EB] p-2.5 shadow-[0_6px_20px_rgba(0,0,0,0.06)]";

  if (isLive) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${wrap} transition-shadow hover:shadow-[0_10px_28px_rgba(49,130,246,0.16)]`}
      >
        {body}
      </a>
    );
  }
  return <div className={`${wrap} cursor-default`}>{body}</div>;
}

export default function CompanyHero() {
  const { open: openContact } = useContact();

  return (
    <section className="bg-white pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-10 items-center">

          {/* ── 좌측 60% — 회사 메시지 ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="inline-flex items-center gap-2 bg-[#EBF3FF] text-[#3182F6] text-xs font-bold px-4 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3182F6]" />
              AI Technology Company
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-[#191F28] leading-[1.12] tracking-tight mb-6 keep-all">
              AI 기술로
              <br />
              <span className="text-[#3182F6]">일상을 자동화</span>하는 회사
            </h1>

            <p className="text-[#4E5968] text-lg lg:text-xl leading-relaxed max-w-xl mb-10 keep-all">
              아르메스는 이미지·언어·비전·위치 기술을 바탕으로
              쇼핑몰, 지역 생활, 여행 등 일상의 여러 영역에
              실제로 쓰이는 AI 서비스를 만듭니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 bg-[#3182F6] hover:bg-[#1B64DA] text-white px-8 py-4 rounded-2xl font-bold text-[15px] transition-colors shadow-[0_4px_16px_rgba(49,130,246,0.3)]"
              >
                프로젝트 둘러보기
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                onClick={openContact}
                className="inline-flex items-center justify-center gap-2 bg-[#F2F4F6] text-[#191F28] px-8 py-4 rounded-2xl font-bold text-[15px] hover:bg-[#E5E8EB] transition-colors"
              >
                파트너·제휴 문의
              </button>
            </div>
          </motion.div>

          {/* ── 우측 40% — 서비스 타일 4개 (살짝 엇갈린 레이어) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 grid grid-cols-2 gap-3.5"
          >
            {/* 좌열: 0,2번 / 우열: 1,3번을 살짝 내려 엇갈림 */}
            <div className="space-y-3.5">
              {tiles[0] && <Tile project={tiles[0]} />}
              {tiles[2] && <Tile project={tiles[2]} />}
            </div>
            <div className="space-y-3.5 mt-7">
              {tiles[1] && <Tile project={tiles[1]} />}
              {tiles[3] && <Tile project={tiles[3]} />}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
