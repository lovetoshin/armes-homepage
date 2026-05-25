import Link from "next/link";
import ArmesMark from "@/components/ArmesMark";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  updatedAt: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, subtitle, updatedAt, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-[#191F28]">
      {/* Top nav bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#E5E8EB]">
        <div className="max-w-4xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArmesMark size={28} invert={false} className="group-hover:opacity-90 transition-opacity" />
            <span className="font-extrabold text-[#191F28] text-[15px] tracking-tight">ARMES</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-[#8B95A1] hover:text-[#191F28] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            홈으로
          </Link>
        </div>
      </div>

      {/* Page header */}
      <div className="pt-24 pb-10 bg-[#F8FAFF] border-b border-[#E5E8EB]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">
              주식회사 아르메스
            </p>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-[#191F28] mb-3 tracking-tight">{title}</h1>
            <p className="text-[#4E5968] text-[15px] mb-4">{subtitle}</p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FF] border border-[#C5D8FB] text-xs text-[#3182F6] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3182F6]" />
              최종 업데이트: {updatedAt}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 lg:px-8 py-14">
        <div className="legal-content max-w-3xl">
          {children}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#E5E8EB] py-8 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 flex flex-col sm:flex-row justify-between gap-4">
          <div className="text-xs text-[#8B95A1] space-y-1">
            <p className="font-semibold text-[#4E5968]">주식회사 아르메스</p>
            <p>사업자등록번호: 798-86-02943 &nbsp;·&nbsp; 대표자: 신지한</p>
            <p>경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호</p>
          </div>
          <div className="flex gap-4 text-xs text-[#8B95A1]">
            <Link href="/privacy" className="hover:text-[#4E5968] transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-[#4E5968] transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
