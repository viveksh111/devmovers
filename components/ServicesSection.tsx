import { FadeIn, StaggerChildren, StaggerItem } from "./AnimationWrappers";

type Capability = {
  icon: string;
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    icon: "terminal",
    title: "Engineering",
    description:
      "Scalable cloud architectures and mission-critical backend systems built for speed.",
  },
  {
    icon: "architecture",
    title: "Architecture",
    description:
      "Deep structural design that prioritizes performance, security, and long-term modularity.",
  },
  {
    icon: "neurology",
    title: "AI Integration",
    description:
      "Embedding intelligent agents and LLM-powered workflows into your existing stack.",
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
              Expertise
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Core Capabilities
            </h2>
          </FadeIn>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-0" staggerDelay={0.15}>
          {capabilities.map((cap) => (
            <StaggerItem key={cap.title}>
              <div className="p-10 border border-outline-variant/10 bg-surface-container-low h-full hover:bg-surface-container transition-colors duration-300">
                <span className="material-symbols-outlined text-primary-container text-4xl mb-6 block">
                  {cap.icon}
                </span>
                <h3 className="text-2xl font-bold mb-4">{cap.title}</h3>
                <p className="text-zinc-400">{cap.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
