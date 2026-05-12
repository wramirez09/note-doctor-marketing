import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { StructuredData } from "@/components/StructuredData";

const SITE_URL = "https://NoteDoctorAI";
const TITLE = "About";
const DESCRIPTION =
  "Built by clinicians and engineers tired of watching prior authorization get in the way of patient care. NoteDoctorAI is a provider-first AI screening layer for medical-necessity documentation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { type: "website", url: "/about", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const PRINCIPLES = [
  {
    h: "We anonymize by default",
    p: "Customer data is treated as PHI from the moment it arrives. Screening output is owned by the customer; we don't share it across tenants.",
  },
  {
    h: "We never train on customer data",
    p: "Your prior auths and clinical notes are not training material for shared models. The screening logic that runs on your data is the same logic we publish.",
  },
  {
    h: "We publish our prices",
    p: "$25/month base + $0.02 per AI screening call. No tiered seats, no hidden enterprise floor, no annual minimum.",
  },
  {
    h: "We explain our screening logic",
    p: "Every flag NoteDoctorAI raises maps to a specific guideline or payer-policy criterion. \"Why was this flagged?\" should always have a readable answer.",
  },
];

// TODO(content): replace this scaffold with real founder/team bios and photos.
// Until photos are confirmed, render initials in placeholder tiles.
const TEAM_PLACEHOLDERS = [
  { initial: "F", role: "Founder & CEO" },
  { initial: "F", role: "Founder & Head of Engineering" },
  { initial: "C", role: "Clinical Lead" },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/about`,
  };

  return (
    <>
      <StructuredData data={aboutSchema} />
      <Breadcrumb pageName="About" />
      <main className="px-6 py-16 max-w-[860px] mx-auto">
        {/* Hero */}
        <header className="mb-14">
          <p
            className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3"
            style={{ color: "var(--blue-mid)" }}
          >
            About NoteDoctorAI
          </p>
          <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-5">
            Built by clinicians and engineers tired of watching prior auth get in the way of patient care.
          </h1>
        </header>

        {/* Mission */}
        <section className="mb-14">
          <h2 className="text-[22px] font-semibold mb-4 tracking-[-0.01em]">Mission</h2>
          <div className="space-y-4 text-[16px] leading-[1.75]" style={{ color: "var(--muted)" }}>
            <p>
              Prior authorization is supposed to make care safer and more
              evidence-based. In practice, it has become an administrative
              tax that costs American clinics billions of dollars and an
              estimated two hours per physician per day, and it sits between
              a real patient and the imaging or procedure their doctor has
              already decided is appropriate.
            </p>
            <p>
              NoteDoctorAI exists to remove the most preventable part of that
              tax: cases that get denied not because the care is wrong, but
              because the documentation didn&apos;t match the payer&apos;s
              language. We screen the chart against the relevant payer policy
              or third-party guideline before submission, flag what&apos;s
              missing, and return a denial-risk score the staff submitting
              the case can act on in seconds.
            </p>
            <p>
              The goal is narrow on purpose. We don&apos;t replace your EHR.
              We don&apos;t replace your submission tool. We sit ahead of
              both, screen each case against the rulebook the payer is
              actually going to use, and tell you whether the chart will
              hold up.
            </p>
          </div>
        </section>

        {/* Why now */}
        <section className="mb-14">
          <h2 className="text-[22px] font-semibold mb-4 tracking-[-0.01em]">Why now</h2>
          <div className="space-y-4 text-[16px] leading-[1.75]" style={{ color: "var(--muted)" }}>
            <p>
              Three forces are converging on prior authorization at the same
              time. First, regulators have finalized the CMS interoperability
              and prior authorization rule, putting payers on a clock to
              modernize their auth APIs and decisioning. Second, payer-side
              AI is real and accelerating — health plans are deploying
              clinical AI on the review side faster than provider workflows
              can keep up. Third, provider burnout from administrative
              work is at a structural level, and the people doing the most
              prior-auth work are the ones being lost first.
            </p>
            <p>
              In a market where the payer-side AI race is well-funded,
              providers need the same level of automation pointed at their
              own workflow — not to fight payers, but to get clean cases out
              the door faster and stop losing time on denials that were
              preventable at the chart.
            </p>
          </div>
        </section>

        {/* Why we're different */}
        <section className="mb-14">
          <h2 className="text-[22px] font-semibold mb-4 tracking-[-0.01em]">Why we&apos;re different</h2>
          <div className="space-y-4 text-[16px] leading-[1.75]" style={{ color: "var(--muted)" }}>
            <p>
              <strong style={{ color: "var(--text)" }}>Provider-first.</strong>{" "}
              The market is full of payer-side platforms doing utilization management at scale. We&apos;re built for the other side of that conversation — the people submitting the requests.
            </p>
            <p>
              <strong style={{ color: "var(--text)" }}>Transparent pricing.</strong>{" "}
              $25/month base plus $0.02 per AI screening call, published on the pricing page. No annual lock-in, no enterprise floor, no procurement cycle to start screening real cases.
            </p>
            <p>
              <strong style={{ color: "var(--text)" }}>Pre-submission, not post-hoc.</strong>{" "}
              The most expensive denial is the one you could have caught at intake. NoteDoctorAI runs ahead of submission, not after the rejection comes back.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="mb-14">
          <h2 className="text-[22px] font-semibold mb-4 tracking-[-0.01em]">Team</h2>
          <p
            className="text-[15px] leading-[1.7] mb-6"
            style={{ color: "var(--muted)" }}
          >
            Clinicians, engineers, and revenue-cycle operators who have spent
            careers on opposite sides of the prior-auth wall.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEAM_PLACEHOLDERS.map((member, i) => (
              <div
                key={i}
                className="rounded-2xl border p-5"
                style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-[20px] font-bold mb-3"
                  style={{
                    background: "var(--blue-dim)",
                    color: "var(--blue-mid)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {member.initial}
                </div>
                <p
                  className="text-[12px] font-semibold uppercase tracking-[.12em] mb-1"
                  style={{ color: "var(--blue-mid)" }}
                >
                  {member.role}
                </p>
                <p className="text-[14px]" style={{ color: "var(--muted)" }}>
                  Bio coming soon.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section className="mb-14">
          <h2 className="text-[22px] font-semibold mb-4 tracking-[-0.01em]">Our principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PRINCIPLES.map((p) => (
              <div
                key={p.h}
                className="rounded-2xl border p-5"
                style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
              >
                <h3 className="text-[16px] font-semibold mb-2">{p.h}</h3>
                <p className="text-[14px] leading-[1.65]" style={{ color: "var(--muted)" }}>
                  {p.p}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="rounded-2xl border p-8 text-center"
          style={{
            borderColor: "var(--border)",
            background: "linear-gradient(145deg, #131d35 0%, #0f1522 100%)",
          }}
        >
          <h2 className="text-[22px] font-semibold mb-3">
            Want to see it on your own prior auths?
          </h2>
          <p
            className="text-[15px] leading-[1.65] mb-6 max-w-[520px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            20 minutes, real prior auths, no slide deck.
          </p>
          <Link
            href="/request-demo?source=about"
            className="inline-block text-white text-[15px] font-semibold px-7 py-3 rounded-[9px] transition-all hover:-translate-y-0.5"
            style={{ background: "var(--blue)", boxShadow: "0 0 32px rgba(59,130,246,0.35)" }}
          >
            Request a demo
          </Link>
        </section>
      </main>
    </>
  );
}
