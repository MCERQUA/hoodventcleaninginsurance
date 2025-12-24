import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-accent text-white px-4 py-2 relative z-[60]">
      <div className="container mx-auto flex items-center justify-center text-sm font-medium relative pr-8">
        {/* Mobile: condensed version */}
        <span className="md:hidden">
          <span className="font-bold">FREE</span> risk assessment — <a href="tel:8449675247" className="font-bold underline">844-967-5247</a>
        </span>

        {/* Desktop: full version */}
        <span className="hidden md:flex items-center">
          <span className="mr-2 font-bold">LIMITED TIME:</span>
          Get a free risk assessment with your quote.
          <Link
            to="/contact"
            className="underline mx-2 hover:text-white/80 transition-colors"
          >
            Get Started →
          </Link>
          <span className="mx-2">or Call:</span>
          <a href="tel:8449675247" className="font-bold underline whitespace-nowrap hover:text-white/80 transition-colors">
            844-967-5247
          </a>
        </span>

        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-black/10 rounded-full transition-colors absolute right-0 top-1/2 -translate-y-1/2"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
