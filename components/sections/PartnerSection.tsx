"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useContact } from "@/components/ContactProvider";

const partners = [
  {
    icon: "🏪",
    title: "매장 파트너",
    subtitle: "RewardTalk 가맹점",
    desc: "카페, 음식점 등 동네 매장을 운영 중이시다면 리워드톡 가맹점으로 등록하세요. 새로운 고객과 연결됩니다.",
    color: "border-orange-200 hover:border-orange-300",
    iconBg: "bg-orange-50",
  },
  {
    icon: "✦",
    title: "Seller AI 파트너",
    subtitle: "쿠팡·스마트스토어 셀러",
    desc: "AI로 모델컷·누끼·상세페이지를 자동 생성해 보세요. 얼리버드 신청 시 첫 달 50% 할인 혜택을 드립니다.",
    color: "border-blue-200 hover:border-blue-300",
    iconBg: "bg-blue-50",
  },
  {
    icon: "🤝",
    title: "기업 제휴",
    subtitle: "B2B 협력 제안",
    desc: "ARMES 로컬 생태계와 함께 성장할 기업 파트너를 찾습니다. 다양한 협력 방식을 논의해 보세요.",
    color: "border-green-200 hover:border-green-300",
    iconBg: "bg-green-50",
  },
  {
    icon: "💼",
    title: "투자 문의",
    subtitle: "IR / 투자 제안",
    desc: "아르메스의 성장 가능성에 함께하고 싶으신 투자자분들의 연락을 기다립니다.",
    color: "border-purple-200 hover:border-purple-300",
    iconBg: "bg-purple-50",
  },
];

const steps = [
  { step: "01", title: "문의 접수", desc: "양식 작성 후 제출 (1분 소요)" },
  { step: "02", title: "담당자 연락", desc: "1~2 영업일 내 연락" },
  { step: "03", title: "파트너십 시작", desc: "조건 협의 후 바로 시작" },
];

export default function PartnerSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { open: openContact } = useContact();

  return (
    <section ref={ref} id="partner" className="bg-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#F2F4F6] text-[#4E5968] text-xs font-bold px-4 py-2 rounded-full mb-5">
            🤝 파트너십
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#191F28] tracking-tight mb-4">
            ARMES와 함께 성장하세요
          </h2>
          <p className="text-[#4E5968] text-lg max-w-xl mx-auto">
            간단한 신청으로 시작할 수 있어요.
            어떤 형태의 협력도 환영합니다.
          </p>
        </motion.div>

        {/* 파트너 카드 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {partners.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              onClick={openContact}
              className={`bg-white border-2 ${p.color} rounded-3xl p-6 cursor-pointer transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] group`}
            >
              <div className={`w-12 h-12 ${p.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-4`}>
                {p.icon}
              </div>
              <p className="text-[10px] font-bold text-[#8B95A1] uppercase tracking-wider mb-1">{p.subtitle}</p>
              <h3 className="text-[#191F28] font-extrabold text-lg mb-3">{p.title}</h3>
              <p className="text-[#4E5968] text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex items-center gap-1 text-[#3182F6] text-sm font-bold group-hover:gap-2 transition-all">
                신청하기
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 프로세스 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#F8FAFF] rounded-3xl p-8 lg:p-12 mb-10"
        >
          <p className="text-center text-sm font-bold text-[#8B95A1] uppercase tracking-widest mb-8">신청 프로세스</p>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-10">
            {steps.map((s, i) => (
              <div key={s.step} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#3182F6] text-white rounded-2xl flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <p className="text-[#191F28] font-bold text-base mb-1">{s.title}</p>
                  <p className="text-[#8B95A1] text-sm">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* 메인 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={openContact}
            className="inline-flex items-center gap-2.5 bg-[#3182F6] text-white px-10 py-5 rounded-2xl font-extrabold text-lg hover:bg-[#1B64DA] transition-colors shadow-[0_8px_24px_rgba(49,130,246,0.35)]"
          >
            지금 바로 파트너 신청하기
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <p className="mt-4 text-sm text-[#8B95A1]">
            또는 직접 연락하세요 ·{" "}
            <a href="tel:01049959867" className="text-[#3182F6] font-semibold hover:underline">010-4995-9867</a>
            {" "}·{" "}
            <a href="mailto:support.armes@gmail.com" className="text-[#3182F6] font-semibold hover:underline">support.armes@gmail.com</a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
