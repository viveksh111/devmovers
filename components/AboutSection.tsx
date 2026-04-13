"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { aboutStats, aboutValues, techStack } from "@/lib/data/about";

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-60, 60], [6, -6]), { stiffness: 260, damping: 20 });
  const ry = useSpring(useTransform(x, [-120, 120], [-6, 6]), { stiffness: 260, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 lg:px-20 bg-zinc-950 overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
        style={{ width: "900px", height: "500px", background: "radial-gradient(ellipse at 50% 0%, rgba(255,226,36,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-zinc-400 tracking-widest uppercase">Who We Are</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-5">
            Built by builders,<br />
            <span style={{ color: "#FFE224" }}>for builders.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            DevMovers is a tight-knit team of full-stack engineers, designers, and security experts
            who started as freelancers and grew into a product studio. We obsess over clean code,
            fast delivery, and outcomes that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col gap-4">
            {aboutValues.map((v, i) => (
              <TiltCard key={v.title}>
                <motion.div
                  className="rounded-2xl p-6 sm:p-7 flex gap-5 items-start group cursor-default hover:border-yellow-400/20 transition-colors duration-300"
                  style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                >
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "rgba(255,226,36,0.10)", border: "1px solid rgba(255,226,36,0.18)", color: "#FFE224" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d={v.iconPath} />
                      {v.title === "Our Mission" && <circle cx="10" cy="10" r="3" />}
                      {v.title === "Our Vision" && <circle cx="10" cy="10" r="2.5" />}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest mb-2" style={{ color: "#FFE224" }}>
                      {v.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{v.body}</p>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>

          <motion.div
            className="rounded-2xl p-8 sm:p-10 flex flex-col justify-between gap-8 relative overflow-hidden"
            style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute -bottom-12 -right-12 w-48 h-48 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,226,36,0.12) 0%, transparent 70%)" }} />

            <div>
              <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase mb-3">Our Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#a1a1aa",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * i, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,226,36,0.4)";
                      (e.currentTarget as HTMLElement).style.color = "#FFE224";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.color = "#a1a1aa";
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase mb-4">Our Story</p>
              <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                We started as a small freelancing collective with a single belief: that great
                software doesn&apos;t have to take months or cost a fortune. Since then, we&apos;ve shipped
                30+ products for founders, enterprises, and everything in between.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold transition-colors duration-200" style={{ color: "#FFE224" }}>
                Work with us
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {aboutStats.map((s, i) => (
            <motion.div
              key={s.label}
              className="rounded-2xl py-6 px-4 flex flex-col items-center gap-1 group hover:border-yellow-400/20 transition-colors duration-300"
              style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
            >
              <span className="text-3xl sm:text-4xl font-black group-hover:scale-105 transition-transform duration-300" style={{ color: "#FFE224" }}>
                {s.value}
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-zinc-600 tracking-widest uppercase text-center">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
