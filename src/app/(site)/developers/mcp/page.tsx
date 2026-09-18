import type { Metadata } from "next";
import Link from "next/link";
import { API_KEYS_URL, DEVELOPERS_URL, MCP_ENDPOINT_URL } from "@/config/apiLaunch";

export const metadata: Metadata = {
  title: "NoteDoctor.AI | Leveraging the MCP Server",
  description:
    "Connect Claude Code, Claude Desktop, Cursor or any MCP client to NoteDoctor.AI's coverage research and prior authorization screening. What the tools do, when to reach for each, and what to send.",
};

/* ── Primitives, matching /developers ─────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[17px] h-[17px] shrink-0 mt-0.5">
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

const C = { c: "#64748b", k: "var(--blue-mid)", s: "#4ade80", n: "#fbbf24", p: "rgba(240,244,255,0.45)" };

function Code({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl overflow-hidden border my-5"
      style={{ background: "rgba(0,0,0,0.4)", borderColor: "var(--border)" }}
    >
      <div className="px-3.5 py-2.5 border-b" style={{ background: "rgba(255,255,255,0.03)", borderColor: "var(--border)" }}>
        <span className="font-mono text-[11.5px]" style={{ color: "var(--faint)" }}>
          {label}
        </span>
      </div>
      <pre className="m-0 p-[18px] font-mono text-[12.7px] leading-[1.75] overflow-x-auto tracking-[-0.01em]" style={{ color: "var(--text)" }}>
        {children}
      </pre>
    </div>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-[clamp(22px,2.4vw,28px)] font-bold tracking-[-0.022em] mt-14 mb-3 scroll-mt-24">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15.5px] leading-[1.7] max-w-[68ch] mb-4" style={{ color: "var(--muted)" }}>
      {children}
    </p>
  );
}

function Mono({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[13.5px] px-1 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.06)", color: "var(--text)" }}>
      {children}
    </span>
  );
}

/* ── Content data ─────────────────────────────────────────────────────────── */

const contents = [
  ["what-it-is", "What it is"],
  ["connect", "Connect a client"],
  ["tools", "The tools"],
  ["choosing", "Which tool to reach for"],
  ["screening", "Running a screening"],
  ["keys", "Keys, scopes and billing"],
  ["phi", "What not to send"],
] as const;

const tools = [
  {
    name: "run_prior_auth_screening",
    scope: "agents",
    what: "The full determination. The agent researches Medicare and commercial coverage itself and returns a structured artifact: whether prior auth is required, the criteria behind it, CPT/ICD-10 codes, the documentation to gather, and the policies it cited.",
    when: "You want an answer, not source documents.",
  },
  {
    name: "medicare_multi_search",
    scope: "agents · chat",
    what: "Searches NCDs, LCDs and Local Coverage Articles together and returns the top matches.",
    when: "The starting point for any Medicare coverage question.",
  },
  {
    name: "ncd_coverage_search",
    scope: "agents · chat",
    what: "National Coverage Determinations only.",
    when: "The question is explicitly national, or you need the national rule behind a local policy you already found.",
  },
  {
    name: "local_lcd_search",
    scope: "agents · chat",
    what: "Local Coverage Determinations, which vary by MAC jurisdiction.",
    when: "Coverage turns on where the patient is.",
  },
  {
    name: "local_coverage_article_search",
    scope: "agents · chat",
    what: "Local Coverage Articles — the billing and coding detail attached to an LCD.",
    when: "You have the policy and need the codes that go with it.",
  },
  {
    name: "medicare_policy_detail",
    scope: "agents · chat",
    what: "The full record for one policy you already have an identifier for.",
    when: "Following up on a specific search hit.",
  },
  {
    name: "commercial_guidelines_search",
    scope: "agents · chat",
    what: "Searches commercial payer medical policy for the guideline governing a service.",
    when: "The payer is not Medicare.",
  },
  {
    name: "policy_content_extractor",
    scope: "agents · chat",
    what: "Pulls criteria text out of a payer policy document at a URL.",
    when: "You already have the policy PDF and want the criteria, not the whole document.",
  },
  {
    name: "whoami",
    scope: "no scope",
    what: "The org, environment, scopes and rate-limit tier behind the connected key.",
    when: "Confirming whether you are on a test or live key.",
  },
  {
    name: "usage",
    scope: "no scope",
    what: "What this key has spent in the current month.",
    when: "Checking consumption without opening the dashboard.",
  },
];

