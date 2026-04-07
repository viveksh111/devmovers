'use client';

import { motion } from 'motion/react';

type Row = {
  feature: string;
  devmovers: { text: string; icon?: 'check' | 'cross' };
  agency: { text: string; icon?: 'check' | 'cross' };
  freelancer: { text: string; icon?: 'check' | 'cross' };
};

const rows: Row[] = [
  {
    feature: 'Delivery Timeline',
    devmovers: { text: '2–4 weeks', icon: 'check' },
    agency: { text: '6–12 weeks', icon: 'cross' },
    freelancer: { text: '8–16 weeks', icon: 'cross' },
  },
  {
    feature: 'AI-Powered Development',
    devmovers: { text: 'Core of everything', icon: 'check' },
    agency: { text: 'Rarely used', icon: 'cross' },
    freelancer: { text: 'Not available', icon: 'cross' },
  },
  {
    feature: 'Code Quality',
    devmovers: { text: 'Senior-grade, reviewed', icon: 'check' },
    agency: { text: 'Mixed levels', icon: 'cross' },
    freelancer: { text: 'Inconsistent', icon: 'cross' },
  },
  {
    feature: 'Technical Support',
    devmovers: { text: '24 / 7', icon: 'check' },
    agency: { text: 'Business hours', icon: 'cross' },
    freelancer: { text: 'Limited', icon: 'cross' },
  },
  {
    feature: 'Scalable Architecture',
    devmovers: { text: 'Designed to scale', icon: 'check' },
    agency: { text: 'Often retrofitted', icon: 'cross' },
    freelancer: { text: 'Rarely planned', icon: 'cross' },
  },
  {
    feature: 'Mobile-First Design',
    devmovers: { text: 'Always', icon: 'check' },
    agency: { text: 'Usually', icon: 'check' },
    freelancer: { text: 'Varies', icon: 'cross' },
  },
  {
    feature: 'Fixed Fee',
    devmovers: { text: 'Transparent pricing', icon: 'check' },
    agency: { text: 'Scope creep common', icon: 'cross' },
    freelancer: { text: 'Hourly surprises', icon: 'cross' },
  },
];

function IconBadge({ type }: { type: 'check' | 'cross' | undefined }) {
  if (!type) return null;
  if (type === 'check')
    return (
      <span
        className="inline-flex items-center justify-center w-5 h-5 rounded-full mr-2 text-xs font-black"
        style={{ backgroundColor: 'rgba(255,226,36,0.15)', color: '#FFE224' }}
      >
        ✓
      </span>
    );
  return (
    <span
      className="inline-flex items-center justify-center w-5 h-5 rounded-full mr-2 text-xs font-black"
      style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#6b7280' }}
    >
      ✕
    </span>
  );
}

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-32 px-6 bg-zinc-950 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '700px',
          height: '400px',
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(255,226,36,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">
              Why DevMovers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            The smarter choice for <span style={{ color: '#FFE224' }}>founders</span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            We built DevMovers to fix everything that's broken about hiring agencies and
            freelancers.
          </p>
        </motion.div>

        <div className="w-full overflow-x-auto rounded-2xl border border-zinc-800/50 scrollbar-dark">
          <table className="w-full min-w-[600px] border-collapse table-fixed">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-5 px-6 text-left text-sm font-semibold text-zinc-500 w-[30%]">
                  Feature
                </th>

                <th
                  className="py-5 px-6 text-left w-[23%]"
                  style={{ borderTop: '2px solid #FFE224' }}
                >
                  <span className="text-sm font-black" style={{ color: '#FFE224' }}>
                    DevMovers
                  </span>
                </th>
                <th className="py-5 px-6 text-left text-sm font-semibold text-zinc-500 w-[23%]">
                  Agency
                </th>
                <th className="py-5 px-6 text-left text-sm font-semibold text-zinc-500 w-[23%]">
                  Freelancer
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  className="border-b border-zinc-800/50 last:border-0 group"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.055, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <td className="py-5 px-6 text-sm font-semibold text-white">{row.feature}</td>

                  <td
                    className="py-5 px-6 text-sm font-bold"
                    style={{ color: '#FFE224', backgroundColor: 'rgba(255,226,36,0.03)' }}
                  >
                    <span className="flex items-center">
                      <IconBadge type={row.devmovers.icon} />
                      {row.devmovers.text}
                    </span>
                  </td>

                  <td className="py-5 px-6 text-sm text-zinc-500">
                    <span className="flex items-center">
                      <IconBadge type={row.agency.icon} />
                      {row.agency.text}
                    </span>
                  </td>

                  <td className="py-5 px-6 text-sm text-zinc-500">
                    <span className="flex items-center">
                      <IconBadge type={row.freelancer.icon} />
                      {row.freelancer.text}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div
          className="mt-16 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 font-black text-lg px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-transform"
            style={{ backgroundColor: '#FFE224', color: '#131313' }}
          >
            Book a Free Strategy Call
            <span className="text-xl">⚡</span>
          </a>
          <p className="text-zinc-600 text-sm">No commitment. No sales pitch. Just clarity.</p>
        </motion.div>
      </div>
    </section>
  );
}
