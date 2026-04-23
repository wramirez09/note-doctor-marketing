"use client";

const impactStats = [
  {
    num: "93%",
    label: "of physicians say prior auth causes care delays",
    body: "Nearly every physician in practice today has seen authorization hold up medically necessary treatment.",
  },
  {
    num: "82%",
    label: "report it leads to treatment abandonment",
    body: "When approvals take too long, patients give up — leaving conditions unmanaged and outcomes worse.",
  },
  {
    num: "29%",
    label: "have seen it result in a serious adverse event, including death",
    body: "More than one in four physicians has personally witnessed a patient harmed — or killed — by authorization delay.",
    source: { text: "Harnessing informatics's power to cut physician burdens", href: "https://www.ama-assn.org/practice-management/prior-authorization/harnessing-informatics-power-cut-physician-burdens" },
  },
  {
    num: "89%",
    label: "confirm prior auth fuels physician burnout",
    body: "The administrative burden of prior auth is one of the leading drivers pushing physicians out of practice.",
    source: { text: "Fixing prior auth: Nearly 40 per authorization a week is too many", href: "https://www.ama-assn.org/practice-management/prior-authorization/fixing-prior-auth-nearly-40-prior-authorizations-week-way" },
  },
];

const benefits = [
  { title: "Clarity upfront",       body: "Know exactly what documentation is required before you submit — no guesswork, no callbacks." },
  { title: "Smarter workflows",     body: "Reduce denials and avoid the endless appeals cycle that wastes staff time and delays care." },
  { title: "Faster approvals",      body: "Move patients to treatment sooner by catching documentation gaps before submission, not after denial." },
  { title: "Physician protection",  body: "Cut burnout by reducing the administrative burden that pushes good physicians out of practice." },
];

export default function Problem() {
  return (
    <>
      <section className="py-20 px-6 bg-[#0f1522]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[.12em] uppercase text-blue-400 mb-3.5">The Impact on Healthcare</p>
          <h2 className="text-[clamp(26px,3vw,42px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-3">Prior Authorization Is Harming Patients</h2>
          <p className="text-base leading-[1.65] text-white/50 max-w-[540px]">The data is unambiguous. Administrative delays aren&apos;t just inconvenient — they lead to real clinical harm.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden bg-white/[0.07]">
            {impactStats.map((s) => (
              <div key={s.num} className="bg-[#131929] p-10">
                <div className="text-[42px] font-extrabold tracking-[-0.03em] leading-none mb-2 text-blue-400">{s.num}</div>
                <div className="text-base font-semibold mb-1.5">{s.label}</div>
                <div className="text-[13.5px] text-white/50 leading-relaxed">{s.body}</div>
                {s.source && (
                  <a href={s.source.href} target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-3 text-[11px] text-white/25 leading-relaxed hover:text-white/40 transition-colors">
                    {s.source.text}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[.12em] uppercase text-blue-400 mb-3.5">The Bigger Picture</p>
          <h2 className="text-[clamp(26px,3vw,42px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-8">Why This Matters</h2>

          <div className="relative bg-[#131929] border border-white/[0.07] rounded-2xl px-14 py-14 overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_70%)]" />
            <blockquote className="relative z-10 text-xl font-semibold leading-[1.55] max-w-[680px] mb-5">
              Insurers claim success by cutting costs — but a 2023 investigation revealed{" "}
              <span className="text-blue-400">more than 300,000 AI-driven instant claim rejections in just two months,</span>{" "}
              without patient files ever being reviewed. This isn&apos;t efficiency. This is harm disguised as savings.
            </blockquote>
            <cite className="text-[11px] text-white/25 not-italic">
              From: Standing Up to Prior Authorization —{" "}
              <a href="https://ashpublications.org/ashclinicalnews/news/7981/Standing-Up-to-Prior-Authorization"
                target="_blank" rel="noopener noreferrer" className="hover:text-white/40 transition-colors">ashpublications.org</a>
            </cite>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f1522]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[.12em] uppercase text-blue-400 mb-3.5">How NoteDoctor.AI Helps</p>
          <h2 className="text-[clamp(26px,3vw,42px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-3">Turning the System in Your Favor</h2>
          <p className="text-base leading-[1.65] text-white/50 max-w-[540px]">We give providers the tools to navigate prior authorization the right way — the first time.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 items-start">
                <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/10 border border-blue-500/25">
                  <svg className="w-4 h-4 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold tracking-[-0.01em] mb-1">{b.title}</h3>
                  <p className="text-[13.5px] text-white/50 leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
