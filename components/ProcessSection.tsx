"use client";

import { motion } from "motion/react";
import { processSteps } from "@/lib/data/process";

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 px-6 lg:px-20 bg-zinc-950 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: "600px", height: "350px", background: "radial-gradient(ellipse at 50% 0%, rgba(255,226,36,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-primary-container text-sm font-bold tracking-[0.2em] uppercase mb-4 block">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Development Process</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">A proven, structured approach that takes your idea from concept to live product.</p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex gap-6 group"
              >
                <div
                  className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center font-black text-sm border-2 transition-all duration-300 group-hover:scale-110"
                  style={{ borderColor: "rgba(255,226,36,0.3)", backgroundColor: "rgba(255,226,36,0.06)", color: "#FFE224" }}
                >
                  {step.number}
                </div>
                <div className="flex-1 pb-8 border-b border-white/5 last:border-0 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-lg" style={{ color: "#FFE224" }}>{step.icon}</span>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-zinc-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
