import Link from "next/link";
import ArmesMark from "./ArmesMark";
import { localize, type Locale } from "@/lib/i18n";
import { getUI } from "@/lib/dictionary";

export default function Footer({ locale = "ko" }: { locale?: Locale }) {
  const f = getUI(locale).footer;

  const footerNav = {
    [f.groups.company]: [
      { name: f.links.about, href: localize("/about", locale) },
      { name: f.links.allProjects, href: localize("/#projects", locale) },
    ],
    [f.groups.projects]: [
      { name: "SellerAI", href: "https://www.armes.co.kr/sellerai/studio" },
      { name: f.links.allProjects, href: localize("/#projects", locale) },
    ],
    [f.groups.tech]: [
      { name: f.links.techIntro, href: localize("/#technology", locale) },
    ],
    [f.groups.news]: [
      { name: f.links.news, href: localize("/news", locale) },
      { name: f.links.blog, href: localize("/blog", locale) },
    ],
    [f.groups.contact]: [
      { name: f.links.partner, href: localize("/contact", locale) },
      { name: f.links.privacy, href: localize("/privacy", locale) },
      { name: f.links.terms, href: localize("/terms", locale) },
    ],
  };

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
              {f.tagline}
            </p>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#C5D8FB] bg-[#EBF3FF] text-[#3182F6] text-[11px] font-bold">
              AI Service Company
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
              <p className="text-[#4E5968] text-[13px] font-bold">{f.legal.company}</p>
              <p className="text-[#8B95A1] text-xs">{f.legal.bizno} &nbsp;·&nbsp; {f.legal.ceo}</p>
              <p className="text-[#8B95A1] text-xs">{f.legal.address}</p>
              <p className="text-[#8B95A1] text-xs">010-4995-9867 &nbsp;·&nbsp; support.armes@gmail.com</p>
            </div>
            <p className="text-[#C5C9CF] text-xs self-end">{f.legal.copyright}</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
