export type CarouselCard = {
  id: string;
  title: string;
  tag: string;
  imageSrc: string;
  imageAlt: string;
  accent: string;
};

export const carouselCards: CarouselCard[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    tag: "Web App · Payments",
    accent: "#FFE224",
    imageSrc: "/projects/project1.png",
    imageAlt: "E-commerce platform screenshot",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    tag: "Analytics · SaaS",
    accent: "#34d399",
    imageSrc: "/projects/project2.png",
    imageAlt: "SaaS analytics dashboard",
  },
  {
    id: "mvp-app",
    title: "MVP — 3 Weeks Delivery",
    tag: "Web App · MVP",
    accent: "#a78bfa",
    imageSrc: "/projects/project3.webp",
    imageAlt: "MVP web application",
  },
  {
    id: "auth-system",
    title: "Secure Auth System",
    tag: "Cybersecurity · Auth",
    accent: "#f87171",
    imageSrc: "/projects/project4.webp",
    imageAlt: "Secure authentication system",
  },
  {
    id: "mobile-app",
    title: "Cross-Platform Mobile App",
    tag: "React Native · Mobile",
    accent: "#38bdf8",
    imageSrc: "/projects/project5.webp",
    imageAlt: "Mobile application screenshot",
  },
];
