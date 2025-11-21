import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    title: "Services",
    items: [
      { title: "Fire Suppression Insurance", href: "/fire-suppression-system-insurance" },
      { title: "Grease Trap Liability", href: "/grease-trap-liability-coverage" },
      { title: "Equipment Breakdown", href: "/equipment-breakdown-insurance" },
      { title: "Hood Cleaning Compliance", href: "/hood-cleaning-compliance-insurance" },
    ],
  },
  {
    title: "Industries",
    items: [
      { title: "Restaurants", href: "/restaurant-hood-insurance" },
      { title: "Hotels", href: "/hotel-kitchen-insurance" },
      { title: "Hospitals", href: "/hospital-cafeteria-coverage" },
      { title: "Schools", href: "/school-kitchen-protection" },
    ],
  },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              HoodVent<span className="text-accent">Insurance</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.items && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.items ? (
                  <>
                    <button className="px-4 py-2 rounded-xl glass-card text-foreground hover:text-primary transition-all duration-300 flex items-center space-x-1 group">
                      <span>{item.title}</span>
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-64 glass-strong rounded-2xl overflow-hidden border border-white/20"
                        >
                          {item.items.map((subItem, idx) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className="block px-6 py-3 hover:bg-white/10 transition-colors border-b border-white/10 last:border-b-0"
                            >
                              <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                {subItem.title}
                              </motion.div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.href!}
                    className="px-4 py-2 rounded-xl glass-card text-foreground hover:text-primary transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 rounded-xl bg-accent text-accent-foreground font-semibold hover:glow-lime transition-all duration-300"
            >
              Get Quote
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden glass-card p-2 rounded-xl"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass-strong rounded-2xl overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.title}>
                    {item.items ? (
                      <>
                        <button
                          onClick={() =>
                            setActiveDropdown(activeDropdown === item.title ? null : item.title)
                          }
                          className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between"
                        >
                          <span>{item.title}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              activeDropdown === item.title ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.title && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="pl-4 space-y-1"
                            >
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  to={subItem.href}
                                  className="block px-4 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href!}
                        className="block px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
                <button className="w-full px-4 py-3 mt-4 rounded-xl bg-accent text-accent-foreground font-semibold">
                  Get Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
