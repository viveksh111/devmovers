'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import Logo from './Logo';
import { navLinks } from '@/lib/data/nav';

const MotionLink = motion.create(Link);



export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);




  return (
    <motion.nav
      className="fixed top-6 left-1/2 z-50"
      style={{ translateX: '-50%' }}
      initial={{ width: 'min(800px, 95vw)', top: 24 }}
      animate={{
        width: scrolled ? 'min(740px, 93vw)' : 'min(800px, 95vw)',
        top: scrolled ? 12 : 24,
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="rounded-full px-5 py-2.5 flex justify-between items-center shadow-2xl shadow-yellow-400/5 relative"
        animate={{
          backgroundColor: scrolled ? 'rgba(9, 9, 9, 0.90)' : 'rgba(9, 9, 9, 0.70)',
          backdropFilter: scrolled ? 'blur(24px)' : 'blur(16px)',
          paddingTop: scrolled ? '8px' : '10px',
          paddingBottom: scrolled ? '8px' : '10px',
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ border: '1px solid rgba(255,226,36,0.06)' }}
      >
        <Link href="/" aria-label="DevMovers home">
          <motion.div
            animate={{ scale: scrolled ? 0.88 : 1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Logo size={scrolled ? 30 : 34} variant="dark" showWordmark />
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-5 text-xs font-semibold font-(family-name:--font-plus-jakarta-sans) tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href.startsWith('/') ? link.href : `/${link.href}`}
              className="text-zinc-400 hover:text-yellow-400 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <MotionLink
          href="/contact"
          className="hidden md:inline-flex items-center gap-1.5 relative overflow-hidden font-bold text-xs px-4 py-2 rounded-full whitespace-nowrap shrink-0"
          style={{ backgroundColor: '#FFE224', color: '#131313' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 380, damping: 20 }}
        >
          <motion.span
            className="absolute inset-0 -translate-x-full pointer-events-none"
            style={{
              background:
                'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)',
            }}
            whileHover={{ translateX: '200%' }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          />
          <span className="relative">Get Free Consultation</span>
          <motion.span
            className="relative text-xs"
            initial={{ x: 0 }}
            whileHover={{ x: 2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            →
          </motion.span>
        </MotionLink>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </motion.div>

      {mobileOpen && (
        <motion.div
          className="mt-2 mx-2 bg-zinc-950 rounded-2xl py-6 px-6 flex flex-col gap-4 shadow-2xl border border-zinc-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href.startsWith('/') ? link.href : `/${link.href}`}
              onClick={() => setMobileOpen(false)}
              className="text-zinc-400 hover:text-yellow-400 transition-colors duration-300 font-semibold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 font-bold text-sm px-6 py-3 rounded-full text-center text-zinc-950"
            style={{ backgroundColor: "#FFE224" }}
          >
            Get Free Consultation
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
