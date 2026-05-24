"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: "rewardtalk",
    name: "RewardTalk",
    tagline: "지역 기반 멤버십 리워드",
    desc: "주변 매장을 탐색하고 통합 QR로 적립하세요. 포인트·드로우·멤버십이 하나의 앱에서 작동합니다.",
    icon: "🎁",
    tag: "출시 준비 중",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    gradFrom: "rgba(249,115,22,0.08)",
    gradTo: "rgba(251,146,60,0.04)",
    border: "rgba(249,115,22,0.15)",
    features: ["주변 매장 탐색", "통합 바코드 적립", "포인트 리워드", "드로우 이벤트"],
    large: true,
  },
  {
    id: "seller-ai",
    name: "Seller AI",
    tagline: "AI 커머스 자동화",
    desc: "AI가 상세페이지를 자동 생성합니다. 셀러와 점주의 성장을 가속화하는 커머스 인프라.",
    icon: "✦",
    tag: "출시 예정",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    gradFrom: "rgba(139,92,246,0.08)",
    gradTo: "rgba(99,102,241,0.04)",
    border: "rgba(139,92,246,0.15)",
    features: ["AI 상세페이지 생성", "마케팅 자동화"],
  },
  {
    id: "group-buy",
    name: "지역 공동구매",
    tagline: "로컬 커뮤니티 소비",
    desc: "지역 커뮤니티 기반 공동구매로 더 저렴하게, 더 함께.",
    icon: "🛒",
    tag: "베타 운영 중",
    tagColor: "text-green-400 bg-green-400/10 border-green-400/20",
    gradFrom: "rgba(16,185,129,0.08)",
    gradTo: "rgba(20,184,166,0.04)",
    border: "rgba(16,185,129,0.15)",
    features: ["지역 공동구매", "커뮤니티 연결"],
  },
  {
    id: "store-saas",
    name: "매장 운영 SaaS",
    tagline: "점주 통합 관리 도구",
    desc: "고객 관리·리워드 설정·멤버십 운영을 하나의 대시보드에서.",
    icon: "⊞",
    tag: "출시 예정",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    gradFrom: "rgba(59,130,246,0.08)",
    gradTo: "rgba(99,102,241,0.04)",
    border: "rgba(59,130,246,0.15)",
    features: ["고객 관리", "리워드 운영", "매출 분석"],
  },
];

function ServiceCard({
  service,
  delay,
  large = false,
}: {
  service: (typeof services)[0];
  delay: number;
  large?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.015 }}
      className={`relative p-7 rounded-3xl overflow-hidden cursor-pointer group transition-all duration-300 ${
        large ? "lg:col-span-2" : ""
      }`}
      style={{
        background: `linear-gradient(135deg, ${service.gradFrom}, ${service.gradTo})`,
        border: `1px solid ${service.border}`,
      }}
    >
      {/* Shimmer on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="animate-shimmer absolute inset-0" />
      </div>

      <div className="relative z-10">
        {/* Header row */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.07] border border-white/[0.08] flex items-center justify-center text-xl">
            {service.icon}
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${service.tagColor}`}
          >
            {service.tag}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{service.name}</h3>
        <p className="text-sm text-zinc-400 mb-3 font-medium">{service.tagline}</p>
        <p className="text-sm text-zinc-500 leading-relaxed">{service.desc}</p>

        {/* Feature pills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {service.features.map((f) => (
            <span
              key={f}
              className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-xs text-zinc-400 font-medium"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
          자세히 보기
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Ecosystem() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ecosystem" ref={ref} className="relative py-28 lg:py-36 bg-[#09090B]">
      {/* Bg glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-indigo-600/[0.04] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.07] text-xs text-zinc-400 font-medium mb-5">
            플랫폼 생태계
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            하나의 인프라,
            <br />
            <span className="gradient-text-brand">네 가지 경험</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-lg mx-auto text-[17px] leading-relaxed">
            ARMES의 서비스는 하나의 생태계로 연결됩니다.
            사용자·매장·셀러 — 모두가 연결되는 플랫폼.
          </p>
        </motion.div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large card */}
          <ServiceCard service={services[0]} delay={0.05} large />
          {/* Small cards */}
          {services.slice(1).map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={0.1 + i * 0.07} />
          ))}
        </div>

        {/* ── Connection line visual ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {["사용자", "매장", "셀러", "데이터"].map((node, i) => (
            <div key={node} className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.09] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                </div>
                <span className="text-[11px] text-zinc-600 font-medium">{node}</span>
              </div>
              {i < 3 && (
                <div className="w-8 h-px bg-gradient-to-r from-white/10 to-white/[0.03] mb-4" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
