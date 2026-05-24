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
    <div className="min-h-screen bg-[#09090B] text-white">
      {/* Top nav bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#09090B]/90 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArmesMark size={28} className="group-hover:opacity-90 transition-opacity" />
            <span className="font-bold text-white text-[15px] tracking-tight">ARMES</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            홈으로
          </Link>
        </div>
      </div>

      {/* Page header */}
      <div className="pt-28 pb-12 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs text-zinc-500 font-semibold uppercase tracking-widest mb-3">
              주식회사 아르메스
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">{title}</h1>
            <p className="text-zinc-400 text-[15px] mb-4">{subtitle}</p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
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
      <div className="border-t border-white/[0.05] py-8">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 flex flex-col sm:flex-row justify-between gap-4">
          <div className="text-xs text-zinc-600 space-y-1">
            <p className="font-medium text-zinc-500">주식회사 아르메스</p>
            <p>사업자등록번호: 798-86-02943 &nbsp;·&nbsp; 대표자: 신지한</p>
            <p>경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호</p>
          </div>
          <div className="flex gap-4 text-xs text-zinc-600">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
