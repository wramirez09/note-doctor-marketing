import Link from "next/link";
import { comparisons } from "@/lib/compare";

export default function CompareCallout() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-9">
          <div>
            <p
              className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3"
              style={{ color: "var(--blue-mid)" }}
            >
              Comparing tools
            </p>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold tracking-[-0.02em] leading-[1.15]">
              Compare to your current tool.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}?source=home-compare`}
              className="rounded-2xl border p-6 transition-colors hover:border-[#3b82f6]"
              style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[.12em] mb-3"
                style={{ color: "var(--muted)" }}
              >
                NoteDoctorAI vs
              </p>
              <h3 className="text-[18px] font-semibold mb-3">{c.competitor}</h3>
              <p
                className="text-[13px] leading-[1.6] mb-4"
                style={{ color: "var(--muted)" }}
              >
                {c.competitorTagline}
              </p>
              <span
                className="text-[12px] font-semibold"
                style={{ color: "var(--blue-mid)" }}
              >
                See the matrix →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
