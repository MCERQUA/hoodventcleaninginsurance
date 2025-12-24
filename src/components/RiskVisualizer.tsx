import { motion } from "framer-motion";
import { AlertTriangle, Droplet, Flame, Ban, Gavel, XCircle } from "lucide-react";

const risks = [
  {
    icon: Flame,
    title: "Grease Fires",
    consequence: "Total Business Loss",
    description: "A single spark in a grease-laden duct can burn down an entire restaurant. If you are found negligent, you are liable for millions.",
    image: "/risk-images/fire-hazard.png",
    color: "text-red-500",
    border: "border-red-500/50"
  },
  {
    icon: Droplet,
    title: "Roof Contamination",
    consequence: "EPA Fines & Lawsuits",
    description: "Grease runoff entering storm drains is a federal offense. Property owners will sue you for roof membrane damage caused by caustic cleaners.",
    image: "/risk-images/grease-buildup.png",
    color: "text-orange-500",
    border: "border-orange-500/50"
  },
  {
    icon: Ban,
    title: "System Failure",
    consequence: "Operations Shutdown",
    description: "If a fire suppression system you serviced fails to activate, or activates accidentally, you are on the hook for the restaurant's lost revenue.",
    image: "/risk-images/ventilation-failure.png",
    color: "text-amber-500",
    border: "border-amber-500/50"
  }
];

export const RiskVisualizer = () => {
  return (
    <section className="relative py-24 bg-card/30 overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold uppercase tracking-wider mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span>The Reality of Your Industry</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            One Mistake Can Cost You <br />
            <span className="text-red-500">Everything</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Standard general liability isn't enough. You need specialized coverage that understands the difference between "pressure washing" and "NFPA 96 Hood Cleaning."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {risks.map((risk, idx) => (
            <motion.div
              key={risk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`group relative overflow-hidden rounded-3xl border ${risk.border} bg-background`}
            >
              {/* Image Background Area */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                <img 
                  src={risk.image} 
                  alt={risk.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10 flex items-center gap-2">
                  <risk.icon className={`w-4 h-4 ${risk.color}`} />
                  <span className="font-bold text-sm text-white">{risk.title}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 relative z-20 -mt-10">
                <div className="bg-card border border-white/10 rounded-2xl p-6 shadow-xl">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Consequence</div>
                  <h3 className={`text-2xl font-black mb-4 ${risk.color}`}>{risk.consequence}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {risk.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-white mb-8">
            We don't just sell insurance. <br />
            <span className="text-primary">We find the carrier that actually covers these risks.</span>
          </p>
        </div>
      </div>
    </section>
  );
};