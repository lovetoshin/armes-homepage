"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useContact } from "@/components/ContactProvider";

/**
 * 회사 CTA — 파트너·제휴 문의 유도 + 검증된 신뢰 배지.
 * ⚠️ 누적 수치 등은 실제 데이터 확보 전까지 표기하지 않는다(날조 금지).
 */
const trustBadges = [
  "사업자 등록 법인",
  "경복대학교 창업보육",
  "개인정보 보호 준수",
];

export default function CompanyCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { open: openContact } = useContact();

  return (
    <section ref={ref} className="bg-white pb-24 lg:pb-28">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[32px] bg-[#3182F6] px-8 py-14 lg:px-16 lg:py-16 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 keep-all">
            아르메스와 함께 만들어요
          </h2>
          <p className="text-white/85 text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-9 keep-all">
            새로운 AI 서비스 제휴, 파트너십, 사업 제안을 환영합니다.
            언제든 편하게 문의해 주세요.
          </p>
          <button
            onClick={openContact}
            className="inline-flex items-center justify-center gap-2 bg-white text-[#191F28] px-8 py-4 rounded-2xl font-bold text-[15px] hover:bg-[#F2F4F6] transition-colors"
          >
            파트너·제휴 문의하기
          </button>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
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
