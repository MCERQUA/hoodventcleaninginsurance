import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  Services: [
    { title: "Fire Suppression Insurance", href: "/fire-suppression-system-insurance" },
    { title: "Grease Trap Liability", href: "/grease-trap-liability-coverage" },
    { title: "Equipment Breakdown", href: "/equipment-breakdown-insurance" },
    { title: "Hood Cleaning Compliance", href: "/hood-cleaning-compliance-insurance" },
  ],
  Industries: [
    { title: "Restaurants", href: "/restaurant-hood-insurance" },
    { title: "Hotels", href: "/hotel-kitchen-insurance" },
    { title: "Hospitals", href: "/hospital-cafeteria-coverage" },
    { title: "Schools", href: "/school-kitchen-protection" },
  ],
  Resources: [
    { title: "Fire Code Compliance", href: "/fire-code-compliance" },
    { title: "NFPA 96 Requirements", href: "/nfpa-96-insurance-requirements" },
    { title: "Health Inspection", href: "/health-inspection-coverage" },
    { title: "Risk Management", href: "/risk-management" },
  ],
  Company: [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-background/95 border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                HoodVent<span className="text-accent">Insurance</span>
              </motion.div>
            </Link>
            <p className="text-muted-foreground mb-6">
              Next-generation insurance solutions for commercial kitchen exhaust systems. Protecting your kitchen's future, today.
            </p>
            <div className="space-y-3">
              <a href="tel:+1234567890" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:info@hoodventinsurance.com" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@hoodventinsurance.com</span>
              </a>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>123 Insurance Way, Suite 100<br />San Francisco, CA 94105</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-bold mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="glass-card rounded-3xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Stay Protected with Industry Updates
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest insurance tips, compliance updates, and risk management strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl glass-strong border border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl bg-accent text-accent-foreground font-bold hover:glow-lime transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} HoodVentInsurance.com. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-primary border border-transparent transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
