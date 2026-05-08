import type { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

const TITLE = "About NoteDoctor.AI";
const DESCRIPTION =
  "NoteDoctor.AI builds AI-powered prior authorization screening for medical practices. Our mission is to cut administrative burden so clinicians can focus on patients.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { type: "website", url: "/about", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb pageName="About" />
      <main className="px-6 py-20 max-w-[820px] mx-auto">
        <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-6">
          About NoteDoctor.AI
        </h1>
        {/* TODO(seo-fix): replace placeholder About copy with founder story and team detail. */}
        <p className="text-[17px] leading-[1.7]" style={{ color: "var(--muted)" }}>
          NoteDoctor.AI is on a mission to remove the prior-authorization tax on American
          medicine. We build AI tools that screen clinical documentation against payer
          criteria before submission, so practices catch denials early, reclaim staff
          hours, and keep patients moving.
        </p>
        <p className="text-[17px] leading-[1.7] mt-5" style={{ color: "var(--muted)" }}>
          Founded by clinicians and engineers, we&apos;re a HIPAA-compliant company headquartered
          in the United States. Reach us at{" "}
          <a href="/contact" className="underline" style={{ color: "var(--blue-mid)" }}>
            our contact page
          </a>
          .
        </p>
      </main>
    </>
  );
}
