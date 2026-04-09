"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export function InputField({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  index,
  hint,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  index: number;
  hint?: string;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div variants={fadeUp} custom={index}>
      <label htmlFor={id} className="block text-sm font-semibold text-zinc-300 mb-2">
        {label}
        {hint && <span className="ml-2 text-xs text-zinc-600 font-normal">{hint}</span>}
      </label>
      <div
        className="relative rounded-lg transition-all duration-200"
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: focused ? "#FFE224" : "rgba(255,255,255,0.08)",
          boxShadow: focused ? "0 0 0 3px rgba(255,226,36,0.08)" : "none",
        }}
      >
        <input
          id={id}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none rounded-lg"
        />
      </div>
    </motion.div>
  );
}

export function SelectField({
  label,
  id,
  value,
  onChange,
  options,
  index,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <motion.div variants={fadeUp} custom={index} className="relative" ref={ref}>
      <label htmlFor={id} className="block text-sm font-semibold text-zinc-300 mb-2">
        {label}
      </label>

      <button
        id={id}
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3.5 rounded-lg text-sm transition-all duration-200 text-left"
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: open ? "#FFE224" : "rgba(255,255,255,0.08)",
          boxShadow: open ? "0 0 0 3px rgba(255,226,36,0.08)" : "none",
          backgroundColor: "transparent",
          color: value ? "#fff" : "#52525b",
        }}
      >
        <span>{value || "Please select…"}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-zinc-500 text-xs ml-2 shrink-0"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 w-full mt-1.5 rounded-xl overflow-hidden list-none m-0 p-1.5"
            style={{
              backgroundColor: "#1c1c1e",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
              transformOrigin: "top",
            }}
          >
            {options.map((opt) => (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => { onChange(opt); setOpen(false); }}
                  className="w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors duration-150"
                  style={{
                    color: value === opt ? "#FFE224" : "#d4d4d8",
                    backgroundColor: value === opt ? "rgba(255,226,36,0.08)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,226,36,0.06)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#FFE224";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      value === opt ? "rgba(255,226,36,0.08)" : "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      value === opt ? "#FFE224" : "#d4d4d8";
                  }}
                >
                  {opt}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function TextAreaField({
  label,
  id,
  placeholder,
  value,
  onChange,
  index,
}: {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  index: number;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div variants={fadeUp} custom={index}>
      <label htmlFor={id} className="block text-sm font-semibold text-zinc-300 mb-2">
        {label}
      </label>
      <div
        className="relative rounded-lg transition-all duration-200"
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: focused ? "#FFE224" : "rgba(255,255,255,0.08)",
          boxShadow: focused ? "0 0 0 3px rgba(255,226,36,0.08)" : "none",
        }}
      >
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={5}
          className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none resize-none rounded-lg"
        />
      </div>
    </motion.div>
  );
}
