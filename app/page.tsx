import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import WhatsInside from "@/components/WhatsInside";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import PreviewSection from "@/components/PreviewSection";
import Testimonials from "@/components/Testimonials";
import ComparisonTable from "@/components/ComparisonTable";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import MoneyBack from "@/components/MoneyBack";
import StickyMobileBar from "@/components/StickyMobileBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Stats />
      <Features />
      <WhatsInside />
      <RoadmapTimeline />
      <PreviewSection />
      <Testimonials />
      <ComparisonTable />
      <Pricing />
      <FAQ />
      <MoneyBack />
      <Footer />
      <StickyMobileBar />
    </main>
  );
}
