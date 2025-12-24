export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Ultimate Guide to NFPA 96 Compliance for Contractors",
    slug: "nfpa-96-compliance-guide",
    excerpt: "Everything a hood cleaning contractor needs to know about the latest NFPA 96 standards and how to avoid costly violations.",
    content: `
      <h2>Understanding NFPA 96</h2>
      <p>The National Fire Protection Association (NFPA) Standard 96 is the definitive guide for ventilation control and fire protection of commercial cooking operations. For contractors, adherence isn't just a suggestion—it's the law in many jurisdictions and a requirement for valid insurance.</p>
      
      <h3>Key Compliance Areas</h3>
      <ul>
        <li><strong>Access Panels:</strong> Must be installed at specific intervals for cleaning and inspection.</li>
        <li><strong>Grease Removal:</strong> Cleaning to bare metal is often the standard required.</li>
        <li><strong>Reporting:</strong> Detailed reports with photos are now standard expectation.</li>
      </ul>

      <h3>Why Insurance Denies Claims</h3>
      <p>If a fire occurs and the investigation reveals that the system was not maintained according to NFPA 96, the facility's insurance may deny the claim, and the liability often shifts to the contractor. This is why having "Failure to Perform" coverage is critical.</p>
    `,
    author: "Mike Anderson",
    date: "2024-03-15",
    image: "/risk-images/ventilation-failure.png",
    category: "Compliance",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "Why General Liability Isn't Enough for Hood Cleaners",
    slug: "why-general-liability-is-not-enough",
    excerpt: "Standard business insurance often excludes the specific pollution and fire risks that hood cleaners face every day.",
    content: `
      <h2>The "Standard Policy" Trap</h2>
      <p>Many hood vent contractors buy a standard General Liability (GL) policy thinking they are covered. However, standard GL policies often have exclusions for:</p>
      <ul>
        <li><strong>Pollution:</strong> Grease runoff entering a storm drain.</li>
        <li><strong>Professional Liability:</strong> Mistakes in inspection reports.</li>
        <li><strong>Care, Custody, and Control:</strong> Damage to the roof or fan while you are working on it.</li>
      </ul>

      <h3>The Solution</h3>
      <p>You need a specialized policy that includes a "Contractors Pollution Liability" endorsement and specifically addresses the risks of working with high-pressure water and grease.</p>
    `,
    author: "Sarah Jenkins",
    date: "2024-03-10",
    image: "/risk-images/grease-buildup.png",
    category: "Insurance Tips",
    readTime: "4 min read"
  },
  {
    id: "3",
    title: "Top 5 Risks for New Hood Cleaning Businesses",
    slug: "top-risks-new-hood-cleaners",
    excerpt: "Starting a new hood cleaning venture? Watch out for these common pitfalls that can sink your business before it starts.",
    content: `
      <h2>1. Roof Damage</h2>
      <p>Grease degrades roofing material. If you don't use proper containment or if you damage the roof membrane while walking, you could be liable for a complete roof replacement.</p>

      <h2>2. Water Damage</h2>
      <p>High-pressure washing inside a kitchen can easily force water into electrical outlets or dry storage areas if not properly contained.</p>

      <h2>3. Employee Injuries</h2>
      <p>Slips and falls on greasy roofs are the #1 cause of workers' comp claims in this industry.</p>
    `,
    author: "Mike Anderson",
    date: "2024-03-01",
    image: "/risk-images/wear-tear.png",
    category: "Business Growth",
    readTime: "3 min read"
  }
];
