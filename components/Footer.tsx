import Link from "next/link";
import ArmesMark from "./ArmesMark";

const footerNav = {
  서비스: [
    { name: "RewardTalk", href: "#rewardtalk" },
    { name: "Seller AI", href: "/sellerai" },
    { name: "지역 공동구매", href: "#" },
    { name: "매장 운영 SaaS", href: "#" },
  ],
  파트너: [
    { name: "매장 파트너 신청", href: "/contact" },
    { name: "Seller AI 파트너", href: "/contact" },
    { name: "기업 제휴", href: "/contact" },
    { name: "투자 문의", href: "/contact" },
  ],
  고객지원: [
    { name: "고객센터", href: "/contact" },
    { name: "자주 묻는 질문", href: "#" },
    { name: "개인정보처리방침", href: "/privacy" },
    { name: "이용약관", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] border-t border-[#E5E8EB]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        {/* Main grid */}
        <div className="py-14 grid grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <ArmesMark size={32} invert={false} />
              <span className="font-extrabold text-[#191F28] text-[17px]">ARMES</span>
            </div>
            <p className="text-[#8B95A1] text-sm leading-relaxed mb-5 max-w-[200px]">
              일상의 소비와 지역을 연결하는 차세대 로컬 플랫폼
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "RewardTalk", color: "text-orange-600 bg-orange-50 border-orange-200" },
                { label: "Seller AI",  color: "text-blue-600  bg-blue-50  border-blue-200"  },
              ].map((b) => (
                <span key={b.label} className={`px-2.5 py-1 rounded-full border text-[11px] font-bold ${b.color}`}>
                  {b.label}
                </span>
              ))}
            </div>
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
              <p className="text-[#8B95A1] text-xs">대표번호: 010-4995-9867 &nbsp;·&nbsp; support@armes.co.kr</p>
            </div>
            <p className="text-[#C5C9CF] text-xs self-end">© 2024 주식회사 아르메스. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
