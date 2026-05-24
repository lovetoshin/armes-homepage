"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const features = [
  {
    icon: "📸",
    title: "모델컷 / 제품컷 생성",
    desc: "상품 사진 한 장으로 정면·측면·앉은 포즈·자유 포즈 4컷을 자동 생성합니다.",
  },
  {
    icon: "✂️",
    title: "모델컷 → 누끼컷",
    desc: "모델 착용 사진에서 제품만 투명 PNG로 추출. 최대 8장 동시 처리.",
  },
  {
    icon: "🔄",
    title: "제품 교체",
    desc: "모델 사진 + 제품 사진을 AI가 자연스럽게 합성. 최대 4쌍 동시 처리.",
  },
  {
    icon: "📄",
    title: "상세페이지 자동 생성",
    desc: "상품 정보 입력으로 쿠팡·스마트스토어용 HTML 상세페이지를 즉시 생성.",
  },
];

const tools = [
  { icon: "📸", name: "모델컷 생성", badge: "AI", color: "bg-blue-500" },
  { icon: "✂️", name: "누끼컷 추출", badge: "AI", color: "bg-green-500" },
  { icon: "👤", name: "누끼→모델컷", badge: "AI", color: "bg-purple-500" },
  { icon: "🔄", name: "제품 교체", badge: "AI", color: "bg-orange-500" },
  { icon: "📄", name: "상세페이지", badge: "자동화", color: "bg-pink-500" },
  { icon: "🗂️", name: "생성 보관함", badge: "보관함", color: "bg-zinc-500" },
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
                    armes.co.kr/sellerai
                  </div>
                </div>
              </div>

              <div className="p-5">
                {/* Header */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-semibold text-violet-400 uppercase tracking-widest">AI TOOLS</span>
                  </div>
                  <h3 className="text-white font-bold text-base">이미지 자동화 도구</h3>
                  <p className="text-zinc-500 text-xs mt-0.5">쿠팡·스마트스토어 셀러를 위한 AI 기반 도구</p>
                </div>

                {/* Tool grid */}
                <div className="grid grid-cols-3 gap-2.5 mb-4">
                  {tools.map((tool, i) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                      className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-3 hover:border-white/[0.14] transition-colors cursor-pointer group"
                    >
                      <div className={`w-8 h-8 ${tool.color}/20 rounded-xl flex items-center justify-center mb-2`}>
                        <span className="text-base">{tool.icon}</span>
                      </div>
                      <p className="text-white text-[11px] font-semibold leading-tight">{tool.name}</p>
                      <span className={`inline-block mt-1 text-[9px] px-1.5 py-0.5 rounded-full ${
                        tool.badge === "AI" ? "bg-violet-500/15 text-violet-400" :
                        tool.badge === "자동화" ? "bg-pink-500/15 text-pink-400" :
                        "bg-zinc-700/50 text-zinc-500"
                      }`}>{tool.badge}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Token info */}
                <div className="flex items-center justify-between bg-amber-500/[0.08] border border-amber-500/[0.18] rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 text-sm">🪙</span>
                    <span className="text-xs text-zinc-400">보유 토큰</span>
                    <span className="text-sm font-bold text-white">20,950 T</span>
                  </div>
                  <div className="text-[10px] text-zinc-600">사진 50T · 상세페이지 250T</div>
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
                셀러를 위한
                <br />
                <span className="gradient-text-brand">AI 이미지 자동화</span>
              </h2>
              <p className="text-zinc-400 text-[17px] leading-relaxed mb-10">
                상품 사진 한 장으로 모델 착용컷을 만들고, 누끼를 따고, 쿠팡·스마트스토어
                상세페이지까지 — 반복 작업을 AI가 대신합니다.
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
              <Link
                href="/sellerai"
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-violet-500/20"
              >
                Seller AI 자세히 보기
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
