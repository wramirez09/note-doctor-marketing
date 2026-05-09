import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export default function CustomerStories() {
  const featured = caseStudies.slice(0, 3);
  return (
    <section className="px-6 py-20" style={{ background: "var(--bg2)" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-9">
          <div>
            <p
              className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3"
              style={{ color: "var(--blue-mid)" }}
            >
              Customer stories
            </p>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold tracking-[-0.02em] leading-[1.15]">
              Real practices, real results.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="text-[14px] font-medium"
            style={{ color: "var(--blue-mid)" }}
          >
            All case studies →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((c) => {
            const m = c.metrics[0];
            return (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}?source=home-stories`}
                className="rounded-2xl border p-6 transition-colors hover:border-[#3b82f6]"
                style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
              >
                <p
                  className="text-[11px] font-semibold uppercase tracking-[.12em] mb-3"
                  style={{ color: "var(--blue-mid)" }}
                >
                  {c.specialty} · {c.customerType}
                </p>
                <h3 className="text-[16px] font-semibold mb-3 leading-[1.3]">
                  {c.headline}
                </h3>
                {m && (
                  <div
                    className="rounded-xl border px-3 py-2 mb-3"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span
                      className="text-[10px] uppercase tracking-[.1em] mr-2"
                      style={{ color: "var(--muted)" }}
                    >
                      {m.label}
                    </span>
                    <span
                      className="text-[14px] font-semibold"
                      style={{ color: "var(--text)" }}
                    >
                      {m.before} → {m.after}
                    </span>
                  </div>
                )}
                <span
                  className="text-[12px] font-semibold"
                  style={{ color: "var(--blue-mid)" }}
                >
                  Read the case study →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
