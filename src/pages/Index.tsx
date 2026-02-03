import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceHighlights from "@/components/ServiceHighlights";
import PricingSection from "@/components/PricingSection";
import ServicesGrid from "@/components/ServicesGrid";
import LocationsSection from "@/components/LocationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BrandsMarquee from "@/components/BrandsMarquee";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServiceHighlights />
        <BrandsMarquee />
        <ServicesGrid />
        <PricingSection />
        <LocationsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
