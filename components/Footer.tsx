'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { motion } from 'motion/react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work',     label: 'Work'     },
  { href: '#why-us',  label: 'Why Us'   },
  { href: '#faq',     label: 'FAQ'      },
  { href: '/contact', label: 'Contact'  },
];

const socialLinks = [
  {
    href: 'http://x.com/dev_movers',
    label: 'X (Twitter)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.978l4.258 5.63 4.758-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: '#',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: '#',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

function LiveClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums text-zinc-500 text-xs font-medium">{time}</span>;
}

export default function Footer() {
  const scrollToTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '140%',
          height: '500px',
          background: 'radial-gradient(ellipse at center top, rgba(255,226,36,0.28) 0%, rgba(255,226,36,0.10) 35%, rgba(255,226,36,0.03) 60%, transparent 80%)',
        }}
      />

      <div className="relative h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,226,36,0.35), transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <motion.div
          className="py-10 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
              Ready to build something<br />
              <span style={{ color: '#FFE224' }}>remarkable?</span>
            </p>
            <p className="text-zinc-500 text-sm mt-2">Let&apos;s turn your idea into a real product.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 font-black text-sm px-6 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-transform"
            style={{ backgroundColor: '#FFE224', color: '#131313' }}
          >
            Start a Project ⚡
          </Link>
        </motion.div>

        <div className="h-px bg-white/5" />

        <div className="pt-14 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-2 sm:col-span-1">
            <Logo size={38} variant="dark" showWordmark />
            <p className="text-zinc-600 text-xs mt-4 leading-relaxed max-w-[180px]">
              Secure, scalable &amp; high-performance digital products for startups and enterprises.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-yellow-400 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href.startsWith('/') ? l.href : `/${l.href}`}
                    className="text-sm font-medium text-zinc-400 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@devmovers.com" className="text-sm font-medium text-zinc-400 hover:text-yellow-400 transition-colors flex items-center gap-2 break-all">
                  <span className="material-symbols-outlined text-yellow-400 text-sm shrink-0">mail</span>
                  info@devmovers.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/916266652703" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-yellow-400 text-sm">phone</span>
                  WhatsApp Us
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-bold hover:opacity-80 transition-opacity" style={{ color: '#FFE224' }}>
                  Get Free Consultation
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-5">Legal</p>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-sm font-medium text-zinc-400 hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/5" />

        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-zinc-600">© 2026 DevMovers. All rights reserved.</span>
          <LiveClock />
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-yellow-400 transition-colors font-medium group"
          >
            Back to top
            <span className="material-symbols-outlined text-sm group-hover:-translate-y-0.5 transition-transform">arrow_upward</span>
          </button>
        </div>
      </div>

      <div className="relative select-none pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.p
          className="text-[15vw] font-black uppercase tracking-tighter leading-none text-center whitespace-nowrap"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, white 40%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, white 40%)',
            color: 'rgba(255,255,255,0.06)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          DEVMOVERS
        </motion.p>
      </div>
    </footer>
  );
}
