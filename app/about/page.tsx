import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";
import { ABOUT } from "@/lib/dict-pages";
import { hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: ABOUT.ko.metaTitle,
  description: ABOUT.ko.metaDesc,
  alternates: {
    canonical: "/about",
    languages: hreflangAlternates("/about"),
  },
};

export default function AboutPage() {
  return <AboutContent locale="ko" />;
}
