import Link from "next/link";
import { getCaseStudy } from "@/lib/case-studies";
// import { getComparison } from "@/lib/compare";

export default function RelatedLinks({
  caseStudySlug,
  comparisonSlug,
  source,
}: {
  caseStudySlug: string;
  comparisonSlug: string;
  source: string;
}) {
  void comparisonSlug;
  const study = getCaseStudy(caseStudySlug);
  // const cmp = getComparison(comparisonSlug);
  const cmp = null;
  if (!study && !cmp) return null;

  return (
    <section className="px-6 py-20" style={{ background: "var(--bg2)" }}>
      <div className="max-w-[1100px] mx-auto">
        <p
          className="text-[12px] font-semibold tracking-[.12em] uppercase mb-6"
          style={{ color: "var(--blue-mid)" }}
        >
          Keep reading
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {study && (
            <Link
              href={`/case-studies/${study.slug}?source=${source}`}
              className="rounded-2xl border p-6 transition-colors hover:border-[#3b82f6]"
              style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[.12em] mb-3"
                style={{ color: "var(--muted)" }}
              >
                Case study · {study.specialty}
              </p>
              <h3 className="text-[18px] font-semibold mb-2 leading-[1.3]">
                {study.headline}
              </h3>
              <p className="text-[14px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                {study.subhead}
              </p>
            </Link>
          )}
          {/* Compare card disabled — restore when compare pages relaunch.
          {cmp && (
            <Link
              href={`/compare/${cmp.slug}?source=${source}`}
              className="rounded-2xl border p-6 transition-colors hover:border-[#3b82f6]"
              style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[.12em] mb-3"
                style={{ color: "var(--muted)" }}
              >
                Compare
              </p>
              <h3 className="text-[18px] font-semibold mb-2 leading-[1.3]">
                NoteDoctorAI vs {cmp.competitor}
              </h3>
              <p className="text-[14px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                {cmp.competitorTagline}
              </p>
            </Link>
          )}
          */}
        </div>
      </div>
    </section>
  );
}
