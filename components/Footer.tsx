import Link from "next/link";
import ArmesMark from "./ArmesMark";
import { localize, type Locale } from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";

export default function Footer({ locale = "ko" }: { locale?: Locale }) {
  const f = getUI(locale).footer;

  // 문의 링크(중간 열) — 페이지 이동 메뉴는 상단바가 담당하므로 푸터는 문의·정책만 남긴다
  const contactLinks = [
    { name: f.links.partner, href: localize("/contact", locale) },
    { name: f.links.privacy, href: localize("/privacy", locale) },
    { name: f.links.terms, href: localize("/terms", locale) },
  ];

  return (
    <footer className="bg-[#F9FAFB] border-t border-[#E5E8EB]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* 왼쪽 — 브랜드 + 한 줄 태그라인 */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <ArmesMark size={32} invert={false} />
              <span className="font-extrabold text-[#191F28] text-[17px]">ARMES</span>
            </div>
            <p className="text-[#8B95A1] text-sm leading-relaxed whitespace-nowrap">
              {f.tagline}
            </p>
          </div>

          {/* 중간 — 문의·정책 */}
          <ul className="space-y-3">
            {contactLinks.map((link) => (
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

          {/* 오른쪽 — 사업자 정보 */}
          <div className="space-y-1.5 lg:text-right">
            <p className="text-[#4E5968] text-[13px] font-bold">{f.legal.company}</p>
            <p className="text-[#8B95A1] text-xs">{f.legal.bizno} &nbsp;·&nbsp; {f.legal.ceo}</p>
            <p className="text-[#8B95A1] text-xs">{f.legal.address}</p>
            <p className="text-[#8B95A1] text-xs">070-4544-7659 &nbsp;·&nbsp; support.armes@gmail.com</p>
            <p className="text-[#C5C9CF] text-xs pt-2">{f.legal.copyright}</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
