import Link from "next/link";
import { API_KEYS_URL, DEVELOPERS_URL } from "@/config/apiLaunch";

/**
 * Card-style API announcement — the compact alternative to ApiAnnouncement.
 * Drops between existing homepage sections.
 */
export default function ApiCallout() {
  return (
    <section className="px-6 py-14">
      <div
        className="relative max-w-[1100px] mx-auto rounded-2xl border overflow-hidden grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-11 items-center px-8 py-11 sm:px-12"
        style={{ background: "linear-gradient(160deg, #131d35 0%, #0f1522 100%)", borderColor: "rgba(59,130,246,0.25)" }}
      >
        <div
          className="pointer-events-none absolute -top-32 -left-16 w-[600px] h-[400px]"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.2) 0%, transparent 70%)" }}
        />

        <div className="relative">
          <div
            className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[.12em] uppercase rounded-full px-4 py-1.5 border"
            style={{ color: "var(--blue-mid)", background: "var(--blue-dim)", borderColor: "rgba(59,130,246,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--blue)", boxShadow: "0 0 6px var(--blue)" }} />
            New · Public beta
          </div>

          <h2 className="text-[clamp(24px,3.2vw,32px)] font-extrabold leading-[1.12] tracking-[-0.028em] mt-3.5 mb-3">
            Prior-auth screening, now callable from your stack.
          </h2>

          <p className="text-[16px] leading-[1.6] max-w-[46ch]" style={{ color: "var(--muted)" }}>
            Included with every subscription. Issue a scoped key, POST a case, and get a readiness determination back in
            seconds.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
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

        {/* request snippet */}
        <div
          className="relative rounded-xl border px-[18px] py-4 font-mono text-[12.5px] leading-[1.8] tracking-[-0.01em] overflow-x-auto"
          style={{ background: "rgba(0,0,0,0.4)", borderColor: "var(--border)", color: "var(--text)" }}
        >
          <p style={{ color: "rgba(240,244,255,0.4)" }}>{"# screen a case"}</p>
          <p>
            <span style={{ color: "#4ade80" }}>POST</span> /v1/agents/runs
          </p>
          <p style={{ color: "var(--blue-mid)" }}>{"  Authorization: Bearer $ND_API_KEY"}</p>
          <p>
            {"  "}
            {'{ "payer", "procedure", "note_id" }'}
          </p>
          <br />
          <p style={{ color: "rgba(240,244,255,0.4)" }}>{"# => readiness determination"}</p>
          <p>
            {"  "}
            <span style={{ color: "var(--blue-mid)" }}>&quot;readiness&quot;</span>: <span style={{ color: "#fbbf24" }}>0.92</span>
          </p>
        </div>
      </div>
    </section>
  );
}
