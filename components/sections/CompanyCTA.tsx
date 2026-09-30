"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useContact } from "@/components/ContactProvider";
import { type Locale } from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";

/**
 * 회사 CTA — 파트너·제휴 문의 유도.
 * (버튼 아래 신뢰 배지 3개 「사업자 등록 법인·경복대학교 창업보육·개인정보 보호 준수」는 형님 지시로 삭제 2026-09-30)
 */
export default function CompanyCTA({ locale = "ko" }: { locale?: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { open: openContact } = useContact();
  const t = getUI(locale).home.cta;

  return (
    <section ref={ref} className="bg-white pb-24 lg:pb-28">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[28px] bg-[#EBF3FF] px-8 py-7 lg:px-16 lg:py-9 text-center"
        >
          <h2 className="text-2xl lg:text-[28px] font-extrabold text-[#191F28] tracking-tight mb-2.5 keep-all">
            {t.h2}
          </h2>
          <p className="text-[#4E5968] text-[15px] lg:text-base leading-relaxed max-w-xl mx-auto mb-6 keep-all text-balance">
            {t.desc}
          </p>
          <button
            onClick={openContact}
            className="inline-flex items-center justify-center gap-2 bg-[#3182F6] text-white px-7 py-3.5 rounded-xl font-bold text-[14px] hover:bg-[#1B64DA] transition-colors"
          >
            {t.button}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
