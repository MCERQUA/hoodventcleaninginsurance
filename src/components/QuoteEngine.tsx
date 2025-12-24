import { FileText, ShieldAlert } from "lucide-react";
import { QuoteWizardForm } from "./QuoteWizardForm";

export const QuoteEngine = () => {
  return (
    <section className="relative py-32 bg-primary/5" id="quote-engine">
      {/* Wave Separator Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Sales Copy */}
          <div className="text-left space-y-8">
          <h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="text-primary">Smart Rate</span>
            <span className="text-foreground ml-3">Finder</span>
          </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">We Shop The Market</h3>
                  <p className="text-muted-foreground">You fill out one form. We bid your policy out to 20+ specialized carriers to force them to compete.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <ShieldAlert className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">No "General" Policies</h3>
                  <p className="text-muted-foreground">We only place you with carriers who understand Hood Cleaning. No "surprise" exclusions.</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mt-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-background" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white ml-2">2,400+ Contractors Insured</span>
              </div>
              <p className="text-xs text-muted-foreground">Join the largest network of insured hood cleaners in the USA.</p>
            </div>
          </div>

          {/* Right Column: The Wizard */}
          <div className="bg-card border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <QuoteWizardForm />
          </div>
        </div>
      </div>
    </section>
  );
};