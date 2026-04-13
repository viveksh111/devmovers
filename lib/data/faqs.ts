export type FaqItem = { id: string; question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    id: "services",
    question: "What services does DevMovers offer?",
    answer: "DevMovers offers a full suite of digital development services including web application development, mobile app development (Android & iOS), backend & API development, DevOps & cloud deployment, security testing & secure coding, and data analytics & insights.",
  },
  {
    id: "timeline",
    question: "How quickly can you deliver my project?",
    answer: "We deliver MVPs fast — typically from concept to a functional product in weeks, not months. Our streamlined process, dedicated team structure, and parallel workstreams eliminate the delays that slow most agencies down.",
  },
  {
    id: "security",
    question: "How do you ensure application security?",
    answer: "Security is built into every stage of our development process. We follow secure coding practices, conduct vulnerability assessments, and perform security testing before every deployment to protect your application and your users.",
  },
  {
    id: "startups",
    question: "Do you work with early-stage startups?",
    answer: "Absolutely. We specialize in startup-focused solutions and understand the unique challenges founders face. We build cost-effective, scalable products that let you launch fast, validate your idea, and grow without needing to rebuild later.",
  },
  {
    id: "communication",
    question: "How do you handle project communication?",
    answer: "We believe in full transparency. You get regular progress updates, clear milestone reporting, and direct access to your project lead. No black boxes — you always know what's being built and when it will be ready.",
  },
];
