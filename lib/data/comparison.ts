export type ComparisonCell = { text: string; icon?: "check" | "cross" };

export type ComparisonRow = {
  feature: string;
  devmovers: ComparisonCell;
  agency: ComparisonCell;
  freelancer: ComparisonCell;
};

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Delivery Timeline",
    devmovers: { text: "2–4 weeks", icon: "check" },
    agency: { text: "6–12 weeks", icon: "cross" },
    freelancer: { text: "8–16 weeks", icon: "cross" },
  },
  {
    feature: "AI-Powered Development",
    devmovers: { text: "Core of everything", icon: "check" },
    agency: { text: "Rarely used", icon: "cross" },
    freelancer: { text: "Not available", icon: "cross" },
  },
  {
    feature: "Code Quality",
    devmovers: { text: "Senior-grade, reviewed", icon: "check" },
    agency: { text: "Mixed levels", icon: "cross" },
    freelancer: { text: "Inconsistent", icon: "cross" },
  },
  {
    feature: "Technical Support",
    devmovers: { text: "24 / 7", icon: "check" },
    agency: { text: "Business hours", icon: "cross" },
    freelancer: { text: "Limited", icon: "cross" },
  },
  {
    feature: "Scalable Architecture",
    devmovers: { text: "Designed to scale", icon: "check" },
    agency: { text: "Often retrofitted", icon: "cross" },
    freelancer: { text: "Rarely planned", icon: "cross" },
  },
  {
    feature: "Mobile-First Design",
    devmovers: { text: "Always", icon: "check" },
    agency: { text: "Usually", icon: "check" },
    freelancer: { text: "Varies", icon: "cross" },
  },
  {
    feature: "Fixed Fee",
    devmovers: { text: "Transparent pricing", icon: "check" },
    agency: { text: "Scope creep common", icon: "cross" },
    freelancer: { text: "Hourly surprises", icon: "cross" },
  },
];
