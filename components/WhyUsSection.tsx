"use client";

import { motion } from "motion/react";
import { FadeIn, StaggerChildren, StaggerItem } from "./AnimationWrappers";

const reasons = [
  {
    title: "Full-Stack Expertise",
    description: "One team covers everything — frontend, backend, infrastructure, and security. No handoffs, no gaps.",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 8 2 12 6 16" />
        <polyline points="14 8 18 12 14 16" />
        <line x1="11" y1="6" x2="9" y2="18" />
      </svg>
    ),
  },
  {
    title: "Security-First Approach",
    description: "Security is baked in from day one — not bolted on at the end. Your data and users are always protected.",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2L3 5v5c0 4 3.1 7.4 7 8 3.9-.6 7-4 7-8V5z" />
        <polyline points="7 10 9 12 13 8" />
      </svg>
    ),
  },
  {
    title: "Fast & Reliable Delivery",
    description: "We ship on time without cutting corners. Structured sprints, clear milestones, no last-minute surprises.",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8" />
        <polyline points="10 6 10 10 13 12" />
      </svg>
    ),
  },
  {
    title: "Transparent Communication",
    description: "You always know what's happening. Regular updates, open channels, and honest timelines — always.",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13a2 2 0 01-2 2H6l-4 3V5a2 2 0 012-2h12a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: "Built to Scale With You",
    description: "We build for where you're going, not just where you are today. Every decision is made with growth in mind.",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 17 7 11 11 14 17 5" />
        <polyline points="14 5 17 5 17 8" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    label: "Discovery",
    detail: "We listen first. A focused call to understand your goals, constraints, and vision.",
  },
  {
    number: "02",
    label: "Strategy & Scope",
    detail: "We map out exactly what to build, how long it takes, and what it costs — no vague estimates.",
  },
  {
    number: "03",
    label: "Design & Build",
    detail: "Iterative sprints with real previews. You see progress every week, not just at the end.",
  },
  {
    number: "04",
    label: "Review & Launch",
    detail: "You sign off on every detail before we go live. Zero surprises on launch day.",
  },
  {
    number: "05",
    label: "Ongoing Partnership",
    detail: "We stay available after launch — monitoring, updates, and new features as you grow.",
  },
];

function ProcessTimeline() {
  return (
    <div className="relative flex flex-col gap-0">
      {steps.map((step, i) => (
        <motion.div
          key={step.number}
          className="relative flex gap-5 pb-8 last:pb-0"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex flex-col items-center">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0 z-10"
              style={{ backgroundColor: "#FFE224", color: "#131313" }}
            >
              {step.number}
            </div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                style={{ transformOrigin: "top", backgroundColor: "rgba(255,226,36,0.18)", minHeight: 28, width: 1, marginTop: 8, borderRadius: 999, flex: 1 }}
              />
            )}
          </div>

          <div className="pt-1.5 pb-2">
            <p className="text-sm font-bold text-white mb-1">{step.label}</p>
            <p className="text-xs text-zinc-500 leading-relaxed">{step.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-32 px-6 lg:px-20 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        <div>
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight">
              Why Choose <span style={{ color: "#FFE224" }}>DevMovers?</span>
            </h2>
          </FadeIn>

          <StaggerChildren className="space-y-7" staggerDelay={0.09}>
            {reasons.map((r) => (
              <StaggerItem key={r.title}>
                <div className="flex gap-4 group">
                  <div
                    className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-105"
                    style={{
                      backgroundColor: "rgba(255,226,36,0.08)",
                      border: "1px solid rgba(255,226,36,0.18)",
                      color: "#FFE224",
                    }}
                  >
                    {r.svg}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{r.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{r.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        <div>
          <FadeIn direction="up" delay={0.15}>
            <div className="mb-8">
              <p className="text-xs font-semibold text-zinc-600 tracking-widest uppercase mb-1">How We Work</p>
              <h3 className="text-2xl font-black text-white">From idea to live product</h3>
            </div>
            <ProcessTimeline />
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
