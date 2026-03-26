import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import WhyUsSection from "@/components/WhyUsSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <ServicesSection />
        <WorkSection />
        <WhyUsSection />
        <ComparisonSection />
        <PricingSection />
        <BlogSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
