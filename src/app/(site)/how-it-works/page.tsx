import type { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { StructuredData } from "@/components/StructuredData";

const TITLE = "How it works";
const DESCRIPTION =
  "How NoteDoctor.AI screens prior authorizations: ingest the note, match payer criteria, surface gaps, and flag denial risk before submission.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/how-it-works" },
  openGraph: { type: "website", url: "/how-it-works", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const steps = [
  {
    n: "1",
    h: "Drop in a note or auth",
    p: "Paste a clinical note, upload a PDF, or push from your EHR. NoteDoctor.AI extracts the procedure, diagnosis, and clinical narrative.",
  },
  {
    n: "2",
    h: "Match payer criteria",
    p: "We identify the relevant payer policy or third-party guideline (MCG, InterQual, NCCN, NCDs/LCDs) and align the note against it.",
  },
  {
    n: "3",
    h: "Surface gaps",
    p: "Missing labs, imaging, conservative-therapy history, or documentation language are flagged — with the exact criterion they map to.",
  },
  {
    n: "4",
    h: "Predict denial risk",
    p: "Get a denial-risk score and a plain-language summary you can hand to the prior-auth submitter or attach to the case.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How NoteDoctor.AI screens a prior authorization",
  description: DESCRIPTION,
  totalTime: "PT2M",
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.h,
    text: s.p,
  })),
};

export default function HowItWorksPage() {
  return (
    <>
      <StructuredData data={howToSchema} />
      <Breadcrumb pageName="How it works" />
      <main className="px-6 py-20 max-w-[920px] mx-auto">
        <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-6">
          How NoteDoctor.AI Works
        </h1>
        <p className="text-[17px] leading-[1.7] mb-12" style={{ color: "var(--muted)" }}>
          A four-step screening flow that fits between the clinical note and the prior
          authorization submission — no integration project required.
        </p>
        <ol className="space-y-8">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex gap-6 items-start rounded-2xl border p-6"
              style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
            >
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-[18px] font-bold"
                style={{ background: "var(--blue-dim)", color: "var(--blue-mid)" }}
              >
                {s.n}
              </div>
              <div>
                <h2 className="text-[20px] font-semibold mb-2">{s.h}</h2>
                <p className="text-[15px] leading-[1.7]" style={{ color: "var(--muted)" }}>
                  {s.p}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}
