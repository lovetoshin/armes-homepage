"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./forms/ContactForm";
import ArmesMark from "./ArmesMark";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto pointer-events-auto bg-white border border-[#E5E8EB] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)]" style={{ scrollbarWidth: 'none' }}>

              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-7 pt-6 pb-4 bg-white/95 backdrop-blur-xl border-b border-[#F2F4F6]">
                <div className="flex items-center gap-2.5">
                  <ArmesMark size={28} invert={false} />
                  <div>
                    <h2 className="text-base font-extrabold text-[#191F28] leading-tight">파트너 문의하기</h2>
                    <p className="text-xs text-[#8B95A1]">1~2 영업일 내 답변드립니다</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-[#F2F4F6] hover:bg-[#E5E8EB] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-[#8B95A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <div className="px-7 py-6">
                <ContactForm compact onSuccess={() => setTimeout(onClose, 2000)} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
