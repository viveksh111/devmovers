"use client";

import { motion } from "motion/react";

function OrbitDot({
  angle,
  radius,
  delay,
  size = 4,
  color = "#FFE224",
}: {
  angle: number;
  radius: number;
  delay: number;
  size?: number;
  color?: string;
}) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        top: "50%",
        left: "50%",
        marginTop: -size / 2,
        marginLeft: -size / 2,
      }}
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{
        x: [0, x * 0.5, x, x * 1.1, x],
        y: [0, y * 0.5, y, y * 1.1, y],
        opacity: [0, 1, 1, 1, 0.7],
        scale: [0, 1.4, 1, 1.2, 1],
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
        opacity: { duration: 0.9, delay },
        scale: { duration: 0.9, delay },
      }}
    />
  );
}

function RippleRing({ delay, scale }: { delay: number; scale: number }) {
  return (
    <motion.div
      className="absolute inset-0 rounded-full border"
      style={{ borderColor: "rgba(255,226,36,0.4)" }}
      initial={{ scale: 0.5, opacity: 0.8 }}
      animate={{ scale, opacity: 0 }}
      transition={{ duration: 1.4, delay, ease: "easeOut" }}
    />
  );
}

function AnimatedCheck() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <motion.path
        d="M8 20.5L16.5 29L32 12"
        stroke="#131313"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
      />
    </svg>
  );
}

const orbitAngles = [0, 40, 80, 130, 175, 220, 265, 310];
const orbitConfigs = [
  { radius: 62, size: 4, color: "#FFE224" },
  { radius: 72, size: 3, color: "rgba(255,226,36,0.6)" },
  { radius: 58, size: 5, color: "#FFE224" },
  { radius: 68, size: 3, color: "rgba(255,226,36,0.4)" },
  { radius: 64, size: 4, color: "#FFE224" },
  { radius: 70, size: 3, color: "rgba(255,226,36,0.5)" },
  { radius: 60, size: 5, color: "#FFE224" },
  { radius: 66, size: 3, color: "rgba(255,226,36,0.6)" },
];

export function SuccessScreen({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      key="success"
      className="flex flex-col items-center justify-center py-16 gap-0 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
    >
      <div className="relative flex items-center justify-center mb-10" style={{ width: 160, height: 160 }}>
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,226,36,0.18) 0%, transparent 70%)" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.6, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        <div className="absolute" style={{ width: 96, height: 96, top: 32, left: 32 }}>
          <RippleRing delay={0.4} scale={2.2} />
          <RippleRing delay={0.7} scale={3.0} />
          <RippleRing delay={1.0} scale={3.8} />
        </div>

        {orbitAngles.map((angle, i) => (
          <OrbitDot
            key={i}
            angle={angle}
            radius={orbitConfigs[i].radius}
            delay={0.2 + i * 0.055}
            size={orbitConfigs[i].size}
            color={orbitConfigs[i].color}
          />
        ))}

        <motion.div
          className="relative z-10 flex items-center justify-center rounded-full"
          style={{ width: 72, height: 72, backgroundColor: "#FFE224" }}
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <AnimatedCheck />
        </motion.div>
      </div>

      <motion.h3
        className="text-2xl font-black text-white mb-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      >
        You&apos;re all set
      </motion.h3>

      {["Your brief landed in our inbox.", "Expect a reply within 4 hours."].map((line, i) => (
        <motion.p
          key={i}
          className="text-zinc-400 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.8 + i * 0.12, ease: "easeOut" }}
        >
          {line}
        </motion.p>
      ))}

      <motion.div
        className="my-6 rounded-full"
        style={{ height: 1, backgroundColor: "rgba(255,226,36,0.15)" }}
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
      />

      <motion.button
        onClick={onReset}
        className="text-xs text-zinc-500 hover:text-yellow-400 transition-colors relative group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <span>Send another request</span>
        <motion.span
          className="absolute left-0 -bottom-0.5 h-px bg-yellow-400"
          initial={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.25 }}
        />
      </motion.button>
    </motion.div>
  );
}
