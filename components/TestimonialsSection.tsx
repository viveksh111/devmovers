"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    id: "t1",
    quote:
      "DevMovers delivered exactly what we needed. The team was professional, responsive, and highly skilled. They understood our vision from day one.",
    author: "Startup Founder",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Their security-first approach gave us confidence in our product. Every decision was made with our users' safety in mind. Highly recommended team.",
    author: "Tech Entrepreneur",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Smooth communication and fast delivery. We always knew what was happening and when. A great experience working with DevMovers.",
    author: "Business Owner",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#FFE224" }} className="text-lg">
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-32 px-6 lg:px-20 bg-surface-container-lowest"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-primary-container text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Client Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              What Our Clients Say
            </h2>
            <p className="text-zinc-500 max-w-lg mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have
              to say about working with DevMovers.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="p-10 border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <StarRating count={t.rating} />
                {/* Opening quote mark */}
                <div
                  className="text-6xl font-black leading-none mb-2 opacity-20"
                  style={{ color: "#FFE224" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <p className="text-zinc-300 leading-relaxed text-base">
                  {t.quote}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/10 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm shrink-0"
                  style={{
                    backgroundColor: "rgba(255,226,36,0.12)",
                    color: "#FFE224",
                  }}
                >
                  {t.author[0]}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{t.author}</p>
                  <p className="text-zinc-600 text-xs">Verified Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
