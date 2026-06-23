import type { Metadata } from "next";
import CompanyHero from "@/components/sections/CompanyHero";
import Showcase from "@/components/sections/Showcase";
import TechnologySection from "@/components/sections/TechnologySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
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
        <Showcase />
        <TechnologySection />
        <ProjectsSection />
        <CompanyCTA />
      </main>
      <Footer />
    </div>
  );
}
