"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useContact } from "./ContactProvider";

const navLinks = [
  { name: "RewardTalk", href: "#experience" },
  { name: "서비스", href: "#ecosystem" },
  { name: "파트너", href: "#cta" },
  { name: "회사소개", href: "#vision" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open: openContact } = useContact();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#09090B]/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 13H2L8 2Z" fill="white" fillOpacity="0.95" />
            </svg>
          </div>
          <span className="font-bold text-white text-[17px] tracking-tight">
            ARMES
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#cta"
            className="text-sm text-zinc-400 hover:text-white transition-colors px-3 py-1.5"
          >
            앱 다운로드
          </Link>
          <button
            onClick={openContact}
            className="text-sm bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-zinc-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            파트너 문의
          </button>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] group"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
        >
          <span
            className={`block w-5 h-0.5 bg-zinc-300 rounded-full transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-zinc-300 rounded-full transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-zinc-300 rounded-full transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#0D0D10]/98 backdrop-blur-2xl border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 flex flex-col gap-1">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center py-3 text-zinc-300 hover:text-white transition-colors text-base"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <button
                  onClick={() => { setMobileOpen(false); openContact(); }}
                  className="w-full text-center bg-white text-black py-3.5 rounded-2xl font-semibold text-sm"
                >
                  파트너 문의하기
                </button>
                <Link
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center bg-white/[0.06] border border-white/10 text-zinc-300 py-3.5 rounded-2xl font-semibold text-sm"
                >
                  앱 다운로드
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
