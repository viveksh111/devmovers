"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type LogoProps = {
  size?: number;
  variant?: "dark" | "light";
  showWordmark?: boolean;
};

const LETTERS = "Movers".split("");

export default function Logo({
  size = 36,
  variant = "dark",
  showWordmark = true,
}: LogoProps) {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const bg = variant === "dark" ? "#FFE224" : "#131313";
  const mark = variant === "dark" ? "#131313" : "#FFE224";
  const textColor = variant === "dark" ? "#ffffff" : "#0a0a0a";

  const draw = (delay = 0) => ({
    initial: { pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: {
      pathLength: {
        duration: reduced ? 0 : 0.45,
        delay: reduced ? 0 : delay,
        ease: [0.76, 0, 0.24, 1] as const,
      },
      opacity: { duration: 0.01, delay: reduced ? 0 : delay },
    },
  });

  return (
    <div
      className="flex items-center cursor-pointer select-none"
      style={{ gap: size * 0.28 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon mark */}
      <motion.div
        animate={hovered ? { x: 3 } : { x: 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        style={{ position: "relative", width: size, height: size, flexShrink: 0 }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          style={{ display: "block" }}
        >
          <rect width="36" height="36" rx="9" fill={bg} />
          <motion.path
            d="M8 11.5L16.5 18L8 24.5"
            stroke={mark}
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            {...draw(0)}
          />
          <motion.path
            d="M18.5 11.5L27 18L18.5 24.5"
            stroke={mark}
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            {...draw(0.18)}
          />
        </svg>

        {!reduced && (
          <motion.div
            animate={
              hovered
                ? { opacity: 1, scale: 1.2 }
                : { opacity: 0, scale: 0.85 }
            }
            transition={{ duration: 0.35 }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 9,
              background: "rgba(255,226,36,0.4)",
              filter: "blur(10px)",
              zIndex: -1,
            }}
          />
        )}
      </motion.div>

      {/* Wordmark — wave on hover */}
      {showWordmark && (
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
            lineHeight: 1,
            overflow: "hidden",
          }}
          aria-label="Movers"
        >
          {LETTERS.map((char, i) => (
            <motion.span
              key={i}
              style={{
                display: "inline-block",
                fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                fontWeight: 900,
                fontSize: size * 0.52,
                letterSpacing: "-0.03em",
                color: textColor,
                lineHeight: 1.1,
              }}
              initial={reduced ? {} : { y: "110%", opacity: 0 }}
              animate={
                reduced
                  ? {}
                  : hovered
                  ? {
                      y: [0, -7, 0],
                      opacity: 1,
                    }
                  : { y: 0, opacity: 1 }
              }
              transition={
                hovered
                  ? {
                      y: {
                        duration: 0.55,
                        delay: i * 0.06,
                        repeat: Infinity,
                        repeatDelay: 0.8,
                        ease: [0.45, 0, 0.55, 1],
                      },
                      opacity: { duration: 0.3, delay: 0.12 + i * 0.04 },
                    }
                  : {
                      y: { duration: 0.3, ease: "easeOut" },
                      opacity: { duration: 0.5, delay: 0.12 + i * 0.04, ease: [0.76, 0, 0.24, 1] },
                    }
              }
            >
              {char}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  );
}
