"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { technologies } from "@/lib/technology";

/**
 * Technology 섹션 — 회사가 보유한 핵심 기술 4종 + 설명 + 실제 적용 프로젝트.
 * "기술이 실제 서비스로 쓰인다"를 보여줘 기술 회사 신뢰를 만든다.
 */
export default function TechnologySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="technology" ref={ref} className="bg-[#F8FAFF] py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">
            Technology
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#191F28] tracking-tight keep-all mb-4">
            우리가 다루는 기술
          </h2>
          <p className="text-[#8B95A1] text-base keep-all max-w-xl mx-auto">
            데모가 아니라 실제 서비스에 쓰이는 기술입니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {technologies.map((t, i) => (
            <motion.div
              key={t.key}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="bg-white rounded-3xl border border-[#E5E8EB] p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3FF] flex items-center justify-center text-2xl">
                  {t.icon}
                </div>
                <h3 className="text-[#191F28] font-extrabold text-xl">{t.name}</h3>
              </div>

              <p className="text-[#4E5968] text-sm leading-relaxed keep-all mb-5">{t.desc}</p>

              <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-[#F2F4F6]">
                <span className="text-[11px] font-bold text-[#8B95A1]">적용</span>
                {t.apply.map((p) => (
                  <span
                    key={p}
                    className="text-[11px] font-semibold text-[#3182F6] bg-[#EBF3FF] px-2.5 py-1 rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
