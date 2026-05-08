import type { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

const TITLE = "Request a Demo — NoteDoctor.AI";
const DESCRIPTION =
  "See NoteDoctor.AI on your own prior auths. Request a 20-minute demo with our team and get an estimate of denial-risk reduction for your specialty.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/request-demo" },
  openGraph: { type: "website", url: "/request-demo", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function RequestDemoPage() {
  return (
    <>
      <Breadcrumb pageName="Request a Demo" />
      <main className="px-6 py-20 max-w-[820px] mx-auto">
        <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-6">
          Request a Demo
        </h1>
        {/* TODO(seo-fix): wire to real demo-request form (Calendly / HubSpot / internal endpoint). */}
        <p className="text-[17px] leading-[1.7] mb-8" style={{ color: "var(--muted)" }}>
          Show us a recent denial — or a workflow that&apos;s eating staff hours — and
          we&apos;ll walk through how NoteDoctor.AI flags risk before submission. 20
          minutes, real prior auths, no slide deck.
        </p>
        <div
          className="rounded-2xl border p-8"
          style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
        >
          <p className="text-[15px] leading-[1.7] mb-6" style={{ color: "var(--muted)" }}>
            Email us at{" "}
            <a
              href="mailto:sales@notedoctor.ai"
              className="underline"
              style={{ color: "var(--blue-mid)" }}
            >
              sales@notedoctor.ai
            </a>{" "}
            or use the contact form.
          </p>
          <a
            href="/contact"
            className="inline-block text-white text-[15px] font-semibold px-6 py-3 rounded-[9px]"
            style={{ background: "var(--blue)", boxShadow: "0 0 32px rgba(59,130,246,0.35)" }}
          >
            Contact us
          </a>
        </div>
      </main>
    </>
  );
}
