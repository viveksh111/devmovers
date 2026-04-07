"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const budgetOptions = [
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000 – $60,000",
  "$60,000+",
  "Not sure yet",
];

type FormState = {
  name: string;
  email: string;
  alt: string;
  budget: string;
  description: string;
};

type Status = "idle" | "sending" | "sent" | "error";


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

function InputField({
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

function SelectField({
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

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <motion.div variants={fadeUp} custom={index} className="relative" ref={ref}>
      <label htmlFor={id} className="block text-sm font-semibold text-zinc-300 mb-2">
        {label}
      </label>

      {/* Trigger */}
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

      {/* Options panel */}
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
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      "rgba(255,226,36,0.06)";
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

function TextAreaField({
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

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", alt: "", budget: "", description: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof FormState) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const errorMessage =
    status === "error"
      ? "Something went wrong. Please email us directly at info@devmovers.com"
      : null;

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      <Navbar />

      {/* ── Ambient yellow glows ── */}
      {/* Top-left glow — behind the heading */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-120px",
          left: "-10%",
          width: "700px",
          height: "700px",
          background: "radial-gradient(ellipse at 30% 30%, rgba(255,226,36,0.07) 0%, transparent 65%)",
        }}
      />
      {/* Top-right glow — behind the form card */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "80px",
          right: "-5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(ellipse at 70% 20%, rgba(255,226,36,0.05) 0%, transparent 65%)",
        }}
      />
      {/* Bottom-center glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse at 50% 100%, rgba(255,226,36,0.04) 0%, transparent 70%)",
        }}
      />

      <main className="pt-40 pb-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* ── Hero row ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-end">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                Let&apos;s Build
                <br />
                <span style={{ color: "#FFE224" }}>Something</span>
                <br />
                Great
              </h1>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-zinc-400 text-lg leading-relaxed">
                Have an idea or project in mind? We&apos;d love to hear from you.
                Reach out and let&apos;s turn your vision into reality.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:info@devmovers.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-yellow-400 transition-colors group"
                >
                  <span className="material-symbols-outlined text-primary-container group-hover:scale-110 transition-transform">mail</span>
                  <span className="text-sm font-medium">info@devmovers.com</span>
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-yellow-400 transition-colors group"
                >
                  <span className="material-symbols-outlined text-primary-container group-hover:scale-110 transition-transform">phone</span>
                  <span className="text-sm font-medium">WhatsApp / Phone</span>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-sm text-zinc-500">Usually respond within 2 hours</span>
              </div>
            </motion.div>
          </div>

          {/* ── Two-column: Book a Call + Form ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Left — Book a Call */}
            <motion.div
              className="border border-zinc-800/60 rounded-2xl p-8 flex flex-col gap-8 h-full"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div>
                <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase mb-3">
                  Option 1
                </p>
                <h2 className="text-2xl font-black text-white mb-2">Get a Free Consultation</h2>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Jump on a free 30-min strategy session. We&apos;ll understand your goals and give you a clear delivery plan — no commitment needed.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { icon: "⚡", text: "Fast & reliable delivery" },
                  { icon: "🔐", text: "Security-first approach" },
                  { icon: "🤝", text: "Transparent communication" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm text-zinc-400">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <p className="text-xs text-zinc-600 mb-4">100% free &amp; non-binding</p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-black text-base px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-transform"
                  style={{ backgroundColor: "#FFE224", color: "#131313" }}
                >
                  Book discovery call ⚡
                </a>
              </div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div
              className="border border-zinc-800/60 rounded-2xl p-8"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase mb-3">
                Option 2
              </p>
              <h2 className="text-2xl font-black text-white mb-6">Submit Your Project Inquiry</h2>

              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-20 gap-4 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="text-5xl">🚀</div>
                    <h3 className="text-xl font-black text-white">Request sent!</h3>
                    <p className="text-zinc-500 text-sm max-w-xs">
                      We've received your brief and will get back to you within 4 hours.
                    </p>
                    <button
                      onClick={() => { setStatus("idle"); setForm({ name:"", email:"", alt:"", budget:"", description:"" }); }}
                      className="mt-4 text-xs text-zinc-500 hover:text-yellow-400 underline transition-colors"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    initial="hidden"
                    animate="show"
                  >
                    <InputField label="Your Name" id="name" placeholder="Full name" value={form.name} onChange={set("name")} required index={0} />
                    <InputField label="Email Address" id="email" type="email" placeholder="you@company.com" value={form.email} onChange={set("email")} required index={1} />
                    <InputField label="Phone / WhatsApp" id="alt" placeholder="+91 XXXXXXXXXX or WhatsApp number" value={form.alt} onChange={set("alt")} index={2} hint="optional" />
                    <SelectField label="Budget (Optional)" id="budget" value={form.budget} onChange={set("budget")} options={budgetOptions} index={3} />
                    <TextAreaField label="Project Details" id="description" placeholder="Tell us about your project — what you want to build, your timeline, and any technical requirements…" value={form.description} onChange={set("description")} index={4} />

                    {errorMessage && (
                      <motion.p
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3"
                      >
                        ⚠ {errorMessage}{" "}
                        <button
                          type="button"
                          onClick={() => setStatus("idle")}
                          className="underline hover:text-red-300 transition-colors"
                        >
                          Try again
                        </button>
                      </motion.p>
                    )}

                    <motion.div
                      variants={fadeUp}
                      custom={5}
                      className="flex items-center justify-between pt-2"
                    >
                      <p className="text-xs text-zinc-600">100% free &amp; non-binding</p>
                      <motion.button
                        type="submit"
                        disabled={status === "sending"}
                        className="inline-flex items-center gap-2 font-black text-sm px-7 py-3.5 rounded-full transition-transform disabled:opacity-60"
                        style={{ backgroundColor: "#FFE224", color: "#131313" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {status === "sending" ? (
                          <>Sending… <span className="animate-spin">⚙</span></>
                        ) : (
                          <>Submit Inquiry ⚡</>
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
