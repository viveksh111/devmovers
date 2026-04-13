"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

export default function WorkSection() {
  return (
    <section id="work" className="py-32 px-6 relative" style={{ backgroundColor: "#111" }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: "80%", height: "300px", background: "radial-gradient(ellipse at 50% 0%, rgba(255,226,36,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div>
            <div className="inline-flex items-center gap-2 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              Our Work &amp; <span style={{ color: "#FFE224" }}>Projects</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm text-base leading-relaxed md:text-right">
            Real products, real clients, real results. Each project is built with security, performance, and scalability at its core.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className={`group relative rounded-2xl overflow-hidden ${p.span}`}
              style={{ background: "linear-gradient(145deg, #1a1a1a 0%, #111 100%)", border: "1px solid rgba(255,255,255,0.07)" }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className={`relative w-full ${p.aspect} overflow-hidden`}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 66vw"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(17,17,17,0.95) 100%)" }} />
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase"
                    style={{ backgroundColor: "rgba(255,226,36,0.15)", color: "#FFE224", border: "1px solid rgba(255,226,36,0.25)" }}
                  >
                    {p.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 text-5xl font-black leading-none select-none" style={{ color: "rgba(255,255,255,0.06)" }}>
                  {p.id}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black text-white mb-2 leading-tight">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.description}</p>
              </div>

              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,226,36,0.25), 0 0 30px rgba(255,226,36,0.06)" }}
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-zinc-500 mt-16 text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We&apos;re always building something new —{" "}
          <span className="font-bold" style={{ color: "#FFE224" }}>your project could be next.</span>
        </motion.p>
      </div>
    </section>
  );
}
