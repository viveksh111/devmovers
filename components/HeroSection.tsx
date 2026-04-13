"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import InfiniteCarousel from "./InfiniteCarousel";
import { heroPhrases } from "@/lib/data/hero";

const INTERVAL_MS = 3200;

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 4) % heroPhrases.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const { prefix, highlight } = heroPhrases[index];

  return (
    <section className="relative pt-35 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: "900px", height: "600px", background: "radial-gradient(ellipse at 50% 20%, rgba(255,226,36,0.13) 0%, rgba(255,226,36,0.05) 45%, transparent 70%)" }}
      />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
          style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,226,36,0.15)" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">Available for new Projects</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter w-full mb-8"
            style={{ lineHeight: 1.1 }}
          >
            <div className="relative overflow-hidden w-full h-[4.6em] sm:h-[3.8em] md:h-[2.8em] lg:h-[2.4em]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-0"
                  initial={{ opacity: 0, y: "40%", filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: "-40%", filter: "blur(4px)" }}
                  transition={{ duration: 0.48, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <span className="block text-white text-center leading-tight">{prefix}</span>
                  <span className="block text-center leading-tight" style={{ color: "#FFE224" }}>{highlight}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-4 font-medium"
        >
          We help startups and businesses turn ideas into powerful web and mobile applications with modern technology, strong security, and fast delivery.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-base text-zinc-500 max-w-xl mx-auto mb-10"
        >
          From MVP development to full-scale solutions, our expert team ensures your product is reliable, user-friendly, and built for growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.a
            href="/contact"
            className="relative inline-flex items-center gap-2 overflow-hidden px-6 py-3 sm:px-10 sm:py-4 rounded-full font-bold text-sm sm:text-base"
            style={{ backgroundColor: "#FFE224", color: "#131313" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 20 }}
          >
            <motion.span
              className="absolute inset-0 -translate-x-full pointer-events-none"
              style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)" }}
              whileHover={{ translateX: "200%" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            />
            <span className="relative">Get Free Consultation</span>
            <motion.span className="relative" whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>→</motion.span>
          </motion.a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-all px-5 py-2.5 sm:px-8 sm:py-4 rounded-full font-semibold text-sm"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            Start Your Project
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </motion.div>

        <div className="flex items-center justify-center gap-2 mb-12">
          {heroPhrases.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`Go to phrase ${i + 1}`} className="transition-all duration-300">
              <span
                className="block rounded-full transition-all duration-300"
                style={{ width: i === index ? "24px" : "6px", height: "6px", backgroundColor: i === index ? "#FFE224" : "rgba(255,255,255,0.2)" }}
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
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
          <span className="text-xs font-bold text-zinc-600 tracking-[0.2em] uppercase">Selected Projects</span>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
        </div>
        <InfiniteCarousel />
      </motion.div>
    </section>
  );
}