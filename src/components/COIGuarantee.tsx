import { motion } from "framer-motion";
import { FileCheck, Clock, Download } from "lucide-react";

export const COIGuarantee = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-accent/20">
            <FileCheck className="w-10 h-10 text-accent" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            The "Get Paid Faster" <br />
            <span className="text-accent">Certificate Guarantee</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We know you can't start work or get paid without a Certificate of Insurance (COI). 
            We never let paperwork slow down your paycheck.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Clock, 
                title: "Instant Portal Access", 
                desc: "Generate your own certificates 24/7/365. No waiting for an agent to wake up." 
              },
              { 
                icon: Download, 
                title: "Unlimited Downloads", 
                desc: "Create as many certificates as you need for different job sites at no extra cost." 
              },
              { 
                icon: FileCheck, 
                title: "Wording Compliance", 
                desc: "We review your contracts to ensure the COI wording meets specific client demands." 
              }
            ].map((item, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors">
                <item.icon className="w-8 h-8 text-white mb-4 mx-auto" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