const goodPractice = [
  "Ask in clinical terms — service, diagnosis, payer, and what has already been tried.",
  "Name the payer and the state. Local coverage varies by MAC jurisdiction, and the answer changes with it.",
  "Reach for a screening when you want a decision; reach for a search when you want to read the policy yourself.",
  "Re-send earlier turns to ask a follow-up — the endpoint keeps no history of its own.",
];

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function McpGuidePage() {
  return (
    <main className="relative z-10">
      <section className="relative px-6 pt-28 pb-14 overflow-hidden">
        <div
          className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[900px] h-[440px]"
          style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.16) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-[820px] mx-auto">
          <Link
            href={DEVELOPERS_URL}
            className="inline-flex items-center gap-1.5 text-[13.5px] no-underline mb-6"
            style={{ color: "var(--blue-mid)" }}
          >
            ← Developer platform
          </Link>

          <h1 className="text-[clamp(30px,4.2vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-5">
            Leveraging the{" "}
            <span className="bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">MCP server.</span>
          </h1>

          <p className="text-[17.5px] leading-[1.6] max-w-[64ch]" style={{ color: "var(--muted)" }}>
            A guide to connecting an MCP client to NoteDoctor.AI and getting real coverage answers out of it — what each
            tool does, when to reach for it, and what belongs in a request.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Button href={API_KEYS_URL}>Get an API key</Button>
            <Button href={DEVELOPERS_URL} variant="secondary">
              See the REST API
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-[820px] mx-auto">
          {/* Contents */}
          <nav
            className="rounded-2xl border p-5"
            style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
          >
            <p className="text-[11.5px] font-semibold tracking-[.12em] uppercase mb-3" style={{ color: "var(--faint)" }}>
              On this page
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 p-0 m-0 list-none">
              {contents.map(([id, label], i) => (
                <li key={id} className="text-[14px]">
                  <span className="font-mono text-[11.5px] mr-2" style={{ color: "var(--blue-mid)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a href={`#${id}`} className="no-underline hover:underline" style={{ color: "var(--text)" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── 01 ── */}
          <H2 id="what-it-is">What it is</H2>
          <P>
            MCP — the Model Context Protocol — is how an AI assistant reaches a tool it does not ship with. Our MCP
            server publishes the research and screening engine behind NoteDoctor.AI to any MCP client, so a provider
            working in Claude or Cursor can ask a coverage question and get our answer back without anyone writing an
            integration.
          </P>
          <P>
            It is the same engine as the REST API on the{" "}
            <Link href={DEVELOPERS_URL} className="no-underline hover:underline" style={{ color: "var(--blue-mid)" }}>
              developer platform
            </Link>
            , reached a different way. The REST API is for software you are building. MCP is for the assistant you are
            already working in. Both authenticate with the same key and bill the same way, so the choice is about where
            the work happens, not about capability.
          </P>
          <P>
            The server is <b style={{ color: "var(--text)" }}>remote</b>: one HTTPS endpoint we host. There is no package
            to install, nothing to run locally, and no version to keep current.
          </P>

          {/* ── 02 ── */}
          <H2 id="connect">Connect a client</H2>
          <P>
            Every client needs the same two things — the endpoint URL and an{" "}
            <Mono>Authorization</Mono> header carrying your API key. Issue the key from your dashboard first; a test key
            works everywhere a live key does.
          </P>

          <Code label="claude code">
<span style={{ color: C.c }}># One command, then it is available in every session</span>{"\n"}
claude mcp add --transport http <span style={{ color: C.k }}>notedoctor</span> \{"\n"}
{"  "}{MCP_ENDPOINT_URL} \{"\n"}
{"  "}--header <span style={{ color: C.s }}>&quot;Authorization: Bearer $ND_API_KEY&quot;</span>
          </Code>

          <P>
            Clients configured by file — Claude Desktop, Cursor and most others — take the same values as JSON. The
            server name is yours to choose; it is what you will see the tools grouped under.
          </P>

          <Code label="mcp client config">
<span style={{ color: C.p }}>{"{"}</span>{"\n"}
{"  "}<span style={{ color: C.k }}>&quot;mcpServers&quot;</span><span style={{ color: C.p }}>: {"{"}</span>{"\n"}
{"    "}<span style={{ color: C.k }}>&quot;notedoctor&quot;</span><span style={{ color: C.p }}>: {"{"}</span>{"\n"}
{"      "}<span style={{ color: C.k }}>&quot;url&quot;</span><span style={{ color: C.p }}>:</span> <span style={{ color: C.s }}>&quot;{MCP_ENDPOINT_URL}&quot;</span><span style={{ color: C.p }}>,</span>{"\n"}
{"      "}<span style={{ color: C.k }}>&quot;headers&quot;</span><span style={{ color: C.p }}>: {"{"}</span>{"\n"}
{"        "}<span style={{ color: C.k }}>&quot;Authorization&quot;</span><span style={{ color: C.p }}>:</span> <span style={{ color: C.s }}>&quot;Bearer sk_live_…&quot;</span>{"\n"}
{"      "}<span style={{ color: C.p }}>{"}"}</span>{"\n"}
{"    "}<span style={{ color: C.p }}>{"}"}</span>{"\n"}
{"  "}<span style={{ color: C.p }}>{"}"}</span>{"\n"}
<span style={{ color: C.p }}>{"}"}</span>
          </Code>

          <div
            className="flex gap-3 items-start rounded-lg border px-4 py-3.5 my-5 text-[13.5px] leading-[1.6]"
            style={{ background: "var(--blue-dim)", borderColor: "rgba(59,130,246,0.25)" }}
          >
            <span style={{ color: "var(--blue-mid)" }}>
              <CheckIcon />
            </span>
            <span style={{ color: "var(--muted)" }}>
              <b className="font-semibold" style={{ color: "var(--text)" }}>
                Raise your tool timeout before your first screening.
              </b>{" "}
              A full run takes 45–65 seconds, and many clients give up at 60. In Claude Code, set{" "}
              <Mono>MCP_TOOL_TIMEOUT=300000</Mono>. The search tools return in seconds and need no change.
            </span>
          </div>

          {/* ── 03 ── */}
          <H2 id="tools">The tools</H2>
          <P>
            Ten tools, in three groups: one that answers a question outright, seven that search the underlying corpora,
            and two that describe the key itself. The scope column is the API-key scope each one requires — a tool your
            key is not scoped for is never listed, so it cannot be called and refused.
          </P>

          <div className="flex flex-col gap-2.5 my-6">
            {tools.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border px-4 py-3.5"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="font-mono text-[12.5px] font-semibold" style={{ color: "var(--text)" }}>
                    {t.name}
                  </span>
                  <span
                    className="ml-auto font-mono text-[10px] font-semibold rounded-md px-1.5 py-0.5 whitespace-nowrap"
                    style={{ color: "var(--blue-mid)", background: "var(--blue-dim)" }}
                  >
                    {t.scope}
                  </span>
                </div>
                <p className="text-[13.5px] leading-[1.6] mt-1.5" style={{ color: "var(--muted)" }}>
                  {t.what}
                </p>
                <p className="text-[13px] leading-[1.55] mt-1.5" style={{ color: "var(--faint)" }}>
                  <b style={{ color: "var(--muted)" }}>Reach for it when:</b> {t.when}
                </p>
              </div>
            ))}
          </div>

          {/* ── 04 ── */}
          <H2 id="choosing">Which tool to reach for</H2>
          <P>
            In practice your client picks, and it picks well when the question is specific. The distinction that matters
            most is between wanting a <i>decision</i> and wanting a <i>document</i>.
          </P>
          <ul className="flex flex-col gap-3.5 my-6 p-0 list-none">
            {goodPractice.map((line, i) => (
              <li key={i} className="flex gap-2.5 items-start text-[14.5px] leading-[1.6]" style={{ color: "var(--text)" }}>
                <span style={{ color: "var(--blue-mid)" }}>
                  <CheckIcon />
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <P>
            A vague prompt (&ldquo;is an MRI covered?&rdquo;) sends the client searching broadly and returns policy you
            still have to read. A specific one (&ldquo;does BCBS TX require prior auth for CPT 72148 after six weeks of
            failed conservative therapy?&rdquo;) gets a determination.
          </P>

          {/* ── 05 ── */}
          <H2 id="screening">Running a screening</H2>
          <P>
            <Mono>run_prior_auth_screening</Mono> is the one to know. You do not call it directly — you ask your
            assistant a question and it calls the tool — but what comes back is structured, so the client can render it
            rather than paraphrase it.
          </P>

          <Code label="what comes back">
<span style={{ color: C.p }}>{"{"}</span>{"\n"}
{"  "}<span style={{ color: C.k }}>&quot;threadId&quot;</span><span style={{ color: C.p }}>:</span> <span style={{ color: C.s }}>&quot;3f9a…&quot;</span><span style={{ color: C.p }}>,</span>{"\n"}
{"  "}<span style={{ color: C.k }}>&quot;artifact&quot;</span><span style={{ color: C.p }}>: {"{"}</span>{"\n"}
{"    "}<span style={{ color: C.c }}>{"// determination, criteria, CPT/ICD-10 codes,"}</span>{"\n"}
{"    "}<span style={{ color: C.c }}>{"// documentation checklist, policies cited"}</span>{"\n"}
{"  "}<span style={{ color: C.p }}>{"}"},</span>{"\n"}
{"  "}<span style={{ color: C.k }}>&quot;text&quot;</span><span style={{ color: C.p }}>:</span> <span style={{ color: C.s }}>&quot;…&quot;</span>{"\n"}
<span style={{ color: C.p }}>{"}"}</span>
          </Code>

          <P>
            Two things worth knowing. Identical inputs will not start a second run — a retry after a client timeout
            returns the first run&apos;s result rather than billing you twice. And <Mono>threadId</Mono> groups related
            runs together in reporting; pass it back when a follow-up belongs to the same case.
          </P>

          {/* ── 06 ── */}
          <H2 id="keys">Keys, scopes and billing</H2>
          <P>
            MCP uses the API key you already have. There is no separate MCP credential and no new scope to request —
            the tools map onto the <Mono>agents</Mono> and <Mono>chat</Mono> scopes your key was issued with, because
            they expose the capabilities those scopes already grant over REST.
          </P>
          <P>
            A key with neither scope is refused at the endpoint rather than handed a tool list it cannot act on. Rate
            limits, subscription checks and usage metering are the same ones the REST API applies, counted against the
            same monthly total — so <Mono>usage</Mono> reports MCP and REST consumption together.
          </P>
          <P>
            Test keys behave identically against the sandbox. Build and explore on a test key, then swap the header when
            you want live results.
          </P>

          {/* ── 07 ── */}
          <H2 id="phi">What not to send</H2>
          <div
            className="flex gap-3 items-start rounded-lg border px-4 py-3.5 my-5 text-[14px] leading-[1.6]"
            style={{ background: "rgba(251,191,36,0.08)", borderColor: "rgba(251,191,36,0.25)", color: "#fbbf24" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] shrink-0 mt-0.5">
              <path d="M12 9v4M12 17h.01" />
              <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
            </svg>
            <span>
              Send clinical details only — the service, diagnosis, payer and history. No patient names, dates of birth,
              member IDs or other identifiers.
            </span>
          </div>
          <P>
            This is stricter than the REST API for a structural reason. A REST call goes from your server to ours, both
            covered by your BAA. An MCP tool call passes through your MCP client and into a third party&apos;s model
            context on the way — and that hop is outside our agreement with you. Coverage determinations do not need
            identifiers to be correct, so leave them out.
          </P>

          {/* CTA */}
          <div
            className="relative rounded-3xl border text-center px-6 py-14 mt-16 overflow-hidden"
            style={{ background: "linear-gradient(160deg, #131d35 0%, #0f1522 100%)", borderColor: "rgba(59,130,246,0.25)" }}
          >
            <div
              className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[360px]"
              style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.2) 0%, transparent 70%)" }}
            />
            <div className="relative">
              <h2 className="text-[clamp(24px,3.2vw,32px)] font-bold tracking-[-0.028em] mb-3">
                Connect it in about a minute.
              </h2>
              <p className="text-[16px] leading-[1.6] max-w-[50ch] mx-auto" style={{ color: "var(--muted)" }}>
                Issue a key, add the server to your client, and ask your first coverage question.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mt-7">
                <Button href={API_KEYS_URL}>Get an API key</Button>
                <Button href={DEVELOPERS_URL} variant="secondary">
                  Developer platform
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
