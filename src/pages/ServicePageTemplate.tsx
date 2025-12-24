import { useParams, Navigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { services, industries, ServiceData } from "@/data/services";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const ServicePageTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find data in either services or industries arrays
  const serviceData = [...services, ...industries].find(
    (s) => s.slug === `/${slug}` || s.slug === slug
  );

  if (!serviceData) {
    return <Navigate to="/404" replace />;
  }

  const Icon = serviceData.icon;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={serviceData.metaTitle} 
        description={serviceData.metaDescription}
        canonical={`https://hoodventinsurance.com${serviceData.slug}`} 
      />
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container relative z-10 px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-8 shadow-xl shadow-primary/20">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {serviceData.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              {serviceData.fullDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-accent/25 hover:-translate-y-1">
                  Get A Quote
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card/30">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl border border-white/5"
              >
                <CheckCircle2 className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold text-lg text-white">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {serviceData.benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-primary">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-primary-foreground/80 text-xl mb-10 max-w-2xl mx-auto">
            Get your policy in minutes, not days.
          </p>
          <Link to="/contact">
            <button className="px-10 py-5 bg-white text-primary font-bold text-lg rounded-xl shadow-xl hover:scale-105 transition-transform">
              Start Your Quote
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
