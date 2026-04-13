export type PricingTier = {
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
  ctaLabel: string;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "launch",
    title: "Product Launch",
    subtitle: "Perfect for seed-stage startups needing a robust MVP.",
    price: "$12,000",
    period: "/proj",
    features: [
      "UI/UX Design System",
      "Core Feature Engineering",
      "Cloud Infrastructure Setup",
      "30 Days Post-Launch Support",
    ],
    highlighted: false,
    ctaLabel: "Start Now",
  },
  {
    id: "partnership",
    badge: "Most Popular",
    title: "Full Partnership",
    subtitle: "Ongoing engineering and strategic AI product design.",
    price: "$8,500",
    period: "/mo",
    features: [
      "Unlimited Feature Development",
      "Priority AI Implementation",
      "Scalability Audits & Tuning",
      "24/7 Dedicated Slack Channel",
    ],
    highlighted: true,
    ctaLabel: "Get Started",
  },
];
