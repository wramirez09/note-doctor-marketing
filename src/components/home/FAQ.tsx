"use client";

import { useState } from "react";
import React from "react";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is prior authorization?",
    a: "Prior authorization is a review process used by health plans and insurance companies to determine whether a requested medical service, procedure, or medication is medically necessary and appropriate based on established clinical guidelines.",
  },
  {
    q: "How is medical necessity determined?",
    a: "Medical necessity is determined using evidence-based clinical guidelines and standards of care. These guidelines help ensure that treatments are safe, effective, and appropriate for a patient's condition.",
  },
  {
    q: "Which medical necessity guidelines do insurance companies use?",
    a: (
      <>
        Insurance plans may use one or more of the following guideline sources:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Medicare guidelines</strong>, including National Coverage Determinations (NCDs), Local Coverage Determinations (LCDs), and Medicare policies.</li>
          <li><strong>Internal health plan or insurance company policies</strong></li>
          <li><strong>Third-party clinical guidelines</strong> from MCG, Evolent, Carelon, EviCore, InterQual, and NCCN.</li>
        </ul>
      </>
    ),
  },
  {
    q: "How do insurance plans decide which guideline to use?",
    a: (
      <>
        Insurance companies follow a guideline hierarchy that varies by plan type.
        <br /><br />
        <strong>Medicare and Medicare Advantage plans</strong> typically use: NCDs → LCDs → Medicare policies → Internal policies → Third-party guidelines → Professional society guidelines.
        <br /><br />
        <strong>Commercial insurance plans</strong> typically use: Internal policies → Third-party guidelines → Professional society guidelines.
      </>
    ),
  },
  {
    q: "How does out-of-network coverage affect prior authorization?",
    a: (
      <>
        Health plans have <strong>in-network providers</strong> contracted with the insurance company. Members are encouraged to use these providers whenever possible.
        <br /><br />
        Out-of-network services are a common reason for <strong>prior authorization denials</strong>, especially for referrals — denials often occur when the requested provider is not contracted or considered out-of-network.
      </>
    ),
  },
  {
    q: "How can providers access prior authorization guidelines?",
    a: (
      <>
        Providers—including physicians, hospitals, clinics, and advanced practice providers (NPs and PAs)—can access guidelines through individual insurance or health plan websites.
        <br /><br />
        <strong>Common challenge:</strong> Guidelines are often published as large PDF documents, making them difficult to search, interpret, and apply efficiently in clinical workflows.
      </>
    ),
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-6" id="faq" style={{ background: "var(--bg2)" }}>
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20 items-start">

        {/* Sidebar */}
        <div>
          <p className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3.5" style={{ color: "var(--blue-mid)" }}>
            FAQ
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[15px] leading-[1.65]" style={{ color: "var(--muted)" }}>
            Everything you need to know about prior authorization screening with NoteDoctor.Ai.
          </p>
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b" style={{ borderColor: "var(--border)" }}>
              {i === 0 && <div className="border-t" style={{ borderColor: "var(--border)" }} />}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left text-[15px] font-medium transition-colors hover:text-[#60a5fa]"
                style={{ color: "var(--text)" }}
              >
                {faq.q}
                <svg
                  className="shrink-0 w-5 h-5 transition-transform duration-200"
                  style={{
                    color: open === i ? "var(--blue-mid)" : "var(--muted)",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 text-[14px] leading-[1.7]"
                style={{
                  maxHeight: open === i ? "600px" : "0px",
                  paddingBottom: open === i ? "20px" : "0px",
                  color: "var(--muted)",
                }}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
