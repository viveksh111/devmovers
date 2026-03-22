"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: "deployment",
    question: "How do you achieve 21-day deployment?",
    answer:
      "We use AI-augmented development pipelines combined with pre-built infrastructure templates and a dedicated sprint methodology. Our team works in parallel streams — design, backend, and frontend — eliminating handoff delays that slow traditional agencies.",
  },
  {
    id: "tech-stack",
    question: "Do you work with existing tech stacks?",
    answer:
      "Absolutely. We perform a thorough architecture audit of your existing stack before engaging. Our engineers are polyglot and can extend, refactor, or integrate with virtually any modern technology while minimising disruption.",
  },
  {
    id: "ai-models",
    question: "What AI models do you typically use?",
    answer:
      "We're model-agnostic. Depending on your use case, latency requirements, and cost targets, we evaluate options from OpenAI, Anthropic, Google DeepMind, open-source models like Llama, and specialized domain models. We recommend the best fit, not the most hyped.",
  },
  {
    id: "maintenance",
    question: "Is the maintenance included in the fixed fee?",
    answer:
      "The Product Launch tier includes 30 days of post-launch support. The Full Partnership retainer covers ongoing maintenance, monitoring, and continuous improvement as part of the monthly engagement.",
  },
  {
    id: "how-fast",
    question: "How fast can you deliver my project?",
    answer:
      "Most MVPs are delivered in 21 days. More complex platforms with custom AI pipelines typically land between 30–45 days. We always agree on a clear delivery milestone before starting.",
  },
];

function FaqRow({
  faq,
  isOpen,
  isHovered,
  onToggle,
  onHover,
  onLeave,
}: {
  faq: FaqItem;
  isOpen: boolean;
  isHovered: boolean;
  onToggle: () => void;
  onHover: () => void;
  onLeave: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="relative">
      <AnimatePresence>
        {isHovered && !isOpen && (
          <motion.div
            className="absolute inset-0 rounded-sm pointer-events-none"
            style={{ backgroundColor: "rgba(255,226,36,0.06)" }}
            initial={{ opacity: 0, scaleY: 0.9 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute inset-0 rounded-sm pointer-events-none"
            style={{ backgroundColor: "rgba(255,226,36,0.09)" }}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          />
        )}
      </AnimatePresence>

      <button
        className="relative w-full p-8 flex justify-between items-center text-left cursor-pointer group z-10"
        onClick={onToggle}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        aria-expanded={isOpen}
      >
        <span
          className="text-lg font-bold pr-4 transition-colors duration-200"
          style={{ color: isOpen ? "#FFE224" : undefined }}
        >
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden relative z-10"
          >
            <p className="px-8 pb-8 text-zinc-400 leading-relaxed">
              {faq.answer}
            </p>
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
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setOpenId(faq.id);
          }
        },
        { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="faq" className="py-32 px-6 lg:px-20 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Frequently Asked
            </h2>
            <p className="text-zinc-500">Everything you need to know.</p>
          </motion.div>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              ref={(el) => { itemRefs.current[faq.id] = el; }}
              className="bg-surface-container-low overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <FaqRow
                faq={faq}
                isOpen={openId === faq.id}
                isHovered={hoveredId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                onHover={() => setHoveredId(faq.id)}
                onLeave={() => setHoveredId(null)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
