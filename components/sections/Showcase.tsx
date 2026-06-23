"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * 실제 서비스 화면 쇼케이스 — 회사가 "진짜 만드는 회사"임을 보여준다.
 * 비율이 같은 모바일 앱 화면(폰 세로)만 나란히. 새 이미지 생성 없이 실제 캡쳐 사용.
 */
const shots = [
  { src: "/projects/rewardtalk-1.jpg", name: "RewardTalk", desc: "로컬 멤버십" },
  { src: "/projects/cocoping-1.jpg", name: "CocoPing", desc: "코스트코 할인정보" },
  { src: "/projects/travelmoa-1.jpg", name: "TravelMoa", desc: "여행 특가·항공권" },
];

export default function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#F8FAFF] py-20 lg:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">
            Showcase
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#191F28] tracking-tight keep-all">
            실제로 만드는 회사입니다
          </h2>
        </div>

        <div className="flex gap-5 lg:gap-8 justify-start lg:justify-center overflow-x-auto pb-4 scrollbar-hide">
          {shots.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 w-[200px] lg:w-[230px]"
            >
              {/* 폰 목업 프레임 */}
              <div className="rounded-[2rem] border-[6px] border-[#191F28] bg-[#191F28] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={`${s.name} 앱 화면`}
                  className="w-full aspect-[9/19] object-cover object-top bg-white"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-[#191F28] font-extrabold text-sm">{s.name}</p>
                <p className="text-[#8B95A1] text-xs mt-0.5">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
