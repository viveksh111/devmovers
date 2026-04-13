export type Stat = { value: string; label: string };

export const aboutStats: Stat[] = [
  { value: "30+",  label: "Projects Delivered"  },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "2+",   label: "Years Experience"    },
  { value: "24/7", label: "Support Available"   },
];

export const techStack: string[] = [
  "Next.js", "React", "Node.js", "TypeScript",
  "PostgreSQL", "MongoDB", "AWS", "Docker",
  "React Native", "GraphQL", "Tailwind", "Figma",
];

export type Value = {
  iconPath: string;
  title: string;
  body: string;
};

export const aboutValues: Value[] = [
  {
    iconPath: "M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42",
    title: "Our Mission",
    body: "To empower businesses by delivering secure, scalable, and high-performance digital products that move fast and last long.",
  },
  {
    iconPath: "M1 10s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7z",
    title: "Our Vision",
    body: "To become the go-to technology partner for startups and enterprises building the next generation of digital experiences.",
  },
  {
    iconPath: "M18 9l-7 9-7-9 7-7z",
    title: "How We Work",
    body: "Tight feedback loops, weekly demos, transparent pricing. No surprises — just clear milestones and on-time delivery.",
  },
];
