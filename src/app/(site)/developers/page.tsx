import type { Metadata } from "next";
import Link from "next/link";
import { API_KEYS_URL, DOCS_URL, MCP_ENDPOINT_URL, MCP_GUIDE_URL } from "@/config/apiLaunch";

export const metadata: Metadata = {
  title: "NoteDoctor.AI | Developer Platform — Screening API",
  description:
    "Send a case from your EHR or internal tools and get an authorization-readiness determination back over HTTPS, with scoped keys and a full sandbox. Connect Claude, Cursor or any MCP client to the same engine. Included with your NoteDoctor.AI plan.",
};

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[17px] h-[17px] shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}

function CheckIcon({ className = "w-[17px] h-[17px] shrink-0 mt-0.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 h-[46px] px-[22px] rounded-[9px] text-[15px] font-semibold no-underline border transition-all hover:-translate-y-0.5";
  const style =
    variant === "primary"
      ? { background: "var(--blue)", color: "#fff", borderColor: "transparent", boxShadow: "0 0 32px rgba(59,130,246,0.35)" }
      : { background: "rgba(255,255,255,0.04)", color: "var(--text)", borderColor: "var(--border)" };

  return href.startsWith("http") ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={base} style={style}>
      {children}
    </a>
  ) : (
    <Link href={href} className={base} style={style}>
      {children}
    </Link>
  );
}

/* ── Hero code sample ─────────────────────────────────────────────────────── */

const C = { c: "#64748b", k: "var(--blue-mid)", s: "#4ade80", n: "#fbbf24", p: "rgba(240,244,255,0.45)" };

function CodeSample() {
  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{ background: "rgba(0,0,0,0.4)", borderColor: "var(--border)", boxShadow: "0 24px 60px -30px rgba(0,0,0,0.7)" }}
    >
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b" style={{ background: "rgba(255,255,255,0.03)", borderColor: "var(--border)" }}>
        {["curl", "node", "python"].map((tab, i) => (
          <span
            key={tab}
            className="font-mono text-[11.5px] px-2.5 py-1 rounded-md"
            style={
              i === 0
                ? { background: "rgba(255,255,255,0.08)", color: "var(--text)" }
                : { color: "var(--faint)" }
            }
          >
            {tab}
          </span>
        ))}
      </div>
      <pre className="m-0 p-[18px] font-mono text-[12.7px] leading-[1.75] overflow-x-auto tracking-[-0.01em]" style={{ color: "var(--text)" }}>
<span style={{ color: C.c }}># Screen a case for authorization readiness</span>{"\n"}
curl https://api.notedoctor.ai/v1/<span style={{ color: C.k }}>agents</span>/runs \{"\n"}
{"  "}-H <span style={{ color: C.s }}>&quot;Authorization: Bearer $ND_API_KEY&quot;</span> \{"\n"}
{"  "}-H <span style={{ color: C.s }}>&quot;Content-Type: application/json&quot;</span> \{"\n"}
{"  "}-d <span style={{ color: C.s }}>{`'{
    "payer": "bcbs_tx",
    "procedure": "72148",
    "note_id": "note_8f21c",
    "policy_check": true
  }'`}</span>{"\n\n"}
<span style={{ color: C.c }}># =&gt; 200 OK</span>{"\n"}
<span style={{ color: C.p }}>{"{"}</span>{"\n"}
{"  "}<span style={{ color: C.k }}>&quot;id&quot;</span><span style={{ color: C.p }}>:</span> <span style={{ color: C.s }}>&quot;run_1a9c02&quot;</span><span style={{ color: C.p }}>,</span>{"\n"}
{"  "}<span style={{ color: C.k }}>&quot;status&quot;</span><span style={{ color: C.p }}>:</span> <span style={{ color: C.s }}>&quot;complete&quot;</span><span style={{ color: C.p }}>,</span>{"\n"}
{"  "}<span style={{ color: C.k }}>&quot;readiness&quot;</span><span style={{ color: C.p }}>:</span> <span style={{ color: C.n }}>0.92</span><span style={{ color: C.p }}>,</span>{"\n"}
{"  "}<span style={{ color: C.k }}>&quot;missing&quot;</span><span style={{ color: C.p }}>:</span> <span style={{ color: C.p }}>[</span><span style={{ color: C.s }}>&quot;conservative_therapy_duration&quot;</span><span style={{ color: C.p }}>]</span>{"\n"}
<span style={{ color: C.p }}>{"}"}</span>
      </pre>
    </div>
  );
}

