"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "motion/react";

const rowOne = [
  "Web App Development",
  "Mobile Apps",
  "Secure Coding",
  "Startup MVP",
  "Backend & APIs",
  "Full-Stack Team",
  "Security Testing",
  "Built to Scale",
];

const rowTwo = [
  "DevOps & Cloud",
  "Fast Delivery",
  "Android & iOS",
  "Data Analytics",
  "CI/CD Pipelines",
  "Transparent Pricing",
  "Security-First",
  "Scalable Systems",
];

const EDGE_MASK =
  "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 8%, rgb(0,0,0) 92%, rgba(0,0,0,0) 100%)";

function MarqueeRow({
  items,
  speed,
  bg,
  textColor,
  angle,
}: {
  items: string[];
  speed: number; 
  bg: string;
  textColor: string;
  angle: number; 
}) {
  const all = [...items, ...items, ...items];

  const listRef = useRef<HTMLUListElement>(null);
  const oneWidthRef = useRef(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (listRef.current) {
      oneWidthRef.current = listRef.current.scrollWidth / 3;
    }
  }, []);

  useAnimationFrame((_, delta) => {
    const w = oneWidthRef.current;
    if (!w) return;
    let next = x.get() + speed * (delta / 1000);
    if (next < -w) next += w;
    if (next > 0) next -= w;
    x.set(next);
  });

  return (
    <div
      className="absolute left-[-25%] w-[150%] overflow-hidden py-7"
      style={{
        top: "50%",
        backgroundColor: bg,
        transform: `translateY(-50%) rotate(${angle}deg)`,
        maskImage: EDGE_MASK,
        WebkitMaskImage: EDGE_MASK,
      }}
    >
      <motion.ul
        ref={listRef}
        className="flex items-center m-0 p-0 list-none"
        style={{ x, willChange: "transform" }}
      >
        {all.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-6 px-8 text-xl font-black uppercase tracking-tight whitespace-nowrap"
            aria-hidden={i >= items.length ? "true" : undefined}
            style={{ color: textColor }}
          >
            {item}
            <span style={{ color: textColor, opacity: 0.35 }}>✕</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export default function MarqueeBanner() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "420px" }}>
      <MarqueeRow
        items={rowOne}
        speed={-100}
        bg="#FFE224"
        textColor="#131313"
        angle={-6}
      />

      <MarqueeRow
        items={rowTwo}
        speed={100}
        bg="#131313"
        textColor="#FFE224"
        angle={6}
      />
    </div>
  );
}
