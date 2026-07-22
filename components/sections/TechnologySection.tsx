"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { technologies } from "@/lib/technology";
import { type Locale } from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";
import { techDesc } from "@/lib/i18n-data";

/**
 * Technology 섹션 — 회사가 보유한 핵심 기술 4종을 간결하게.
 * 별도 /technology 라우트는 콘텐츠가 쌓이면 연다(P3). 지금은 홈 한 섹션으로만.
 */
export default function TechnologySection({ locale = "ko" }: { locale?: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const t = getUI(locale).home.tech;

  return (
    <section ref={ref} className="bg-white py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">
            Technology
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#191F28] tracking-tight keep-all text-balance">
            {t.h2}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.key}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="bg-white rounded-3xl border border-[#E5E8EB] p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#EBF3FF] flex items-center justify-center text-2xl mb-4">
                {tech.icon}
              </div>
              <h3 className="text-[#191F28] font-extrabold text-base mb-2">{tech.name}</h3>
              <p className="text-[#8B95A1] text-xs leading-relaxed keep-all">{techDesc(tech.key, locale, tech.desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
