import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mike R.",
    company: "Clean Hoods Chicago",
    text: "My local agent had me classified as a 'janitor'. They found the mistake, got me the right NFPA 96 coverage, and actually SAVED me $1,200 a year.",
    rating: 5
  },
  {
    name: "Sarah T.",
    company: "Lone Star Exhaust",
    text: "I needed a COI at 4:30 PM on a Friday to get on a hospital roof. Their portal let me generate it instantly. These guys get it.",
    rating: 5
  },
  {
    name: "David K.",
    company: "Tri-State Fire Prep",
    text: "Finally, an agency that doesn't ask 'what is a grease trap?'. They speak my language and found me a carrier that covers night work.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            Trusted by the <span className="text-primary">Hardest Working</span><br /> 
            Crews in America
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-8 rounded-3xl border border-white/10 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <div className="font-bold text-white text-lg">{review.name}</div>
                <div className="text-sm text-primary">{review.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
