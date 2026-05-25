"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ContactPayload } from "@/app/api/contact/route";

const INQUIRY_TYPES = [
  { value: "매장 파트너", label: "매장 파트너", icon: "🏪", desc: "RewardTalk 가맹점 등록" },
  { value: "셀러 파트너", label: "셀러 파트너", icon: "✦",  desc: "Seller AI 이용" },
  { value: "기업 제휴",   label: "기업 제휴",   icon: "🤝", desc: "B2B 협력 제안" },
  { value: "투자 문의",   label: "투자 문의",   icon: "💼", desc: "IR / 투자 제안" },
  { value: "기타",        label: "기타 문의",   icon: "💬", desc: "일반 문의" },
] as const;

type InquiryType = typeof INQUIRY_TYPES[number]["value"];

interface FormState {
  type: InquiryType | "";
  name: string; email: string; phone: string;
  company: string; region: string; message: string; agree: boolean;
}

const INIT: FormState = {
  type: "", name: "", email: "", phone: "",
  company: "", region: "", message: "", agree: false,
};

function Field({ label, required, children, hint }: {
  label: string; required?: boolean; children: React.ReactNode; hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-[#191F28]">
        {label}
        {required && <span className="text-[#3182F6] ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-[#8B95A1]">{hint}</p>}
    </div>
  );
}

function Input({ value, onChange, placeholder, type = "text", disabled }: {
  value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; disabled?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className="w-full bg-[#F2F4F6] border border-[#E5E8EB] text-[#191F28] placeholder-[#C5C9CF] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#3182F6] focus:bg-white transition-all duration-200 disabled:opacity-50"
    />
  );
}

interface ContactFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export default function ContactForm({ onSuccess, compact = false }: ContactFormProps) {
  const uid = useId();
  const [form, setForm] = useState<FormState>(INIT);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: keyof FormState) => (v: string | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) { setErrorMsg("개인정보 수집 이용에 동의해 주세요."); return; }
    setStatus("loading"); setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: form.type, name: form.name, email: form.email,
          phone: form.phone, company: form.company || undefined,
          region: form.region || undefined, message: form.message,
        } satisfies Partial<ContactPayload>),
      });
      const json = await res.json();
      if (json.success) { setStatus("success"); onSuccess?.(); }
      else { setErrorMsg(json.message || "오류가 발생했습니다."); setStatus("error"); }
    } catch {
      setErrorMsg("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      setStatus("error");
    }
  };

  // 성공 화면
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-5 py-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center"
        >
          <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <div>
          <h3 className="text-xl font-extrabold text-[#191F28] mb-2">문의가 접수되었습니다</h3>
          <p className="text-[#4E5968] text-sm leading-relaxed max-w-xs">
            빠른 시일 내 담당자가 연락드리겠습니다.
            <br />보통 1~2 영업일 이내에 답변드립니다.
          </p>
        </div>
        <button
          onClick={() => { setForm(INIT); setStatus("idle"); }}
          className="text-sm text-[#8B95A1] hover:text-[#4E5968] transition-colors underline underline-offset-4"
        >
          다른 문의 하기
        </button>
      </motion.div>
    );
  }

  const isLoading = status === "loading";

  return (
    <form id={uid} onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* 문의 유형 */}
      <div>
        <p className="text-sm font-semibold text-[#191F28] mb-3">
          문의 유형<span className="text-[#3182F6] ml-0.5">*</span>
        </p>
        <div className={`grid gap-2 ${compact ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-5"}`}>
          {INQUIRY_TYPES.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => set("type")(t.value)}
              className={`flex flex-col gap-1 items-start p-3 rounded-xl border text-left transition-all duration-150 ${
                form.type === t.value
                  ? "bg-[#EBF3FF] border-[#3182F6] text-[#3182F6]"
                  : "bg-[#F2F4F6] border-[#E5E8EB] text-[#4E5968] hover:border-[#C5C9CF]"
              }`}
            >
              <span className="text-lg leading-none">{t.icon}</span>
              <span className="text-xs font-bold leading-tight">{t.label}</span>
              {!compact && <span className="text-[10px] text-[#8B95A1] leading-tight">{t.desc}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* 기본 정보 */}
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        <Field label="이름" required>
          <Input value={form.name} onChange={set("name")} placeholder="홍길동" disabled={isLoading} />
        </Field>
        <Field label="이메일" required>
          <Input value={form.email} onChange={set("email")} type="email" placeholder="name@company.com" disabled={isLoading} />
        </Field>
        <Field label="연락처" required hint="- 없이 숫자만 입력">
          <Input value={form.phone} onChange={set("phone")} type="tel" placeholder="01012345678" disabled={isLoading} />
        </Field>
        <Field label="회사 / 매장명">
          <Input value={form.company} onChange={set("company")} placeholder="(선택) 아르메스 카페" disabled={isLoading} />
        </Field>
      </div>

      {/* 서비스 지역 (조건부) */}
      {(form.type === "매장 파트너" || form.type === "기업 제휴") && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
          <Field label="서비스 지역" hint="파트너십을 희망하는 지역을 알려주세요">
            <Input value={form.region} onChange={set("region")} placeholder="예: 경기도 남양주시" disabled={isLoading} />
          </Field>
        </motion.div>
      )}

      {/* 문의 내용 */}
      <Field label="문의 내용" required>
        <div className="relative">
          <textarea
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="파트너십에 대해 궁금한 점, 운영 중인 매장 정보, 협업 제안 등 자유롭게 작성해 주세요."
            rows={compact ? 4 : 5}
            disabled={isLoading}
            className="w-full bg-[#F2F4F6] border border-[#E5E8EB] text-[#191F28] placeholder-[#C5C9CF] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#3182F6] focus:bg-white transition-all duration-200 resize-none disabled:opacity-50"
          />
          <span className="absolute bottom-3 right-3 text-[11px] text-[#C5C9CF]">{form.message.length}/500</span>
        </div>
      </Field>

      {/* 개인정보 동의 */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <div className="relative mt-0.5 flex-shrink-0">
          <input type="checkbox" className="sr-only" checked={form.agree} onChange={(e) => set("agree")(e.target.checked)} disabled={isLoading} />
          <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
            form.agree ? "bg-[#3182F6] border-[#3182F6]" : "border-[#C5C9CF] group-hover:border-[#8B95A1] bg-white"
          }`}>
            <AnimatePresence>
              {form.agree && (
                <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
        </div>
        <p className="text-xs text-[#4E5968] leading-relaxed">
          <span className="text-[#191F28] font-semibold">개인정보 수집 및 이용에 동의합니다.</span>
          {" "}수집 항목: 이름, 이메일, 연락처 / 목적: 문의 처리 및 안내 / 보유 기간: 1년{" "}
          <a href="/privacy" target="_blank" className="text-[#3182F6] hover:underline">자세히 보기</a>
        </p>
      </label>

      {/* 에러 메시지 */}
      <AnimatePresence>
        {(status === "error" || errorMsg) && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="flex items-center gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200"
          >
            <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            <p className="text-sm text-red-600">{errorMsg}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 제출 버튼 */}
      <motion.button
        type="submit"
        disabled={isLoading || !form.type}
        whileHover={!isLoading ? { scale: 1.01 } : {}}
        whileTap={!isLoading ? { scale: 0.99 } : {}}
        className={`relative w-full py-4 rounded-2xl font-extrabold text-[15px] transition-all duration-200 ${
          form.type && !isLoading
            ? "bg-[#3182F6] hover:bg-[#1B64DA] text-white shadow-[0_4px_16px_rgba(49,130,246,0.3)]"
            : "bg-[#F2F4F6] text-[#C5C9CF] cursor-not-allowed border border-[#E5E8EB]"
        }`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2.5">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            전송 중...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            문의 보내기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        )}
      </motion.button>

      <p className="text-center text-xs text-[#8B95A1]">
        또는 바로 연락하기:{" "}
        <a href="tel:01049959867" className="text-[#3182F6] font-semibold hover:underline">010-4995-9867</a>
        {" "}·{" "}
        <a href="mailto:support@armes.co.kr" className="text-[#3182F6] font-semibold hover:underline">support@armes.co.kr</a>
      </p>
    </form>
  );
}
