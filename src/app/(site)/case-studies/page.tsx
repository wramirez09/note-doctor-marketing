import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { caseStudies } from "@/lib/case-studies";
import CaseStudyFilters from "./CaseStudyFilters";

const TITLE = "Case Studies — Real Practices, Real Results";
const DESCRIPTION =
  "How clinics and health systems use NoteDoctor.AI in production. Real-world prior-auth turnaround, denial-rate, and scaling stories — anonymized where required.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/case-studies" },
  openGraph: { type: "website", url: "/case-studies", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      <Breadcrumb pageName="Case Studies" />
      <main className="px-6 py-16 max-w-[1100px] mx-auto">
        <header className="mb-10">
          <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-5">
            Real practices, real results.
          </h1>
          <p className="text-[17px] leading-[1.65] max-w-[680px]" style={{ color: "var(--muted)" }}>
            How cardiology, orthopedic, and multi-specialty groups use NoteDoctor.AI to
            screen prior authorizations against payer criteria before submission.
            Customer descriptors are anonymized where required; metrics are sourced
            directly from each customer.
          </p>
        </header>

        <CaseStudyFilters studies={caseStudies} />

        <section
          className="rounded-2xl border p-8 text-center"
          style={{
            borderColor: "var(--border)",
            background: "linear-gradient(145deg, #131d35 0%, #0f1522 100%)",
          }}
        >
          <h2 className="text-[22px] font-semibold mb-3">
            Curious how it would look on your prior auths?
          </h2>
          <p
            className="text-[15px] leading-[1.65] mb-6 max-w-[520px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Bring a recent denial. We&apos;ll walk through how NoteDoctor.AI flags risk
            before submission — 20 minutes, no slide deck.
          </p>
          <Link
            href="/request-demo?source=case-studies-index"
            className="inline-block text-white text-[15px] font-semibold px-7 py-3 rounded-[9px] transition-all hover:-translate-y-0.5"
            style={{ background: "var(--blue)", boxShadow: "0 0 32px rgba(59,130,246,0.35)" }}
          >
            Book a 20-min demo
          </Link>
        </section>
      </main>
    </>
  );
}
