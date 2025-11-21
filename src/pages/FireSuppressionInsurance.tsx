import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Flame, AlertCircle } from "lucide-react";

const features = [
  "24/7 Emergency Response Coverage",
  "Annual System Inspections Included",
  "NFPA 96 Compliance Guarantee",
  "Automatic Equipment Replacement",
  "Fire Department Liaison Services",
  "Business Interruption Protection",
];

const coverage = [
  {
    title: "System Damage",
    description: "Full coverage for fire suppression equipment damage",
    amount: "Up to $500K",
  },
  {
    title: "Installation & Repair",
    description: "Emergency repairs and system upgrades",
    amount: "Up to $250K",
  },
  {
    title: "Liability Protection",
    description: "Third-party injury and property damage",
    amount: "Up to $1M",
  },
  {
    title: "Code Compliance",
    description: "Updates required for regulatory compliance",
    amount: "Up to $100K",
  },
];

const FireSuppressionInsurance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 mb-6">
              <Flame className="w-10 h-10 text-white" />
            </div>
            <h1
              className="text-5xl md:text-7xl font-black mb-6"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Fire Suppression
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                System Insurance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive protection for your commercial kitchen's first line of defense against fire hazards
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-bold text-lg glow-lime"
            >
              Get Quote Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl glass-strong border-2 border-primary font-bold text-lg hover:glow-cyan"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <CheckCircle className="w-8 h-8 text-accent mb-4" />
                <p className="font-semibold">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-20 bg-gradient-to-b from-transparent to-background/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Coverage <span className="text-primary">Breakdown</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive protection tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverage.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-strong rounded-3xl p-8 border border-white/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <Shield className="w-12 h-12 text-primary flex-shrink-0" />
                </div>
                <div className="text-3xl font-black text-accent">{item.amount}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-12 text-center border border-white/20"
          >
            <AlertCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Wait for a Fire Emergency
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Protect your investment with comprehensive fire suppression insurance today
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-2xl bg-accent text-accent-foreground font-bold text-xl glow-lime"
            >
              Get Protected Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FireSuppressionInsurance;
