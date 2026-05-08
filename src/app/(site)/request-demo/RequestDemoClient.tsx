"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const ROLES = [
  "Physician",
  "Practice Admin",
  "Health System Leader",
  "Billing / RCM",
  "Other",
];

const PA_VOLUMES = ["<100", "100-500", "500-2,000", "2,000+"];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  practiceName: string;
  role: string;
  paVolume: string;
  message: string;
};

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  practiceName: "",
  role: "",
  paVolume: "",
  message: "",
};

// TODO(integration): set NEXT_PUBLIC_LEAD_ENDPOINT in Cloudflare Pages env
// vars to a real lead-capture endpoint. While unset, submissions log a
// TODO and surface a graceful failure to the user (with a mailto fallback).
const LEAD_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

export default function RequestDemoClient() {
  const params = useSearchParams();
  const source = params.get("source") || "request-demo";
  const sourceSlug = params.get("slug") || "";

  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");
  const [error, setError] = useState<string>("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    if (!LEAD_ENDPOINT) {
      console.warn(
        "[NoteDoctor.AI] NEXT_PUBLIC_LEAD_ENDPOINT is not configured. Demo request not sent.",
      );
      setStatus("error");
      setError(
        "Our request endpoint isn't configured yet. Please email sales@notedoctor.ai and we'll respond same day.",
      );
      return;
    }

    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          source,
          sourceSlug,
          submittedAt: new Date().toISOString(),
          form: "request-demo",
        }),
      });
      if (!res.ok) throw new Error(`Submission failed: ${res.status}`);
      setStatus("ok");
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email sales@notedoctor.ai.",
      );
    }
  }

  return (
    <section
      id="form"
      className="rounded-2xl border p-7 mb-12"
      style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
    >
      <h2 className="text-[22px] font-semibold mb-2 tracking-[-0.01em]">Tell us about your practice</h2>
      <p className="text-[14px] mb-6" style={{ color: "var(--muted)" }}>
        We&apos;ll reach out within one business day to schedule.
      </p>

      {status === "ok" ? (
        <div
          className="rounded-xl border px-5 py-6 text-[15px]"
          style={{ borderColor: "var(--blue)", color: "var(--text)", background: "var(--blue-dim)" }}
        >
          Thanks — we have your request and will reach out within one business
          day.
        </div>
      ) : (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <Field label="First name" required value={form.firstName} onChange={(v) => update("firstName", v)} />
          <Field label="Last name" required value={form.lastName} onChange={(v) => update("lastName", v)} />
          <Field
            label="Work email"
            type="email"
            required
            value={form.email}
            onChange={(v) => update("email", v)}
            colSpan={2}
          />
          <Field
            label="Practice name"
            required
            value={form.practiceName}
            onChange={(v) => update("practiceName", v)}
            colSpan={2}
          />
          <SelectField
            label="Role"
            required
            value={form.role}
            onChange={(v) => update("role", v)}
            options={ROLES}
          />
          <SelectField
            label="PA volume / month"
            required
            value={form.paVolume}
            onChange={(v) => update("paVolume", v)}
            options={PA_VOLUMES}
          />
          <TextareaField
            label="Anything specific you want to see? (optional)"
            value={form.message}
            onChange={(v) => update("message", v)}
            colSpan={2}
          />
          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="text-white text-[15px] font-semibold px-7 py-3 rounded-[9px] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "var(--blue)",
                boxShadow: "0 0 32px rgba(59,130,246,0.35)",
              }}
            >
              {status === "submitting" ? "Sending…" : "Request demo"}
            </button>
            {status === "error" && (
              <p className="mt-3 text-[13px]" style={{ color: "#f87171" }}>
                {error}
              </p>
            )}
          </div>
        </form>
      )}
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  type = "text",
  colSpan,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  colSpan?: 1 | 2;
}) {
  return (
    <label className={colSpan === 2 ? "md:col-span-2 block" : "block"}>
      <span className="text-[12px] uppercase tracking-[.1em] mb-1.5 block" style={{ color: "var(--muted)" }}>
        {label} {required && <span style={{ color: "var(--blue-mid)" }}>*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-[9px] border px-3.5 py-2.5 text-[14px] outline-none focus:border-[#3b82f6]"
        style={{ borderColor: "var(--border)", background: "var(--bg-card)", color: "var(--text)" }}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[12px] uppercase tracking-[.1em] mb-1.5 block" style={{ color: "var(--muted)" }}>
        {label} {required && <span style={{ color: "var(--blue-mid)" }}>*</span>}
      </span>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-[9px] border px-3.5 py-2.5 text-[14px] outline-none focus:border-[#3b82f6]"
        style={{ borderColor: "var(--border)", background: "var(--bg-card)", color: "var(--text)" }}
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  colSpan,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  colSpan?: 1 | 2;
}) {
  return (
    <label className={colSpan === 2 ? "md:col-span-2 block" : "block"}>
      <span className="text-[12px] uppercase tracking-[.1em] mb-1.5 block" style={{ color: "var(--muted)" }}>
        {label}
      </span>
      <textarea
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-[9px] border px-3.5 py-2.5 text-[14px] outline-none focus:border-[#3b82f6] resize-y"
        style={{ borderColor: "var(--border)", background: "var(--bg-card)", color: "var(--text)" }}
      />
    </label>
  );
}
