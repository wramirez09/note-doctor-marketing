import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { StructuredData } from "@/components/StructuredData";

const SITE_URL = "https://NoteDoctorAI";
const TITLE = "Security & Compliance";
const DESCRIPTION =
  "How NoteDoctorAI protects protected health information: HIPAA compliance, BAA, SOC 2-aligned controls, encryption in transit and at rest, and our subprocessor list.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/security" },
  openGraph: { type: "website", url: "/security", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

type CertRow = { label: string; status: string; note?: string };

const CERTS: CertRow[] = [
  { label: "HIPAA", status: "Yes — BAA available" },
  { label: "SOC 2 controls", status: "Aligned to Trust Services Criteria" },
  // TODO(legal): confirm Q3 2026 target with auditor; update if it shifts.
  {
    label: "SOC 2 Type II audit",
    status: "In progress — targeting Q3 2026",
    note: "Engagement letter and current control inventory available under NDA",
  },
  // TODO(legal): confirm whether HITRUST is planned, in progress, or not pursuing.
  { label: "HITRUST", status: "Not pursued at this time", note: "Status under review" },
  { label: "Encryption in transit", status: "TLS 1.2+" },
  { label: "Encryption at rest", status: "AES-256" },
  // TODO(legal): confirm exact data residency (US only, multi-region, etc.) and update.
  { label: "Data residency", status: "United States" },
];

const SECTIONS: { heading: string; body: string[] }[] = [
  {
    heading: "HIPAA compliance",
    body: [
      "We treat all customer data as protected health information by default. Every staff member with access to customer environments operates under least-privilege controls; access is logged, reviewed, and revoked when no longer required.",
      "We sign Business Associate Agreements with every healthcare customer before any production data touches our systems. Our standard BAA template is available on request, and we'll review counterparty BAAs as part of onboarding.",
    ],
  },
  {
    heading: "SOC 2 controls",
    body: [
      "Our security program is built around the SOC 2 Trust Services Criteria — security, availability, processing integrity, confidentiality, and privacy. Operational controls cover change management, vulnerability management, identity and access management, incident response, vendor risk, and continuous monitoring.",
      "A formal SOC 2 Type II audit is in progress with a target completion in Q3 2026. We're happy to share the engagement letter, current control inventory, and our auditor's contact under NDA.",
    ],
  },
  {
    heading: "Data handling",
    body: [
      "Customer notes and prior-auth content are processed in isolated tenants and are never used to train shared models. The screening logic that runs on your data is the same screening logic we publish — there is no separate \"trained on customer data\" model behind the scenes.",
      "We retain customer data only as long as necessary to deliver the service or to satisfy specific legal or contractual obligations. On termination, customer data is deleted on a documented schedule.",
    ],
  },
  {
    heading: "Vendor and subprocessor security",
    body: [
      "We host on tier-one cloud providers with their own SOC 2 Type II / HITRUST attestations. New subprocessors are reviewed against our security and BAA standards before onboarding, and the current subprocessor list is appended to our BAA and reviewed at least annually.",
    ],
  },
];

export default function SecurityPage() {
  const securityPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/security`,
    about: { "@type": "Thing", name: "Information security policy" },
  };

  return (
    <>
      <StructuredData data={securityPageSchema} />
      <Breadcrumb pageName="Security" />
      <main className="px-6 py-16 max-w-[920px] mx-auto">
        {/* Hero */}
        <header className="mb-12">
          <p
            className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3"
            style={{ color: "var(--blue-mid)" }}
          >
            Security &amp; compliance
          </p>
          <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-5">
            Healthcare-grade by default.
          </h1>
          <p className="text-[17px] leading-[1.65]" style={{ color: "var(--muted)" }}>
            NoteDoctorAI is HIPAA-compliant from day one, supports BAAs for every
            customer, and is built around SOC 2-aligned operational controls. This
            page is the short version. The full security packet — control inventory,
            subprocessor list, audit status — is available on request.
          </p>
        </header>

        {/* Certification status */}
        <section className="mb-12">
          <h2 className="text-[22px] font-semibold mb-4 tracking-[-0.01em]">Status at a glance</h2>
          <div
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
          >
            {CERTS.map((c, i) => (
              <div
                key={c.label}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6 px-5 py-4 text-[14px]"
                style={{
                  borderTop: i === 0 ? "none" : "1px solid var(--border)",
                }}
              >
                <div
                  className="text-[12px] font-semibold uppercase tracking-[.12em]"
                  style={{ color: "var(--muted)" }}
                >
                  {c.label}
                </div>
                <div>
                  <span style={{ color: "var(--text)" }}>{c.status}</span>
                  {c.note && (
                    <span className="block text-[13px] mt-0.5" style={{ color: "var(--muted)" }}>
                      {c.note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Long-form sections */}
        {SECTIONS.map((s) => (
          <section key={s.heading} className="mb-12">
            <h2 className="text-[22px] font-semibold mb-4 tracking-[-0.01em]">{s.heading}</h2>
            <div className="space-y-4 text-[16px] leading-[1.75]" style={{ color: "var(--muted)" }}>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section
          className="rounded-2xl border p-8 text-center"
          style={{
            borderColor: "var(--border)",
            background: "linear-gradient(145deg, #131d35 0%, #0f1522 100%)",
          }}
        >
          <h2 className="text-[22px] font-semibold mb-3">
            Need our security packet or BAA template?
          </h2>
          <p
            className="text-[15px] leading-[1.65] mb-6 max-w-[520px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            We&apos;ll send the current control inventory, subprocessor list, and BAA
            template under NDA — typically within one business day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/request-demo?source=security"
              className="inline-block text-white text-[15px] font-semibold px-7 py-3 rounded-[9px] transition-all hover:-translate-y-0.5"
              style={{ background: "var(--blue)", boxShadow: "0 0 32px rgba(59,130,246,0.35)" }}
            >
              Request the security packet
            </Link>
            <Link
              href="/pricing"
              className="inline-block text-[15px] font-medium px-6 py-3 rounded-[9px] border transition-all hover:bg-white/5"
              style={{ color: "var(--text)", borderColor: "var(--border)" }}
            >
              See pricing
            </Link>
            <a
              href="mailto:sales@NoteDoctorAI?subject=Security%20packet%20request"
              className="inline-block text-[15px] font-medium px-6 py-3 rounded-[9px] border transition-all hover:bg-white/5"
              style={{ color: "var(--text)", borderColor: "var(--border)" }}
            >
              Email security@
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
