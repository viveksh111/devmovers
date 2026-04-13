export type Reason = {
  icon: "code" | "shield" | "bolt" | "chat" | "rocket";
  title: string;
  description: string;
};

export const reasons: Reason[] = [
  {
    icon: "code",
    title: "Full-Stack Expertise",
    description: "One team covers frontend, backend, infrastructure, and security. No handoffs, no gaps.",
  },
  {
    icon: "shield",
    title: "Security-First Approach",
    description: "We prioritize application security from day one to protect your business and your users.",
  },
  {
    icon: "bolt",
    title: "Fast & Reliable Delivery",
    description: "We deliver projects on time without compromising on quality. Speed and excellence go hand in hand.",
  },
  {
    icon: "chat",
    title: "Transparent Communication",
    description: "Regular updates and clear communication throughout — no surprises, ever.",
  },
  {
    icon: "rocket",
    title: "Startup-Focused Solutions",
    description: "Cost-effective, scalable solutions built for startups that need to move fast.",
  },
];
