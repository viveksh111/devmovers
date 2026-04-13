"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { marqueeRowOne, marqueeRowTwo } from "@/lib/data/marquee";

const EDGE_MASK = "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 8%, rgb(0,0,0) 92%, rgba(0,0,0,0) 100%)";

function MarqueeRow({ items, speed, bg, textColor, angle }: {
  items: string[]; speed: number; bg: string; textColor: string; angle: number;
}) {
  const all = [...items, ...items, ...items];
  const listRef = useRef<HTMLUListElement>(null);
  const oneWidthRef = useRef(0);
  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (!listRef.current) { oneWidthRef.current = 0; return; }
    if (!oneWidthRef.current) oneWidthRef.current = listRef.current.scrollWidth / 3;
    let next = x.get() + speed * (delta / 1000);
    if (next < -oneWidthRef.current) next += oneWidthRef.current;
    if (next > 0) next -= oneWidthRef.current;
    x.set(next);
  });

  return (
    <div
      className="absolute left-[-25%] w-[150%] overflow-hidden py-4 sm:py-7"
      style={{ top: "50%", backgroundColor: bg, transform: `translateY(-50%) rotate(${angle}deg)`, maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK }}
    >
      <motion.ul ref={listRef} className="flex items-center m-0 p-0 list-none" style={{ x, willChange: "transform" }}>
        {all.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-4 sm:gap-6 px-4 sm:px-8 text-sm sm:text-xl font-black uppercase tracking-tight whitespace-nowrap"
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
    <div className="relative w-full overflow-hidden" style={{ height: "280px" }}>
      <MarqueeRow items={marqueeRowOne} speed={-100} bg="#FFE224" textColor="#131313" angle={-6} />
      <MarqueeRow items={marqueeRowTwo} speed={100} bg="#131313" textColor="#FFE224" angle={6} />
    </div>
  );
}
