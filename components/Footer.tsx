import Link from "next/link";
import ArmesMark from "./ArmesMark";

const footerNav = {
  서비스: [
    { name: "RewardTalk", href: "#" },
    { name: "Seller AI", href: "/sellerai" },
    { name: "지역 공동구매", href: "#" },
    { name: "매장 운영 SaaS", href: "#" },
    { name: "통합 멤버십 인프라", href: "#" },
  ],
  파트너: [
    { name: "매장 파트너 신청", href: "/contact" },
    { name: "셀러 파트너", href: "/contact" },
    { name: "기업 제휴", href: "/contact" },
    { name: "투자 문의", href: "/contact" },
  ],
  회사: [
    { name: "회사소개", href: "#" },
    { name: "팀", href: "#" },
    { name: "채용", href: "#" },
    { name: "뉴스룸", href: "#" },
  ],
  고객지원: [
    { name: "고객센터", href: "/contact" },
    { name: "공지사항", href: "#" },
    { name: "자주 묻는 질문", href: "#" },
    { name: "파트너 지원", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#09090B] border-t border-white/[0.05]">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* ── Main footer grid ── */}
        <div className="py-14 grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">

          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <ArmesMark size={32} />
              <span className="font-bold text-white text-[17px] tracking-tight">ARMES</span>
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed mb-5 max-w-[220px]">
              일상의 소비와 지역을 연결하는 차세대 로컬 플랫폼
            </p>

            {/* Service badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "RewardTalk", color: "text-orange-400 bg-orange-400/8 border-orange-400/15" },
                { label: "Seller AI", color: "text-violet-400 bg-violet-400/8 border-violet-400/15" },
              ].map((b) => (
                <span
                  key={b.label}
                  className={`px-2.5 py-1 rounded-full border text-[11px] font-semibold ${b.color}`}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-zinc-300 font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 hover:text-zinc-200 text-sm transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Legal info ── */}
        <div className="border-t border-white/[0.05] py-8">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            {/* Company info */}
            <div className="space-y-1.5">
              <p className="text-zinc-400 text-[13px] font-semibold">주식회사 아르메스</p>
              <p className="text-zinc-600 text-xs leading-relaxed">
                사업자등록번호: 798-86-02943 &nbsp;·&nbsp; 대표자: 신지한
              </p>
              <p className="text-zinc-600 text-xs leading-relaxed">
                경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호 (경복대학교 창업보육센터)
              </p>
              <p className="text-zinc-600 text-xs">
                대표번호: 010-4995-9867 &nbsp;·&nbsp; 이메일: support@armes.co.kr
              </p>
            </div>

            {/* Legal links + copyright */}
            <div className="flex flex-col items-start lg:items-end gap-3">
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "개인정보처리방침", href: "/privacy" },
                  { name: "이용약관", href: "/terms" },
                  { name: "서비스 운영정책", href: "#" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-zinc-600 hover:text-zinc-300 text-xs transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <p className="text-zinc-700 text-xs">
                © 2024 주식회사 아르메스. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
