import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { RiskVisualizer } from "@/components/RiskVisualizer";
import { QuoteEngine } from "@/components/QuoteEngine";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <RiskVisualizer />
      <QuoteEngine />
      <Footer />
    </div>
  );
};

export default Index;
