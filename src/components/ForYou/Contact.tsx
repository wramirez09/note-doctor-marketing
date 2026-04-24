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

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ firstName: "", lastName: "", email: "", role: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/sales@notedoctor.ai", {
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

  const fieldClass =
    "w-full bg-white/[0.04] border border-white/[0.07] rounded-lg text-[14px] text-white px-3.5 py-2.5 outline-none transition-colors focus:border-blue-500 placeholder:text-white/20";

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-[1100px] mx-auto rounded-3xl overflow-hidden border border-white/[0.07] grid grid-cols-1 md:grid-cols-2">
        <div className="relative px-14 py-16 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d1a3a 0%, #0c1020 100%)" }}>
          <div className="pointer-events-none absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_70%)]" />
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-[.12em] uppercase text-blue-400 mb-4">Let&apos;s Talk</p>
            <h2 className="text-[clamp(22px,2.5vw,32px)] font-extrabold tracking-[-0.025em] leading-[1.15] mb-3.5">Start a Conversation</h2>
            <p className="text-[15px] text-white/50 leading-[1.65] mb-8">Tell us about your role and what you&apos;re trying to solve — we&apos;ll show you exactly how NoteDoctor.Ai fits.</p>
            <ul className="flex flex-col gap-3 list-none">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[13.5px] text-white/50">
                  <span className="shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center bg-green-400/[0.12] border border-green-400/30">
                    <svg viewBox="0 0 10 10" width="10" height="10" fill="none">
                      <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#131929] px-12 py-14">
          <h3 className="text-[20px] font-bold tracking-[-0.01em] mb-1.5">Get in Touch</h3>
          <p className="text-[14px] text-white/50 mb-7">We&apos;ll respond within one business day.</p>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold tracking-[.06em] uppercase text-white/50">First Name</label>
                <input name="firstName" placeholder="Jane" value={form.firstName} onChange={onChange} className={fieldClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold tracking-[.06em] uppercase text-white/50">Last Name</label>
                <input name="lastName" placeholder="Smith" value={form.lastName} onChange={onChange} className={fieldClass} />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold tracking-[.06em] uppercase text-white/50">Work Email</label>
              <input name="email" type="email" placeholder="jane@clinic.com" value={form.email} onChange={onChange} className={fieldClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold tracking-[.06em] uppercase text-white/50">I am a…</label>
              <select name="role" value={form.role} onChange={onChange} className={fieldClass + " bg-white/[0.04]"}>
                <option value="">Select role</option>
                <option>Physician</option>
                <option>Practice Administrator</option>
                <option>Health System Leader</option>
                <option>Billing / Revenue Cycle</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold tracking-[.06em] uppercase text-white/50">Message</label>
              <textarea name="message" rows={3} placeholder="Tell us about your practice or what you'd like to solve…"
                value={form.message} onChange={onChange} className={fieldClass + " resize-none"} />
            </div>
            <button type="submit" disabled={isLoading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white text-[15px] font-semibold py-3.5 rounded-[9px] border-none cursor-pointer transition-all hover:-translate-y-px mt-1 disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
