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
    id: "services",
    question: "What services does DevMovers offer?",
    answer:
      "DevMovers offers a full suite of digital development services including web application development, mobile app development (Android & iOS), backend & API development, DevOps & cloud deployment, security testing & secure coding, and data analytics & insights.",
  },
  {
    id: "timeline",
    question: "How quickly can you deliver my project?",
    answer:
      "We deliver MVPs fast — typically from concept to a functional product in weeks, not months. Our streamlined process, dedicated team structure, and parallel workstreams eliminate the delays that slow most agencies down.",
  },
  {
    id: "security",
    question: "How do you ensure application security?",
    answer:
      "Security is built into every stage of our development process, not bolted on afterward. We follow secure coding practices, conduct vulnerability assessments, and perform security testing before every deployment to protect your application and your users.",
  },
  {
    id: "startups",
    question: "Do you work with early-stage startups?",
    answer:
      "Absolutely. We specialize in startup-focused solutions and understand the unique challenges founders face. We build cost-effective, scalable products that let you launch fast, validate your idea, and grow without needing to rebuild later.",
  },
  {
    id: "communication",
    question: "How do you handle project communication?",
    answer:
      "We believe in full transparency. You get regular progress updates, clear milestone reporting, and direct access to your project lead. No black boxes — you always know what's being built and when it will be ready.",
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
              ref={(el) => {
                itemRefs.current[faq.id] = el;
              }}
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
