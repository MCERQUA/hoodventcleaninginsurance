import { useParams, Navigate, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { services, industries, ServiceData } from "@/data/services";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertTriangle, Shield, HelpCircle, Phone, ChevronDown, TrendingUp } from "lucide-react";
import { useState } from "react";

const ServicePageTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Find data in either services or industries arrays
  const serviceData = [...services, ...industries].find(
    (s) => s.slug === `/${slug}` || s.slug === slug
  );

  if (!serviceData) {
    return <Navigate to="/404" replace />;
  }

  const Icon = serviceData.icon;

  // Get related services data
  const relatedServicesData = serviceData.relatedServices
    ?.map(id => [...services, ...industries].find(s => s.id === id))
    .filter(Boolean) as ServiceData[] | undefined;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={serviceData.metaTitle}
        description={serviceData.metaDescription}
        canonical={`https://hoodventcleaninginsurance.com${serviceData.slug}`}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
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
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {serviceData.heroSubtitle || serviceData.fullDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-accent/25 hover:-translate-y-1 flex items-center gap-2">
                  Get A Free Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="tel:8449675247">
                <button className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 844-967-5247
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Snippet Answer Box */}
      {serviceData.snippetAnswer && (
        <section className="py-12 bg-primary/5 border-y border-primary/10">
          <div className="container px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-card border border-white/10 rounded-2xl p-8 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-primary mb-2">Quick Answer</h2>
                    <p className="text-lg text-white leading-relaxed">
                      {serviceData.snippetAnswer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Statistics Section */}
      {serviceData.statistics && serviceData.statistics.length > 0 && (
        <section className="py-16 bg-card/30">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceData.statistics.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="text-3xl md:text-4xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
                  {stat.description && (
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Grid */}
      <section className="py-20">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What's Covered</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive protection for every aspect of your operations</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceData.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10"
              >
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="font-medium text-white">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {serviceData.sections && serviceData.sections.length > 0 && (
        <section className="py-20 bg-card/20">
          <div className="container px-6 mx-auto">
            <div className="max-w-4xl mx-auto space-y-16">
              {serviceData.sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{section.content}</p>
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="grid md:grid-cols-2 gap-3">
                      {section.bulletPoints.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Risk Scenarios */}
      {serviceData.riskScenarios && serviceData.riskScenarios.length > 0 && (
        <section className="py-20">
          <div className="container px-6 mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold uppercase tracking-wider mb-4">
                <AlertTriangle className="w-4 h-4" />
                <span>Real-World Scenarios</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Could Happen Without Proper Coverage</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">See how our coverage protects you in real situations</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {serviceData.riskScenarios.map((scenario, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-white/10 rounded-2xl overflow-hidden"
                >
                  <div className="p-6 border-b border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">{scenario.title}</h3>
                    <p className="text-muted-foreground text-sm">{scenario.scenario}</p>
                  </div>
                  <div className="p-6 bg-red-500/5 border-b border-white/10">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">The Risk</div>
                        <p className="text-sm text-muted-foreground">{scenario.consequence}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-green-500/5">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Our Solution</div>
                        <p className="text-sm text-muted-foreground">{scenario.solution}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20 bg-card/20">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Benefits that set us apart from generic insurance providers</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {serviceData.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {serviceData.faqs && serviceData.faqs.length > 0 && (
        <section className="py-20">
          <div className="container px-6 mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-4">
                <HelpCircle className="w-4 h-4" />
                <span>FAQs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Answers to frequently asked questions about {serviceData.title.toLowerCase()}</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {serviceData.faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="border border-white/10 rounded-2xl bg-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg font-bold text-white pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === idx ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServicesData && relatedServicesData.length > 0 && (
        <section className="py-20 bg-card/20">
          <div className="container px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Related Coverage Options</h2>
              <p className="text-muted-foreground">Explore additional coverage to fully protect your business</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedServicesData.map((related, idx) => {
                const RelatedIcon = related.icon;
                return (
                  <Link key={idx} to={related.slug}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
                    >
                      <RelatedIcon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-bold text-white mb-2">{related.title}</h3>
                      <p className="text-sm text-muted-foreground">{related.shortDescription}</p>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Protect Your Business?
            </h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
              Get your customized quote in minutes. Same-day coverage available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-10 py-5 bg-white text-primary font-bold text-lg rounded-xl shadow-xl hover:scale-105 transition-transform flex items-center gap-2 mx-auto sm:mx-0">
                  Start Your Free Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="tel:8449675247">
                <button className="px-10 py-5 bg-white/10 text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all flex items-center gap-2 mx-auto sm:mx-0">
                  <Phone className="w-5 h-5" />
                  844-967-5247
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
