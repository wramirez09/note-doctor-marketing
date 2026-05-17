"use client";

type DemoVideoProps = {
  src: string;
};

export default function DemoVideo({ src }: DemoVideoProps) {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[.12em] uppercase rounded-full px-4 py-1.5 mb-6 border"
          style={{
            color: "var(--blue-mid)",
            background: "var(--blue-dim)",
            borderColor: "rgba(59,130,246,0.2)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--blue)", boxShadow: "0 0 6px var(--blue)" }}
          />
          Product Demo
        </div>

        <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-4">
          See NoteDoctor{" "}
          <span className="bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
            in action
          </span>
        </h2>
        <p
          className="text-[16px] leading-[1.65] max-w-[560px] mx-auto mb-6"
          style={{ color: "var(--muted)" }}
        >
          Watch a prior authorization get drafted in under two minutes — the same workflow saving physicians hours every week.
        </p>

        <div
          className="inline-flex items-center gap-2 text-[13px] font-medium mb-10"
          style={{ color: "var(--blue-mid)" }}
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
          Turn your sound on to hear the voiceover walkthrough.
        </div>

        <div
          className="relative mx-auto rounded-2xl overflow-hidden border"
          style={{
            maxWidth: "960px",
            borderColor: "var(--border)",
            background: "var(--bg-card)",
            boxShadow: "0 0 60px rgba(59,130,246,0.15)",
          }}
        >
          <video
            className="w-full h-auto block"
            playsInline
            muted
            loop
            autoPlay
            controls
            preload="metadata"
          >
            <source src={src} />
          </video>

          <div
            className="pointer-events-none absolute top-4 right-4 inline-flex items-center gap-2 text-[12px] font-semibold rounded-full px-3 py-1.5 border backdrop-blur-sm"
            style={{
              color: "var(--text)",
              background: "rgba(8,12,22,0.65)",
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
            Muted — unmute below for voiceover
          </div>
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block text-white text-[15px] font-semibold px-8 py-3.5 rounded-[9px] transition-all hover:-translate-y-0.5"
            style={{
              background: "var(--blue)",
              boxShadow: "0 0 32px rgba(59,130,246,0.35)",
            }}
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
