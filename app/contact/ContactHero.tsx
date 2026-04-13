"use client";

import { motion } from "motion/react";

export function ContactHero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-end">
      <motion.div
        initial={{ opacity: 0, x: -32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
          Let&apos;s Build
          <br />
          <span style={{ color: "#FFE224" }}>Something</span>
          <br />
          Great
        </h1>
      </motion.div>

      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="text-zinc-400 text-lg leading-relaxed">
          Have an idea or project in mind? We&apos;d love to hear from you. Reach out and let&apos;s
          turn your vision into reality.
        </p>
        <div className="space-y-3">
          <a
            href="mailto:info@devmovers.com"
            className="flex items-center gap-3 text-zinc-400 hover:text-yellow-400 transition-colors group"
          >
            <span className="material-symbols-outlined text-primary-container group-hover:scale-110 transition-transform">
              mail
            </span>
            <span className="text-sm font-medium">info@devmovers.com</span>
          </a>
          <a
            href="https://wa.me/916266652703"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-zinc-400 hover:text-yellow-400 transition-colors group"
          >
            <span className="material-symbols-outlined text-primary-container group-hover:scale-110 transition-transform">
              phone
            </span>
            <span className="text-sm font-medium">WhatsApp / Phone</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-sm text-zinc-500">Usually respond within 2 hours</span>
        </div>
      </motion.div>
    </div>
  );
}
