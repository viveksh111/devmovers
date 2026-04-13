export type Service = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  svg: React.ReactNode;
};

export const services: Service[] = [
  {
    num: "01",
    title: "Web Application Development",
    description: "Pixel-perfect, blazing-fast web apps built with Next.js, React, and TypeScript — engineered for performance, SEO, and real-world scale.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="18" height="14" rx="2" />
        <path d="M8 21h6M11 17v4M6 8l3 3-3 3" />
        <line x1="12" y1="14" x2="16" y2="14" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Mobile App Development",
    description: "Native-quality Android & iOS apps using React Native. One codebase, two platforms, zero compromise on UX. Ship to both stores in weeks.",
    tags: ["React Native", "Android", "iOS", "Expo"],
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="1" width="10" height="20" rx="2" />
        <line x1="11" y1="17" x2="11" y2="17.5" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="9" y1="5" x2="13" y2="5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Backend & API Development",
    description: "Robust, secure APIs on Node.js, GraphQL, or REST. We design systems that handle millions of requests without breaking a sweat.",
    tags: ["Node.js", "GraphQL", "REST", "PostgreSQL"],
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="11" cy="5" rx="7" ry="2.5" />
        <path d="M4 5v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V5M4 10v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-5" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "DevOps & Cloud Deployment",
    description: "Zero-downtime deployments, automated CI/CD, and infrastructure-as-code on AWS, GCP, or Azure. Your ops, handled.",
    tags: ["AWS", "Docker", "CI/CD", "Terraform"],
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8a5 5 0 00-9.9-1H6a4 4 0 000 8h11a3 3 0 000-6z" />
        <path d="M11 12v5M9 15l2 2 2-2" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Security Testing & Secure Coding",
    description: "Pen testing, vulnerability assessments, and zero-trust architecture baked in from line one — not bolted on after launch.",
    tags: ["Pen Testing", "OWASP", "Zero-Trust", "SAST"],
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2L4 5v6c0 4.18 3.13 8.08 7 9 3.87-.92 7-4.82 7-9V5z" />
        <polyline points="8 11 10 13 14 9" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Data Analytics & Insights",
    description: "Dashboards, pipelines, and BI tools that turn raw data into revenue-driving decisions — with clarity your team actually uses.",
    tags: ["Analytics", "Dashboards", "BI", "Data Pipelines"],
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="19" x2="3" y2="10" /><line x1="9" y1="19" x2="9" y2="5" />
        <line x1="15" y1="19" x2="15" y2="13" /><line x1="21" y1="19" x2="21" y2="8" />
        <line x1="1" y1="19" x2="21" y2="19" />
      </svg>
    ),
  },
];
