"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { services } from "@/lib/data/services";

function ServiceCard({ svc, i }: { svc: typeof services[0]; i: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative group rounded-2xl p-7 sm:p-8 flex flex-col gap-5 cursor-default overflow-hidden"
      style={{
        backgroundColor: "rgba(255,255,255,0.015)",
        border: "1px solid",
        borderColor: hovered ? "rgba(255,226,36,0.25)" : "rgba(255,255,255,0.08)",
        transition: "border-color 0.3s ease",
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,226,36,0.06) 0%, transparent 65%)" }}
          />
        )}
      </AnimatePresence>

      <span
        className="absolute top-4 right-6 text-5xl font-black select-none pointer-events-none transition-colors duration-300"
        style={{ color: hovered ? "rgba(255,226,36,0.06)" : "rgba(255,255,255,0.03)" }}
      >
        {svc.num}
      </span>

      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{
          backgroundColor: hovered ? "rgba(255,226,36,0.12)" : "rgba(255,226,36,0.07)",
          border: "1px solid rgba(255,226,36,0.2)", color: "#FFE224",
        }}
      >
        {svc.svg}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-black text-white mb-2 leading-snug">{svc.title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{svc.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {svc.tags.map((t) => (
          <span
            key={t}
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-zinc-800 text-zinc-600 transition-colors duration-300 group-hover:border-yellow-400/20 group-hover:text-zinc-500"
          >
            {t}
          </span>
        ))}
      </div>

      <motion.div
        className="absolute bottom-6 right-6"
        initial={{ opacity: 0, x: -6 }}
        animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-yellow-400 material-symbols-outlined text-sm">arrow_forward</span>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 px-6 lg:px-20 bg-zinc-950 overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
        style={{ width: "800px", height: "400px", background: "radial-gradient(ellipse at 50% 0%, rgba(255,226,36,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <div className="inline-flex items-center gap-2 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold text-zinc-400 tracking-widest uppercase">What We Do</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              Everything you need<br />
              <span style={{ color: "#FFE224" }}>to ship faster.</span>
            </h2>
          </div>
          <div className="shrink-0 max-w-xs">
            <p className="text-zinc-500 text-sm leading-relaxed mb-4">
              End-to-end product engineering — from the first wireframe to a live, production-grade system running at scale.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold hover:opacity-80" style={{ color: "#FFE224" }}>
              Start a project
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => <ServiceCard key={svc.title} svc={svc} i={i} />)}
        </div>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-zinc-800/60 px-7 py-5"
          style={{ backgroundColor: "rgba(255,255,255,0.015)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-zinc-400 text-sm font-medium">
            Don&apos;t see exactly what you need? <span className="text-white font-semibold">We build bespoke.</span>
          </p>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 font-black text-sm px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-transform"
            style={{ backgroundColor: "#FFE224", color: "#131313" }}
          >
            Talk to us ⚡
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
