"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqs, type FaqItem } from "@/lib/data/faqs";

function FaqRow({ faq, isOpen, isHovered, onToggle, onHover, onLeave }: {
  faq: FaqItem; isOpen: boolean; isHovered: boolean;
  onToggle: () => void; onHover: () => void; onLeave: () => void;
}) {
  return (
    <div className="relative">
      <AnimatePresence>
        {isHovered && !isOpen && (
          <motion.div
            className="absolute inset-0 rounded-sm pointer-events-none"
            style={{ backgroundColor: "rgba(255,226,36,0.06)" }}
            initial={{ opacity: 0, scaleY: 0.9 }} animate={{ opacity: 1, scaleY: 1 }} exit={{ opacity: 0, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute inset-0 rounded-sm pointer-events-none"
            style={{ backgroundColor: "rgba(255,226,36,0.09)" }}
            initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          />
        )}
      </AnimatePresence>

      <button
        className="relative w-full p-8 flex justify-between items-center text-left cursor-pointer group z-10"
        onClick={onToggle} onMouseEnter={onHover} onMouseLeave={onLeave} aria-expanded={isOpen}
      >
        <span className="text-lg font-bold pr-4 transition-colors duration-200" style={{ color: isOpen ? "#FFE224" : undefined }}>
          {faq.question}
        </span>
        <motion.span
          className="material-symbols-outlined shrink-0 text-zinc-500 group-hover:text-yellow-400 transition-colors"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          add
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden relative z-10"
          >
            <p className="px-8 pb-8 text-zinc-400 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    faqs.forEach((faq) => {
      const el = itemRefs.current[faq.id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting && entry.intersectionRatio > 0.6) setOpenId(faq.id); },
        { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="faq" className="py-32 px-6 lg:px-20 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Frequently Asked</h2>
            <p className="text-zinc-500">Everything you need to know.</p>
          </motion.div>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              ref={(el) => { itemRefs.current[faq.id] = el; }}
              className="overflow-hidden rounded-lg"
              style={{ backgroundColor: "#1c1b1b" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <FaqRow
                faq={faq} isOpen={openId === faq.id} isHovered={hoveredId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                onHover={() => setHoveredId(faq.id)} onLeave={() => setHoveredId(null)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
