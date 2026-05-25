"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useContact } from "./ContactProvider";
import ArmesMark from "./ArmesMark";

const navLinks = [
  { name: "RewardTalk", href: "#rewardtalk" },
  { name: "Seller AI",  href: "/seller-info" },
  { name: "파트너 신청", href: "#partner" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open: openContact } = useContact();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#E5E8EB]">
      <nav className="max-w-6xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <ArmesMark size={32} invert={false} className="group-hover:opacity-80 transition-opacity" />
          <span className="font-bold text-[#191F28] text-[17px] tracking-tight">ARMES</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm text-[#4E5968] hover:text-[#191F28] hover:bg-[#F2F4F6] transition-all duration-150 rounded-xl font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={openContact}
          className="hidden md:block text-sm bg-[#3182F6] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#1B64DA] transition-colors duration-200"
        >
          문의하기
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
        >
          <span className={`block w-5 h-0.5 bg-[#191F28] rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#191F28] rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#191F28] rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-[#E5E8EB] overflow-hidden"
          >
            <div className="px-5 pt-3 pb-5 flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-[#191F28] font-medium text-base border-b border-[#F2F4F6] last:border-0"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => { setMobileOpen(false); openContact(); }}
                className="mt-3 w-full bg-[#3182F6] text-white py-3.5 rounded-2xl font-semibold text-sm"
              >
                문의하기
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
