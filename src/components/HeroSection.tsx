import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const scrollToQuote = () => {
    document.getElementById("quote-engine")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-16 md:pb-0">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-background">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/hood-vent-insurance.jpg')" }}
        />
        {/* Subtle Gradient Overlay - Reduced opacity to let image show through */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background opacity-50" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mx-auto">
            <ShieldCheck className="w-4 h-4" />
            <span>#1 Rated Agency for Hood Cleaners</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
            The Best Price for <br />
            <span className="text-gradient">Hood Vent Insurance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We shop 20+ specialized carriers to find you the lowest rate for NFPA 96 compliant liability coverage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button 
              onClick={scrollToQuote}
              className="px-10 py-5 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl shadow-lg shadow-accent/25 transition-all hover:scale-105 flex items-center justify-center gap-2 text-lg"
            >
              Start My Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link to="/about">
              <button className="px-10 py-5 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center">
                Learn More
              </button>
            </Link>
          </div>

          <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Same-Day Certificates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>A+ Rated Carriers Only</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>NFPA 96 Expert Agents</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};