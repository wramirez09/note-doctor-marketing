import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { StructuredData } from "@/components/StructuredData";
import { comparisons } from "@/lib/compare";

const SITE_URL = "https://notedoctor.ai";
const TITLE = "Compare NoteDoctor.AI";
const DESCRIPTION =
  "How NoteDoctor.AI compares to Cohere Health, Anterior, and Availity AuthPal for prior authorization. Researched 8-row matrices with sourced competitor claims and a 'where they win' fairness section on every page.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/compare" },
  openGraph: { type: "website", url: "/compare", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}/compare/`,
  hasPart: comparisons.map((c) => ({
    "@type": "Article",
    headline: c.title,
    description: c.description,
    url: `${SITE_URL}/compare/${c.slug}/`,
    datePublished: c.publishedAt,
    dateModified: c.updatedAt,
  })),
};

export default function CompareIndexPage() {
  return (
    <>
      <StructuredData data={collectionSchema} />
      <Breadcrumb pageName="Compare" />
      <main className="px-6 py-16 max-w-[1100px] mx-auto">
        <header className="mb-12 max-w-[760px]">
          <p
            className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3"
            style={{ color: "var(--blue-mid)" }}
          >
            Compare
          </p>
          <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-5">
            NoteDoctor.AI alternatives, side by side.
          </h1>
          <p className="text-[18px] leading-[1.65] mb-4" style={{ color: "var(--muted)" }}>
            We&apos;re not the only AI tool in the prior-auth market — we&apos;re the
            one built for the providers submitting requests, not the payers
            reviewing them. Each comparison below is a researched 8-row matrix
            with sourced claims, a &ldquo;where they win&rdquo; fairness section,
            and a recommendation on when to pick which.
          </p>
          <p className="text-[15px]" style={{ color: "var(--muted)" }}>
            Looking for the price first?{" "}
            <Link
              href="/pricing"
              className="underline"
              style={{ color: "var(--blue-mid)" }}
            >
              See pricing
            </Link>
            {" "}— published, $25/month base plus pay-as-you-go usage.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}?source=compare-index`}
              className="rounded-2xl border p-7 transition-colors hover:border-[#3b82f6]"
              style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[.12em] mb-3"
                style={{ color: "var(--muted)" }}
              >
                NoteDoctor.AI vs
              </p>
              <h2 className="text-[22px] font-semibold mb-3 leading-[1.25]">
                {c.competitor}
              </h2>
              <p
                className="text-[14px] leading-[1.6] mb-5"
                style={{ color: "var(--muted)" }}
              >
                {c.competitorTagline}
              </p>
              <span
                className="text-[13px] font-semibold"
                style={{ color: "var(--blue-mid)" }}
              >
                Read the comparison →
              </span>
            </Link>
          ))}
        </div>

        <section
          className="rounded-2xl border p-8 text-center"
          style={{
            borderColor: "var(--border)",
            background: "linear-gradient(145deg, #131d35 0%, #0f1522 100%)",
          }}
        >
          <h2 className="text-[22px] font-semibold mb-3">
            Have a competitor we should add?
          </h2>
          <p
            className="text-[15px] leading-[1.65] mb-6 max-w-[560px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Email{" "}
            <a
              href="mailto:sales@notedoctor.ai"
              className="underline"
              style={{ color: "var(--blue-mid)" }}
            >
              sales@notedoctor.ai
            </a>{" "}
            and we&apos;ll write the comparison page. We commit to a fairness
            section on every one — buyers should be able to trust us when we say
            something we&apos;re good at, because we&apos;re honest about what
            we&apos;re not.
          </p>
          <Link
            href="/request-demo?source=compare-index"
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
