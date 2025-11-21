import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { value: "10K+", label: "Protected Kitchens", icon: Users },
  { value: "$50M+", label: "Claims Processed", icon: TrendingUp },
  { value: "99.8%", label: "Customer Satisfaction", icon: Award },
  { value: "24/7", label: "Support Available", icon: Target },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1
              className="text-5xl md:text-7xl font-black mb-6"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              About{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                HoodVentInsurance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering the future of commercial kitchen insurance with cutting-edge technology and unmatched expertise
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-strong rounded-3xl p-8 text-center border border-white/20 hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 mb-20"
          >
            <h2
              className="text-4xl font-bold mb-6 text-center"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              At HoodVentInsurance.com, we're revolutionizing commercial kitchen insurance through advanced technology, 
              real-time risk assessment, and unparalleled customer service. Our mission is to provide comprehensive protection 
              that adapts to your needs, ensuring your kitchen operations remain safe, compliant, and worry-free.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
