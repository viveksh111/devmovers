"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { posts } from "@/lib/data/posts";

const featured = posts.find((p) => p.featured)!;
const previews = posts.filter((p) => !p.featured).slice(0, 2);

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-28 px-6 lg:px-20 bg-zinc-950 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: "700px", height: "400px",
          background: "radial-gradient(ellipse at 50% 0%, rgba(255,226,36,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <div className="inline-flex items-center gap-2 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold text-zinc-400 tracking-widest uppercase">From the Team</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight">
              Inside the <span style={{ color: "#FFE224" }}>Engine</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200 group"
            style={{ color: "#FFE224" }}
          >
            View all articles
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </motion.div>

        {/* Layout: featured large + two stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch">

          {/* Featured */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group flex flex-col h-full rounded-2xl border border-zinc-800/60 overflow-hidden hover:border-yellow-400/20 transition-colors duration-300"
              style={{ backgroundColor: "rgba(255,255,255,0.015)" }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={featured.imageSrc}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm"
                    style={{
                      backgroundColor: `${featured.categoryColor}20`,
                      color: featured.categoryColor,
                      border: `1px solid ${featured.categoryColor}30`,
                    }}
                  >
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 leading-snug group-hover:text-yellow-400 transition-colors duration-300">
                  {featured.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-5">{featured.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-zinc-600 pt-4 border-t border-zinc-800/40">
                  <span>{featured.date}</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Two smaller cards stacked */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {previews.map((post, i) => (
              <motion.div
                key={post.id}
                className="flex-1"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-zinc-800/60 overflow-hidden hover:border-yellow-400/20 transition-colors duration-300"
                  style={{ backgroundColor: "rgba(255,255,255,0.015)" }}
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={post.imageSrc}
                      alt={post.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${post.categoryColor}20`,
                          color: post.categoryColor,
                          border: `1px solid ${post.categoryColor}30`,
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-sm font-black text-white mb-1.5 leading-snug group-hover:text-yellow-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-zinc-600 text-xs leading-relaxed flex-1 mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-[10px] text-zinc-700 pt-3 border-t border-zinc-800/40">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-black text-sm px-8 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-transform border border-zinc-700 text-zinc-300 hover:border-yellow-400/40 hover:text-white"
          >
            Browse all {posts.length} articles →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
