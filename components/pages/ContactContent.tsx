import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { CONTACT } from "@/lib/dict-pages";
import { type Locale } from "@/lib/i18n";

const CARD_ICONS = ["🏪", "🤖", "🤝"];
const CARD_COLORS = ["bg-orange-50 border-orange-100", "bg-blue-50 border-blue-100", "bg-green-50 border-green-100"];

// 문의 페이지 본문 — 한국어/영어/중국어 공유
export default function ContactContent({ locale = "ko" }: { locale?: Locale }) {
  const t = CONTACT[locale];

  const directItems = [
    { icon: "📞", label: t.contactLabels.phone, value: "010-4995-9867", href: "tel:01049959867" },
    { icon: "✉️", label: t.contactLabels.email, value: "support.armes@gmail.com", href: "mailto:support.armes@gmail.com" },
    { icon: "📍", label: t.contactLabels.address, value: t.addressValue, href: null as string | null },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="pt-24 pb-12 bg-[#F8FAFF]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#EBF3FF] text-[#3182F6] text-xs font-bold px-4 py-2 rounded-full mb-5">
            ✦ {t.heroBadge}
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#191F28] tracking-tight leading-[1.15] mb-4">
            {t.h1Pre}
            <br />
            <span className="text-[#3182F6]">{t.h1Hl}</span>
          </h1>
          <p className="text-[#4E5968] text-[17px] leading-relaxed max-w-xl keep-all">
            {t.heroDesc}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14 pb-24">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
          {/* Left: Info */}
          <div className="space-y-4">
            <div className="space-y-3">
              {t.cards.map((c, i) => (
                <div key={c.title} className={`p-5 rounded-2xl border ${CARD_COLORS[i]}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{CARD_ICONS[i]}</span>
                    <div>
                      <h3 className="text-[#191F28] font-extrabold text-sm mb-1">{c.title}</h3>
                      <p className="text-[#4E5968] text-xs leading-relaxed keep-all">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 직접 연락 */}
            <div className="p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB]">
              <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-4">{t.directLabel}</p>
              <div className="space-y-3">
                {directItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-base mt-0.5 w-5 text-center flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-xs text-[#8B95A1] mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-[#191F28] hover:text-[#3182F6] transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#191F28] whitespace-pre-line font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 운영 시간 */}
            <div className="p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB]">
              <p className="text-xs text-[#8B95A1] font-bold uppercase tracking-widest mb-3">{t.hoursLabel}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#4E5968]">{t.hours.weekday}</span>
                  <span className="text-[#191F28] font-semibold">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4E5968]">{t.hours.weekend}</span>
                  <span className="text-[#8B95A1]">{t.hours.weekendValue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4E5968]">{t.hours.avg}</span>
                  <span className="text-[#3182F6] font-semibold">{t.hours.avgValue}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border border-[#E5E8EB] rounded-3xl p-7 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <h2 className="text-lg font-extrabold text-[#191F28] mb-1">{t.formHeading}</h2>
            <p className="text-[#8B95A1] text-sm mb-7">{t.formSubtitle}</p>
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>

      {/* 하단 간이 푸터 */}
      <div className="border-t border-[#E5E8EB] py-8 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#C5C9CF] text-xs">{t.footerCopyright}</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-[#8B95A1] hover:text-[#4E5968] text-xs transition-colors">{t.footerPrivacy}</Link>
            <Link href="/terms" className="text-[#8B95A1] hover:text-[#4E5968] text-xs transition-colors">{t.footerTerms}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
