import type { Metadata } from "next";
import NewsListContent from "@/components/pages/NewsListContent";
import { NEWS_PAGE } from "@/lib/dict-pages";
import { hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: NEWS_PAGE.ko.metaTitle,
  description: NEWS_PAGE.ko.metaDesc,
  alternates: {
    canonical: "/news",
    languages: hreflangAlternates("/news"),
  },
};

export default function NewsPage() {
  return <NewsListContent locale="ko" />;
}
