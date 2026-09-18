import Link from "next/link";
import { MCP_ENDPOINT_URL, MCP_GUIDE_URL } from "@/config/apiLaunch";

const clients = ["Claude Code", "Claude Desktop", "Cursor", "any MCP client"];

/**
 * Homepage MCP band.
 *
 * Deliberately lighter than <ApiAnnouncement />: it follows it directly, and
 * two full-weight announcement bands in a row read as one repeated section.
 * The point it has to land is that this path needs no integration at all.
 */
export default function McpAnnouncement() {
  return (
    <section className="relative px-6 py-16 overflow-hidden">
      <div className="relative max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[.12em] uppercase rounded-full px-4 py-1.5 border"
            style={{ color: "var(--blue-mid)", background: "var(--blue-dim)", borderColor: "rgba(59,130,246,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--blue)", boxShadow: "0 0 6px var(--blue)" }} />
            Model Context Protocol
          </div>

          <h2 className="text-[clamp(26px,3.4vw,34px)] font-extrabold leading-[1.12] tracking-[-0.03em] mt-4 mb-3.5">
            Don&apos;t want to build anything?{" "}
            <span className="bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
              Just ask your assistant.
            </span>
          </h2>

          <p className="text-[16.5px] leading-[1.6] max-w-[54ch]" style={{ color: "var(--muted)" }}>
            The same screening engine is published as an MCP server. Connect it once and ask coverage questions where
            you already work — the answer comes back with the criteria, the codes, the documentation to gather, and the
            policies behind it.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {clients.map((c) => (
              <span
                key={c}
                className="text-[12.5px] rounded-full border px-3 py-1.5"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)", color: "var(--muted)" }}
              >
                {c}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-7">
            <Link
              href={MCP_GUIDE_URL}
              className="inline-flex items-center justify-center h-[46px] px-[22px] rounded-[9px] text-[15px] font-semibold text-white no-underline border border-transparent transition-all hover:-translate-y-0.5"
              style={{ background: "var(--blue)", boxShadow: "0 0 32px rgba(59,130,246,0.35)" }}
            >
              How to leverage it
            </Link>
          </div>
        </div>

        <div
          className="rounded-xl overflow-hidden border"
          style={{ background: "rgba(0,0,0,0.4)", borderColor: "var(--border)", boxShadow: "0 24px 60px -30px rgba(0,0,0,0.7)" }}
        >
          <div
            className="flex items-center gap-2 px-3.5 py-2.5 border-b"
            style={{ background: "rgba(255,255,255,0.03)", borderColor: "var(--border)" }}
          >
            <span className="font-mono text-[11.5px] px-2.5 py-1 rounded-md" style={{ background: "rgba(255,255,255,0.08)", color: "var(--text)" }}>
              claude code
            </span>
          </div>
          <pre
            className="m-0 p-[18px] font-mono text-[12.5px] leading-[1.75] overflow-x-auto tracking-[-0.01em]"
            style={{ color: "var(--text)" }}
          >
<span style={{ color: "#64748b" }}># Connect once — remote server, nothing to install</span>{"\n"}
claude mcp add --transport http <span style={{ color: "var(--blue-mid)" }}>notedoctor</span> \{"\n"}
{"  "}{MCP_ENDPOINT_URL} \{"\n"}
{"  "}--header <span style={{ color: "#4ade80" }}>&quot;Authorization: Bearer $ND_API_KEY&quot;</span>{"\n\n"}
<span style={{ color: "rgba(240,244,255,0.45)" }}>&gt;</span> Does BCBS TX require prior auth for a lumbar MRI{"\n"}
{"  "}after 6 weeks of failed conservative therapy?{"\n\n"}
<span style={{ color: "#64748b" }}># =&gt; determination · criteria · codes · documentation</span>
          </pre>
        </div>
      </div>
    </section>
  );
}
