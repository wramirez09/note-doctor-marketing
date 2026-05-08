import type { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

const TITLE = "Security & Compliance — HIPAA, SOC 2, BAA";
const DESCRIPTION =
  "NoteDoctor.AI is HIPAA-compliant, supports Business Associate Agreements (BAAs), and follows SOC 2-aligned controls. Read how we protect protected health information.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/security" },
  openGraph: { type: "website", url: "/security", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "HIPAA compliance",
    body: "We treat all customer data as PHI by default. Access is least-privilege, audited, and encrypted in transit and at rest. We sign Business Associate Agreements (BAAs) with every healthcare customer.",
  },
  {
    heading: "SOC 2-aligned controls",
    body: "Our security program is built around SOC 2 control families: change management, access management, vulnerability management, incident response, and continuous monitoring.",
  },
  {
    heading: "Data handling",
    body: "Customer notes are processed in isolated environments, never used to train shared models, and retained only as long as necessary to deliver the service or as required by law.",
  },
  {
    heading: "Vendor security",
    body: "We host on tier-one cloud providers with their own SOC 2 / HITRUST attestations. Subprocessors are reviewed before onboarding and listed in our BAA appendix.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Breadcrumb pageName="Security" />
      <main className="px-6 py-20 max-w-[820px] mx-auto">
        <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-6">
          Security &amp; Compliance
        </h1>
        {/* TODO(seo-fix): replace with reviewed copy from security/legal teams; add audit-report request CTA. */}
        <p className="text-[17px] leading-[1.7] mb-10" style={{ color: "var(--muted)" }}>
          Healthcare data is the most sensitive data we handle. NoteDoctor.AI is built
          HIPAA-compliant from day one, supports BAAs for every customer, and follows
          SOC 2-aligned operational controls.
        </p>
        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-[22px] font-semibold mb-2">{s.heading}</h2>
              <p className="text-[15px] leading-[1.7]" style={{ color: "var(--muted)" }}>
                {s.body}
              </p>
            </section>
          ))}
        </div>
        <p className="mt-10 text-[15px]" style={{ color: "var(--muted)" }}>
          Need our latest BAA template or security questionnaire?{" "}
          <a href="/contact" className="underline" style={{ color: "var(--blue-mid)" }}>
            Contact our team
          </a>
          .
        </p>
      </main>
    </>
  );
}
