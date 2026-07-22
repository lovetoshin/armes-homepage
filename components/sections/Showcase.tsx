"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { type Locale } from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";

/**
 * 대표 서비스 쇼케이스 — 지금 운영 중인 두 웹서비스(셀러AI·아르메스툴)를
 * 실제 화면 그대로 브라우저 목업에 크게 담아 "진짜 쓰이는 서비스"임을 보여준다.
 * 클릭하면 실제 서비스로 바로 이동(새 탭).
 */
export default function Showcase({ locale = "ko" }: { locale?: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const t = getUI(locale).home.showcase;

  const services = [
    { src: "/projects/sellerai-1.jpg", name: "셀러AI", href: "https://www.armes.co.kr/sellerai/studio", desc: t.sellerai },
    { src: "/projects/tools-main.png", name: "ARMES Tools", href: "https://www.armes.co.kr/tools/", desc: t.tools },
  ];

  return (
    // id="projects": 상단바 "프로젝트" 앵커 — 쇼케이스도 프로젝트라 여기부터 보이게
    <section id="projects" ref={ref} className="bg-[#F8FAFF] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">
            Live Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#191F28] tracking-tight keep-all text-balance">
            {t.h2}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
              className="group block overflow-hidden rounded-2xl bg-white border border-[#E5E8EB] shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_18px_46px_rgba(0,0,0,0.13)]"
            >
              {/* 브라우저 목업 상단바 */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#F2F4F6] border-b border-[#E5E8EB]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              {/* 실제 서비스 화면 */}
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={`${s.name} 실제 서비스 화면`}
                  className="w-full aspect-[16/10] object-cover object-top bg-white transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5 lg:p-7">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg lg:text-xl font-extrabold text-[#191F28]">{s.name}</h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#E7F7EF] px-2 py-0.5 text-[10px] font-bold text-[#15803D]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                    LIVE
                  </span>
                </div>
                <p className="mt-2.5 text-sm lg:text-[15px] leading-relaxed text-[#4E5968] keep-all text-balance">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[#3182F6] font-bold text-sm lg:text-[15px]">
                  {t.cta}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
