"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { InputField, SelectField, TextAreaField, fadeUp } from "./ContactFormFields";
import { SuccessScreen } from "./SuccessScreen";

const budgetOptions = [
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000 – $60,000",
  "$60,000+",
  "Not sure yet",
];

export type FormState = {
  name: string;
  email: string;
  alt: string;
  budget: string;
  description: string;
};

export type Status = "idle" | "sending" | "sent" | "error";

type FormErrors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (form.alt.trim()) {
    const digits = form.alt.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) {
      errors.alt = "Enter a valid phone number (7–15 digits).";
    }
  }

  if (!form.description.trim()) {
    errors.description = "Project details are required.";
  } else if (form.description.trim().length < 20) {
    errors.description = "Please add at least 20 characters about your project.";
  }

  return errors;
}

type Props = {
  form: FormState;
  status: Status;
  onField: (key: keyof FormState) => (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
};

export function InquiryForm({ form, status, onField, onSubmit, onReset }: Props) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const touch = (key: keyof FormState) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors((prev) => ({ ...prev, ...validate({ ...form, }) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, alt: true, budget: true, description: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    onSubmit(e);
  };

  const visibleError = (key: keyof FormState) => (touched[key] ? errors[key] : undefined);

  const apiError =
    status === "error"
      ? "Something went wrong. Please email us directly at info@devmovers.com"
      : null;

  return (
    <motion.div
      className="border border-zinc-800/60 rounded-2xl p-8"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase mb-3">Option 2</p>
      <h2 className="text-2xl font-black text-white mb-6">Submit Your Project Inquiry</h2>

      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <SuccessScreen key="success" onReset={onReset} />
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            initial="hidden"
            animate="show"
            noValidate
          >
            <InputField
              label="Your Name" id="name" placeholder="Full name"
              value={form.name} onChange={onField("name")}
              onBlur={touch("name")} error={visibleError("name")}
              required index={0}
            />
            <InputField
              label="Email Address" id="email" type="email" placeholder="you@company.com"
              value={form.email} onChange={onField("email")}
              onBlur={touch("email")} error={visibleError("email")}
              required index={1}
            />
            <InputField
              label="Phone / WhatsApp" id="alt" placeholder="+91 XXXXXXXXXX or WhatsApp number"
              value={form.alt} onChange={onField("alt")}
              onBlur={touch("alt")} error={visibleError("alt")}
              index={2} hint="optional"
            />
            <SelectField
              label="Budget (Optional)" id="budget"
              value={form.budget} onChange={onField("budget")}
              options={budgetOptions} index={3}
            />
            <TextAreaField
              label="Project Details" id="description"
              placeholder="Tell us about your project — what you want to build, your timeline, and any technical requirements…"
              value={form.description} onChange={onField("description")}
              onBlur={touch("description")} error={visibleError("description")}
              index={4}
            />

            {apiError && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3"
              >
                ⚠ {apiError}
              </motion.p>
            )}

            <motion.div variants={fadeUp} custom={5} className="flex items-center justify-between pt-2">
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
                  <>Sending… <span className="animate-spin inline-block">↻</span></>
                ) : (
                  <>Submit Inquiry →</>
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
