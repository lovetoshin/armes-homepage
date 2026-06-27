import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";
import { CONTACT } from "@/lib/dict-pages";
import { hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: CONTACT.ko.metaTitle,
  description: CONTACT.ko.metaDesc,
  alternates: {
    canonical: "/contact",
    languages: hreflangAlternates("/contact"),
  },
};

export default function ContactPage() {
  return <ContactContent locale="ko" />;
}
