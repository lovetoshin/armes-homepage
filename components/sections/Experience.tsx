"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const features = [
  {
    id: 0,
    emoji: "🗺️",
    title: "주변 매장을 탐색하세요",
    subtitle: "위치 기반 매장 탐색",
    desc: "현재 위치를 중심으로 카페·편의점·주유소·마트 등 다양한 파트너 매장을 실시간으로 탐색합니다. 카테고리 필터와 거리 정보로 지금 필요한 혜택을 바로 찾으세요.",
    detail: "카페 · 편의점 · 주유소 · 마트 · 음식점",
    gradClass: "from-orange-500 to-amber-500",
    glowColor: "rgba(249,115,22,0.15)",
    mockup: {
      title: "내 주변 탐색",
      bg: "from-orange-500/10 to-amber-500/5",
      border: "border-orange-500/20",
      items: [
        { icon: "☕", name: "스타벅스 진접점", sub: "157m · 카페", badge: "+12P", badgeColor: "text-orange-400" },
        { icon: "⛽", name: "SK주유소", sub: "320m · 주유소", badge: "+28P", badgeColor: "text-orange-400" },
        { icon: "🏪", name: "GS25", sub: "95m · 편의점", badge: "+5P", badgeColor: "text-orange-400" },
      ],
    },
  },
  {
    id: 1,
    emoji: "📱",
    title: "통합 QR로 모든 곳에서 적립",
    subtitle: "통합 멤버십 바코드",
    desc: "하나의 ARMES QR/바코드로 500개 이상의 파트너 매장에서 멤버십을 적립합니다. 여러 앱이 필요 없습니다. 생활 속에서 자연스럽게 쌓이는 리워드를 경험하세요.",
    detail: "500+ 파트너 매장 즉시 적립",
    gradClass: "from-violet-500 to-indigo-500",
    glowColor: "rgba(139,92,246,0.15)",
    mockup: {
      title: "멤버십 적립",
      bg: "from-violet-500/10 to-indigo-500/5",
      border: "border-violet-500/20",
      items: [
        { icon: "◈", name: "통합 QR 코드", sub: "모든 파트너 매장 사용 가능", badge: "활성", badgeColor: "text-violet-400" },
        { icon: "✓", name: "이마트24 방문 적립", sub: "방금 전 · +8P", badge: "완료", badgeColor: "text-green-400" },
        { icon: "★", name: "적립 포인트", sub: "이번 달 누적", badge: "2,840P", badgeColor: "text-violet-400" },
      ],
    },
  },
  {
    id: 2,
    emoji: "🎯",
    title: "드로우와 포인트로 더 큰 혜택",
    subtitle: "리워드 시스템",
    desc: "매일 드로우 이벤트에 참여하고 적립 포인트로 특별한 혜택을 받으세요. 일상의 소비가 게임처럼 즐거워지고, 지역 상권은 더욱 활기차게 연결됩니다.",
    detail: "일 1회 드로우 + 포인트 리워드",
    gradClass: "from-green-500 to-teal-500",
    glowColor: "rgba(16,185,129,0.15)",
    mockup: {
      title: "드로우 & 혜택",
      bg: "from-green-500/10 to-teal-500/5",
      border: "border-green-500/20",
      items: [
        { icon: "🎯", name: "오늘의 드로우", sub: "23시간 후 종료", badge: "참여하기", badgeColor: "text-green-400" },
        { icon: "💎", name: "포인트 교환", sub: "5,000P → 편의점 상품권", badge: "-5,000P", badgeColor: "text-emerald-400" },
        { icon: "🎁", name: "특별 혜택", sub: "단골 매장 추가 적립 중", badge: "×2", badgeColor: "text-green-400" },
      ],
    },
  },
];

function FeatureMockup({ feature }: { feature: (typeof features)[0] }) {
  return (
    <motion.div
      key={feature.id}
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -12 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <div
        className={`bg-gradient-to-br ${feature.mockup.bg} border ${feature.mockup.border} rounded-3xl overflow-hidden`}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/[0.06] flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${feature.gradClass} flex items-center justify-center text-lg`}>
            {feature.emoji}
          </div>
          <div>
            <div className="text-white font-semibold text-sm">{feature.mockup.title}</div>
            <div className="text-zinc-500 text-xs mt-0.5">{feature.subtitle}</div>
          </div>
        </div>

        {/* Items */}
        <div className="divide-y divide-white/[0.04]">
          {feature.mockup.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-4 px-6 py-4"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/[0.06] border border-white/[0.07] flex items-center justify-center text-lg flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-semibold truncate">{item.name}</div>
                <div className="text-zinc-500 text-xs mt-0.5 truncate">{item.sub}</div>
              </div>
              <div className={`text-sm font-bold flex-shrink-0 ${item.badgeColor}`}>{item.badge}</div>
            </motion.div>
          ))}
        </div>

        {/* Detail badge */}
        <div className="px-6 py-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${feature.gradClass} text-white text-xs font-semibold`}>
            {feature.detail}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="relative py-28 lg:py-36 bg-[#09090B]">
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/[0.06]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 -right-32 w-[480px] h-[480px] rounded-full blur-[120px] transition-all duration-700"
          style={{ background: features[active].glowColor }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.07] text-xs text-zinc-400 font-medium mb-5">
            RewardTalk 경험
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            생활 속에서
            <br />
            <span className="gradient-text-orange">자연스럽게 작동하는</span>
            <br />
            플랫폼
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-16 items-start">
          {/* Feature selector list */}
          <div className="flex flex-col gap-3">
            {features.map((f, i) => (
              <motion.button
                key={f.id}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(f.id)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 group ${
                  active === f.id
                    ? "bg-white/[0.04] border-white/[0.1]"
                    : "border-transparent hover:border-white/[0.06] hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${f.gradClass} flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 ${
                      active === f.id ? "scale-105" : "scale-95 group-hover:scale-100"
                    }`}
                  >
                    {f.emoji}
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`font-bold text-[16px] leading-tight transition-colors duration-200 ${
                        active === f.id ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                      }`}
                    >
                      {f.title}
                    </h3>

                    <AnimatePresence>
                      {active === f.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28 }}
                        >
                          <p className="text-zinc-500 text-sm leading-relaxed mt-2">{f.desc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Visual mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-24"
          >
            <AnimatePresence mode="wait">
              <FeatureMockup key={active} feature={features[active]} />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
