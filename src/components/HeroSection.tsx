import { motion } from "framer-motion";
import { Shield, Flame, Wind, CheckCircle } from "lucide-react";
import { ParticleField } from "./ParticleField";

const floatingCards = [
  {
    icon: Shield,
    title: "Full Coverage",
    description: "Comprehensive protection",
    color: "from-primary to-primary/50",
    delay: 0,
  },
  {
    icon: Flame,
    title: "Fire Suppression",
    description: "Advanced safety systems",
    color: "from-secondary to-secondary/50",
    delay: 0.2,
  },
  {
    icon: Wind,
    title: "Ventilation",
    description: "Exhaust system insurance",
    color: "from-accent to-accent/50",
    delay: 0.4,
  },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Commercial Kitchen Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hood-vent-insurance.jpg')",
        }}
      />

      {/* Dark Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-background/80" />

      {/* Subtle Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      {/* Subtle Professional Highlights */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hood Vent Contractor
              </span>
              <br />
              <span className="text-foreground font-black">Insurance</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            >
              Specialized Coverage for Commercial Kitchen Exhaust System Professionals
            </motion.p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-bold text-lg glow-lime relative overflow-hidden group"
            >
              <span className="relative z-10">Get Instant Quote</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl glass-strong border-2 border-primary text-foreground font-bold text-lg hover:glow-cyan"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-20"
          >
            {[
              "24/7 Coverage",
              "AI Risk Assessment",
              "Instant Claims",
              "Zero Paperwork",
            ].map((benefit, idx) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + idx * 0.1 }}
                className="flex items-center space-x-2 glass-card px-4 py-2 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {floatingCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + card.delay, duration: 0.8 }}
              className="relative group"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4 + idx,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass-strong rounded-3xl p-8 hover:scale-105 transition-transform duration-500 border border-white/20"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  {card.title}
                </h3>
                <p className="text-muted-foreground">{card.description}</p>
                
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${card.color.split(' ')[1].replace('from-', '')}/20, transparent)`,
                    filter: "blur(20px)",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
