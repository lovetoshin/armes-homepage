import type { Metadata } from "next";
import CompanyHero from "@/components/sections/CompanyHero";
import TechnologySection from "@/components/sections/TechnologySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutPreview from "@/components/sections/AboutPreview";
import CompanyCTA from "@/components/sections/CompanyCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        <CompanyHero />
        <TechnologySection />
        <ProjectsSection />
        <AboutPreview />
        <CompanyCTA />
      </main>
      <Footer />
    </div>
  );
}
