"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import InfiniteCarousel from "./InfiniteCarousel";

const phrases = [
  {
    prefix: "We Design & Build Products with",
    highlight: "AI-Driven Velocity",
  },
  {
    prefix: "Ship Your Next MVP in",
    highlight: "30 Days, Not Months",
  },
  {
    prefix: "From Concept to Production",
    highlight: "in Just 21 Days",
  },
  {
    prefix: "Scalable Systems Built",
    highlight: "From Day One",
  },
  {
    prefix: "AI & Cloud Engineering",
    highlight: "at Startup Speed",
  },
];

const INTERVAL_MS = 3200;

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 4) % phrases.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const { prefix, highlight } = phrases[index];

  return (
    <section className="relative pt-35 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "900px",
          height: "600px",
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(255,226,36,0.13) 0%, rgba(255,226,36,0.05) 45%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">
            Available for new Projects
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8 min-h-[1.9em] flex flex-col items-center justify-center gap-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={`prefix-${index}`}
                className="block text-white"
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, filter: "blur(4px)" }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {prefix}
              </motion.span>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.span
                key={`highlight-${index}`}
                style={{ color: "#FFE224" }}
                initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -28, filter: "blur(4px)" }}
                transition={{
                  duration: 0.45,
                  delay: 0.06,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {highlight}
              </motion.span>
            </AnimatePresence>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-medium"
        >
          High-performance engineering and architectural software design for the
          AI era.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#faq"
            className="inline-block bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold text-base hover:scale-105 active:scale-95 transition-transform"
          >
            Contact Us
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-semibold"
          >
            View our work
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </motion.div>

        <div className="flex items-center justify-center gap-2 mb-12">
          {phrases.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to phrase ${i + 1}`}
              className="transition-all duration-300"
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "24px" : "6px",
                  height: "6px",
                  backgroundColor:
                    i === index ? "#FFE224" : "rgba(255,255,255,0.2)",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full max-w-7xl"
      >
        <div className="flex items-center gap-4 mb-6 px-2">
          <div className="h-px flex-1 bg-outline-variant/20" />
          <span className="text-xs font-bold text-zinc-600 tracking-[0.2em] uppercase">
            Selected Projects
          </span>
          <div className="h-px flex-1 bg-outline-variant/20" />
        </div>
        <InfiniteCarousel />
      </motion.div>
    </section>
  );
}
  