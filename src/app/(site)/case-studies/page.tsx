import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { caseStudies } from "@/lib/case-studies";

const TITLE = "Case Studies — NoteDoctor.AI";
const DESCRIPTION =
  "Real-world results from clinics and health systems using NoteDoctor.AI to cut prior-auth turnaround and denial rates.";

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
      <main className="px-6 py-20 max-w-[1100px] mx-auto">
        <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-6">
          Case Studies
        </h1>
        {/* TODO(seo-fix): replace placeholder case studies with real customer stories + metrics. */}
        <p className="text-[17px] leading-[1.7] mb-12" style={{ color: "var(--muted)" }}>
          How clinics and health systems use NoteDoctor.AI in production.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="block rounded-2xl border p-6 transition-colors hover:border-[#3b82f6]"
              style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
            >
              <p
                className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3"
                style={{ color: "var(--blue-mid)" }}
              >
                {c.customer}
              </p>
              <h2 className="text-[18px] font-semibold mb-3 leading-[1.3]">{c.title}</h2>
              <p className="text-[14px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                {c.summary}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
