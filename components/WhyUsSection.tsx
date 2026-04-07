"use client";

import { motion } from "motion/react";
import { FadeIn, StaggerChildren, StaggerItem } from "./AnimationWrappers";

/* ─── data ──────────────────────────────────────────── */
const reasons = [
  { icon: "</>", title: "Full-Stack Expertise", description: "A complete team covering frontend, backend, DevOps, and security — everything under one roof." },
  { icon: "🔐", title: "Security-First Approach", description: "We prioritize application security from day one to protect your business and your users." },
  { icon: "⚡", title: "Fast & Reliable Delivery", description: "We deliver projects on time without compromising on quality. Speed and excellence go hand in hand." },
  { icon: "💬", title: "Transparent Communication", description: "Regular updates and clear communication throughout — no surprises, ever." },
  { icon: "🚀", title: "Startup-Focused Solutions", description: "We understand startup challenges and build cost-effective, scalable solutions that grow with you." },
];

const innerRing = [
  { name: "React",      short: "⚛",   color: "#61DAFB", bg: "rgba(97,218,251,0.12)"  },
  { name: "Node.js",    short: "⬡",   color: "#68A063", bg: "rgba(104,160,99,0.12)"  },
  { name: "TypeScript", short: "TS",  color: "#3178C6", bg: "rgba(49,120,198,0.12)"  },
  { name: "PostgreSQL", short: "PG",  color: "#336791", bg: "rgba(51,103,145,0.12)"  },
];

const outerRing = [
  { name: "Next.js",  short: "N▲",  color: "#ffffff", bg: "rgba(255,255,255,0.08)" },
  { name: "Docker",   short: "🐳",  color: "#2496ED", bg: "rgba(36,150,237,0.12)"  },
  { name: "AWS",      short: "☁",   color: "#FF9900", bg: "rgba(255,153,0,0.12)"   },
  { name: "Redis",    short: "R",   color: "#DC382D", bg: "rgba(220,56,45,0.12)"   },
  { name: "Python",   short: "Py",  color: "#3776AB", bg: "rgba(55,118,171,0.12)"  },
  { name: "Tailwind", short: "tw",  color: "#38BDF8", bg: "rgba(56,189,248,0.12)"  },
  { name: "Prisma",   short: "◈",   color: "#9F7AEA", bg: "rgba(159,122,234,0.12)" },
];

/* ─── helpers ───────────────────────────────────────── */
function radians(deg: number) { return (deg * Math.PI) / 180; }

// Returns position as % of a 400×400 logical grid (centre = 50%,50%)
function orbitalPos(index: number, total: number, radiusPx: number, offsetDeg = -90) {
  const angle = (360 / total) * index + offsetDeg;
  const x = 50 + (radiusPx / 400) * 100 * Math.cos(radians(angle));
  const y = 50 + (radiusPx / 400) * 100 * Math.sin(radians(angle));
  return { x, y };
}

/* ─── orbit component ───────────────────────────────── */
function TechOrbit() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto select-none">

      {/* SVG layer — rings + dashed spokes */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      >
        {/* Outer glow circle */}
        <circle cx={200} cy={200} r={195} fill="none"
          stroke="rgba(255,226,36,0.04)" strokeWidth="1.5" />

        {/* Orbital rings */}
        <circle cx={200} cy={200} r={110} fill="none"
          stroke="rgba(255,255,255,0.07)" strokeWidth="1"
          strokeDasharray="4 8" />
        <circle cx={200} cy={200} r={183} fill="none"
          stroke="rgba(255,255,255,0.04)" strokeWidth="1"
          strokeDasharray="4 12" />

        {/* Spokes from centre to inner ring */}
        {innerRing.map((_, i) => {
          const { x, y } = orbitalPos(i, innerRing.length, 110);
          return (
            <line key={i}
              x1={200} y1={200}
              x2={(x / 100) * 400} y2={(y / 100) * 400}
              stroke="rgba(255,226,36,0.12)" strokeWidth="1"
              strokeDasharray="3 6" />
          );
        })}
      </svg>

      {/* ── Inner ring (rotates CW) ── */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {innerRing.map((tech, i) => {
          const { x, y } = orbitalPos(i, innerRing.length, 110);
          return (
            <motion.div
              key={tech.name}
              className="absolute flex flex-col items-center gap-1"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-black backdrop-blur-sm"
                style={{ background: tech.bg, border: `1px solid ${tech.color}30`, color: tech.color }}
              >
                {tech.short}
              </div>
              <span className="text-[9px] font-semibold text-zinc-500 whitespace-nowrap">{tech.name}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── Outer ring (rotates CCW) ── */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {outerRing.map((tech, i) => {
          const { x, y } = orbitalPos(i, outerRing.length, 183);
          return (
            <motion.div
              key={tech.name}
              className="absolute flex flex-col items-center gap-1"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black backdrop-blur-sm"
                style={{ background: tech.bg, border: `1px solid ${tech.color}30`, color: tech.color }}
              >
                {tech.short}
              </div>
              <span className="text-[9px] font-semibold text-zinc-600 whitespace-nowrap">{tech.name}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── Centre hub ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Pulse rings */}
        {[1, 2, 3].map((n) => (
          <motion.div
            key={n}
            className="absolute rounded-full"
            style={{ width: 68 + n * 22, height: 68 + n * 22, border: "1px solid rgba(255,226,36,0.15)" }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: n * 0.7, ease: "easeInOut" }}
          />
        ))}
        {/* Core */}
        <motion.div
          className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black z-10"
          style={{
            background: "linear-gradient(135deg, #FFE224 0%, #e6cc00 100%)",
            color: "#131313",
            boxShadow: "0 0 40px rgba(255,226,36,0.4), 0 0 80px rgba(255,226,36,0.15)",
          }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {"</>"}
        </motion.div>
      </div>
    </div>
  );
}

/* ─── section ───────────────────────────────────────── */
export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-32 px-6 lg:px-20 bg-surface-container-lowest overflow-hidden">
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
                    className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-lg font-black transition-transform group-hover:scale-110"
                    style={{ backgroundColor: "rgba(255,226,36,0.12)", border: "1px solid rgba(255,226,36,0.2)" }}
                  >
                    {r.icon}
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

        {/* Right: animated tech orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <TechOrbit />
          <p className="text-center text-zinc-600 text-xs mt-6 tracking-wider uppercase font-semibold">
            Full-Stack Technology Ecosystem
          </p>
        </motion.div>
      </div>
    </section>
  );
}
