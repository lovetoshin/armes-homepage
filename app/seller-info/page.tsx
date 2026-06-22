import type { Metadata } from "next";
import Link from "next/link";
import SellerPricingCards from "@/components/SellerPricingCards";

export const metadata: Metadata = {
  title: "Seller AI | ARMES — AI 이미지 자동화 도구",
  description: "쿠팡·스마트스토어 셀러를 위한 AI 기반 이미지·상세페이지 생성 도구.",
};

const tools = [
  { icon: "📸", title: "모델컷 / 제품컷 생성", desc: "상품 사진 한 장으로 모델 착용 컷 4장 자동 생성", details: ["정면·측면·앉은·자유 포즈 4컷", "카테고리별 최적화", "여성·남성 모델 선택", "50T / 생성"], color: "bg-blue-50 border-blue-100", iconBg: "bg-blue-100 text-blue-600" },
  { icon: "✂️", title: "모델컷 → 누끼컷",     desc: "모델 착용 사진에서 제품만 투명 PNG로 추출",     details: ["최대 8장 동시 처리", "포즈 개별 지정", "그림자 추가 옵션", "50T / 생성"],             color: "bg-green-50 border-green-100", iconBg: "bg-green-100 text-green-600" },
  { icon: "👤", title: "누끼컷 → 모델컷",     desc: "제품 누끼 이미지를 모델 착용 사진으로 변환",     details: ["최대 8장 동시 처리", "성별·포즈 개별 지정", "다양한 카테고리 지원", "50T / 생성"],   color: "bg-purple-50 border-purple-100", iconBg: "bg-purple-100 text-purple-600" },
  { icon: "🔄", title: "제품 교체",           desc: "모델 사진 + 제품 사진 AI 합성으로 자연스럽게 교체", details: ["최대 4쌍 동시 처리", "텍스트로 교체 지정", "자연스러운 합성", "50T / 생성"],      color: "bg-orange-50 border-orange-100", iconBg: "bg-orange-100 text-orange-600" },
  { icon: "📄", title: "상세페이지 자동 생성", desc: "쿠팡·스마트스토어용 HTML 상세페이지 즉시 생성",   details: ["브랜드 프로필 저장", "배송·교환·반품 자동 포함", "상품정보 고시 자동", "250T / 생성"],  color: "bg-pink-50 border-pink-100", iconBg: "bg-pink-100 text-pink-600" },
  { icon: "🗂️", title: "생성 보관함",          desc: "생성한 모든 이미지·상세페이지 통합 관리",         details: ["이미지 PNG/JPG 다운로드", "상세페이지 JPG 다운로드", "생성 이력 전체 보관", "무제한"],  color: "bg-zinc-50 border-zinc-200", iconBg: "bg-zinc-100 text-zinc-600" },
];


