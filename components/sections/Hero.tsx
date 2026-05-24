"use client";

import { motion } from "framer-motion";
import PhoneMockup from "../PhoneMockup";
import { useContact } from "../ContactProvider";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

// 실제 앱의 핵심 기능 — 수치 대신 기능으로
const features = [
  { icon: "🎯", label: "드로우 시스템",   desc: "매일 참여" },
  { icon: "📱", label: "QR 멤버십 카드",  desc: "간편 적립" },
  { icon: "👥", label: "지역 공동구매",   desc: "함께 절약" },
];

export default function Hero() {
  const { open: openContact } = useContact();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#09090B]">
      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-violet-700/15 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 -left-32 w-[480px] h-[480px] bg-indigo-700/12 rounded-full blur-[110px]" />
        <div className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] bg-orange-600/8 rounded-full blur-[90px]" />
        <div className="absolute inset-0 dot-grid" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center pt-28 pb-20 lg:pt-32 lg:pb-24">

          {/* ── Left ── */}
          <div className="flex flex-col gap-7">

            {/* 출시 예정 badge */}
            <motion.div {...fade(0)}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs text-zinc-400 font-medium">출시 준비 중</span>
                <span className="w-px h-3.5 bg-white/10" />
                <span className="text-xs text-zinc-500">런칭이 다가옵니다</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div {...fade(0.08)}>
              <h1 className="text-[46px] sm:text-5xl lg:text-[56px] xl:text-[64px] font-bold text-white leading-[1.08] tracking-[-0.02em]">
                일상의 소비와
                <br />
                <span className="gradient-text-brand">지역을 연결하는</span>
                <br />
                로컬 플랫폼
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p {...fade(0.16)} className="text-[17px] text-zinc-400 leading-relaxed max-w-[480px]">
              ARMES는 사용자와 지역 매장을 하나의 멤버십으로 연결합니다.
              RewardTalk·Seller AI·공동구매까지 — 곧 모두가 경험하게 될 로컬 생태계.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(0.22)} className="flex flex-col sm:flex-row gap-3">
              <button className="group inline-flex items-center justify-center gap-2.5 bg-white text-black px-7 py-4 rounded-full font-semibold text-[15px] hover:bg-zinc-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_24px_rgba(255,255,255,0.12)]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.41c1.27.07 2.16.67 2.87.67.94 0 2.71-.83 4.56-.71 1.55.1 2.95.76 3.79 1.96-3.43 2.06-2.87 6.6.72 7.97-.44 1.17-.97 2.31-1.94 2.98M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                출시 알림 받기
              </button>
              <button
                onClick={openContact}
                className="inline-flex items-center justify-center gap-2 bg-white/[0.06] border border-white/[0.1] text-white px-7 py-4 rounded-full font-semibold text-[15px] hover:bg-white/[0.1] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                파트너 문의하기
                <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            {/* Feature tags (수치 대신 기능) */}
            <motion.div
              {...fade(0.3)}
              className="flex items-center gap-3 pt-2 border-t border-white/[0.06] flex-wrap"
            >
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07]"
                >
                  <span className="text-sm">{f.icon}</span>
                  <span className="text-xs font-semibold text-zinc-300">{f.label}</span>
                  <span className="text-xs text-zinc-600">{f.desc}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Phone + Floating cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 48, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* 드로우 당첨 카드 */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="absolute -left-6 top-16 z-20"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#18181B]/90 backdrop-blur-xl border border-white/[0.1] shadow-xl"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-sm">
                  🎯
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-none mb-0.5">드로우 당첨!</p>
                  <p className="text-zinc-500 text-[11px]">아메리카노 1잔</p>
                </div>
              </motion.div>
            </motion.div>

            {/* 멤버십 카드 미리보기 */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="absolute -right-4 bottom-24 z-20"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="px-4 py-3 rounded-2xl bg-[#18181B]/90 backdrop-blur-xl border border-white/[0.1] shadow-xl min-w-[148px]"
              >
                <p className="text-zinc-500 text-[11px] font-medium mb-1.5">내 멤버십 카드</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">QR</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">125 P</p>
                    <p className="text-zinc-600 text-[10px]">가맹점 적립 가능</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Phone */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#09090B] to-transparent pointer-events-none" />
    </section>
  );
}
