import Link from "next/link";
import { API_KEYS_URL, DEVELOPERS_URL } from "@/config/apiLaunch";

const apis = [
  {
    name: "Agents",
    scope: "agents",
    body: "Run a screening against a payer policy and read the determination, its rationale, and what's still missing.",
    icon: (
      <>
        <rect x="3" y="8" width="18" height="12" rx="3" />
        <path d="M12 8V4" />
        <circle cx="8.5" cy="14" r="1.3" />
        <circle cx="15.5" cy="14" r="1.3" />
      </>
    ),
  },
  {
    name: "Chat",
    scope: "chat",
    body: "Ask questions over a case in natural language, grounded in the note and the payer policy.",
    icon: <path d="M21 12a8 8 0 0 1-8 8H8l-4 3v-5.5A8 8 0 0 1 13 4a8 8 0 0 1 8 8z" />,
  },
];

export default function ApiAnnouncement() {
  return (
    <section className="relative px-6 py-16 border-y overflow-hidden" style={{ background: "var(--bg2)", borderColor: "var(--border)" }}>
      <div
        className="pointer-events-none absolute -top-24 left-1/4 w-[700px] h-[400px]"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.16) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-14 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[.12em] uppercase rounded-full px-4 py-1.5 border"
            style={{ color: "var(--blue-mid)", background: "var(--blue-dim)", borderColor: "rgba(59,130,246,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--blue)", boxShadow: "0 0 6px var(--blue)" }} />
            New · Public beta
          </div>

          <h2 className="text-[clamp(28px,3.8vw,38px)] font-extrabold leading-[1.1] tracking-[-0.03em] mt-4 mb-3.5">
            The screening engine is{" "}
            <span className="bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">now an API.</span>
          </h2>

          <p className="text-[17px] leading-[1.6] max-w-[52ch]" style={{ color: "var(--muted)" }}>
            Send a case from your EHR or internal tools and get an authorization-readiness determination back — the same
            engine your team already uses, over HTTPS with scoped keys and a full sandbox.
          </p>

          <div className="flex gap-2.5 items-start mt-5 text-[14px] leading-[1.55]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[17px] h-[17px] shrink-0 mt-0.5"
              style={{ color: "var(--blue-mid)" }}
            >
              <circle cx="12" cy="12" r="9" />
              <path d="m8.5 12 2.5 2.5 4.5-5" />
            </svg>
            <span style={{ color: "var(--muted)" }}>
              <b className="font-semibold" style={{ color: "var(--text)" }}>
                Available now to current subscribers
              </b>{" "}
              — included with your plan at no extra cost. Issue a key from your dashboard and start building today.
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href={API_KEYS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[46px] px-[22px] rounded-[9px] text-[15px] font-semibold text-white no-underline border border-transparent transition-all hover:-translate-y-0.5"
              style={{ background: "var(--blue)", boxShadow: "0 0 32px rgba(59,130,246,0.35)" }}
            >
              Get an API key
            </a>
            <Link
              href={DEVELOPERS_URL}
              className="inline-flex items-center justify-center h-[46px] px-[22px] rounded-[9px] text-[15px] font-semibold no-underline border transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "var(--border)", color: "var(--text)" }}
            >
              Explore the API
            </Link>
          </div>
        </div>

        {/* API rows */}
        <div className="flex flex-col gap-3">
          {apis.map((api) => (
            <Link
              key={api.name}
              href={DEVELOPERS_URL}
              className="flex gap-3.5 items-start rounded-2xl border px-5 py-[18px] no-underline transition-all hover:-translate-y-0.5"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <span
                className="w-[38px] h-[38px] rounded-[10px] grid place-items-center shrink-0 border"
                style={{ background: "var(--blue-dim)", borderColor: "rgba(59,130,246,0.25)", color: "var(--blue-mid)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
                  {api.icon}
                </svg>
              </span>
              <div>
                <h3 className="flex items-center gap-2.5 text-[16px] font-bold tracking-[-0.012em] mb-1" style={{ color: "var(--text)" }}>
                  {api.name}
                  <span
                    className="font-mono text-[10.5px] font-semibold rounded-md px-1.5 py-0.5"
                    style={{ color: "var(--blue-mid)", background: "var(--blue-dim)" }}
                  >
                    {api.scope}
                  </span>
                </h3>
                <p className="text-[13.5px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                  {api.body}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
