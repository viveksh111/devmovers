import { FadeIn, StaggerChildren, StaggerItem } from "./AnimationWrappers";

type Service = {
  icon: string;
  title: string;
  description: string;
  keywords: string[];
};

const services: Service[] = [
  {
    icon: "web",
    title: "Web Application Development",
    description:
      "We build fast, responsive, and scalable web applications tailored to your business needs using modern frameworks.",
    keywords: ["Custom Web Apps", "Scalable", "Responsive"],
  },
  {
    icon: "smartphone",
    title: "Mobile App Development",
    description:
      "Create high-performance Android and iOS applications designed for seamless user experience and business growth.",
    keywords: ["Android", "iOS", "Cross-Platform"],
  },
  {
    icon: "hub",
    title: "Backend & API Development",
    description:
      "We design secure and efficient backend systems and APIs to ensure smooth communication between your systems.",
    keywords: ["REST APIs", "Scalable Systems", "Secure Backend"],
  },
  {
    icon: "cloud_upload",
    title: "DevOps & Cloud Deployment",
    description:
      "We streamline your deployment process with cloud infrastructure, CI/CD pipelines, and performance optimization.",
    keywords: ["CI/CD", "Cloud", "Automation"],
  },
  {
    icon: "security",
    title: "Security Testing & Secure Coding",
    description:
      "Protect your application from vulnerabilities with our security-first approach and expert testing methodology.",
    keywords: ["Vulnerability Assessment", "Penetration Testing", "Secure Code"],
  },
  {
    icon: "analytics",
    title: "Data Analytics & Insights",
    description:
      "We help you make data-driven decisions by transforming raw data into meaningful, actionable insights.",
    keywords: ["Business Intelligence", "Dashboards", "Data-Driven"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-6 lg:px-20 bg-surface-container-lowest"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <FadeIn direction="left" delay={0}>
            <span className="text-primary-container text-sm font-bold tracking-[0.2em] uppercase">
              What We Do
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Our Services
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-zinc-400 mt-4 max-w-2xl text-lg">
              We provide end-to-end development services to help you build, launch, and scale your digital products efficiently.
            </p>
          </FadeIn>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0" staggerDelay={0.1}>
          {services.map((svc) => (
            <StaggerItem key={svc.title}>
              <div className="p-10 border border-outline-variant/10 bg-surface-container-low h-full hover:bg-surface-container transition-colors duration-300 group">
                <span className="material-symbols-outlined text-primary-container text-4xl mb-6 block group-hover:scale-110 transition-transform duration-300">
                  {svc.icon}
                </span>
                <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">{svc.description}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 border border-outline-variant/20 text-zinc-500"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
