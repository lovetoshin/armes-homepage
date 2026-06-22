import Link from "next/link";
import ArmesMark from "./ArmesMark";

const footerNav = {
  회사: [
    { name: "회사소개", href: "/about" },
    { name: "프로젝트", href: "/projects" },
  ],
  프로젝트: [
    { name: "SellerAI", href: "/sellerai" },
    { name: "전체 보기", href: "/projects" },
  ],
  기술: [
    { name: "기술 소개", href: "/#technology" },
  ],
  소식: [
    { name: "News", href: "/news" },
    { name: "Blog", href: "/blog" },
  ],
  문의: [
    { name: "파트너·제휴 문의", href: "/contact" },
    { name: "개인정보처리방침", href: "/privacy" },
    { name: "이용약관", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] border-t border-[#E5E8EB]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        {/* Main grid */}
        <div className="py-14 grid grid-cols-2 lg:grid-cols-7 gap-8">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <ArmesMark size={32} invert={false} />
              <span className="font-extrabold text-[#191F28] text-[17px]">ARMES</span>
            </div>
            <p className="text-[#8B95A1] text-sm leading-relaxed mb-5 max-w-[210px]">
              AI 기술로 일상을 자동화하는 회사
            </p>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#C5D8FB] bg-[#EBF3FF] text-[#3182F6] text-[11px] font-bold">
              AI Technology Company
            </span>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#191F28] font-bold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#8B95A1] hover:text-[#4E5968] text-sm transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="border-t border-[#E5E8EB] py-8">
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <div className="space-y-1.5">
              <p className="text-[#4E5968] text-[13px] font-bold">주식회사 아르메스</p>
              <p className="text-[#8B95A1] text-xs">사업자등록번호: 798-86-02943 &nbsp;·&nbsp; 대표자: 신지한</p>
              <p className="text-[#8B95A1] text-xs">경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호</p>
              <p className="text-[#8B95A1] text-xs">대표번호: 010-4995-9867 &nbsp;·&nbsp; support.armes@gmail.com</p>
            </div>
            <p className="text-[#C5C9CF] text-xs self-end">© 2026 주식회사 아르메스. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
