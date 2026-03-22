"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; 
import Logo from "./Logo";
import { motion } from "motion/react";

const navLinks = [
  { href: "#", label: "About" },
  { href: "#work", label: "Works" },
  { href: "#services", label: "Services" },
  { href: "#blog", label: "Blog" },
];

const socialLinks = [
  { href: "#", label: "Twitter(X)" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
];

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Term of Service" },
];

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums text-zinc-500 text-sm font-medium">
      {time}
    </span>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white">
      {/* Yellow glow radiating from bottom center — large & vivid */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "140%",
          height: "680px",
          background:
            "radial-gradient(ellipse at center bottom, rgba(255,226,36,0.38) 0%, rgba(255,226,36,0.18) 35%, rgba(255,226,36,0.05) 60%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-12 lg:px-20">
        {/* Top: Logo + columns */}
        <div className="pt-20 pb-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="md:col-span-1">
            <Logo size={40} variant="dark" showWordmark />
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-6">
              Navigation
            </p>
            <ul className="space-y-4">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-lg font-bold text-white hover:text-primary-container transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-6">
              Social
            </p>
            <ul className="space-y-4">
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-lg font-bold text-white hover:text-primary-container transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legals */}
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-6">
              Legals
            </p>
            <ul className="space-y-4">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-lg font-bold text-white hover:text-primary-container transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span className="text-zinc-500">
            © 2025 DevMovers. All rights reserved.
          </span>
          <LiveClock />
          <button
            onClick={scrollToTop}
            className="text-zinc-500 hover:text-primary-container transition-colors font-medium"
          >
            Back to top ↑
          </button>
        </div>
      </div>

      {/* Giant wordmark — visible, subtle top fade only */}
      <div
        className="relative select-none pointer-events-none"
        aria-hidden="true"
      >
        <motion.p
          className="text-[15vw] font-black uppercase tracking-tighter leading-none text-center whitespace-nowrap"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, white 30%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, white 30%)",
            color: "rgba(255,255,255,0.18)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          DEVMOVERS
        </motion.p>
      </div>
    </footer>
  );
}
