import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { StructuredData } from "@/components/StructuredData";
import { caseStudies } from "@/lib/case-studies";
import RequestDemoClient from "./RequestDemoClient";

const SITE_URL = "https://NoteDoctorAI";
const TITLE = "Request a Demo";
const DESCRIPTION =
  "Bring a denial or a workflow that's eating your team. We'll show you how risk gets flagged before submission. 20 minutes, real prior auths, no slide deck.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/request-demo" },
  openGraph: { type: "website", url: "/request-demo", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const STEPS = [
  {
    n: "1",
    h: "Book a 20-minute call",
    p: "Submit the form. We'll reach out within one business day to schedule a screen-share with your team.",
  },
  {
    n: "2",
    h: "Live demo on your own auths",
    p: "Bring a recent denial or a procedure that always seems to come back. We'll run it through NoteDoctorAI on the call.",
  },
  {
    n: "3",
    h: "Optional 7-day pilot",
    p: "If it looks useful, we'll set up a 7-day pilot on a slice of your real prior-auth volume. No commitment, no contract.",
  },
];

export default function RequestDemoPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/request-demo`,
  };

  return (
    <>
      <StructuredData data={contactPageSchema} />
      <Breadcrumb pageName="Request a Demo" />
      <main className="px-6 py-16 max-w-[920px] mx-auto">
        {/* Hero */}
        <header className="mb-12 max-w-[760px]">
          <p
            className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3"
            style={{ color: "var(--blue-mid)" }}
          >
            Request a demo
          </p>
          <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-5">
            See NoteDoctorAI screen a prior auth in 20 minutes.
          </h1>
          <p className="text-[18px] leading-[1.65]" style={{ color: "var(--muted)" }}>
            Bring a denial or a workflow that&apos;s eating your team — we&apos;ll show
            you how risk gets flagged before submission. Real prior auths, no slide
            deck.
          </p>
        </header>

        {/* What to expect */}
        <section className="mb-12">
          <h2 className="text-[14px] font-semibold uppercase tracking-[.12em] mb-5" style={{ color: "var(--muted)" }}>
            What to expect
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STEPS.map((s) => (
              <li
                key={s.n}
                className="rounded-2xl border p-5"
                style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-bold mb-3"
                  style={{ background: "var(--blue-dim)", color: "var(--blue-mid)" }}
                >
                  {s.n}
                </div>
                <h3 className="text-[16px] font-semibold mb-2">{s.h}</h3>
                <p className="text-[13px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                  {s.p}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <Suspense fallback={null}>
          <RequestDemoClient />
        </Suspense>

        {/* Trust strip */}
        <section
          className="rounded-xl border px-5 py-4 mb-14 text-[13px] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center"
          style={{ borderColor: "var(--border)", background: "var(--bg2)", color: "var(--muted)" }}
        >
          <span>HIPAA-compliant</span>
          <span style={{ color: "var(--faint)" }}>·</span>
          <span>BAA available</span>
          <span style={{ color: "var(--faint)" }}>·</span>
          <span>SOC 2 controls aligned</span>
          <span style={{ color: "var(--faint)" }}>·</span>
          <span>Email <a href="mailto:sales@NoteDoctorAI" className="underline" style={{ color: "var(--blue-mid)" }}>sales@NoteDoctorAI</a> for low-intent questions</span>
        </section>

        {/* Read a case study */}
        <section>
          <h2 className="text-[14px] font-semibold uppercase tracking-[.12em] mb-5" style={{ color: "var(--muted)" }}>
            Read a case study first
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="rounded-2xl border p-5 transition-colors hover:border-[#3b82f6]"
                style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
              >
                <p
                  className="text-[11px] font-semibold uppercase tracking-[.12em] mb-2"
                  style={{ color: "var(--blue-mid)" }}
                >
                  {c.specialty} · {c.customerType}
                </p>
                <h3 className="text-[15px] font-semibold mb-2 leading-[1.3]">
                  {c.headline}
                </h3>
                <span
                  className="text-[12px] font-semibold"
                  style={{ color: "var(--blue-mid)" }}
                >
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
