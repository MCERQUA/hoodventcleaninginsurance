import { motion } from "framer-motion";
import { useState } from "react";
import { Building2, Users, DollarSign, Calendar, ArrowRight } from "lucide-react";

const formSteps = [
  {
    icon: Building2,
    title: "Facility Type",
    options: ["Restaurant", "Hotel", "Hospital", "School", "Food Truck"],
  },
  {
    icon: Users,
    title: "Kitchen Size",
    options: ["Small (< 500 sq ft)", "Medium (500-1000 sq ft)", "Large (> 1000 sq ft)"],
  },
  {
    icon: DollarSign,
    title: "Coverage Amount",
    options: ["$100K", "$250K", "$500K", "$1M+"],
  },
  {
    icon: Calendar,
    title: "Start Date",
    options: ["Immediate", "Within 30 days", "Within 60 days"],
  },
];

export const QuoteEngine = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [showQuote, setShowQuote] = useState(false);

  const handleSelection = (option: string) => {
    const newSelections = [...selections];
    newSelections[currentStep] = option;
    setSelections(newSelections);

    if (currentStep < formSteps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowQuote(true), 300);
    }
  };

  const resetForm = () => {
    setCurrentStep(0);
    setSelections([]);
    setShowQuote(false);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-black mb-6"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-foreground">Quote Engine</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your personalized quote in seconds
          </p>
        </motion.div>

        {!showQuote ? (
          <div className="glass-strong rounded-3xl p-8 md:p-12 border border-white/20">
            {/* Progress Indicators */}
            <div className="flex justify-between mb-12">
              {formSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{
                      scale: idx <= currentStep ? 1 : 0.8,
                      opacity: idx <= currentStep ? 1 : 0.5,
                    }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      idx < currentStep
                        ? "bg-accent"
                        : idx === currentStep
                        ? "bg-gradient-to-br from-primary to-secondary glow-cyan"
                        : "glass-card"
                    }`}
                  >
                    <step.icon className="w-6 h-6" />
                  </motion.div>
                  {idx < formSteps.length - 1 && (
                    <div className="hidden md:block h-1 flex-1 mx-2 bg-muted/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: idx < currentStep ? "100%" : "0%" }}
                        className="h-full bg-accent"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Current Step */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                {formSteps[currentStep].title}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {formSteps[currentStep].options.map((option) => (
                  <motion.button
                    key={option}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelection(option)}
                    className={`glass-card rounded-2xl p-6 text-left transition-all duration-300 border-2 ${
                      selections[currentStep] === option
                        ? "border-accent glow-lime"
                        : "border-transparent hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{option}</span>
                      <ArrowRight
                        className={`w-5 h-5 transition-transform ${
                          selections[currentStep] === option ? "translate-x-2" : ""
                        }`}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Back Button */}
            {currentStep > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setCurrentStep(currentStep - 1)}
                className="mt-8 px-6 py-3 rounded-xl glass-card hover:bg-white/10 transition-colors"
              >
                ← Back
              </motion.button>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-strong rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center glow-lime"
              >
                <DollarSign className="w-12 h-12 text-accent-foreground" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-4">Your Instant Quote</h3>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-6xl font-black bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent mb-8"
              >
                $1,247/year
              </motion.div>
            </div>

            <div className="space-y-4 mb-8">
              {formSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex justify-between items-center p-4 glass-card rounded-xl"
                >
                  <span className="text-muted-foreground">{step.title}</span>
                  <span className="font-semibold">{selections[idx]}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-bold text-lg glow-lime"
              >
                Get Coverage Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetForm}
                className="flex-1 px-8 py-4 rounded-2xl glass-card border-2 border-primary hover:glow-cyan font-bold text-lg"
              >
                Start Over
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
