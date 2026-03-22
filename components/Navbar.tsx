"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#process", label: "Process" },
    { href: "#why-us", label: "Why Us" },
    { href: "#blog", label: "Blog" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <motion.nav
      className="fixed top-6 left-1/2 z-50"
      style={{ translateX: "-50%" }}
      animate={{
        // Shrink width and add stronger blur when scrolled
        width: scrolled ? "75%" : "90%",
        top: scrolled ? 12 : 24,
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="rounded-full px-5 py-2.5 flex justify-between items-center shadow-2xl shadow-yellow-400/5 relative"
        animate={{
          backgroundColor: scrolled
            ? "rgba(9, 9, 9, 0.90)"
            : "rgba(9, 9, 9, 0.70)",
          backdropFilter: scrolled ? "blur(24px)" : "blur(16px)",
          paddingTop: scrolled ? "8px" : "10px",
          paddingBottom: scrolled ? "8px" : "10px",
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ border: "1px solid rgba(255,226,36,0.06)" }}
      >
        {/* Logo */}
        <a href="/" aria-label="DevMovers home">
          <motion.div
            animate={{ scale: scrolled ? 0.88 : 1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Logo size={scrolled ? 30 : 34} variant="dark" showWordmark />
          </motion.div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7 text-sm font-semibold font-(family-name:--font-plus-jakarta-sans) tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-yellow-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#faq"
          className="hidden md:inline-block bg-primary-container text-on-primary-container font-bold text-sm px-5 py-2 rounded-full hover:scale-105 active:scale-90 transition-transform"
        >
          Get Started
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </motion.div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <motion.div
          className="mt-2 mx-2 bg-zinc-950 rounded-2xl py-6 px-6 flex flex-col gap-4 shadow-2xl border border-zinc-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-yellow-400 transition-colors duration-300 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#faq"
            className="mt-2 bg-primary-container text-on-primary-container font-bold text-sm px-6 py-3 rounded-full text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
