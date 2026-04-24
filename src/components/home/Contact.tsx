"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const trustPoints = [
  "HIPAA-compliant",
  "No long-term commitment required",
  "Up and running in under a day",
  "Dedicated onboarding support",
];

export default function Contact() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", role: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/sales@NoteDoctor.Ai", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          role: form.role,
          message: form.message,
          _subject: "New Contact Form Submission from Note Doctor",
        }),
      });

      const data = await response.json();
      if (data.success === "true" || data.success === true) {
        toast.success("Message sent successfully! Thank you for contacting us.");
        setForm({ firstName: "", lastName: "", email: "", role: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = "w-full bg-white/[0.04] border rounded-lg text-[14px] px-3.5 py-2.5 outline-none transition-colors focus:border-[#3b82f6] placeholder:text-[rgba(240,244,255,0.25)]";
  const inputStyle = { borderColor: "var(--border)", color: "var(--text)" };

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-[1100px] mx-auto rounded-3xl overflow-hidden border grid grid-cols-1 md:grid-cols-2"
        style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>

        {/* Left */}
        <div className="relative px-14 py-16 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d1a3a 0%, #0c1020 100%)" }}>
          <div className="pointer-events-none absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)" }} />
          <div className="relative z-10">
            <p className="text-[12px] font-semibold tracking-[.12em] uppercase mb-4" style={{ color: "var(--blue-mid)" }}>
              Let&apos;s Talk
            </p>
            <h2 className="text-[clamp(24px,2.5vw,36px)] font-extrabold tracking-[-0.025em] leading-[1.15] mb-4">
              Ready to Start Delivering Care Faster?
            </h2>
            <p className="text-[15px] leading-[1.65] mb-8" style={{ color: "var(--muted)" }}>
              Tell us about your practice or health system and we&apos;ll show you how NoteDoctor.Ai fits your workflow.
            </p>
            <ul className="flex flex-col gap-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[13.5px]" style={{ color: "var(--muted)" }}>
                  <span className="shrink-0 w-4 h-4 rounded-full border flex items-center justify-center"
                    style={{ background: "rgba(74,222,128,0.15)", borderColor: "rgba(74,222,128,0.3)" }}>
                    <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
                      <polyline points="3,8 6.5,11.5 13,5" stroke="#4ade80" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — form */}
        <div className="px-13 py-14 px-12">
          <h3 className="text-[20px] font-bold tracking-[-0.01em] mb-1.5">Let&apos;s Start a Conversation</h3>
          <p className="text-[14px] mb-7" style={{ color: "var(--muted)" }}>We&apos;ll respond within one business day.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold tracking-[.06em] uppercase" style={{ color: "var(--muted)" }}>First Name</label>
                <input name="firstName" placeholder="Jane" value={form.firstName} onChange={handleChange}
                  className={inputClass} style={inputStyle} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold tracking-[.06em] uppercase" style={{ color: "var(--muted)" }}>Last Name</label>
                <input name="lastName" placeholder="Smith" value={form.lastName} onChange={handleChange}
                  className={inputClass} style={inputStyle} />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold tracking-[.06em] uppercase" style={{ color: "var(--muted)" }}>Work Email</label>
              <input name="email" type="email" placeholder="jane@clinic.com" value={form.email} onChange={handleChange}
                className={inputClass} style={inputStyle} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold tracking-[.06em] uppercase" style={{ color: "var(--muted)" }}>I am a…</label>
              <select name="role" value={form.role} onChange={handleChange}
                className={inputClass} style={{ ...inputStyle, background: "rgba(255,255,255,0.04)" }}>
                <option value="">Select role</option>
                <option>Physician</option>
                <option>Practice Administrator</option>
                <option>Health System Leader</option>
                <option>Billing / Revenue Cycle</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold tracking-[.06em] uppercase" style={{ color: "var(--muted)" }}>Message</label>
              <textarea name="message" rows={3}
                placeholder="Tell us about your practice or what you'd like to solve…"
                value={form.message} onChange={handleChange}
                className={inputClass + " resize-none"} style={inputStyle} />
            </div>

            <button type="submit" disabled={isLoading}
              className="w-full text-white text-[15px] font-semibold py-3.5 rounded-[9px] border-none cursor-pointer transition-all hover:-translate-y-px mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: "var(--blue)" }}>
              {isLoading ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
