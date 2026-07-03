import Link from "next/link";

const stats = [
  { num: "50M+", label: "Medicare Advantage prior auth\nrequests per year" },
  { num: "80%", label: "Of denials later\noverturned on appeal" },
  { num: "2hrs", label: "Average physician time\nlost daily to admin" },
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
        Cut the Red Tape.{" "}
        <span className="bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
          Deliver Care Without Delays.
        </span>
      </h1>

      <p className="text-[18px] leading-[1.7] max-w-[560px] mx-auto mb-11" style={{ color: "var(--muted)" }}>
        Prior authorization wastes valuable time, burdens physicians, and puts patients at risk. NoteDoctor.AI empowers providers with clarity, speed, and compliance — so you can focus on care, not paperwork.
      </p>

      <div className="flex items-center justify-center gap-4 flex-wrap">
        <Link href="#contact"
          className="text-white text-[15px] font-semibold px-8 py-3.5 rounded-[9px] transition-all hover:-translate-y-0.5"
          style={{ background: "var(--blue)", boxShadow: "0 0 32px rgba(59,130,246,0.35)" }}>
          Get Started Today
        </Link>
        <Link href="#how"
          className="text-[15px] font-medium px-6 py-3.5 rounded-[9px] border transition-all hover:bg-white/5"
          style={{ color: "var(--text)", borderColor: "var(--border)" }}>
          See how it works →
        </Link>
      </div>

      {/* stat bar */}
      <div className="flex max-w-[680px] mx-auto mt-16 rounded-2xl overflow-hidden border"
        style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
        {stats.map((s, i) => (
          <div key={i} className="flex-1 py-6 px-5 text-center border-r last:border-r-0"
            style={{ borderColor: "var(--border)" }}>
            <div className="text-[32px] font-extrabold tracking-[-0.03em] leading-none mb-1.5"
              style={{ color: "var(--blue-mid)" }}>{s.num}</div>
            <div className="text-[12px] whitespace-pre-line leading-snug" style={{ color: "var(--muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
