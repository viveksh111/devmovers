import Image from "next/image";
import { FadeIn, StaggerChildren, StaggerItem, ScaleIn } from "./AnimationWrappers";

type Reason = {
  number: string;
  icon: string;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    number: "01",
    icon: "code",
    title: "Full-Stack Expertise",
    description:
      "A complete team covering frontend, backend, DevOps, and security — everything you need under one roof.",
  },
  {
    number: "02",
    icon: "shield",
    title: "Security-First Approach",
    description:
      "We prioritize application security from the very beginning to protect your business and your users.",
  },
  {
    number: "03",
    icon: "bolt",
    title: "Fast & Reliable Delivery",
    description:
      "We deliver projects on time without compromising on quality. Speed and excellence go hand in hand.",
  },
  {
    number: "04",
    icon: "forum",
    title: "Transparent Communication",
    description:
      "Regular updates and clear communication throughout the project — no surprises, ever.",
  },
  {
    number: "05",
    icon: "rocket_launch",
    title: "Startup-Focused Solutions",
    description:
      "We understand startup challenges and build cost-effective, scalable solutions that grow with you.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-32 px-6 lg:px-20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Text */}
        <div>
          <FadeIn direction="up">
            <span className="text-primary-container text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-12 leading-tight">
              Why Choose DevMovers?
            </h2>
          </FadeIn>
          <StaggerChildren className="space-y-8" staggerDelay={0.12}>
            {reasons.map((reason) => (
              <StaggerItem key={reason.number}>
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 shrink-0 bg-primary-container text-on-primary-container flex items-center justify-center font-bold transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-xl">
                      {reason.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{reason.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* Right: Image with stat badge */}
        <ScaleIn delay={0.2}>
          <div className="relative bg-surface p-2 border border-outline-variant/10">
            <div className="relative aspect-square md:aspect-4/3 lg:aspect-square">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACS1PLPzKrG9yKRny0GKRkIAZXVTyw_0zSyxH2Xd4bHRmxf9MfNWU60k2Um4CKanTPn89r7-t2BwjJsLZXQ6Xhtdfza0bSpJiNO2k96BkQRD2pP-IY8-n5jS0V-ki3X6TwskNvqNMBPNlL2w--ek66mcowMJPN4sG_3GHDAeODhswJ5vFB7QVPN2y80dCD90DJ2Cwk9SYwbCW5st-4YcEgmkIw-Mn-fgim3cJVG8d7Asg0NiiILt70snr6ngYdsUP_v9PmGcdMXMr6"
                alt="DevMovers team working on a project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-primary-container p-8 text-on-primary-container hidden md:block">
              <div className="text-4xl font-black">98%</div>
              <div className="text-xs font-bold uppercase tracking-widest">
                Client Success Rate
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