/* ── Section data ─────────────────────────────────────────────────────────── */

const apis = [
  {
    name: "Agents",
    scope: "agents",
    body: "Kick off a screening run against a payer policy and poll for the determination, its rationale, and anything still missing from the note.",
    icon: (
      <>
        <rect x="3" y="8" width="18" height="12" rx="3" />
        <path d="M12 8V4" />
        <circle cx="8.5" cy="14" r="1.3" />
        <circle cx="15.5" cy="14" r="1.3" />
      </>
    ),
    endpoints: [
      { verb: "POST", endpoint: "/v1/agents/runs" },
      { verb: "GET", endpoint: "/v1/agents/runs/:id" },
      { verb: "GET", endpoint: "/v1/agents/runs/:id/events" },
    ],
  },
  {
    name: "Chat",
    scope: "chat",
    body: "Ask questions over a case in natural language and stream answers back — grounded in the note, the payer policy, and the run's findings.",
    icon: <path d="M21 12a8 8 0 0 1-8 8H8l-4 3v-5.5A8 8 0 0 1 13 4a8 8 0 0 1 8 8z" />,
    endpoints: [
      { verb: "POST", endpoint: "/v1/chat/completions" },
      { verb: "GET", endpoint: "/v1/chat/threads/:id" },
      { verb: "POST", endpoint: "/v1/chat/threads" },
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Issue a scoped key",
    body: "Create a Live or Test key from your dashboard, pick its scopes, and copy the secret once.",
  },
  {
    num: "02",
    title: "Send a case",
    body: "POST the note reference, payer, and procedure code. The run starts immediately.",
  },
  {
    num: "03",
    title: "Act on the determination",
    body: "Read the readiness score and the list of gaps, then route the case or fix the note before submission.",
  },
];

const keyFeatures: React.ReactNode[] = [
  "Separate Live and Test keys, never interchangeable",
  <>
    Per-key scopes limited to <span className="font-mono">agents</span> and <span className="font-mono">chat</span>
  </>,
  "Rotate with a 24-hour overlap — no downtime",
  "Instant revoke, plus last-used tracking on every key",
];

const mockKeys = [
  {
    name: "Production EHR sync",
    env: "live" as const,
    meta: "Created Jan 12, 2026 by Dr. A. Reyes",
    token: "nd_live_••••c71b",
    scopes: ["agents", "chat"],
  },
  {
    name: "Billing worklist reader",
    env: "live" as const,
    meta: "Created Mar 3, 2026 by S. Okafor",
    token: "nd_live_••••aa30",
    scopes: ["chat"],
  },
  {
    name: "Sandbox integration tests",
    env: "test" as const,
    meta: "Created Feb 1, 2026 by You",
    token: "nd_test_••••9930",
    scopes: ["agents", "chat"],
  },
];

const trust = [
  {
    title: "HIPAA compliant",
    body: "Covered by your existing BAA. Encrypted in transit and at rest, with no training on your data.",
    icon: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />,
  },
  {
    title: "Server-side secrets",
    body: "Keys are shown once and never recoverable. Scope them narrowly and store them in a secrets manager.",
    icon: (
      <>
        <circle cx="7.5" cy="15.5" r="4.5" />
        <path d="M10.5 12.5 21 2" />
        <path d="m16 7 3 3" />
      </>
    ),
  },
  {
    title: "Observable",
    body: "Every request is attributed to a key and surfaced in logs, so you can trace a determination back to its caller.",
    icon: <path d="M3 12h4l2-7 3 14 3-9 2 4h4" />,
  },
];

/* ── MCP ──────────────────────────────────────────────────────────────────── */

/**
 * The tools the MCP server registers, grouped the way a reader cares about
 * them rather than the way the code files are split. `scope` is the API-key
 * scope each one requires — MCP reuses `agents` / `chat` rather than adding an
 * `mcp` scope, so every key already issued works.
 */
const mcpTools = [
  {
    name: "run_prior_auth_screening",
    scope: "agents",
    body: "The whole determination in one call: is prior auth required, the criteria behind it, CPT/ICD-10 codes, documentation to gather, and the policies cited.",
  },
  {
    name: "medicare_multi_search",
    scope: "agents · chat",
    body: "Search NCDs, LCDs and Local Coverage Articles together — the same corpora the agent researches.",
  },
  {
    name: "commercial_guidelines_search",
    scope: "agents · chat",
    body: "Search commercial payer medical policy for the guideline that governs a service.",
  },
  {
    name: "policy_content_extractor",
    scope: "agents · chat",
    body: "Pull the criteria text out of a payer policy document you already have a URL for.",
  },
  {
    name: "whoami · usage",
    scope: "no scope",
    body: "Confirm which org, environment and scopes a key carries, and what it has spent this month.",
  },
];

const mcpHighlights: React.ReactNode[] = [
  <>
    Remote server — one URL, no package to install or host
  </>,
  <>
    Uses the API key you already have, with the same{" "}
    <span className="font-mono">agents</span> / <span className="font-mono">chat</span> scopes
  </>,
  "A tool your key cannot use is never listed, so it can't be called and refused",
  "Test keys work the same way, against the same sandbox",
];

function McpConnectSample() {
  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{ background: "rgba(0,0,0,0.4)", borderColor: "var(--border)", boxShadow: "0 24px 60px -30px rgba(0,0,0,0.7)" }}
    >
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b" style={{ background: "rgba(255,255,255,0.03)", borderColor: "var(--border)" }}>
        <span className="font-mono text-[11.5px] px-2.5 py-1 rounded-md" style={{ background: "rgba(255,255,255,0.08)", color: "var(--text)" }}>
          claude code
        </span>
        <span className="font-mono text-[11.5px] px-2.5 py-1 rounded-md" style={{ color: "var(--faint)" }}>
          any mcp client
        </span>
      </div>
      <pre className="m-0 p-[18px] font-mono text-[12.7px] leading-[1.75] overflow-x-auto tracking-[-0.01em]" style={{ color: "var(--text)" }}>
<span style={{ color: C.c }}># Add the server once — it is remote, so there is nothing to install</span>{"\n"}
claude mcp add --transport http <span style={{ color: C.k }}>notedoctor</span> \{"\n"}
{"  "}{MCP_ENDPOINT_URL} \{"\n"}
{"  "}--header <span style={{ color: C.s }}>&quot;Authorization: Bearer $ND_API_KEY&quot;</span>{"\n\n"}
<span style={{ color: C.c }}># Then just ask, in whatever client you connected</span>{"\n"}
<span style={{ color: C.p }}>&gt;</span> Does BCBS TX require prior auth for a lumbar MRI{"\n"}
{"  "}on a patient with 6 weeks of failed conservative therapy?{"\n\n"}
<span style={{ color: C.c }}># =&gt; run_prior_auth_screening → determination, criteria,</span>{"\n"}
<span style={{ color: C.c }}>#    codes, documentation checklist, policies cited</span>
      </pre>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function DevelopersPage() {
  return (
    <main className="relative z-10">
      {/* ── Hero ── */}
      <section className="relative px-6 pt-28 pb-20 overflow-hidden" id="api">
        <div
          className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
          style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.18) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[.12em] uppercase rounded-full px-4 py-1.5 border"
              style={{ color: "var(--blue-mid)", background: "var(--blue-dim)", borderColor: "rgba(59,130,246,0.2)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--blue)", boxShadow: "0 0 6px var(--blue)" }} />
              Public beta
            </div>

            <h1 className="text-[clamp(32px,4.6vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em] mt-6 mb-5">
              The screening engine,{" "}
              <span className="bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">now an API.</span>
            </h1>

            <p className="text-[17.5px] leading-[1.6] max-w-[60ch]" style={{ color: "var(--muted)" }}>
              Send a case from your EHR or internal tools and get an authorization-readiness determination back — the same
              engine our clinical users run, exposed over HTTPS with scoped keys and a full sandbox.
            </p>

            <div
              className="flex gap-3 items-start mt-6 px-4 py-3.5 rounded-lg border text-[14px] leading-[1.55] max-w-[58ch]"
              style={{ background: "var(--blue-dim)", borderColor: "rgba(59,130,246,0.25)", color: "var(--text)" }}
            >
              <span style={{ color: "var(--blue-mid)" }}>
                <CheckCircleIcon />
              </span>
              <span style={{ color: "var(--muted)" }}>
                <b className="font-semibold" style={{ color: "var(--text)" }}>
                  Now available to current subscribers
                </b>{" "}
                — API access is included with your existing plan at no extra cost. Issue a key from your dashboard and
                start building today.
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <Button href={API_KEYS_URL}>Get an API key</Button>
              <Button href={DOCS_URL} variant="secondary">
                Read the docs
              </Button>
            </div>
          </div>

          <CodeSample />
        </div>
      </section>

      {/* ── Two APIs ── */}
      <section className="px-6 py-20">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3" style={{ color: "var(--blue-mid)" }}>
            What&apos;s shipping
          </p>
          <h2 className="text-[clamp(26px,3vw,34px)] font-bold tracking-[-0.022em] mb-3">Two APIs, two scopes</h2>
          <p className="text-[15.5px] leading-[1.65] max-w-[58ch]" style={{ color: "var(--muted)" }}>
            Every key you issue is scoped to exactly what the integration needs — nothing more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mt-9">
            {apis.map((api) => (
              <div
                key={api.name}
                className="rounded-2xl border p-6 flex flex-col gap-3.5"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-[38px] h-[38px] rounded-[10px] grid place-items-center shrink-0 border"
                    style={{ background: "var(--blue-dim)", borderColor: "rgba(59,130,246,0.25)", color: "var(--blue-mid)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
                      {api.icon}
                    </svg>
                  </span>
                  <h3 className="text-[17px] font-bold tracking-[-0.015em]">{api.name}</h3>
                  <span
                    className="ml-auto font-mono text-[11px] font-semibold rounded-md px-2 py-1"
                    style={{ color: "var(--blue-mid)", background: "var(--blue-dim)" }}
                  >
                    {api.scope}
                  </span>
                </div>

                <p className="text-[14.5px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                  {api.body}
                </p>

                <div className="flex flex-col gap-1.5 mt-auto pt-1.5">
                  {api.endpoints.map((ep) => (
                    <div
                      key={`${ep.verb} ${ep.endpoint}`}
                      className="flex items-center gap-2.5 font-mono text-[12px] rounded-md border px-2.5 py-2"
                      style={{ background: "rgba(255,255,255,0.03)", borderColor: "var(--border)", color: "var(--text)" }}
                    >
                      <span
                        className="font-bold text-[10.5px] tracking-[.06em]"
                        style={{ color: ep.verb === "POST" ? "#4ade80" : "var(--blue-mid)" }}
                      >
                        {ep.verb}
                      </span>
                      {ep.endpoint}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MCP ── */}
      <section className="px-6 py-20 border-y" style={{ background: "var(--bg2)", borderColor: "var(--border)" }} id="mcp">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-3 flex-wrap mb-3">
            <p className="text-[12px] font-semibold tracking-[.12em] uppercase" style={{ color: "var(--blue-mid)" }}>
              Model Context Protocol
            </p>
            <span
              className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[.06em] uppercase px-2.5 py-1 rounded-full"
              style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}
            >
              <span className="w-[5px] h-[5px] rounded-full" style={{ background: "#4ade80" }} />
              Available now
            </span>
          </div>

          <h2 className="text-[clamp(26px,3vw,34px)] font-bold tracking-[-0.022em] mb-3">
            Or skip the integration entirely
          </h2>
          <p className="text-[15.5px] leading-[1.65] max-w-[62ch]" style={{ color: "var(--muted)" }}>
            The same engine is published as an MCP server, so Claude Code, Claude Desktop, Cursor and any other MCP
            client can research coverage and run a full screening directly. Point your client at one URL with your
            existing API key — there is no SDK, no package to install, and nothing to deploy.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-14 items-start mt-9">
            <div>
              <div className="grid grid-cols-1 gap-2.5">
                {mcpTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="rounded-xl border px-4 py-3.5"
                    style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                  >
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-mono text-[12.5px] font-semibold" style={{ color: "var(--text)" }}>
                        {tool.name}
                      </span>
                      <span
                        className="ml-auto font-mono text-[10px] font-semibold rounded-md px-1.5 py-0.5 whitespace-nowrap"
                        style={{ color: "var(--blue-mid)", background: "var(--blue-dim)" }}
                      >
                        {tool.scope}
                      </span>
                    </div>
                    <p className="text-[13.5px] leading-[1.6] mt-1.5" style={{ color: "var(--muted)" }}>
                      {tool.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-7">
                <Button href={MCP_GUIDE_URL}>How to leverage it</Button>
                <Button href={API_KEYS_URL} variant="secondary">
                  Get an API key
                </Button>
              </div>
            </div>

            <div className="flex flex-col">
              <McpConnectSample />

              {/* Set apart from the sample above it rather than stacked tight:
                  these four lines are the argument, and the code is the proof. */}
              <ul className="flex flex-col gap-4 p-0 mt-9 list-none">
                {mcpHighlights.map((feat, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-start text-[15.5px] leading-[1.5] font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    <span
                      className="w-[22px] h-[22px] rounded-full grid place-items-center shrink-0 mt-px border"
                      style={{
                        background: "var(--blue-dim)",
                        borderColor: "rgba(59,130,246,0.3)",
                        color: "var(--blue-mid)",
                      }}
                    >
                      <CheckIcon className="w-[12px] h-[12px]" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="flex gap-3 items-start rounded-lg border px-4 py-3.5 mt-8 text-[13.5px] leading-[1.6]"
            style={{ background: "rgba(251,191,36,0.08)", borderColor: "rgba(251,191,36,0.25)", color: "#fbbf24" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[17px] h-[17px] shrink-0 mt-0.5">
              <path d="M12 9v4M12 17h.01" />
              <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
            </svg>
            <span>
              Send clinical details only — no names, dates of birth or member IDs. A tool call travels into your MCP
              client&apos;s model context, which is outside your BAA with us.
            </span>
          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="px-6 pt-20 pb-20">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3" style={{ color: "var(--blue-mid)" }}>
            How it works
          </p>
          <h2 className="text-[clamp(26px,3vw,34px)] font-bold tracking-[-0.022em]">Live in an afternoon</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-9">
            {steps.map((step) => (
              <div key={step.num} className="pt-5 border-t-2" style={{ borderColor: "rgba(59,130,246,0.3)" }}>
                <div className="font-mono text-[12px] font-bold tracking-[.06em]" style={{ color: "var(--blue-mid)" }}>
                  {step.num}
                </div>
                <h3 className="text-[16.5px] font-bold tracking-[-0.015em] mt-2.5 mb-1.5">{step.title}</h3>
                <p className="text-[14px] leading-[1.65]" style={{ color: "var(--muted)" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key management ── */}
      <section className="px-6 py-20 border-y" style={{ background: "var(--bg2)", borderColor: "var(--border)" }}>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-14 items-center">
          <div>
            <p className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3" style={{ color: "var(--blue-mid)" }}>
              Key management
            </p>
            <h2 className="text-[clamp(26px,3vw,34px)] font-bold tracking-[-0.022em] mb-3">Keys you can govern</h2>
            <p className="text-[15.5px] leading-[1.65] max-w-[58ch]" style={{ color: "var(--muted)" }}>
              Every key is created, scoped, rotated, and revoked from your organization&apos;s dashboard — with an audit
              trail of who issued what.
            </p>

            <ul className="flex flex-col gap-3.5 my-6 p-0 list-none">
              {keyFeatures.map((feat, i) => (
                <li key={i} className="flex gap-2.5 items-start text-[14.5px] leading-[1.55]" style={{ color: "var(--text)" }}>
                  <span style={{ color: "var(--blue-mid)" }}>
                    <CheckIcon />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <Button href={API_KEYS_URL}>Open key management</Button>
          </div>

          {/* keys mock */}
          <div
            className="rounded-2xl border overflow-hidden"
            style={{ background: "var(--bg-card)", borderColor: "var(--border)", boxShadow: "0 22px 50px -28px rgba(0,0,0,0.6)" }}
          >
            <div className="flex items-center justify-between gap-3 px-4 py-3.5 border-b" style={{ borderColor: "var(--border)" }}>
              <span className="text-[13.5px] font-bold">Your keys</span>
              <span className="text-[11.5px]" style={{ color: "var(--faint)" }}>
                3 active
              </span>
            </div>

            {mockKeys.map((k, i) => (
              <div
                key={k.name}
                className="grid grid-cols-1 sm:grid-cols-[1.35fr_auto_auto] gap-3 items-center px-4 py-3.5"
                style={{ borderBottom: i < mockKeys.length - 1 ? "1px solid var(--border)" : undefined }}
              >
                <div>
                  <div className="text-[13px] font-bold flex items-center gap-2 flex-wrap">
                    {k.name}
                    <span
                      className="inline-flex items-center gap-1.5 text-[9.5px] font-bold tracking-[.05em] uppercase px-2 py-0.5 rounded-full"
                      style={
                        k.env === "live"
                          ? { color: "#4ade80", background: "rgba(74,222,128,0.12)" }
                          : { color: "#fbbf24", background: "rgba(251,191,36,0.12)" }
                      }
                    >
                      <span
                        className="w-[5px] h-[5px] rounded-full"
                        style={{ background: k.env === "live" ? "#4ade80" : "#fbbf24" }}
                      />
                      {k.env}
                    </span>
                  </div>
                  <div className="text-[11px] mt-0.5" style={{ color: "var(--faint)" }}>
                    {k.meta}
                  </div>
                </div>

                <span
                  className="font-mono text-[11.5px] rounded-md border px-2 py-1 whitespace-nowrap justify-self-start"
                  style={{ background: "rgba(255,255,255,0.03)", borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  {k.token}
                </span>

                <div className="flex gap-1 justify-self-start">
                  {k.scopes.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] font-semibold rounded-md px-1.5 py-0.5"
                      style={{ color: "var(--blue-mid)", background: "var(--blue-dim)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust ── */}
      <section className="px-6 py-20">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[.12em] uppercase mb-3" style={{ color: "var(--blue-mid)" }}>
            Trust
          </p>
          <h2 className="text-[clamp(26px,3vw,34px)] font-bold tracking-[-0.022em]">Built for PHI from the first request</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-8">
            {trust.map((t) => (
              <div key={t.title} className="rounded-2xl border p-[22px]" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <span
                  className="w-[34px] h-[34px] rounded-[9px] grid place-items-center border mb-3.5"
                  style={{ background: "var(--blue-dim)", borderColor: "rgba(59,130,246,0.25)", color: "var(--blue-mid)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[17px] h-[17px]">
                    {t.icon}
                  </svg>
                </span>
                <h3 className="text-[15px] font-bold mb-1.5">{t.title}</h3>
                <p className="text-[13.5px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                  {t.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="flex gap-3 items-start rounded-lg border px-4 py-3.5 mt-5 text-[13.5px] leading-[1.6]"
            style={{ background: "rgba(251,191,36,0.08)", borderColor: "rgba(251,191,36,0.25)", color: "#fbbf24" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[17px] h-[17px] shrink-0 mt-0.5">
              <path d="M12 9v4M12 17h.01" />
              <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
            </svg>
            <span>
              Build against the sandbox first. Test keys run simulated cases that never contain real PHI and never reach a
              payer — same request and response shapes as Live.
            </span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 pb-24">
        <div
          className="relative max-w-[1100px] mx-auto rounded-3xl border text-center px-6 py-16 overflow-hidden"
          style={{ background: "linear-gradient(160deg, #131d35 0%, #0f1522 100%)", borderColor: "rgba(59,130,246,0.25)" }}
        >
          <div
            className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
            style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.22) 0%, transparent 70%)" }}
          />
          <div className="relative">
            <h2 className="text-[clamp(26px,3.6vw,36px)] font-bold tracking-[-0.028em] mb-3">
              Start screening from your own stack.
            </h2>
            <p className="text-[16.5px] leading-[1.6] max-w-[52ch] mx-auto" style={{ color: "var(--muted)" }}>
              Public beta is open to existing NoteDoctor.AI organizations. Issue a test key and send your first case today.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <Button href={API_KEYS_URL}>Get an API key</Button>
              <Button href={DOCS_URL} variant="secondary">
                Read the docs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
