import type { Metadata } from "next";
import ProjectsContent from "@/components/pages/ProjectsContent";
import { PROJECTS_PAGE } from "@/lib/dict-pages";
import { hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: PROJECTS_PAGE.ko.metaTitle,
  description: PROJECTS_PAGE.ko.metaDesc,
  alternates: {
    canonical: "/projects",
    languages: hreflangAlternates("/projects"),
  },
};

export default function ProjectsPage() {
  return <ProjectsContent locale="ko" />;
}
