"use client";

import { motion } from "framer-motion";
import { useContact } from "@/components/ContactProvider";
import { useNotify } from "@/components/NotifyProvider";
import PhoneMockup from "@/components/PhoneMockup";

const features = [
  { icon: "🎯", label: "드로우 시스템" },
  { icon: "📱", label: "QR 멤버십 적립" },
  { icon: "👥", label: "지역 공동구매" },
  { icon: "🚌", label: "교통·주유 정보" },
];

export default function Hero() {
  const { open: openContact } = useContact();
  const { open: openNotify }  = useNotify();

  return (
    <section className="bg-white pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── 텍스트 ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EBF3FF] text-[#3182F6] text-xs font-bold px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3182F6] animate-pulse" />
              RewardTalk · 출시 준비 중
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#191F28] leading-[1.15] tracking-tight mb-5">
              내 주변 매장에서
              <br />
              <span className="text-[#3182F6]">포인트 적립</span>하고
              <br />
              특별한 혜택까지
            </h1>

            {/* Description */}
            <p className="text-[#4E5968] text-[17px] leading-relaxed mb-8">
              리워드톡은 동네 카페, 음식점 등 가맹점에서 QR 코드 하나로
              멤버십을 적립하고, 드로우 응모·공동구매·교통 정보까지
              한 번에 이용할 수 있는 로컬 라이프 플랫폼입니다.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 bg-[#F2F4F6] text-[#4E5968] text-sm font-medium px-4 py-2 rounded-full"
                >
                  <span>{f.icon}</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* 출시 알림 — 간단한 이메일 캡처 모달 */}
              <button
                onClick={() => openNotify("RewardTalk")}
                className="inline-flex items-center justify-center gap-2 bg-[#3182F6] text-white px-7 py-4 rounded-2xl font-bold text-[15px] hover:bg-[#1B64DA] transition-colors shadow-[0_4px_16px_rgba(49,130,246,0.3)]"
              >
                출시 알림 받기 🔔
              </button>
              {/* 파트너 신청 — 전체 문의 폼 모달 */}
              <button
                onClick={openContact}
                className="inline-flex items-center justify-center gap-2 bg-[#F2F4F6] text-[#191F28] px-7 py-4 rounded-2xl font-bold text-[15px] hover:bg-[#E5E8EB] transition-colors"
              >
                파트너 신청
              </button>
            </div>
          </motion.div>

          {/* ── 폰 목업 ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-12 bg-[#EBF3FF] rounded-full blur-3xl opacity-70" />
              <div className="relative" style={{ filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.14))' }}>
                <PhoneMockup />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
