"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    id: "t1",
    quote:
      "DevMovers delivered exactly what we needed. The team was deeply professional, fast to respond, and truly understood our vision. The final product exceeded every expectation.",
    rating: 5,
    avatarX: "0%",
    featured: false,
  },
  {
    id: "t2",
    quote:
      "Their security-first approach gave us complete confidence in our platform. Every architectural decision was made with our users' safety in mind. Truly world-class engineering.",
    rating: 5,
    avatarX: "50%",
    featured: true,
  },
  {
    id: "t3",
    quote:
      "Smooth communication, transparent process, and lightning-fast delivery. We always knew exactly what was happening. The best dev team we've ever worked with.",
    rating: 5,
    avatarX: "100%",
    featured: false,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill="#FFE224"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-32 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,226,36,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">
              Client Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Trusted by <span style={{ color: "#FFE224" }}>founders</span> &amp; teams
          </h2>
          <p className="text-zinc-500 max-w-md mx-auto text-base leading-relaxed">
            Don&apos;t just take our word for it — here&apos;s what the people
            we&apos;ve built for have to say.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
                t.featured ? "md:-mt-6" : ""
              }`}
              style={{
                background: t.featured
                  ? "linear-gradient(145deg, #1a1900 0%, #111 60%)"
                  : "linear-gradient(145deg, #161616 0%, #111 100%)",
                border: t.featured
                  ? "1px solid rgba(255,226,36,0.35)"
                  : "1px solid rgba(255,255,255,0.07)",
                boxShadow: t.featured
                  ? "0 0 60px rgba(255,226,36,0.08), inset 0 1px 0 rgba(255,226,36,0.1)"
                  : "0 4px 24px rgba(0,0,0,0.4)",
              }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Featured badge */}
              {t.featured && (
                <div
                  className="absolute -top-px left-8 right-8 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #FFE224, transparent)",
                  }}
                />
              )}

              {/* Stars + quote icon row */}
              <div className="flex items-center justify-between">
                <Stars count={t.rating} />
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 24V14.4C0 10.56 0.746667 7.28 2.24 4.56C3.73333 1.84 6.13333 0.373333 9.44 0.16L10.56 2.24C8.21333 2.82667 6.56 4.10667 5.6 6.08C4.64 8.05333 4.21333 10.08 4.32 12.16H8.96V24H0ZM18.56 24V14.4C18.56 10.56 19.3067 7.28 20.8 4.56C22.2933 1.84 24.6933 0.373333 28 0.16L29.12 2.24C26.7733 2.82667 25.12 4.10667 24.16 6.08C23.2 8.05333 22.7733 10.08 22.88 12.16H27.52V24H18.56Z"
                    fill="rgba(255,226,36,0.25)"
                  />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-zinc-300 leading-relaxed text-[15px] flex-1">
                {t.quote}
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Avatar cropped from combined image */}
                <div
                  className="shrink-0 w-12 h-12 rounded-full overflow-hidden"
                  style={{
                    border: t.featured
                      ? "2px solid rgba(255,226,36,0.5)"
                      : "2px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: "url('/avatars.png')",
                      backgroundSize: "300% auto",
                      backgroundPosition: `${t.avatarX} 44%`,
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm font-medium">Verified Client</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <p className="text-xs text-zinc-600">Confirmed review</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: "30+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "4h", label: "Avg. Response Time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl font-black"
                style={{ color: "#FFE224" }}
              >
                {stat.value}
              </p>
              <p className="text-zinc-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
