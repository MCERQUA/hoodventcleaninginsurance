import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, Home, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="min-h-[80vh] flex items-center justify-center pt-20 pb-10">
        <div className="container px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Quote Request Received!
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Thank you for trusting Contractors Choice Agency. Our underwriting team is reviewing your information now. 
              <br /><br />
              <span className="text-white font-semibold">We will contact you within 24 hours with your custom proposal.</span>
            </p>

            <div className="glass p-8 rounded-3xl border border-white/10 mb-10">
              <h3 className="text-lg font-bold text-white mb-4">Need immediate assistance?</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="tel:8449675247"
                  className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-xl font-bold transition-colors w-full sm:w-auto justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Call 844-967-5247
                </a>
                <Link 
                  to="/"
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-colors w-full sm:w-auto justify-center"
                >
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              While you wait, check out our <Link to="/blog" className="text-primary hover:underline">latest blog posts</Link> on risk management.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Success;
