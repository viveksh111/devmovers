export type ProcessStep = {
  number: string;
  icon: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: "search",
    title: "Requirement Analysis",
    description: "We deeply understand your business goals, target audience, and project requirements before writing a single line of code.",
  },
  {
    number: "02",
    icon: "map",
    title: "Planning & Strategy",
    description: "We create a structured roadmap defining architecture, timelines, and milestones so everyone is aligned from day one.",
  },
  {
    number: "03",
    icon: "construction",
    title: "Design & Development",
    description: "We design and build your product using modern technologies with a focus on performance, security, and user experience.",
  },
  {
    number: "04",
    icon: "verified",
    title: "Testing & Quality Assurance",
    description: "We ensure your product is bug-free, secure, and fully optimized before it reaches your users. No shortcuts.",
  },
  {
    number: "05",
    icon: "rocket_launch",
    title: "Deployment & Support",
    description: "We launch your product into production and provide ongoing support to ensure everything runs smoothly after go-live.",
  },
];
