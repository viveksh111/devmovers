"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    icon: "search",
    title: "Requirement Analysis",
    description:
      "We take the time to deeply understand your business goals, target audience, and project requirements before writing a single line of code.",
  },
  {
    number: "02",
    icon: "map",
    title: "Planning & Strategy",
    description:
      "We create a structured roadmap and technical plan — defining architecture, timelines, and milestones so everyone is aligned from day one.",
  },
  {
    number: "03",
    icon: "construction",
    title: "Design & Development",
    description:
      "We design and build your product using modern technologies and frameworks, with a focus on performance, security, and user experience.",
  },
  {
    number: "04",
    icon: "verified",
    title: "Testing & Quality Assurance",
    description:
      "We ensure your product is bug-free, secure, and fully optimized before it reaches your users. No shortcuts.",
  },
  {
    number: "05",
    icon: "rocket_launch",
    title: "Deployment & Support",
    description:
      "We launch your product into production and provide ongoing support to ensure everything runs smoothly after go-live.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 px-6 lg:px-20 bg-zinc-950 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "350px",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,226,36,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-primary-container text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              A proven, structured approach that takes your idea from concept to
              live product.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-outline-variant/10 hidden md:block" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex gap-6 group"
              >
                {/* Step number circle */}
                <div
                  className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center font-black text-sm border-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    borderColor: "rgba(255,226,36,0.3)",
                    backgroundColor: "rgba(255,226,36,0.06)",
                    color: "#FFE224",
                  }}
                >
                  {step.number}
                </div>

                {/* Content card */}
                <div className="flex-1 pb-8 border-b border-outline-variant/10 last:border-0 group-hover:border-primary-container/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-primary-container text-lg">
                      {step.icon}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-zinc-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
