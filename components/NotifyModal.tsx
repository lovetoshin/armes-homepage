"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArmesMark from "./ArmesMark";

interface NotifyModalProps {
  open: boolean;
  onClose: () => void;
  service?: string;
}

export default function NotifyModal({ open, onClose, service = "RewardTalk" }: NotifyModalProps) {
  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // ESC 닫기
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // body 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // 열릴 때 초기화 + 포커스
  useEffect(() => {
    if (open) {
      setName(""); setEmail(""); setStatus("idle"); setErrorMsg("");
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg("이름과 이메일을 모두 입력해 주세요."); return;
    }
    setStatus("loading"); setErrorMsg("");
    try {
      const res  = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setTimeout(onClose, 2800);
      } else {
        setErrorMsg(json.message || "오류가 발생했습니다."); setStatus("error");
      }
    } catch {
      setErrorMsg("네트워크 오류가 발생했습니다."); setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
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
            <div className="relative w-full max-w-sm pointer-events-auto bg-white border border-[#E5E8EB] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#F2F4F6]">
                <div className="flex items-center gap-2.5">
                  <ArmesMark size={26} invert={false} />
                  <div>
                    <h2 className="text-sm font-extrabold text-[#191F28] leading-tight">출시 알림 받기</h2>
                    <p className="text-xs text-[#8B95A1]">{service} · 출시 시 이메일로 안내</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-7 h-7 rounded-full bg-[#F2F4F6] hover:bg-[#E5E8EB] flex items-center justify-center transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-[#8B95A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-6">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-4 py-4 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-14 h-14 rounded-full bg-[#EBF3FF] flex items-center justify-center text-2xl"
                    >
                      🔔
                    </motion.div>
                    <div>
                      <p className="font-extrabold text-[#191F28] mb-1">등록 완료!</p>
                      <p className="text-sm text-[#4E5968] leading-relaxed">
                        {service} 출시 시<br />
                        <strong className="text-[#3182F6]">{email}</strong>으로 알려드릴게요.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <p className="text-sm text-[#4E5968] leading-relaxed">
                      출시되면 바로 알려드릴게요. 이름과 이메일만 남겨주세요.
                    </p>

                    {/* 이름 */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#4E5968]">
                        이름 <span className="text-[#3182F6]">*</span>
                      </label>
                      <input
                        ref={inputRef}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="홍길동"
                        disabled={status === "loading"}
                        className="w-full bg-[#F2F4F6] border border-[#E5E8EB] text-[#191F28] placeholder-[#C5C9CF] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#3182F6] focus:bg-white transition-all duration-200 disabled:opacity-50"
                      />
                    </div>

                    {/* 이메일 */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#4E5968]">
                        이메일 <span className="text-[#3182F6]">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@email.com"
                        disabled={status === "loading"}
                        className="w-full bg-[#F2F4F6] border border-[#E5E8EB] text-[#191F28] placeholder-[#C5C9CF] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#3182F6] focus:bg-white transition-all duration-200 disabled:opacity-50"
                      />
                    </div>

                    {/* 에러 */}
                    <AnimatePresence>
                      {errorMsg && (
                        <motion.p
                          initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                          className="text-xs text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5"
                        >
                          {errorMsg}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* 버튼 */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-[#3182F6] hover:bg-[#1B64DA] text-white font-extrabold text-sm py-3.5 rounded-2xl transition-all duration-200 disabled:opacity-60 shadow-[0_4px_16px_rgba(49,130,246,0.3)]"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          등록 중...
                        </span>
                      ) : "출시 알림 신청하기 🔔"}
                    </button>

                    <p className="text-center text-[11px] text-[#C5C9CF]">
                      스팸 없음. 출시 소식만 드립니다.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
