import { motion } from "framer-motion";
import { AlertTriangle, Droplet, Thermometer, Zap, Wind, Clock } from "lucide-react";

const riskFactors = [
  {
    icon: AlertTriangle,
    title: "Fire Hazard",
    level: 85,
    coverage: "$500K",
    color: "from-red-500 to-orange-500",
    glow: "shadow-[0_0_30px_rgba(239,68,68,0.5)]",
    image: "/risk-images/fire-hazard.png",
  },
  {
    icon: Droplet,
    title: "Grease Buildup",
    level: 72,
    coverage: "$250K",
    color: "from-yellow-500 to-amber-500",
    glow: "shadow-[0_0_30px_rgba(234,179,8,0.5)]",
    image: "/risk-images/grease-buildup.png",
  },
  {
    icon: Thermometer,
    title: "Heat Damage",
    level: 68,
    coverage: "$300K",
    color: "from-orange-500 to-red-500",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.5)]",
    image: "/risk-images/heat-damage.png",
  },
  {
    icon: Zap,
    title: "Electrical Risk",
    level: 55,
    coverage: "$200K",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.5)]",
    image: "/risk-images/electrical-risk.png",
  },
  {
    icon: Wind,
    title: "Ventilation Failure",
    level: 90,
    coverage: "$600K",
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.5)]",
    image: "/risk-images/ventilation-failure.png",
  },
  {
    icon: Clock,
    title: "Wear & Tear",
    level: 45,
    coverage: "$150K",
    color: "from-purple-500 to-pink-500",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.5)]",
    image: "/risk-images/wear-tear.png",
  },
];

export const RiskVisualizer = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Interactive Risk
            </span>
            <br />
            <span className="text-foreground">Assessment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time risk analysis powered by AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riskFactors.map((risk, idx) => (
            <motion.div
              key={risk.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className={`relative overflow-hidden glass-strong rounded-3xl p-6 border border-white/20 transition-all duration-500 hover:${risk.glow}`}>
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundImage: `url('${risk.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${risk.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <risk.icon className="w-8 h-8 text-white" />
                  </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{risk.title}</h3>

                {/* Risk Level Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Risk Level</span>
                    <span className="font-semibold">{risk.level}%</span>
                  </div>
                  <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${risk.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${risk.color} rounded-full relative`}
                    >
                      <motion.div
                        animate={{ x: [0, 100, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        style={{ width: "50%" }}
                      />
                    </motion.div>
                  </div>
                </div>

                  {/* Coverage Amount */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Coverage</span>
                      <span className="text-lg font-bold text-accent">{risk.coverage}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${risk.color.split(' ')[1].replace('from-', '')}/10, transparent)`,
                    filter: "blur(30px)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg glow-cyan"
          >
            Get Comprehensive Risk Analysis
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
