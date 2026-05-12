import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { StructuredData } from "@/components/StructuredData";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
// import { getComparison } from "@/lib/compare";

const PERSONA_LABELS: Record<string, string> = {
  "/for-physicians": "For physicians",
  "/for-health-systems": "For health systems",
  "/for-healthcare": "For healthcare",
  "/for-you": "Solutions by role",
};

const SITE_URL = "https://NoteDoctorAI";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const url = `/case-studies/${study.slug}`;
  return {
    title: study.title,
    description: study.subhead,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: study.title,
      description: study.subhead,
      publishedTime: study.publishedAt,
      modifiedTime: study.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.subhead,
    },
  };
}

function paragraphs(body: string) {
  return body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  // Compare pages are disabled — restore lookup when they relaunch.
  // const relatedComparison = study.relatedComparisonSlug
  //   ? getComparison(study.relatedComparisonSlug)
  //   : undefined;
  const relatedComparison = undefined as
    | { slug: string; competitor: string }
    | undefined;
  const personaLabel = study.relatedPersonaPath
    ? PERSONA_LABELS[study.relatedPersonaPath]
    : undefined;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.headline,
    description: study.subhead,
    datePublished: study.publishedAt,
    dateModified: study.updatedAt,
    author: { "@type": "Organization", name: "NoteDoctorAI" },
    publisher: { "@type": "Organization", name: "NoteDoctorAI" },
    mainEntityOfPage: `${SITE_URL}/case-studies/${study.slug}`,
    about: study.specialty,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case studies",
        item: `${SITE_URL}/case-studies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.customer,
        item: `${SITE_URL}/case-studies/${study.slug}`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={[articleSchema, breadcrumbSchema]} />
      <Breadcrumb pageName={study.customer} />
      <main className="px-6 py-16 max-w-[920px] mx-auto">
        {/* Hero */}
        <header className="mb-12">
          <p
            className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3"
            style={{ color: "var(--blue-mid)" }}
          >
            {study.customer}
          </p>
          <h1 className="text-[clamp(28px,3.6vw,46px)] font-extrabold tracking-[-0.02em] leading-[1.12] mb-5">
            {study.headline}
          </h1>
          <p className="text-[18px] leading-[1.65]" style={{ color: "var(--muted)" }}>
            {study.subhead}
          </p>
          <dl
            className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[13px]"
            style={{ color: "var(--muted)" }}
          >
            <div>
              <dt className="uppercase tracking-[.1em] text-[11px] mb-1">Specialty</dt>
              <dd style={{ color: "var(--text)" }}>{study.specialty}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[.1em] text-[11px] mb-1">Size</dt>
              <dd style={{ color: "var(--text)" }}>{study.customerType}</dd>
            </div>
            {study.locationDescriptor && (
              <div>
                <dt className="uppercase tracking-[.1em] text-[11px] mb-1">Region</dt>
                <dd style={{ color: "var(--text)" }}>{study.locationDescriptor}</dd>
              </div>
            )}
          </dl>
        </header>

        {/* Metrics strip */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {study.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border p-5"
              style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
            >
              <div
                className="text-[11px] uppercase tracking-[.1em] mb-3"
                style={{ color: "var(--muted)" }}
              >
                {m.label}
              </div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span
                  className="text-[13px] line-through"
                  style={{ color: "var(--faint)" }}
                >
                  {m.before}
                </span>
                <span style={{ color: "var(--muted)" }}>→</span>
                <span
                  className="text-[18px] font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  {m.after}
                </span>
              </div>
              {m.delta && (
                <div
                  className="mt-2 text-[12px] font-semibold"
                  style={{ color: "var(--blue-mid)" }}
                >
                  {m.delta}
                </div>
              )}
              {m.note && (
                <div className="mt-2 text-[12px]" style={{ color: "var(--muted)" }}>
                  {m.note}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Sections */}
        {[study.challenge, study.solution, study.results].map((section) => (
          <section key={section.heading} className="mb-12">
            <h2 className="text-[24px] font-semibold mb-4 tracking-[-0.01em]">
              {section.heading}
            </h2>
            <div
              className="space-y-5 text-[16px] leading-[1.75]"
              style={{ color: "var(--muted)" }}
            >
              {paragraphs(section.body).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}

        {/* Quote */}
        {study.quote && (
          <blockquote
            className="my-14 border-l-4 pl-6 py-3"
            style={{ borderColor: "var(--blue)" }}
          >
            <p
              className="text-[20px] leading-[1.55] italic mb-3"
              style={{ color: "var(--text)" }}
            >
              &ldquo;{study.quote.text}&rdquo;
            </p>
            <footer
              className="text-[13px] uppercase tracking-[.1em]"
              style={{ color: "var(--muted)" }}
            >
              — {study.quote.role}
            </footer>
          </blockquote>
        )}

        {/* Related links */}
        {(relatedComparison || (study.relatedPersonaPath && personaLabel)) && (
          <section className="mt-14">
            <p
              className="text-[12px] font-semibold uppercase tracking-[.12em] mb-4"
              style={{ color: "var(--blue-mid)" }}
            >
              Keep reading
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.relatedPersonaPath && personaLabel && (
                <Link
                  href={`${study.relatedPersonaPath}?source=case-study&slug=${study.slug}`}
                  className="rounded-2xl border p-5 transition-colors hover:border-[#3b82f6]"
                  style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
                >
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[.12em] mb-2"
                    style={{ color: "var(--muted)" }}
                  >
                    For your team
                  </p>
                  <h3 className="text-[16px] font-semibold mb-2">{personaLabel}</h3>
                  <span
                    className="text-[12px] font-semibold"
                    style={{ color: "var(--blue-mid)" }}
                  >
                    Read the {personaLabel.toLowerCase()} page →
                  </span>
                </Link>
              )}
              {relatedComparison && (
                <Link
                  href={`/compare/${relatedComparison.slug}?source=case-study&slug=${study.slug}`}
                  className="rounded-2xl border p-5 transition-colors hover:border-[#3b82f6]"
                  style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
                >
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[.12em] mb-2"
                    style={{ color: "var(--muted)" }}
                  >
                    Comparing alternatives
                  </p>
                  <h3 className="text-[16px] font-semibold mb-2">
                    NoteDoctorAI vs {relatedComparison.competitor}
                  </h3>
                  <span
                    className="text-[12px] font-semibold"
                    style={{ color: "var(--blue-mid)" }}
                  >
                    See the matrix →
                  </span>
                </Link>
              )}
            </div>
          </section>
        )}

        {/* CTA */}
        <section
          className="mt-10 rounded-2xl border p-8 text-center"
          style={{
            borderColor: "var(--border)",
            background: "linear-gradient(145deg, #131d35 0%, #0f1522 100%)",
          }}
        >
          <h2 className="text-[24px] font-semibold mb-3">
            See NoteDoctorAI on your own prior auths.
          </h2>
          <p
            className="text-[15px] leading-[1.65] mb-6 max-w-[520px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Bring a denial or a workflow that&apos;s eating staff hours. We&apos;ll show you
            how risk gets flagged before submission.
          </p>
          <Link
            href={`/request-demo?source=case-study&slug=${study.slug}`}
            className="inline-block text-white text-[15px] font-semibold px-7 py-3 rounded-[9px] transition-all hover:-translate-y-0.5"
            style={{
              background: "var(--blue)",
              boxShadow: "0 0 32px rgba(59,130,246,0.35)",
            }}
          >
            Book a 20-min demo
          </Link>
        </section>
      </main>
    </>
  );
}
