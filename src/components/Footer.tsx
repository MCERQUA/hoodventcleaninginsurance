import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ShieldCheck, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const footerLinks = {
  Coverage: [
    { title: "Liability", href: "/liability-insurance" },
    { title: "Equipment", href: "/equipment-breakdown-insurance" },
    { title: "Workers' Comp", href: "/workers-compensation-insurance" },
    { title: "Environmental", href: "/environmental-liability-insurance" },
  ],
  Company: [
    { title: "About Us", href: "/about" },
    { title: "Team", href: "/team" },
    { title: "Careers", href: "/careers" },
    { title: "Blog", href: "/blog" },
  ],
  Contact: [
    { title: "Get a Quote", href: "/contact" },
    { title: "Support", href: "/contact#support" },
    { title: "FAQs", href: "/#faq" },
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
    <footer className="relative bg-card border-t border-white/5 overflow-hidden pt-20 pb-10">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold">CC</span>
              </div>
              <span className="text-xl font-bold text-white">Contractors Choice Agency</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Specialized Insurance for Hood Vent Cleaning Contractors.
            </p>
            <div className="flex items-center gap-2 text-sm text-green-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>A+ Rated Carrier Partners</span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h3 className="font-bold text-white mb-6">
                {title === "Coverage" ? "Coverage" : title}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:844-967-5247" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">844-967-5247</span>
                </a>
              </li>
              <li>
                <a href="mailto:josh@contractorschoiceagency.co" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">josh@contractorschoiceagency.co</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-muted-foreground group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">
                    12220 E Riggs Road<br/>
                    Suite #105<br/>
                    Chandler, AZ 85249
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Bar */}
        <div className="border-t border-white/10 pt-10 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Contractors Choice Agency. All rights reserved.
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-muted-foreground hover:text-white transition-all hover:-translate-y-1"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};