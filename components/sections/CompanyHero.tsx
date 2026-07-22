"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useContact } from "@/components/ContactProvider";
import { localize, type Locale } from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";

/**
 * 회사 Hero — ARMES는 "일상에 실제 쓰이는 여러 생활 서비스를 만드는 회사"라는 정체성을 먼저 보여준다.
 * (특정 프로젝트 홍보가 아니라 회사 자체)
 */
export default function CompanyHero({ locale = "ko" }: { locale?: Locale }) {
  const { open: openContact } = useContact();
  const t = getUI(locale).home.hero;

  return (
    <section className="bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-[#EBF3FF] text-[#3182F6] text-xs font-bold px-4 py-2 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3182F6]" />
            Everyday Life Service Company
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#191F28] leading-[1.12] tracking-tight mb-6 keep-all">
            {t.titlePre}
            <br />
            <span className="text-[#3182F6]">{t.titleHl}</span>{t.titleSuf}
          </h1>

          <p className="text-[#4E5968] text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10 keep-all text-balance">
            {t.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={localize("/#projects", locale)}
              className="inline-flex items-center justify-center gap-2 bg-[#3182F6] hover:bg-[#1B64DA] text-white px-8 py-4 rounded-2xl font-bold text-[15px] transition-colors shadow-[0_4px_16px_rgba(49,130,246,0.3)]"
            >
              {t.ctaPrimary}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <button
              onClick={openContact}
              className="inline-flex items-center justify-center gap-2 bg-[#F2F4F6] text-[#191F28] px-8 py-4 rounded-2xl font-bold text-[15px] hover:bg-[#E5E8EB] transition-colors"
            >
              {t.ctaSecondary}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
