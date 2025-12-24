import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { QuoteEngine } from "@/components/QuoteEngine";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { TrustBar } from "@/components/TrustBar";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Testimonials } from "@/components/Testimonials";
import { COIGuarantee } from "@/components/COIGuarantee";
import { RiskVisualizer } from "@/components/RiskVisualizer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title="HoodVent Insurance | #1 Rated for Commercial Kitchen Contractors" 
        description="Specialized general liability and pollution insurance for hood cleaning, fire suppression, and grease trap contractors. Get a quote in minutes."
      />
      <Navigation />
      
      {/* 1. The Hook */}
      <HeroSection />
      
      {/* 2. Authority */}
      <TrustBar />
      
      {/* 3. The Pain/Problem (Why standard agents fail) */}
      <ProblemSolution />
      
      {/* 4. The Solution (The Tool) */}
      <QuoteEngine />
      
      {/* 5. The Benefit (Speed/Money) */}
      <COIGuarantee />
      
      {/* 6. Trust Signals */}
      <Features />
      
      {/* 7. Social Proof */}
      <Testimonials />
      
      {/* 8. Reinforce the Need (Fear of Risk) */}
      <RiskVisualizer />
      
      {/* 9. Objection Handling */}
      <FAQ />
      
      <Footer />
    </div>
  );
};

export default Index;
