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
    </section>
  );
}
