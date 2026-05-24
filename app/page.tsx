import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Hero from "@/components/sections/Hero";
import Ecosystem from "@/components/sections/Ecosystem";
import Experience from "@/components/sections/Experience";
import Seller from "@/components/sections/Seller";
import Vision from "@/components/sections/Vision";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Ecosystem />
        <Experience />
        <Seller />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
