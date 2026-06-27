"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  LOCALES,
  LOCALE_LABEL,
  LOCALE_SHORT,
  localeFromPathname,
  stripLocale,
  localize,
  type Locale,
} from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";

// 우측 상단 언어 전환기(지구본 아이콘 + 드롭다운).
// 현재 보고 있는 경로를 그대로 유지한 채 언어만 바꿔 이동한다.
// 예) /en/blog/foo 에서 한국어 선택 → /blog/foo, 간체 선택 → /zh-hans/blog/foo
export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname() || "/";
  const ref = useRef<HTMLDivElement>(null);

  const current = localeFromPathname(pathname);
  const basePath = stripLocale(pathname); // 한국어 기준 경로

  // 바깥 클릭 시 닫기
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  function go(locale: Locale) {
    setOpen(false);
    if (locale === current) return;
    router.push(localize(basePath, locale));
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={getUI(current).nav.language}
        aria-expanded={open}
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-[#4E5968] hover:text-[#191F28] hover:bg-[#F2F4F6] transition-all duration-150"
      >
        {/* 지구본 아이콘 */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" />
        </svg>
        <span className="text-xs font-bold tracking-wide">{LOCALE_SHORT[current]}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-40 bg-white rounded-2xl border border-[#E5E8EB] shadow-[0_8px_28px_rgba(0,0,0,0.10)] py-1.5 overflow-hidden z-50"
          >
            {LOCALES.map((locale) => {
              const active = locale === current;
              return (
                <li key={locale}>
                  <button
                    onClick={() => go(locale)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                      active
                        ? "text-[#3182F6] font-semibold bg-[#EBF3FF]"
                        : "text-[#4E5968] hover:bg-[#F2F4F6] hover:text-[#191F28]"
                    }`}
                  >
                    <span>{LOCALE_LABEL[locale]}</span>
                    {active && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
