export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  img: string;
  span: string;
  aspect: string;
};

export const projects: Project[] = [
  {
    id: "01",
    category: "Fintech",
    title: "Payments Made Simple",
    description: "A modern financial app — save, invest, send and receive money globally with real-time card management and zero transaction limits.",
    img: "/projects/project1.png",
    span: "col-span-1 md:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    id: "02",
    category: "SaaS",
    title: "Project Management Dashboard",
    description: "Real-time dashboard for managing projects, tracking tasks, uploading files, and monitoring team-wide analytics — all in one place.",
    img: "/projects/project2.png",
    span: "col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    id: "03",
    category: "Web App",
    title: "MVP — Shipped in 3 Weeks",
    description: "Full product — auth, dashboard, API, and responsive UI — designed, built, and deployed to production in under 21 days.",
    img: "/projects/project3.webp",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    id: "04",
    category: "Mobile + Web",
    title: "Secure Authentication System",
    description: "Zero-trust auth with MFA, session control, OAuth, and end-to-end encryption across web and mobile — built to protect.",
    img: "/projects/project4.webp",
    span: "col-span-1 md:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    id: "05",
    category: "Mobile App",
    title: "Cross-Platform Mobile App",
    description: "A native-quality iOS and Android app with offline-first architecture, push notifications, and real-time data sync.",
    img: "/projects/project5.webp",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
  },
];
