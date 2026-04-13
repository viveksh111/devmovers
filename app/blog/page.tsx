import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/data/posts";

export const metadata: Metadata = {
  title: "Blog | DevMovers — Insights on Web Dev, Security & Startups",
  description:
    "Engineering deep-dives, startup strategy, security insights, and DevOps best practices from the DevMovers team.",
  openGraph: {
    title: "DevMovers Blog",
    description: "Engineering deep-dives, startup strategy, and security insights from the DevMovers team.",
    url: "https://devmovers.com/blog",
    siteName: "DevMovers",
    type: "website",
  },
};

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-950 pt-28 pb-20">
        {/* Hero */}
        <section className="relative px-6 lg:px-20 pb-16 overflow-hidden">
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: "700px", height: "400px",
              background: "radial-gradient(ellipse at 50% 0%, rgba(255,226,36,0.09) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold text-zinc-400 tracking-widest uppercase">The DevMovers Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-5">
              Inside the <span style={{ color: "#FFE224" }}>Engine</span>
            </h1>
            <p className="text-zinc-500 max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
              Engineering deep-dives, startup strategy, security insights, and DevOps best
              practices — direct from our team.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          {/* Category filter pills (visual only — no JS filter needed for SEO) */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-xs font-bold border transition-colors duration-200"
                style={
                  cat === "All"
                    ? { backgroundColor: "#FFE224", color: "#131313", borderColor: "#FFE224" }
                    : { backgroundColor: "rgba(255,255,255,0.03)", color: "#a1a1aa", borderColor: "rgba(255,255,255,0.08)" }
                }
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-3xl border border-zinc-800/60 overflow-hidden mb-6 hover:border-yellow-400/20 transition-colors duration-300"
              style={{ backgroundColor: "rgba(255,255,255,0.015)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <Image
                    src={featured.imageSrc}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(9,9,11,0.4) 100%)" }} />
                </div>

                {/* Content */}
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${featured.categoryColor}15`, color: featured.categoryColor, border: `1px solid ${featured.categoryColor}30` }}
                    >
                      {featured.category}
                    </span>
                    <span className="text-zinc-600 text-xs">Featured</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-snug group-hover:text-yellow-400 transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="text-zinc-500 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-zinc-600">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold" style={{ color: "#FFE224" }}>
                    Read article
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Post grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-zinc-800/60 overflow-hidden hover:border-yellow-400/20 transition-colors duration-300 flex flex-col"
                style={{ backgroundColor: "rgba(255,255,255,0.015)" }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category badge overlay */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm"
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

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-black text-white mb-2 leading-snug group-hover:text-yellow-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-zinc-600 pt-4 border-t border-zinc-800/60">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div
            className="mt-16 rounded-3xl border border-zinc-800/60 p-8 sm:p-12 text-center relative overflow-hidden"
            style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(255,226,36,0.07) 0%, transparent 65%)" }}
            />
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 relative z-10">
              Want articles like this in your inbox?
            </h2>
            <p className="text-zinc-500 mb-6 relative z-10">No spam. Just the good stuff — once a month.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto relative z-10">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 px-5 py-3 rounded-full text-sm bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 outline-none focus:border-yellow-400/40 transition-colors"
              />
              <button
                className="px-6 py-3 rounded-full font-black text-sm hover:scale-105 active:scale-95 transition-transform whitespace-nowrap"
                style={{ backgroundColor: "#FFE224", color: "#131313" }}
              >
                Subscribe ⚡
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
