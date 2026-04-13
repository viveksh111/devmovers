"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ctaStats } from "@/lib/data/cta";


export default function CtaSection() {
  return (
    <section className="py-24 px-6 lg:px-20 relative overflow-hidden bg-zinc-950">
      {/* Yellow glow backdrop */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(255,226,36,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {ctaStats.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center gap-1 py-6 rounded-2xl border border-zinc-800/60"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
              style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              <span
                className="text-3xl sm:text-4xl font-black"
                style={{ color: "#FFE224" }}
              >
                {s.value}
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-zinc-600 tracking-widest uppercase text-center">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA card */}
        <motion.div
          className="rounded-3xl border border-zinc-800/60 p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden"
          style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* yellow corner accent */}
          <div
            className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,226,36,0.14) 0%, transparent 70%)",
            }}
          />

          {/* Text */}
          <div className="flex-1 min-w-0">
            <motion.p
              className="text-xs font-bold tracking-widest text-zinc-600 uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Start Building Today
            </motion.p>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Ready to Build Your{" "}
              <span style={{ color: "#FFE224" }}>Next Project?</span>
            </motion.h2>
            <motion.p
              className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Partner with DevMovers and turn your ideas into a live, scalable
              product — fast. No fluff, no hidden fees.
            </motion.p>
          </div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-black text-sm sm:text-base px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-transform whitespace-nowrap"
              style={{ backgroundColor: "#FFE224", color: "#131313" }}
            >
              Contact Us Today ⚡
            </Link>
            <a
              href="https://cal.com/devmovers/project-discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 rounded-full border border-zinc-700 text-zinc-300 hover:border-yellow-400/50 hover:text-white transition-all whitespace-nowrap"
            >
              Book a Free Call
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
