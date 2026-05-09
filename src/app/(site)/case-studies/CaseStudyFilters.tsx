"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { CaseStudy, CustomerType } from "@/lib/case-studies";

const CUSTOMER_TYPES: ("All" | CustomerType)[] = [
  "All",
  "Solo (1)",
  "Small Practice (2-10)",
  "Mid (11-50)",
  "Health System (50+)",
];

export default function CaseStudyFilters({
  studies,
}: {
  studies: CaseStudy[];
}) {
  const specialties = useMemo(
    () => ["All", ...Array.from(new Set(studies.map((s) => s.specialty)))],
    [studies],
  );

  const [customerType, setCustomerType] = useState<"All" | CustomerType>("All");
  const [specialty, setSpecialty] = useState<string>("All");

  const filtered = studies.filter((s) => {
    if (customerType !== "All" && s.customerType !== customerType) return false;
    if (specialty !== "All" && s.specialty !== specialty) return false;
    return true;
  });

  return (
    <>
      <div
        className="flex flex-wrap gap-6 mb-10 pb-6 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div>
          <p
            className="text-[11px] uppercase tracking-[.1em] mb-2"
            style={{ color: "var(--muted)" }}
          >
            Practice size
          </p>
          <div className="flex flex-wrap gap-2">
            {CUSTOMER_TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setCustomerType(t)}
                className="px-3 py-1.5 rounded-full text-[12px] border transition-colors"
                style={{
                  borderColor: customerType === t ? "var(--blue)" : "var(--border)",
                  color: customerType === t ? "var(--text)" : "var(--muted)",
                  background: customerType === t ? "var(--blue-dim)" : "transparent",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p
            className="text-[11px] uppercase tracking-[.1em] mb-2"
            style={{ color: "var(--muted)" }}
          >
            Specialty
          </p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((s) => (
              <button
                key={s}
                onClick={() => setSpecialty(s)}
                className="px-3 py-1.5 rounded-full text-[12px] border transition-colors"
                style={{
                  borderColor: specialty === s ? "var(--blue)" : "var(--border)",
                  color: specialty === s ? "var(--text)" : "var(--muted)",
                  background: specialty === s ? "var(--blue-dim)" : "transparent",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-[15px] mb-12" style={{ color: "var(--muted)" }}>
          No case studies match these filters yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((c) => {
            const headlineMetric = c.metrics[0];
            return (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="block rounded-2xl border p-6 transition-colors hover:border-[#3b82f6]"
                style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
              >
                <p
                  className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3"
                  style={{ color: "var(--blue-mid)" }}
                >
                  {c.specialty} · {c.customerType}
                </p>
                <h2 className="text-[18px] font-semibold mb-3 leading-[1.3]">
                  {c.headline}
                </h2>
                <p
                  className="text-[14px] leading-[1.6] mb-5"
                  style={{ color: "var(--muted)" }}
                >
                  {c.subhead}
                </p>
                {headlineMetric && (
                  <div
                    className="rounded-xl border px-4 py-3 mb-4"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <div
                      className="text-[10px] uppercase tracking-[.1em] mb-1"
                      style={{ color: "var(--muted)" }}
                    >
                      {headlineMetric.label}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-[12px] line-through"
                        style={{ color: "var(--faint)" }}
                      >
                        {headlineMetric.before}
                      </span>
                      <span style={{ color: "var(--muted)" }}>→</span>
                      <span
                        className="text-[14px] font-semibold"
                        style={{ color: "var(--text)" }}
                      >
                        {headlineMetric.after}
                      </span>
                    </div>
                  </div>
                )}
                <span
                  className="text-[13px] font-semibold"
                  style={{ color: "var(--blue-mid)" }}
                >
                  Read the case study →
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
