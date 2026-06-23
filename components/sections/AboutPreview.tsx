import Link from "next/link";

/**
 * About 미리보기 — 회사 정체성을 간략히 보여주고 /about으로 연결.
 * 자세한 내용(미션·비전·대표 스토리)은 /about 페이지가 담당한다.
 */
const points = [
  { icon: "🛍️", title: "유통 16년 경험", desc: "현장에서 겪은 진짜 불편을 압니다" },
  { icon: "🤖", title: "AI 서비스 개발", desc: "이미지·언어·비전·위치 기술을 직접 만듭니다" },
  { icon: "🚀", title: "7개 프로젝트", desc: "운영·준비·연구 단계로 확장 중입니다" },
];

export default function AboutPreview() {
  return (
    <section className="bg-[#F8FAFF] py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* 좌 — 회사 소개 */}
          <div>
            <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">
              About ARMES
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#191F28] leading-[1.25] tracking-tight mb-5 keep-all">
              AI 기술을 활용해
              <br />
              <span className="text-[#3182F6]">실제 생활 서비스</span>를 만드는 회사
            </h2>
            <p className="text-[#4E5968] text-base lg:text-lg leading-relaxed mb-8 keep-all">
              아르메스는 유통 현장에서 쌓은 16년의 경험을 바탕으로,
              사람들이 매일 반복하는 일을 AI가 대신하도록 만듭니다.
              화려한 기술보다 현장에서 실제로 쓰이는 서비스를 우선합니다.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#191F28] hover:bg-[#333D4B] text-white px-7 py-3.5 rounded-2xl font-bold text-[15px] transition-colors"
            >
              회사 소개 보기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* 우 — 핵심 3가지 */}
          <div className="space-y-4">
            {points.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-4 bg-white rounded-3xl border border-[#E5E8EB] p-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3FF] flex items-center justify-center text-2xl flex-shrink-0">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-[#191F28] font-extrabold text-base mb-1">{p.title}</h3>
                  <p className="text-[#8B95A1] text-sm leading-relaxed keep-all">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
