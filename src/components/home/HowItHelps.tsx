const steps = [
  {
    num: "01",
    title: "Clarifying requirements upfront",
    body: "NoteDoctor.Ai reads payer policies in real time and surfaces exactly what clinical documentation is needed — before you submit. No more back-and-forth.",
  },
  {
    num: "02",
    title: "Cutting through bureaucracy",
    body: "Our AI screens each authorization against live payer criteria — flagging denial risks before submission so your team can act, not react.",
  },
  {
    num: "03",
    title: "Protecting physicians",
    body: "By automating documentation checks and reducing rework, NoteDoctor.Ai gives physicians hours back each week — and patients move faster.",
  },
];

function Terminal() {
  return (
    <div className="rounded-xl overflow-hidden border" style={{ background: "rgba(0,0,0,0.4)", borderColor: "var(--border)" }}>
      <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b" style={{ background: "rgba(255,255,255,0.03)", borderColor: "var(--border)" }}>
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[12px]" style={{ color: "var(--faint)" }}>NoteDoctor.Ai — Auth Screening</span>
      </div>
      <div className="p-5 font-mono text-[12.5px] leading-[1.8]">
        <p style={{ color: "var(--faint)" }}>{"// Analyzing prior authorization request…"}</p>
        <br />
        <p><span style={{ color: "var(--blue-mid)" }}>patient</span><span style={{ color: "var(--faint)" }}>:</span> <span style={{ color: "var(--text)" }}>Jane D., DOB 1962-04-11</span></p>
        <p><span style={{ color: "var(--blue-mid)" }}>procedure</span><span style={{ color: "var(--faint)" }}>:</span> <span style={{ color: "var(--text)" }}>MRI Lumbar Spine (CPT 72148)</span></p>
        <p><span style={{ color: "var(--blue-mid)" }}>payer</span><span style={{ color: "var(--faint)" }}>:</span> <span style={{ color: "var(--text)" }}>Aetna — Commercial PPO</span></p>
        <br />
        <p style={{ color: "var(--faint)" }}>{"// Checking payer criteria…"}</p>
        <p><span className="text-[#4ade80]">✓</span> <span style={{ color: "var(--text)" }}>Diagnosis documented (M54.5)</span></p>
        <p><span className="text-[#4ade80]">✓</span> <span style={{ color: "var(--text)" }}>Conservative therapy &gt; 6 wks confirmed</span></p>
        <p><span className="text-[#fbbf24]">⚠</span> <span className="text-[#fbbf24]">Neurological exam findings missing</span></p>
        <br />
        <p style={{ color: "var(--faint)" }}>{"// Recommendation"}</p>
        <p><span style={{ color: "var(--blue-mid)" }}>→</span> <span style={{ color: "var(--text)" }}>Add neuro exam note before submitting</span></p>
        <p><span style={{ color: "var(--blue-mid)" }}>estimated_approval_rate</span><span style={{ color: "var(--faint)" }}>:</span> <span className="text-[#4ade80]">94%</span></p>
      </div>
    </div>
  );
}

export default function HowItHelps() {
  return (
    <section className="py-24 px-6" id="how">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3.5" style={{ color: "var(--blue-mid)" }}>
            How NoteDoctor.Ai Helps
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-10">
            Built to Keep Physicians<br />Focused on Care
          </h2>
          <div className="flex flex-col gap-8">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-5 items-start">
                <div className="shrink-0 w-9 h-9 rounded-[10px] flex items-center justify-center text-[13px] font-bold border"
                  style={{ background: "var(--blue-dim)", borderColor: "rgba(59,130,246,0.25)", color: "var(--blue-mid)" }}>
                  {s.num}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold tracking-[-0.01em] mb-1.5">{s.title}</h3>
                  <p className="text-[14px] leading-[1.65]" style={{ color: "var(--muted)" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl p-9 border overflow-hidden"
          style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
          <div className="pointer-events-none absolute -bottom-20 -right-20 w-64 h-64 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)" }} />
          <Terminal />
        </div>
      </div>
    </section>
  );
}
