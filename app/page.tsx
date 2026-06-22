import CompanyHero from "@/components/sections/CompanyHero";
import TechnologySection from "@/components/sections/TechnologySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CompanyCTA from "@/components/sections/CompanyCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        <CompanyHero />
        <TechnologySection />
        <ProjectsSection />
        <CompanyCTA />
      </main>
      <Footer />
    </div>
  );
}
