"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactHero } from "./ContactHero";
import { ConsultationCard } from "./ConsultationCard";
import { InquiryForm, type FormState, type Status } from "./InquiryForm";
const EMPTY_FORM: FormState = { name: "", email: "", alt: "", budget: "", description: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");

  const onField = (key: keyof FormState) => (v: string) =>
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

  const handleReset = () => { setStatus("idle"); setForm(EMPTY_FORM); };

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      <Navbar />

      <div className="pointer-events-none absolute" style={{ top: "-120px", left: "-10%", width: "700px", height: "700px", background: "radial-gradient(ellipse at 30% 30%, rgba(255,226,36,0.07) 0%, transparent 65%)" }} />
      <div className="pointer-events-none absolute" style={{ top: "80px", right: "-5%", width: "600px", height: "600px", background: "radial-gradient(ellipse at 70% 20%, rgba(255,226,36,0.05) 0%, transparent 65%)" }} />
      <div className="pointer-events-none absolute" style={{ bottom: "0", left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse at 50% 100%, rgba(255,226,36,0.04) 0%, transparent 70%)" }} />

      <main className="pt-40 pb-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ContactHero />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ConsultationCard />
            <InquiryForm form={form} status={status} onField={onField} onSubmit={handleSubmit} onReset={handleReset} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
