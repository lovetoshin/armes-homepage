"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const tools = [
  { icon: "📸", title: "모델컷 생성",   desc: "상품 1장 → 모델 착용 4컷 자동 생성",  color: "bg-blue-50   text-blue-600   border-blue-100"  },
  { icon: "✂️", title: "누끼컷 추출",   desc: "모델 착용 사진 → 투명 PNG, 최대 8장",  color: "bg-green-50  text-green-600  border-green-100" },
  { icon: "👤", title: "누끼→모델컷",   desc: "누끼 이미지 → 모델 착용 사진, 최대 8장", color: "bg-purple-50 text-purple-600 border-purple-100" },
  { icon: "🔄", title: "제품 교체",     desc: "모델+제품 합성으로 자연스러운 교체",    color: "bg-orange-50 text-orange-600 border-orange-100" },
  { icon: "📄", title: "상세페이지",    desc: "쿠팡·스마트스토어용 HTML 자동 생성",   color: "bg-pink-50   text-pink-600   border-pink-100"  },
  { icon: "🗂️", title: "생성 보관함",   desc: "생성된 이미지·페이지 통합 관리",        color: "bg-zinc-50   text-zinc-600   border-zinc-100"  },
];

export default function SellerSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#F8FAFF] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── 왼쪽: 툴 카드 그리드 ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            {tools.map((tool, i) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              >
                <Link
                  href="/seller-info"
                  className="block bg-white rounded-2xl border border-[#E5E8EB] p-4 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow"
                >
                  <div className={`inline-flex w-10 h-10 rounded-xl items-center justify-center text-xl mb-3 border ${tool.color}`}>
                    {tool.icon}
                  </div>
                  <p className="text-[#191F28] font-bold text-sm mb-1">{tool.title}</p>
                  <p className="text-[#8B95A1] text-xs leading-relaxed">{tool.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* ── 오른쪽: 설명 ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EBF3FF] text-[#3182F6] text-xs font-bold px-4 py-2 rounded-full border border-[#C5D8FB] mb-6">
              ✦ Seller AI · 출시
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#191F28] leading-[1.2] tracking-tight mb-5 keep-all">
              쿠팡·스마트스토어 셀러를 위한
              <br />
              <span className="text-[#3182F6]">AI 이미지 자동화</span>
            </h2>

            <p className="text-[#4E5968] text-[16px] leading-relaxed mb-8 keep-all">
              상품 사진 한 장으로 모델 착용컷을 만들고, 누끼를 따고,
              쿠팡·스마트스토어 상세페이지까지 자동 생성합니다.
              반복 작업에 드는 시간을 AI로 줄이세요.
            </p>

            {/* 토큰 정보 */}
            <div className="flex items-center gap-3 bg-white border border-[#E5E8EB] rounded-2xl px-5 py-4 mb-8 w-fit">
              <span className="text-xl">🪙</span>
              <div>
                <p className="text-xs text-[#8B95A1] mb-0.5">토큰 요금제</p>
                <p className="text-sm font-semibold text-[#191F28]">사진 생성 <strong className="text-[#3182F6]">50T</strong> · 상세페이지 <strong className="text-[#3182F6]">250T</strong></p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/seller-info"
              className="inline-flex items-center gap-2.5 bg-[#191F28] text-white px-7 py-4 rounded-2xl font-bold text-[15px] hover:bg-[#333D4B] transition-colors"
            >
              Seller AI 자세히 보기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
