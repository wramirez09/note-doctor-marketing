import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const steps = [
  {
    num: "01",
    title: "Clarifying requirements upfront",
    body: "NoteDoctor.AI reads payer policies in real time and surfaces exactly what clinical documentation is needed — before you submit. No more back-and-forth.",
  },
  {
    num: "02",
    title: "Cutting through bureaucracy",
    body: "Our AI screens each authorization against live payer criteria — flagging denial risks before submission so your team can act, not react.",
  },
  {
    num: "03",
    title: "Protecting physicians",
    body: "By automating documentation checks and reducing rework, NoteDoctor.AI gives physicians hours back each week — and patients move faster.",
  },
];

function Screenshot() {
  return (
    // Stays dark in Classic too: .midnight scopes the Midnight tokens to the panel.
    <div className="midnight rounded-xl overflow-hidden border" style={{ background: "var(--code-bg)", borderColor: "var(--border)" }}>
      <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b" style={{ background: "rgba(255,255,255,0.03)", borderColor: "var(--border)" }}>
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[12px]" style={{ color: "var(--faint)" }}>NoteDoctor.AI — Required Documentation</span>
      </div>
      {/* Cropped to the top-left of the checklist so the text stays legible at
          this size; the fade hides where the long lines are cut off. */}
      <div className="relative">
        <Image
          src="/images/product/required-docs.webp"
          alt="NoteDoctor.AI required documentation checklist for a knee arthroscopy request"
          width={620}
          height={392}
          className="block w-full h-auto"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4"
          style={{ background: "linear-gradient(to right, transparent, #121a2e)" }} />
      </div>
    </div>
  );
}

export default function HowItHelps() {
  return (
    <section className="py-24 px-6" id="how">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <p className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3.5" style={{ color: "var(--blue-mid)" }}>
              How NoteDoctor.AI Helps
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-10">
              Built to Keep Physicians<br />Focused on Care
            </h2>
          </Reveal>
          <RevealGroup className="flex flex-col gap-8">
            {steps.map((s) => (
              <RevealItem key={s.num} className="flex gap-5 items-start">
                <div className="shrink-0 w-9 h-9 rounded-[10px] flex items-center justify-center text-[13px] font-bold border"
                  style={{ background: "var(--blue-dim)", borderColor: "rgba(59,130,246,0.25)", color: "var(--blue-mid)" }}>
                  {s.num}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold tracking-[-0.01em] mb-1.5">{s.title}</h3>
                  <p className="text-[14px] leading-[1.65]" style={{ color: "var(--muted)" }}>{s.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="relative rounded-2xl p-9 border overflow-hidden"
          style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
          <div className="pointer-events-none absolute -bottom-20 -right-20 w-64 h-64 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)" }} />
          <Screenshot />
        </Reveal>
      </div>
    </section>
  );
}
