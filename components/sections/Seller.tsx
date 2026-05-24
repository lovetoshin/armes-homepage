"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "✦",
    title: "AI 상세페이지 자동 생성",
    desc: "상품 정보를 입력하면 AI가 판매에 최적화된 상세페이지를 즉시 작성합니다.",
  },
  {
    icon: "📈",
    title: "성장 데이터 분석",
    desc: "매출 패턴과 고객 행동을 분석해 판매 전략을 스마트하게 최적화합니다.",
  },
  {
    icon: "🎯",
    title: "로컬 타겟 마케팅",
    desc: "지역 기반 고객 타겟팅으로 광고 효율을 극대화하고 신규 고객을 유입합니다.",
  },
  {
    icon: "🔗",
    title: "RewardTalk 생태계 연동",
    desc: "RewardTalk 멤버십 사용자에게 직접 도달하는 강력한 로컬 마케팅 채널.",
  },
];

export default function Seller() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 lg:py-36 bg-[#09090B]">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/[0.05]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[500px] h-[400px] bg-violet-600/[0.06] rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Dashboard mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-violet-500/10 blur-[80px] rounded-full scale-75" />

            <div className="relative bg-[#111114] border border-white/[0.08] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-zinc-800/80 rounded-lg px-5 py-1.5 text-xs text-zinc-500 font-mono">
                    seller.armes.co.kr
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Top stats row */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs text-zinc-500 mb-1 font-medium">오늘 AI 생성</div>
                    <div className="text-3xl font-bold text-white">12개</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-green-400 text-sm font-semibold">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    +23%
                  </div>
                </div>

                {/* AI Generation card */}
                <div className="bg-violet-500/[0.07] border border-violet-500/[0.18] rounded-2xl p-5 mb-4">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                      <span className="text-white text-[11px] font-bold">AI</span>
                    </div>
                    <div>
                      <span className="text-sm text-violet-300 font-semibold">상세페이지 생성 중</span>
                      <span className="text-xs text-zinc-600 ml-2">여름 원피스 상품</span>
                    </div>
                  </div>

                  {/* Fake text lines */}
                  <div className="space-y-2 mb-4">
                    <div className="h-2 bg-violet-500/20 rounded-full w-full" />
                    <div className="h-2 bg-violet-500/15 rounded-full w-5/6" />
                    <div className="h-2 bg-violet-500/10 rounded-full w-4/6" />
                  </div>

                  {/* Progress bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: "75%" } : {}}
                        transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-xs text-zinc-400 font-semibold w-8">75%</span>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "이번 달 생성", value: "48개" },
                    { label: "평균 전환율", value: "4.2%" },
                    { label: "절약 시간", value: "36h" },
                    { label: "연동 매장", value: "12개" },
                  ].map((s) => (
                    <div key={s.label} className="bg-zinc-800/40 border border-white/[0.05] rounded-xl p-3">
                      <div className="text-white font-bold text-lg">{s.value}</div>
                      <div className="text-zinc-500 text-[11px] mt-0.5 font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Content ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/[0.08] border border-violet-500/[0.18] text-xs text-violet-400 font-semibold mb-6">
                ✦ Seller AI
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">
                셀러와 점주를 위한
                <br />
                <span className="gradient-text-brand">AI 성장 인프라</span>
              </h2>
              <p className="text-zinc-400 text-[17px] leading-relaxed mb-10">
                Seller AI는 단순한 도구가 아닙니다. AI가 상세페이지를 생성하고,
                데이터가 전략을 알려주며, RewardTalk 생태계가 고객을 연결합니다.
              </p>
            </motion.div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.05] transition-all duration-200 group"
                >
                  <div className="text-xl mb-2.5">{f.icon}</div>
                  <h4 className="text-white font-semibold text-sm mb-1.5 group-hover:text-white transition-colors">{f.title}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-3"
            >
              <button className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-violet-500/20">
                Seller AI 시작하기
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors px-4">
                데모 보기
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
