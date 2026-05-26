import Hero from "@/components/sections/Hero";
import SellerSection from "@/components/sections/Seller";
import PartnerSection from "@/components/sections/PartnerSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        <section id="rewardtalk">
          <Hero />
        </section>
        <section id="sellerai">
          <SellerSection />
        </section>
        <section id="partner">
          <PartnerSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