export default function SellerInfoPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="pt-28 pb-20 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 bg-[#EBF3FF] text-[#3182F6] text-xs font-bold px-4 py-2 rounded-full mb-6">
            ✦ Seller AI · 출시
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#191F28] tracking-tight leading-[1.1] mb-6">
            쿠팡·스마트스토어 셀러를 위한
            <br />
            <span className="text-[#3182F6]">AI 이미지 자동화</span>
          </h1>
          <p className="text-[#4E5968] text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            상품 사진 한 장으로 모델 착용컷을 만들고, 누끼를 따고,
            상세페이지까지 — 반복 작업을 AI가 대신합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.armes.co.kr/sellerai/studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#3182F6] hover:bg-[#1B64DA] text-white px-8 py-4 rounded-2xl font-bold text-[15px] transition-all shadow-[0_4px_16px_rgba(49,130,246,0.3)]"
            >
              Seller AI 앱 바로가기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#E5E8EB] text-[#191F28] px-8 py-4 rounded-2xl font-bold text-[15px] hover:bg-[#F2F4F6] transition-all"
            >
              파트너 신청하기
            </Link>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">AI Tools</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#191F28] tracking-tight">6가지 이미지 자동화 도구</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {tools.map((tool) => (
            <div key={tool.title} className={`p-6 rounded-3xl border ${tool.color} hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow`}>
              <div className={`w-12 h-12 rounded-2xl ${tool.iconBg} flex items-center justify-center mb-4 text-2xl`}>{tool.icon}</div>
              <h3 className="text-[#191F28] font-extrabold text-base mb-2">{tool.title}</h3>
              <p className="text-[#4E5968] text-sm leading-relaxed mb-4">{tool.desc}</p>
              <ul className="space-y-1.5">
                {tool.details.map((d, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[#8B95A1]">
                    <span className="w-1 h-1 rounded-full bg-[#C5C9CF] flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── 요금제 ── */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#191F28] tracking-tight mb-3">요금제</h2>
          <p className="text-[#4E5968]">셀러 자동화에 최적화된 플랜을 선택하세요</p>
        </div>

        <SellerPricingCards />

        {/* 토스페이먼츠 */}
        <div className="flex items-center justify-center gap-2 text-sm text-[#8B95A1] mb-16">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
          결제는 토스페이먼츠를 통해 안전하게 처리됩니다.
        </div>

        {/* 포함 기능 + 토큰 안내 */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* 포함 기능 */}
          <div className="bg-[#F8FAFF] rounded-3xl p-7 border border-[#E5E8EB]">
            <h3 className="text-[#191F28] font-extrabold text-lg mb-5">포함 기능</h3>
            <div className="flex flex-wrap gap-4 mb-5">
              {[
                { icon: "📸", label: "모델컷/제품컷\n생성" },
                { icon: "✂️", label: "모델컷 > 누끼컷\n변환" },
                { icon: "👤", label: "누끼컷 > 모델컷\n변환" },
                { icon: "🔄", label: "제품 교체" },
                { icon: "📄", label: "상세페이지\n생성" },
              ].map((f) => (
                <div key={f.label} className="flex flex-col items-center gap-1.5 text-center">
                  <div className="w-12 h-12 bg-white border border-[#E5E8EB] rounded-2xl flex items-center justify-center text-xl shadow-sm">{f.icon}</div>
                  <p className="text-xs text-[#4E5968] whitespace-pre-line leading-tight">{f.label}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-[#3182F6]">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              모든 플랜에서 전체 기능을 이용하실 수 있습니다.
            </div>
          </div>

          {/* 토큰 안내 */}
          <div className="bg-[#F8FAFF] rounded-3xl p-7 border border-[#E5E8EB]">
            <h3 className="text-[#191F28] font-extrabold text-lg mb-5">토큰 안내</h3>
            <div className="space-y-3 mb-5">
              <div className="flex items-center justify-between bg-white rounded-2xl px-4 py-3 border border-[#E5E8EB]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center text-base">📸</div>
                  <span className="text-sm text-[#4E5968]">사진 관련 기능 (모델컷/누끼컷/제품교체 등)</span>
                </div>
                <span className="font-extrabold text-[#3182F6] text-sm flex-shrink-0">50 토큰</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-2xl px-4 py-3 border border-[#E5E8EB]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-50 rounded-xl flex items-center justify-center text-base">📄</div>
                  <span className="text-sm text-[#4E5968]">상세페이지 생성</span>
                </div>
                <span className="font-extrabold text-pink-500 text-sm flex-shrink-0">250 토큰</span>
              </div>
            </div>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-1.5 text-xs text-[#8B95A1]">
                <span className="mt-1 w-1 h-1 rounded-full bg-[#C5C9CF] flex-shrink-0" />
                토큰은 월 단위로 제공되며, 사용한 만큼 차감됩니다.
              </li>
              <li className="flex items-start gap-1.5 text-xs text-[#8B95A1]">
                <span className="mt-1 w-1 h-1 rounded-full bg-[#C5C9CF] flex-shrink-0" />
                남은 토큰은 이월되지 않습니다.
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm text-[#8B95A1]">
          ※ 토큰은 소진 시까지 자유롭게 사용 가능하며, 기능별 제한 없이 이용하실 수 있습니다.
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-[#E5E8EB] py-8 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#C5C9CF] text-xs">© 2024 주식회사 아르메스. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-[#8B95A1] hover:text-[#4E5968] text-xs transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="text-[#8B95A1] hover:text-[#4E5968] text-xs transition-colors">이용약관</Link>
            <Link href="/contact" className="text-[#8B95A1] hover:text-[#4E5968] text-xs transition-colors">문의하기</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
