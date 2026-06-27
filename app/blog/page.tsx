import type { Metadata } from "next";
import BlogListContent from "@/components/pages/BlogListContent";
import { BLOG_PAGE } from "@/lib/dict-pages";
import { hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: BLOG_PAGE.ko.metaTitle,
  description: BLOG_PAGE.ko.metaDesc,
  alternates: {
    canonical: "/blog",
    languages: hreflangAlternates("/blog"),
  },
};

export default function BlogPage() {
  return <BlogListContent locale="ko" />;
}
