import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background with diagonal cut */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-900 transform -skew-y-3 origin-top-left scale-110 z-0" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* The Problem (Pain) */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold uppercase tracking-wider">
              <XCircle className="w-4 h-4" />
              <span>The Hidden Danger</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Why Generic Insurance Won't <br />
              <span className="text-red-500">Protect Your Hood Vent Cleaning Business</span>
            </h2>
            <div className="space-y-6">
              {[
                "Fire liability claims if a restaurant has a fire after your service",
                "Pollution claims from cleaning chemicals and grease disposal",
                "Equipment damage claims while working in commercial kitchens",
                "Gaps in coverage from standard business insurance policies"
              ].map((problem, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-red-500/5 rounded-lg border border-red-500/10">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                  <p className="text-lg text-white/80">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Solution (Benefit) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative glass-strong p-8 md:p-12 rounded-3xl border border-primary/30">
              <h3 className="text-2xl font-bold text-white mb-6">How Our Specialized Coverage Protects You</h3>
              <ul className="space-y-6">
                {[
                  "Completed operations coverage for fire liability protection",
                  "Pollution liability for chemical and grease-related claims",
                  "Equipment protection while working on customer premises",
                  "Industry-specific policies with no dangerous coverage gaps"
                ].map((solution, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-lg font-medium text-white">{solution}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-muted-foreground mb-4">
                  We don't cut corners. We get you coverage that actually pays out when you need it.
                </p>
                <button 
                  onClick={() => document.getElementById("quote-engine")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Check My Coverage <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
