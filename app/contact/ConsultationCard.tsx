"use client";

import { motion } from "motion/react";

const perks = [
  {
    text: "Fast & reliable delivery",
    svg: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7.5" cy="7.5" r="6" />
        <polyline points="7.5 4.5 7.5 7.5 9.5 9" />
      </svg>
    ),
  },
  {
    text: "Security-first approach",
    svg: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.5 1L2 3.5v3.8c0 3 2.3 5.5 5.5 6 3.2-.5 5.5-3 5.5-6V3.5z" />
        <polyline points="5 7.5 6.5 9 10 5.5" />
      </svg>
    ),
  },
  {
    text: "Transparent communication",
    svg: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 9.5a1.5 1.5 0 01-1.5 1.5H4L2 13V3a1.5 1.5 0 011.5-1.5h8A1.5 1.5 0 0113 3z" />
        <line x1="5" y1="6" x2="10" y2="6" />
        <line x1="5" y1="8.5" x2="8" y2="8.5" />
      </svg>
    ),
  },
];

const steps = [
  "We listen to your goals & constraints",
  "We map a clear scope & timeline",
  "You get a delivery plan — no fluff",
];

export function ConsultationCard() {
  return (
    <motion.div
      className="border border-zinc-800/60 rounded-2xl p-8 flex flex-col gap-7 h-full relative overflow-hidden"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ borderColor: "rgba(255,226,36,0.2)" }}
    >
      {/* subtle top glow line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,226,36,0.3), transparent)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase mb-3">Option 1</p>
        <h2 className="text-2xl font-black text-white mb-2">Get a Free Consultation</h2>
        <p className="text-zinc-500 text-sm leading-relaxed">
          Jump on a free 30-min strategy session. We&apos;ll understand your goals and give you a
          clear delivery plan — no commitment needed.
        </p>
      </motion.div>

      {/* Perks */}
      <div className="flex flex-col gap-3">
        {perks.map((item, i) => (
          <motion.div
            key={item.text}
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"
              style={{ backgroundColor: "rgba(255,226,36,0.08)", color: "#FFE224", border: "1px solid rgba(255,226,36,0.15)" }}
              whileHover={{ backgroundColor: "rgba(255,226,36,0.18)", scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {item.svg}
            </motion.div>
            <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200">{item.text}</span>
          </motion.div>
        ))}
      </div>

      {/* What happens on the call */}
      <motion.div
        className="rounded-xl p-5 flex flex-col gap-0"
        style={{ backgroundColor: "rgba(255,226,36,0.03)", border: "1px solid rgba(255,226,36,0.08)" }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
      >
        <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase mb-4">What happens on the call</p>
        {steps.map((line, i) => (
          <div key={i} className="relative flex gap-3 pb-4 last:pb-0">
            {/* connector line */}
            {i < steps.length - 1 && (
              <motion.div
                className="absolute left-[13px] top-7 w-px"
                style={{ backgroundColor: "rgba(255,226,36,0.15)" }}
                initial={{ height: 0 }}
                animate={{ height: 24 }}
                transition={{ duration: 0.3, delay: 0.75 + i * 0.12, ease: "easeOut" }}
              />
            )}
            <motion.span
              className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black z-10"
              style={{ backgroundColor: "#FFE224", color: "#131313" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 + i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {i + 1}
            </motion.span>
            <motion.p
              className="text-zinc-400 text-sm leading-snug pt-0.5"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.75 + i * 0.12, ease: "easeOut" }}
            >
              {line}
            </motion.p>
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.05, ease: "easeOut" }}
      >
        <p className="text-xs text-zinc-600 mb-4">100% free &amp; non-binding · 30 min</p>
        <motion.a
          href="https://cal.com/devmovers/project-discussion"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2.5 font-black text-sm px-7 py-3.5 rounded-full overflow-hidden group"
          style={{ backgroundColor: "#FFE224", color: "#131313" }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 380, damping: 20 }}
        >
          {/* shimmer sweep */}
          <motion.span
            className="absolute inset-0 -translate-x-full"
            style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)" }}
            whileHover={{ translateX: "200%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="2" width="12" height="11" rx="2" />
            <line x1="1" y1="6" x2="13" y2="6" />
            <line x1="4.5" y1="1" x2="4.5" y2="3.5" />
            <line x1="9.5" y1="1" x2="9.5" y2="3.5" />
          </svg>
          <span className="relative">Book discovery call</span>
          <motion.span
            className="relative"
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            →
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
