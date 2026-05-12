import Link from "next/link";

// SOURCES (verified 2026-05-08):
// - "53M+ MA prior auth determinations" and "~80% overturned on appeal":
//   KFF, "Medicare Advantage Insurers Made Nearly 53 Million Prior
//   Authorization Determinations in 2024"
//   https://www.kff.org/medicare/medicare-advantage-insurers-made-nearly-53-million-prior-authorization-determinations-in-2024/
// - "2hrs/day physician admin time": AMA Prior Auth Physician Survey is the
//   canonical source family. The exact 2hrs/day framing should be reverified
//   against the latest AMA survey before any campaign use.
const stats: { num: string; label: string; href: string; verify?: boolean }[] = [
  {
    num: "53M+",
    label: "Medicare Advantage prior auth\ndeterminations in 2024",
    href: "https://www.kff.org/medicare/medicare-advantage-insurers-made-nearly-53-million-prior-authorization-determinations-in-2024/",
  },
  {
    num: "80%",
    label: "Of appealed denials\nfully or partially overturned",
    href: "https://www.kff.org/medicare/medicare-advantage-insurers-made-nearly-53-million-prior-authorization-determinations-in-2024/",
  },
  {
    num: "2hrs",
    label: "Average physician time\nlost daily to admin",
    href: "https://www.ama-assn.org/practice-management/prior-authorization",
    // TODO(verify): replace with the specific AMA Prior Auth Physician Survey URL and confirm latest figure (the well-known stat is ~13 hrs/week per physician).
    verify: true,
  },
];

export default function Hero() {
  return (
    <section className="relative text-center px-6 pt-28 pb-24 overflow-hidden">
      {/* glow */}
      <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.22) 0%, transparent 70%)" }} />

      {/* eyebrow */}
      <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[.12em] uppercase rounded-full px-4 py-1.5 mb-7 border"
        style={{ color: "var(--blue-mid)", background: "var(--blue-dim)", borderColor: "rgba(59,130,246,0.2)" }}>
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--blue)", boxShadow: "0 0 6px var(--blue)" }} />
        AI-Powered Prior Authorization
      </div>

      <h1 className="text-[clamp(40px,5.5vw,72px)] font-extrabold leading-[1.08] tracking-[-0.03em] max-w-[820px] mx-auto mb-6">
        Catch the prior-auth denials your documentation is going to cause —{" "}
        <span className="bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
          before you submit.
        </span>
      </h1>

      <p className="text-[18px] leading-[1.7] max-w-[640px] mx-auto mb-11" style={{ color: "var(--muted)" }}>
        Most prior-auth denials are documentation problems, not medical-necessity problems. Paste your note or ask in plain English — NoteDoctorAI checks the case against the payer&apos;s policy or third-party guidelines (MCG, InterQual, NCDs/LCDs), flags the gaps, and returns a denial-risk score before you submit. Built for practices, $25/month plus pay-as-you-go.
      </p>

      <div className="flex items-center justify-center gap-4 flex-wrap">
        <Link href="/request-demo?source=hero"
          className="text-white text-[15px] font-semibold px-8 py-3.5 rounded-[9px] transition-all hover:-translate-y-0.5"
          style={{ background: "var(--blue)", boxShadow: "0 0 32px rgba(59,130,246,0.35)" }}>
          Request a demo
        </Link>
        <Link href="/pricing"
          className="text-[15px] font-medium px-6 py-3.5 rounded-[9px] border transition-all hover:bg-white/5"
          style={{ color: "var(--text)", borderColor: "var(--border)" }}>
          See pricing →
        </Link>
      </div>

      {/* stat bar */}
      <div className="flex max-w-[680px] mx-auto mt-16 rounded-2xl overflow-hidden border"
        style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
        {stats.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-6 px-5 text-center border-r last:border-r-0 transition-colors hover:bg-white/[0.03]"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="text-[32px] font-extrabold tracking-[-0.03em] leading-none mb-1.5"
              style={{ color: "var(--blue-mid)" }}>{s.num}</div>
            <div className="text-[12px] whitespace-pre-line leading-snug" style={{ color: "var(--muted)" }}>{s.label}</div>
            <div className="text-[10px] uppercase tracking-[.1em] mt-2" style={{ color: "var(--faint)" }}>
              {s.verify ? "Source: AMA →" : "Source: KFF →"}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
