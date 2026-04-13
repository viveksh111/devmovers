"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { FadeIn, StaggerChildren, StaggerItem } from "./AnimationWrappers";
import { reasons, type Reason } from "@/lib/data/whyus";

const ReasonIcons: Record<Reason["icon"], ReactNode> = {
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  bolt: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  chat: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  rocket: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
};

const terminalLines = [
  { text: "$ git push origin main", color: "#a1a1aa" },
  { text: "✓ Build completed in 18s", color: "#4ade80" },
  { text: "✓ 47 tests passed", color: "#4ade80" },
  { text: "✓ Security scan clean", color: "#4ade80" },
  { text: "✓ Deployed to production", color: "#FFE224" },
  { text: "🚀 Live → yourapp.com", color: "#FFE224" },
];

const CIRC = 2 * Math.PI * 38;

function RightPanel() {
  return (
    <div className="w-full max-w-[440px] mx-auto space-y-4">

      {/* ── Terminal card ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="rounded-2xl overflow-hidden"
        style={{
          background: "#0c0c0c",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 50px rgba(255,226,36,0.07), 0 20px 60px rgba(0,0,0,0.6)",
        }}
      >
        {/* Mac-style header */}
        <div className="flex items-center gap-2 px-4 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="flex items-center gap-1.5 ml-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[11px] text-zinc-500 font-mono tracking-tight">devmovers ~ production</span>
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-5 font-mono text-sm space-y-2.5">
          {terminalLines.map((line, i) => (
            <motion.p
              key={i}
              style={{ color: line.color }}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.22, ease: "easeOut" }}
            >
              {line.text}
            </motion.p>
          ))}
          <motion.span
            className="inline-block w-2 h-[16px] rounded-sm"
            style={{ backgroundColor: "#FFE224", verticalAlign: "middle" }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* ── 3 stat cards ── */}
      <div className="grid grid-cols-3 gap-4">

        {/* 98% circular */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl p-4 flex flex-col items-center gap-2"
          style={{ background: "linear-gradient(145deg,#1a1a1a,#111)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="relative">
            <svg width="72" height="72" viewBox="0 0 88 88">
              <circle cx="44" cy="44" r="38" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
              <motion.circle
                cx="44" cy="44" r="38"
                fill="none"
                stroke="#FFE224"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                initial={{ strokeDashoffset: CIRC }}
                whileInView={{ strokeDashoffset: CIRC * 0.02 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ transform: "rotate(-90deg)", transformOrigin: "44px 44px" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-base font-black text-white">98%</span>
            </div>
          </div>
          <p className="text-[10px] text-zinc-500 font-medium text-center leading-tight">Client Satisfaction</p>
        </motion.div>

        {/* 30+ projects */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl p-4 flex flex-col justify-between"
          style={{ background: "linear-gradient(145deg,#1a1900,#111)", border: "1px solid rgba(255,226,36,0.15)" }}
        >
          <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(255,226,36,0.12)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFE224" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-black" style={{ color: "#FFE224" }}>30+</p>
            <p className="text-[10px] text-zinc-500 mt-0.5 leading-tight">Projects Delivered</p>
          </div>
        </motion.div>

        {/* 2-4 weeks */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-2xl p-4 flex flex-col justify-between"
          style={{ background: "linear-gradient(145deg,#1a1a1a,#111)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(255,226,36,0.12)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFE224" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-black text-white">2–4</p>
            <p className="text-[10px] text-zinc-500 mt-0.5 leading-tight">Weeks to Ship</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-32 px-6 lg:px-20 overflow-hidden" style={{ backgroundColor: "#0f0f0f" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left: reasons list */}
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

          <StaggerChildren className="space-y-7" staggerDelay={0.1}>
            {reasons.map((r) => (
              <StaggerItem key={r.title}>
                <div className="flex gap-4 group">
                  <div
                    className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: "rgba(255,226,36,0.1)", border: "1px solid rgba(255,226,36,0.2)", color: "#FFE224" }}
                  >
                    {ReasonIcons[r.icon]}
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

        {/* Right: terminal + stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <RightPanel />
        </motion.div>
      </div>
    </section>
  );
}
