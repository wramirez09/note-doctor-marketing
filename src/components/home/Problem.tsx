const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "A System Overloaded",
    body: "In 2023, Medicare Advantage processed nearly 50 million prior authorization requests.",
    stat: "50M+ annual requests",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: "Denials That Don't Hold Up",
    body: "More than 80% of denials from 2019–2023 were later overturned on appeal — showing denials often result from missing documentation, not medical necessity.",
    stat: "80% overturned on appeal",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Patients Left Waiting",
    body: "Physicians and patients still endure weeks of delays, excessive appeals, and denied treatments.",
    stat: "#1 cause of physician burnout",
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--bg2)" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-14">
          <p className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3.5" style={{ color: "var(--blue-mid)" }}>
            The Problem
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-4">
            Prior Authorization<br />Is Broken
          </h2>
          <p className="text-[16px] leading-[1.65] max-w-[520px]" style={{ color: "var(--muted)" }}>
            A system designed to manage costs has become a major barrier to patient care — wasting time, raising costs, and burning out physicians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ background: "var(--border)" }}>
          {cards.map((c) => (
            <div key={c.title} className="p-11" style={{ background: "var(--bg-card)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border"
                style={{ background: "var(--blue-dim)", borderColor: "rgba(59,130,246,0.2)" }}>
                {c.icon}
              </div>
              <h3 className="text-[18px] font-bold tracking-[-0.01em] mb-3">{c.title}</h3>
              <p className="text-[14px] leading-[1.65]" style={{ color: "var(--muted)" }}>{c.body}</p>
              <span className="inline-block mt-5 text-[13px] font-semibold px-3 py-1.5 rounded-md"
                style={{ color: "var(--blue-mid)", background: "var(--blue-dim)" }}>
                {c.stat}
              </span>
            </div>
          ))}
        </div>

        <p className="text-[12px] mt-9 leading-relaxed" style={{ color: "var(--faint)" }}>
          Source:{" "}
          <a href="https://www.kff.org/medicare/issue-brief/nearly-50-million-prior-authorization-requests-were-sent-to-medicare-advantage-insurers-in-2023/"
            target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }}>
            KFF — Medicare Advantage Prior Authorization, 2023
          </a>
        </p>
      </div>
    </section>
  );
}
