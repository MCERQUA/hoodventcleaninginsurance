import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QuoteWizardForm } from "./QuoteWizardForm";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show button after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsVisible(false)} 
            className="absolute -top-2 -right-2 bg-background border border-white/10 rounded-full p-1 text-muted-foreground hover:text-white shadow-lg z-10"
          >
            <X className="w-3 h-3" />
          </button>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button className="flex items-center gap-3 px-6 py-4 bg-accent text-white font-bold rounded-full shadow-2xl hover:bg-accent/90 transition-transform hover:scale-105 group border-2 border-white/10">
                <div className="relative">
                  <Phone className="w-6 h-6 animate-pulse" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-accent animate-ping" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-medium opacity-90">Questions?</div>
                  <div className="text-lg leading-none">Get a Quote</div>
                </div>
              </button>
            </DialogTrigger>
            
            <DialogContent className="max-w-2xl bg-card border-white/10 p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="p-6 bg-primary/10 border-b border-white/10">
                <DialogTitle className="text-2xl font-bold text-white mb-2">Get Your Custom Quote</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Complete the form below or call us directly.
                </DialogDescription>
                
                <a 
                  href="tel:8449675247"
                  className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  Call Now: 844-967-5247
                </a>
              </div>

              {/* Form Body */}
              <div className="p-6">
                <QuoteWizardForm onComplete={() => setTimeout(() => setIsOpen(false), 2000)} />
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
