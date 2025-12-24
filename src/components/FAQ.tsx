import { motion } from "framer-motion";
import { Plus, Minus, HelpCircle, Shield, FileText, AlertTriangle } from "lucide-react";
import { useState } from "react";

const faqCategories = [
  {
    id: "coverage",
    label: "Coverage & Needs",
    icon: Shield,
    questions: [
      {
        q: "What types of insurance does a hood vent cleaning business need?",
        a: "Hood vent cleaning businesses need several specialized insurance coverages to be fully protected: General Liability, Property Insurance, Workers' Compensation, Commercial Auto, Inland Marine (for portable equipment), Professional Liability, Pollution Liability, Completed Operations Coverage, and Business Interruption Insurance."
      },
      {
        q: "Why do hood vent cleaning businesses need specialized insurance?",
        a: "Hood vent cleaning carries unique risks that general business insurance often doesn't adequately cover, such as fire liability if a restaurant has a fire after your service, pollution claims from chemicals, and water damage. We provide policies specifically designed for these unique exposures to avoid dangerous coverage gaps."
      },
      {
        q: "What is the most important coverage for hood vent cleaning businesses?",
        a: "While all coverages are important, general liability insurance with 'Completed Operations' coverage is absolutely critical. This protects you if a fire occurs *after* you've serviced a kitchen exhaust system and your work is alleged to be the cause."
      },
      {
        q: "Do I need Pollution Liability insurance?",
        a: "Yes. The chemicals used in cleaning can cause indoor air quality issues, respiratory problems for staff, or environmental contamination if improperly disposed. Standard policies exclude this, but our packages specifically include pollution liability."
      },
      {
        q: "How does insurance differ for hood cleaners vs. general cleaners?",
        a: "Hood vent cleaning carries significantly higher risks than janitorial work. Fire liability exposure is greater, chemical usage is more hazardous, and compliance requirements are stricter. We structure coverage specifically for kitchen exhaust cleaners rather than applying generic cleaning codes."
      },
      {
        q: "How much does it typically cost?",
        a: "Cost varies by revenue, employees, and location. However, most small to medium-sized operations can expect to pay between $3,000-$8,000 annually for a comprehensive package. We work with multiple carriers to find the most competitive rates."
      }
    ]
  },
  {
    id: "claims",
    label: "Claims & Incidents",
    icon: AlertTriangle,
    questions: [
      {
        q: "Am I covered if a restaurant has a fire after I clean their hood?",
        a: "This is the #1 risk. If a fire occurs after your service and they allege inadequate cleaning, you could face massive liability. Our policies are designed with strong 'Completed Operations' coverage to provide defense costs and settlements for these exact scenarios."
      },
      {
        q: "Does insurance cover damage to kitchen equipment?",
        a: "Standard policies often exclude 'care, custody, and control,' leaving you unprotected if you damage a stove or fryer while cleaning it. We include coverage extensions to protect against claims for damage to customer property while you are working on it."
      },
      {
        q: "What if an employee damages a restaurant's property?",
        a: "If an employee accidentally damages property (like breaking a suppression link or denting a fan), your general liability insurance should cover the damage, subject to your deductible and policy limits."
      },
      {
        q: "Are my tools covered if stolen from my vehicle?",
        a: "Standard property insurance only covers items at your office. We include Inland Marine coverage (Tools & Equipment) to protect your pressure washers and equipment wherever they are—in transit, on a job site, or in storage."
      },
      {
        q: "What should I do if a client reports a fire?",
        a: "1. Contact us immediately. 2. Do NOT admit fault. 3. Gather all service records/photos. 4. Document all conversations. Our claims specialists understand fire causation and will advocate for you."
      }
    ]
  },
  {
    id: "operations",
    label: "Operations & Compliance",
    icon: FileText,
    questions: [
      {
        q: "What certifications do insurance companies look for?",
        a: "Carriers favor businesses with IKECA certifications, NFPA 96 knowledge, and proper fire safety training. Maintaining these can often qualify you for premium discounts."
      },
      {
        q: "Does Commercial Auto cover vehicles with mounted equipment?",
        a: "Standard auto policies may not cover expensive mounted pressure washing rigs. We ensure your commercial auto policy properly values these modifications and includes Inland Marine coverage for the equipment itself."
      },
      {
        q: "Does insurance cover me if I fail to meet code requirements?",
        a: "Standard policies may exclude work that doesn't meet code. We help you understand these exclusions and develop risk management practices to ensure your work meets NFPA 96 standards, protecting your coverage."
      },
      {
        q: "How can I reduce my insurance costs?",
        a: "Maintain certifications, document everything with before/after photos, use written contracts, implement quality control inspections, and consider higher deductibles. We help you build a risk profile that earns lower premiums."
      },
      {
        q: "How quickly can I get coverage?",
        a: "In most cases, we can provide same-day coverage with instant Certificates of Insurance (COI) after binding. Complex operations typically take 1-3 business days."
      },
      {
        q: "Why choose Contractors Choice Agency?",
        a: "We offer specialized understanding of hood cleaning risks, access to industry-specific carriers, competitive rates, and expert claims handling. General agencies simply don't understand the difference between a grease trap and a hood plenum."
      }
    ]
  }
];

export const FAQ = () => {
  const [activeTab, setActiveTab] = useState("coverage");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeCategory = faqCategories.find(c => c.id === activeTab);

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="faq">
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Knowledge Base</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            Common Questions <span className="text-primary">Answered</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about protecting your hood cleaning business.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-white/5 rounded-2xl p-1.5 border border-white/10">
            <div className="grid grid-cols-3 gap-1">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab(cat.id);
                    setOpenIndex(0);
                  }}
                  className={`relative flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 px-3 py-3 md:py-3 rounded-xl font-bold transition-all text-center ${
                    activeTab === cat.id
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <cat.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-xs md:text-sm leading-tight">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3 md:hidden">
            Tap a category above to see questions
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 min-h-[400px]">
          {activeCategory?.questions.map((faq, idx) => (
            <motion.div
              key={`${activeTab}-${idx}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="border border-white/10 rounded-2xl bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-white pr-8">{faq.q}</span>
                <span className={`p-2 rounded-full transition-colors ${openIndex === idx ? "bg-primary text-white" : "bg-white/5 text-muted-foreground"}`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === idx ? "auto" : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-white/5 mt-2">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
