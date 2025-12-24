import { motion } from "framer-motion";

const logos = [
  "/logos/travelers.svg",
  "/logos/liberty_mutual.svg",
  "/logos/the_hartford.svg",
  "/logos/nationwide.svg",
  "/logos/progressive.svg",
  "/logos/chubb.svg",
  "/logos/cna.svg",
  "/logos/amtrust.svg",
];

export const TrustBar = () => {
  return (
    <div className="py-12 border-y border-white/5 bg-card/50 backdrop-blur-sm relative z-20">
      <div className="container px-6 mx-auto mb-8">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          We shop the nation's top specialized carriers
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div 
          className="flex space-x-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 30 
          }}
        >
          {/* Double the logos to create seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="w-40 h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={logo} 
                alt="Carrier Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};