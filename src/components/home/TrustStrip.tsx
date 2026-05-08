export default function TrustStrip() {
  return (
    <section className="px-6 pt-12 pb-8">
      <div
        className="max-w-[1100px] mx-auto rounded-2xl border px-6 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px]"
        style={{ borderColor: "var(--border)", background: "var(--bg2)", color: "var(--muted)" }}
      >
        <span className="font-semibold" style={{ color: "var(--text)" }}>HIPAA-compliant</span>
        <span style={{ color: "var(--faint)" }}>·</span>
        <span>BAA available</span>
        <span style={{ color: "var(--faint)" }}>·</span>
        <span>SOC 2 controls aligned</span>
        <span style={{ color: "var(--faint)" }}>·</span>
        <span>TLS 1.2+ in transit, AES-256 at rest</span>
      </div>

      {/* Metric bar */}
      <div
        className="max-w-[1100px] mx-auto mt-4 grid grid-cols-1 md:grid-cols-3 gap-3"
      >
        <MetricCard value="100+" label="Providers screened" />
        <MetricCard value="10,000+" label="Prior auths analyzed" />
        <MetricCard value="78%" label="Avg turnaround reduction" />
      </div>
    </section>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="rounded-2xl border px-5 py-4 flex items-baseline justify-center gap-3"
      style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
    >
      <span
        className="text-[26px] font-extrabold tracking-[-0.03em] leading-none"
        style={{ color: "var(--blue-mid)" }}
      >
        {value}
      </span>
      <span className="text-[13px]" style={{ color: "var(--muted)" }}>
        {label}
      </span>
    </div>
  );
}
