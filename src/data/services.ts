import { Shield, Flame, Wind, Droplets, Wrench, Building2, Utensils, GraduationCap, Stethoscope, Building } from "lucide-react";

export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  icon: any;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: { title: string; description: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  {
    id: "fire-suppression",
    title: "Fire Suppression Insurance",
    slug: "/fire-suppression-system-insurance",
    icon: Flame,
    shortDescription: "Comprehensive coverage for installation and maintenance.",
    fullDescription: "Protect your business against the liability of fire suppression system failure. We cover installation, maintenance, and emergency repair services.",
    features: ["Installation Liability", "Failure to Perform Coverage", "Emergency Response Costs", "Property Damage Protection"],
    benefits: [
      { title: "Immediate Coverage", description: "Get protected as soon as you bind your policy." },
      { title: "Industry Specific", description: "Policies written specifically for hood vent and fire suppression contractors." }
    ],
    metaTitle: "Fire Suppression System Insurance | HoodVent Insurance",
    metaDescription: " specialized insurance for fire suppression system installers and inspectors. Get a quote today."
  },
  {
    id: "grease-trap",
    title: "Grease Trap Liability",
    slug: "/grease-trap-liability-coverage",
    icon: Droplets,
    shortDescription: "Protection against pollution and cleanup costs.",
    fullDescription: "Grease trap overflows can cause massive environmental damage and regulatory fines. Our liability coverage protects your business from these expensive risks.",
    features: ["Pollution Liability", "Cleanup Cost Coverage", "Regulatory Fine Protection", "Third-Party Property Damage"],
    benefits: [
      { title: "Pollution Defense", description: "Legal defense costs for pollution-related claims." },
      { title: "Cleanup Assistance", description: "Coverage for professional cleanup services." }
    ],
    metaTitle: "Grease Trap Liability Insurance | HoodVent Insurance",
    metaDescription: "Protect your business from grease trap overflow and pollution liability claims."
  },
  {
    id: "equipment-breakdown",
    title: "Equipment Breakdown",
    slug: "/equipment-breakdown-insurance",
    icon: Wrench,
    shortDescription: "Cover costs for damaged or malfunctioning equipment.",
    fullDescription: "When your cleaning or inspection equipment fails, your business stops. We cover the cost to repair or replace vital tools and machinery.",
    features: ["Repair Costs", "Replacement Value", "Rental Reimbursement", "Lost Income Protection"],
    benefits: [
      { title: "Fast Replacement", description: "Funds to replace equipment quickly to minimize downtime." },
      { title: "Rental Coverage", description: "Costs for renting substitute equipment while yours is repaired." }
    ],
    metaTitle: "Equipment Breakdown Insurance | HoodVent Insurance",
    metaDescription: "Insurance for hood cleaning and inspection equipment. Don't let broken tools stop your work."
  },
  {
    id: "hood-cleaning",
    title: "Hood Cleaning Compliance",
    slug: "/hood-cleaning-compliance-insurance",
    icon: Wind,
    shortDescription: "Insurance that meets NFPA 96 standards.",
    fullDescription: "Ensure your work meets strict NFPA 96 standards. Our insurance provides the certification backing you need to bid on high-value contracts.",
    features: ["NFPA 96 Compliance", "Certification Bonding", "Audit Protection", "completed Operations"],
    benefits: [
      { title: "Contract Winner", description: "Qualify for major commercial and government contracts." },
      { title: "Peace of Mind", description: "Know that your compliance liabilities are covered." }
    ],
    metaTitle: "Hood Cleaning Insurance & Compliance | HoodVent Insurance",
    metaDescription: "NFPA 96 compliant insurance for professional hood cleaners."
  }
];

export const industries: ServiceData[] = [
  {
    id: "restaurants",
    title: "Restaurant Hood Insurance",
    slug: "/restaurant-hood-insurance",
    icon: Utensils,
    shortDescription: "Tailored for commercial kitchens and restaurants.",
    fullDescription: "From QSRs to fine dining, we insure the contractors who keep restaurant kitchens safe and compliant.",
    features: ["High Volume Kitchens", "24/7 Operation Coverage", "Chain Restaurant Approval", "Subcontractor Coverage"],
    benefits: [
      { title: "Chain Approved", description: "Accepted by major restaurant chains and franchises." },
      { title: "Night Work", description: "Coverage for after-hours cleaning and maintenance." }
    ],
    metaTitle: "Restaurant Hood Cleaning Insurance | HoodVent Insurance",
    metaDescription: "Insurance for contractors servicing restaurant kitchen hoods and exhaust systems."
  },
  {
    id: "hotels",
    title: "Hotel Kitchen Insurance",
    slug: "/hotel-kitchen-insurance",
    icon: Building,
    shortDescription: "Coverage for large-scale hotel operations.",
    fullDescription: "Hotels have complex, multi-kitchen environments. Our policies cover the unique risks of working in hospitality venues.",
    features: ["Multi-Kitchen Coverage", "High Liability Limits", "Guest Safety Provisions", "Damage to Premises"],
    benefits: [
      { title: "High Limits", description: "Umbrella options available for high-value properties." },
      { title: "Vendor Compliance", description: "Meets strict vendor insurance requirements of hotel chains." }
    ],
    metaTitle: "Hotel Kitchen Exhaust Insurance | HoodVent Insurance",
    metaDescription: "Specialized insurance for hood cleaners working in hotels and hospitality."
  },
  {
    id: "hospitals",
    title: "Hospital Cafeteria Coverage",
    slug: "/hospital-cafeteria-coverage",
    icon: Stethoscope,
    shortDescription: "Strict compliance for healthcare facilities.",
    fullDescription: "Healthcare facilities require the highest standards of cleanliness and safety. Our insurance meets the rigorous demands of hospital administrators.",
    features: ["Infection Control Compliance", "Background Check Support", "High-Security Access", "Sensitive Environment Protocols"],
    benefits: [
      { title: "Admin Approved", description: "Pre-vetted policy language for healthcare administrators." },
      { title: "Zero Tolerance", description: "Coverage designed for zero-margin-for-error environments." }
    ],
    metaTitle: "Hospital Kitchen Hood Insurance | HoodVent Insurance",
    metaDescription: "Insurance for contractors servicing hospital and healthcare cafeterias."
  },
  {
    id: "schools",
    title: "School Kitchen Protection",
    slug: "/school-kitchen-protection",
    icon: GraduationCap,
    shortDescription: "Safety-focused coverage for educational institutions.",
    fullDescription: "Working in schools requires specific liability protections. We understand the district requirements and keeping students safe.",
    features: ["District Compliance", "Background Check Support", "Sexual Abuse/Molestation Liability (Optional)", "Summer Work Schedules"],
    benefits: [
      { title: "District Ready", description: "Certificates of Insurance (COI) issued instantly for school boards." },
      { title: "Year-Round", description: "Flexible coverage for seasonal school work." }
    ],
    metaTitle: "School Kitchen Hood Insurance | HoodVent Insurance",
    metaDescription: "Insurance for hood cleaning contractors working in schools and universities."
  }
];
