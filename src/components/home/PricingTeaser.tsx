import Link from "next/link";

export default function PricingTeaser() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-9">
          <div>
            <p
              className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3"
              style={{ color: "var(--blue-mid)" }}
            >
              Pricing
            </p>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold tracking-[-0.02em] leading-[1.15]">
              Published, simple, no annual lock-in.
            </h2>
          </div>
          <Link
            href="/pricing"
            className="text-[14px] font-medium"
            style={{ color: "var(--blue-mid)" }}
          >
            See full pricing →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
          {/* Headline price card */}
          <div
            className="rounded-2xl border p-7"
            style={{
              borderColor: "var(--blue)",
              background: "linear-gradient(145deg, #131d35 0%, #0f1522 100%)",
            }}
          >
            <p
              className="text-[11px] font-semibold tracking-[.12em] uppercase mb-3"
              style={{ color: "var(--blue-mid)" }}
            >
              NoteDoctor Pro
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <span
                className="text-[44px] font-extrabold leading-none tracking-[-0.03em]"
                style={{ color: "var(--text)" }}
              >
                $25
              </span>
              <span className="text-[15px]" style={{ color: "var(--muted)" }}>
                / month
              </span>
            </div>
            <p
              className="text-[14px] mb-5 flex items-center gap-2"
              style={{ color: "var(--muted)" }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--blue)" }}
              />
              + <strong style={{ color: "var(--text)" }}>$0.02</strong> per AI screening call
            </p>
            <ul
              className="text-[14px] leading-[1.65] space-y-1.5 mb-6"
              style={{ color: "var(--muted)" }}
            >
              <li>· AI-driven prior authorization screening</li>
              <li>· Denial risk flagging before submission</li>
              <li>· Clinical documentation gap detection</li>
              <li>· HIPAA-compliant, BAA available</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="text-white text-[14px] font-semibold px-6 py-2.5 rounded-[9px] transition-all hover:-translate-y-0.5"
                style={{
                  background: "var(--blue)",
                  boxShadow: "0 0 32px rgba(59,130,246,0.35)",
                }}
              >
                See pricing
              </Link>
              <Link
                href="/request-demo?source=home-pricing"
                className="text-[14px] font-medium px-6 py-2.5 rounded-[9px] border transition-all hover:bg-white/5"
                style={{ color: "var(--text)", borderColor: "var(--border)" }}
              >
                Request a demo →
              </Link>
            </div>
          </div>

          {/* Why-pricing-matters card */}
          <div
            className="rounded-2xl border p-7"
            style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
          >
            <p
              className="text-[11px] font-semibold tracking-[.12em] uppercase mb-3"
              style={{ color: "var(--muted)" }}
            >
              Why we publish prices
            </p>
            <p className="text-[14px] leading-[1.65]" style={{ color: "var(--muted)" }}>
              The dominant prior-auth platforms keep pricing opaque and
              enterprise-only. We don&apos;t. $25/month plus pay-as-you-go usage
              means a single physician practice can start screening tomorrow,
              and a 50+ clinic system can scale predictably.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
