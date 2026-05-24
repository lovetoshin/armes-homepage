"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useContact } from "../ContactProvider";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { open: openContact } = useContact();

  return (
    <section id="cta" ref={ref} className="relative py-28 lg:py-36 bg-[#09090B]">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.07] text-xs text-zinc-400 font-medium mb-5">
            지금 시작하기
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            ARMES 생태계에
            <br />
            <span className="gradient-text-brand">합류하세요</span>
          </h2>
        </motion.div>

        {/* ── Main two CTA cards ── */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">

          {/* Card 1 — App Download */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden p-9 rounded-3xl group"
            style={{
              background: "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(251,146,60,0.04) 100%)",
              border: "1px solid rgba(249,115,22,0.16)",
            }}
          >
            {/* Hover glow */}
            <div className="absolute -right-12 -top-12 w-52 h-52 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-700" />

            <div className="relative z-10">
              <div className="text-4xl mb-6">📱</div>
              <h3 className="text-2xl font-bold text-white mb-2.5">RewardTalk 앱</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                지금 주변 매장의 혜택을 탐색하고 매일 적립을 시작하세요.
                첫 방문 보너스 포인트가 기다립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-3 rounded-full font-semibold text-sm hover:bg-zinc-100 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.41c1.27.07 2.16.67 2.87.67.94 0 2.71-.83 4.56-.71 1.55.1 2.95.76 3.79 1.96-3.43 2.06-2.87 6.6.72 7.97-.44 1.17-.97 2.31-1.94 2.98M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </button>
                <button className="inline-flex items-center justify-center gap-2 bg-white/[0.08] border border-white/[0.1] text-white px-5 py-3 rounded-full font-semibold text-sm hover:bg-white/[0.14] transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.18 23.76c.3.17.66.17.96 0l12-7.62L13.28 12l-10.1 11.76zm16.64-9.07L17.4 13.1 14.56 12l2.82-1.1 2.42-1.59c.6-.38.6-1.26 0-1.63L5.24.48C4.93.31 4.57.31 4.27.48L14.56 12l5.26-6.14C20.42 5.5 20.42 14.5 19.82 14.69z"/>
                  </svg>
                  Google Play
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Partner */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden p-9 rounded-3xl group"
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(99,102,241,0.04) 100%)",
              border: "1px solid rgba(139,92,246,0.16)",
            }}
          >
            <div className="absolute -right-12 -top-12 w-52 h-52 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-all duration-700" />

            <div className="relative z-10">
              <div className="text-4xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-white mb-2.5">파트너로 시작하기</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                매장을 ARMES 생태계에 연결하세요. 새로운 고객 유입,
                리워드 운영, 데이터 기반 성장을 경험합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={openContact}
                  className="inline-flex items-center gap-2 justify-center bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-violet-500/20"
                >
                  파트너 신청하기
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  onClick={openContact}
                  className="inline-flex items-center gap-2 justify-center text-zinc-400 hover:text-white bg-white/[0.05] border border-white/[0.09] px-6 py-3 rounded-full font-semibold text-sm transition-all hover:bg-white/[0.09]"
                >
                  제휴 문의
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Seller AI banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden p-7 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 group"
          style={{
            background: "linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(99,102,241,0.08) 50%, rgba(139,92,246,0.06) 100%)",
            border: "1px solid rgba(139,92,246,0.14)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="text-violet-400 font-bold text-sm">✦ Seller AI</span>
              <span className="px-2 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/25 text-violet-400 text-[11px] font-semibold">베타</span>
            </div>
            <h3 className="text-xl font-bold text-white">AI로 상세페이지를 자동 생성하세요</h3>
            <p className="text-zinc-400 text-sm mt-1">지금 무료로 시작하고, 첫 5개 페이지를 무료로 만들어보세요.</p>
          </div>
          <button className="relative z-10 flex-shrink-0 inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-zinc-100 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shadow-lg">
            ✦ 무료로 시작하기
          </button>
        </motion.div>

        {/* ── Trust badges ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          {[
            "🔒 개인정보 보호",
            "✅ 사업자 등록 법인",
            "📱 iOS · Android 지원",
            "🏢 경복대학교 창업보육",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-xs text-zinc-600 font-medium">
              <span>{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
