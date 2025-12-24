import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services, industries } from "@/data/services";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    {
      title: "Services",
      items: services.map(s => ({ title: s.title, href: s.slug })),
    },
    {
      title: "Industries",
      items: industries.map(s => ({ title: s.title, href: s.slug })),
    },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <>
      <AnnouncementBanner />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mt-[40px] ${
          isScrolled
            ? "glass border-b border-white/10 py-3 mt-0"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container px-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group z-50">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">
                HoodVent
              </span>
              <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                Insurance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.items && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.items ? (
                  <div className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors cursor-pointer flex items-center gap-1 group">
                    {item.title}
                    <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                  </div>
                ) : (
                  <Link
                    to={item.href!}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group"
                  >
                    {item.title}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.title && item.items && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-2"
                    >
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
                        >
                          <div className="text-sm font-medium text-white">
                            {subItem.title}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8449675247"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>844-967-5247</span>
            </a>
            <Link to="/contact">
              <button className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white z-50 relative"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background lg:hidden flex flex-col overflow-hidden z-[55]"
          >
            {/* Spacer for header */}
            <div className="h-20 flex-shrink-0" />
            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 pb-6">
            <div className="space-y-6">
              {navItems.map((item) => (
                <div key={item.title}>
                  {item.items ? (
                    <div className="space-y-3">
                      <div className="font-bold text-lg text-white/50 uppercase tracking-wider text-xs">
                        {item.title}
                      </div>
                      <div className="grid gap-3 pl-4 border-l border-white/10">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block text-lg font-medium text-white"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href!}
                      className="block text-2xl font-bold text-white"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-8 mt-8 border-t border-white/10">
                <Link to="/contact" className="block w-full">
                  <button className="w-full py-4 bg-primary text-white font-bold rounded-xl text-lg">
                    Get Instant Quote
                  </button>
                </Link>
              </div>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
          </motion.nav>
        </>
      );
    };