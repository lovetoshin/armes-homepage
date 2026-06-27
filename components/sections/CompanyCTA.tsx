"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useContact } from "@/components/ContactProvider";
import { type Locale } from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";

/**
 * 회사 CTA — 파트너·제휴 문의 유도 + 검증된 신뢰 배지.
 * ⚠️ 누적 수치 등은 실제 데이터 확보 전까지 표기하지 않는다(날조 금지).
 */
export default function CompanyCTA({ locale = "ko" }: { locale?: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { open: openContact } = useContact();
  const t = getUI(locale).home.cta;
  const trustBadges = t.badges;

  return (
    <section ref={ref} className="bg-white pb-24 lg:pb-28">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[28px] bg-[#3182F6] px-8 py-7 lg:px-16 lg:py-9 text-center"
        >
          <h2 className="text-2xl lg:text-[28px] font-extrabold text-white tracking-tight mb-2.5 keep-all">
            {t.h2}
          </h2>
          <p className="text-white/85 text-[15px] lg:text-base leading-relaxed max-w-xl mx-auto mb-6 keep-all text-balance">
            {t.desc}
          </p>
          <button
            onClick={openContact}
            className="inline-flex items-center justify-center gap-2 bg-white text-[#191F28] px-7 py-3.5 rounded-xl font-bold text-[14px] hover:bg-[#F2F4F6] transition-colors"
          >
            {t.button}
          </button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustBadges.map((b) => (
              <div key={b} className="flex items-center gap-1.5 text-white/80 text-xs font-medium">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {b}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
