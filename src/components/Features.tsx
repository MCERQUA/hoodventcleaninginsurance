import { motion } from "framer-motion";
import { CheckCircle2, Shield, TrendingUp, Users } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-24 bg-card border-y border-white/5 relative">
       {/* Subtle Pattern */}
       <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')] bg-center" />
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
              Why 2,400+ Contractors <br />
              <span className="text-primary">Trust HoodVent</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We aren't a generalist agency. We live and breathe NFPA 96 compliance. We know the difference between a grease trap and a hood plenum.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Same-Day Certificates", desc: "Get on the job site faster. Generate COIs instantly from your phone." },
                { title: "Exclusive Programs", desc: "Access to carrier programs not available to local brokers." },
                { title: "Claims Advocacy", desc: "Our in-house claims team fights for you if a carrier tries to deny coverage." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-8">
              <div className="p-8 rounded-3xl bg-background border border-white/10 shadow-2xl">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <div className="text-4xl font-black text-white mb-2">A+</div>
                <div className="text-sm text-muted-foreground">Rated Carriers</div>
              </div>
              <div className="p-8 rounded-3xl bg-primary/20 border border-primary/20 shadow-2xl">
                <TrendingUp className="w-10 h-10 text-white mb-4" />
                <div className="text-4xl font-black text-white mb-2">30%</div>
                <div className="text-sm text-white/80">Avg. Savings</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-8 rounded-3xl bg-secondary/20 border border-secondary/20 shadow-2xl">
                <Users className="w-10 h-10 text-white mb-4" />
                <div className="text-4xl font-black text-white mb-2">24/7</div>
                <div className="text-sm text-white/80">Support Team</div>
              </div>
              <div className="p-8 rounded-3xl bg-background border border-white/10 shadow-2xl">
                <div className="text-4xl font-black text-white mb-2">50</div>
                <div className="text-sm text-muted-foreground">States Covered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
