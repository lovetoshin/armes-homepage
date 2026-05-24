"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// 수치 대신 핵심 가치를 카드로 표현
const valueCards = [
  {
    icon: "🎁",
    title: "드로우 & 포인트",
    desc: "매일 드로우에 참여하고 포인트를 쌓으세요. 아이패드부터 아메리카노까지 — 일상의 소비가 즐거워집니다.",
    tag: "RewardTalk",
    tagColor: "text-amber-400 border-amber-400/25 bg-amber-400/8",
  },
  {
    icon: "📱",
    title: "QR 멤버십 카드",
    desc: "하나의 QR코드로 모든 파트너 가맹점에서 포인트를 적립합니다. 여러 앱이 필요 없습니다.",
    tag: "통합 인프라",
    tagColor: "text-violet-400 border-violet-400/25 bg-violet-400/8",
  },
  {
    icon: "🚌",
    title: "교통 & 주유 정보",
    desc: "주유소 실시간 유가, 전기차 충전소, 주차장, 공공자전거까지 — 이동하는 일상을 더 스마트하게.",
    tag: "교통 서비스",
    tagColor: "text-blue-400 border-blue-400/25 bg-blue-400/8",
  },
  {
    icon: "👥",
    title: "지역 공동구매",
    desc: "내 주변 공구방에 참여하세요. 지역 커뮤니티 기반으로 함께 더 저렴하게 구매합니다.",
    tag: "공동구매",
    tagColor: "text-green-400 border-green-400/25 bg-green-400/8",
  },
];

const visionCards = [
  {
    icon: "🔗",
    title: "사용자와 매장의 연결",
    desc: "통합 멤버십 하나로 모든 파트너 매장에서 혜택을 누리는 seamless한 경험.",
    gradFrom: "rgba(249,115,22,0.08)",
    gradTo: "rgba(251,191,36,0.04)",
    border: "rgba(249,115,22,0.14)",
  },
  {
    icon: "📊",
    title: "데이터 기반 로컬 커머스",
    desc: "소비 데이터가 쌓이고, 분석이 전략이 되며, 매장은 더 스마트하게 성장합니다.",
    gradFrom: "rgba(59,130,246,0.08)",
    gradTo: "rgba(99,102,241,0.04)",
    border: "rgba(59,130,246,0.14)",
  },
  {
    icon: "🌆",
    title: "도시 인프라로의 확장",
    desc: "지역에서 시작해 도시 전체로. ARMES는 일상 소비의 새로운 레이어가 됩니다.",
    gradFrom: "rgba(139,92,246,0.08)",
    gradTo: "rgba(99,102,241,0.04)",
    border: "rgba(139,92,246,0.14)",
  },
];

export default function Vision() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="vision" ref={ref} className="relative py-28 lg:py-36 bg-[#09090B] overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-violet-600/[0.04] rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

        {/* ── Main headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.07] text-xs text-zinc-400 font-medium mb-7">
            플랫폼 비전
          </span>
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-[-0.02em] leading-[1.05]">
            로컬 생태계를
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #e879f9 40%, #818cf8 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              재정의합니다.
            </span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            도시의 모든 매장과 사용자가 하나의 데이터 레이어로 연결되는 세상.
            <br className="hidden lg:block" />
            ARMES는 그 인프라를 만들고 있습니다.
          </p>
        </motion.div>

        {/* ── 앱 핵심 기능 카드 그리드 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {valueCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] group hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="animate-shimmer absolute inset-0" />
              </div>
              <div className="relative z-10">
                <div className="text-3xl mb-3">{c.icon}</div>
                <div className="text-base font-bold text-white mb-1.5">{c.title}</div>
                <p className="text-xs text-zinc-500 leading-relaxed mb-3">{c.desc}</p>
                <span className={`inline-block px-2.5 py-1 rounded-full border text-[11px] font-semibold ${c.tagColor}`}>
                  {c.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Vision Cards ── */}
        <div className="grid md:grid-cols-3 gap-4">
          {visionCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 rounded-3xl transition-all duration-300 group hover:scale-[1.01]"
              style={{
                background: `linear-gradient(135deg, ${c.gradFrom}, ${c.gradTo})`,
                border: `1px solid ${c.border}`,
              }}
            >
              <div className="text-3xl mb-5">{c.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2.5">{c.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Timeline / Milestones ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-white/[0.05]"
        >
          <div className="text-center mb-8">
            <span className="text-xs text-zinc-600 font-medium uppercase tracking-widest">ARMES 로드맵</span>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-0 md:gap-0 relative">
            {/* Line */}
            <div className="hidden md:block absolute top-4 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {[
              { phase: "Phase 1", title: "수도권 런칭", status: "완료", color: "bg-green-400" },
              { phase: "Phase 2", title: "생태계 확장", status: "진행 중", color: "bg-violet-400 animate-pulse" },
              { phase: "Phase 3", title: "전국 도시 확장", status: "준비 중", color: "bg-zinc-600" },
              { phase: "Phase 4", title: "도시 인프라 화", status: "예정", color: "bg-zinc-700" },
            ].map((item) => (
              <div key={item.phase} className="flex-1 flex flex-col items-center text-center px-4">
                <div className={`w-3 h-3 rounded-full ${item.color} mb-3 relative z-10`} />
                <div className="text-[11px] text-zinc-600 font-semibold mb-1">{item.phase}</div>
                <div className="text-sm text-white font-semibold mb-1">{item.title}</div>
                <div className="text-xs text-zinc-500">{item.status}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
