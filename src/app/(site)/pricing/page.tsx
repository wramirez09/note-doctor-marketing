// app/pricing/page.tsx  (or pages/pricing.tsx for Pages Router)
// Drop this file into your Next.js project.
// Requires: Tailwind CSS is NOT needed — styles are inline/CSS Modules via <style jsx global>
// For Google Fonts, add  { family: 'Inter', weights: [300,400,500,600,700] } to next/font or your _document.
'use client';

import React from "react";



// ─── Sub-components ──────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <span className="nd-check">
      <svg viewBox="0 0 10 10" width={10} height={10}>
        <polyline
          points="1.5,5 4,7.5 8.5,2.5"
          stroke="#60a5fa"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

interface FeatureListProps {
  items: { label: string; highlight?: boolean }[];
}
function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="nd-feature-list">
      {items.map((item, i) => (
        <li key={i}>
          <CheckIcon />
          <div>
            {item.highlight ? <span>{item.label}</span> : item.label}
          </div>
        </li>
      ))}
    </ul>
  );
}

interface UsageExampleProps {
  label: string;
  calls: string;
  cost: string;
}
function UsageExample({ label, calls, cost }: UsageExampleProps) {
  return (
    <div className="nd-usage-ex">
      <div className="nd-ex-label">{label}</div>
      <div className="nd-ex-calls">{calls}</div>
      <div className="nd-ex-cost">{cost}</div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const proFeatures = [
    { label: "AI-driven prior authorization screening", highlight: true },
    { label: "Real-time payer policy compliance checks", highlight: true },
    { label: "Denial risk flagging before submission", highlight: true },
    { label: "Clinical documentation gap detection", highlight: true },
    { label: "HIPAA-compliant", highlight: true },
    { label: "PDF export", highlight: true },
  ];

  const enterpriseFeatures = [
    { label: "Everything in Pro, plus:" },
    { label: "API access (coming soon)", highlight: true },

  ];

  const usageExamples = [
    { label: "Light usage", calls: "250 calls", cost: "$5.00 in usage" },
    { label: "Moderate usage", calls: "1,000 calls", cost: "$20.00 in usage" },
    { label: "Active practice", calls: "5,000 calls", cost: "$100.00 in usage" },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        :root {
          --nd-bg:        #0c0f1a;
          --nd-bg-card:   #131929;
          --nd-bg-card2:  #0f1522;
          --nd-border:    rgba(255,255,255,0.07);
          --nd-blue:      #3b82f6;
          --nd-blue-glow: rgba(59,130,246,0.18);
          --nd-blue-mid:  #60a5fa;
          --nd-text:      #f0f4ff;
          --nd-muted:     rgba(240,244,255,0.5);
          --nd-faint:     rgba(240,244,255,0.25);
        }

        .nd-root {
          font-family: 'Inter', sans-serif;
          background: var(--nd-bg);
          color: var(--nd-text);
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        /* dot grid */
        .nd-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: radial-gradient(circle, rgba(59,130,246,0.12) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }

        /* ── HERO ── */
        .nd-hero {
          text-align: center;
          padding: 88px 24px 64px;
          position: relative;
          z-index: 1;
        }
        .nd-eyebrow {
          display: inline-block;
          font-size: 12px; font-weight: 600; letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--nd-blue-mid);
          margin-bottom: 20px;
        }
        .nd-hero h1 {
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 700; line-height: 1.12;
          letter-spacing: -.02em;
          margin-bottom: 20px;
        }
        .nd-hero h1 span { color: var(--nd-blue-mid); }
        .nd-hero p {
          font-size: 17px; color: var(--nd-muted); line-height: 1.65;
          max-width: 520px; margin: 0 auto;
        }

        /* ── CARDS ── */
        .nd-cards-wrap {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          padding: 0 24px 80px;
          max-width: 1000px;
          margin: 0 auto;
          position: relative; z-index: 1;
        }
        .nd-card {
          background: var(--nd-bg-card);
          border: 1px solid var(--nd-border);
          border-radius: 18px;
          padding: 40px 36px;
          flex: 1 1 320px;
          max-width: 420px;
          position: relative;
          transition: transform .25s, box-shadow .25s;
        }
        .nd-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(0,0,0,.4);
        }
        .nd-card.nd-featured {
          border-color: var(--nd-blue);
          box-shadow: 0 0 0 1px var(--nd-blue), 0 12px 48px var(--nd-blue-glow);
          background: linear-gradient(145deg, #131d35 0%, #0f1522 100%);
        }
        .nd-badge {
          position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
          background: var(--nd-blue);
          color: #fff; font-size: 11px; font-weight: 700; letter-spacing: .08em;
          text-transform: uppercase; padding: 4px 14px; border-radius: 20px;
          white-space: nowrap;
        }
        .nd-card-label {
          font-size: 12px; font-weight: 600; letter-spacing: .1em;
          text-transform: uppercase; color: var(--nd-muted);
          margin-bottom: 12px;
        }
        .nd-card-name {
          font-size: 22px; font-weight: 700; margin-bottom: 8px;
        }
        .nd-card-desc {
          font-size: 14px; color: var(--nd-muted); line-height: 1.6; margin-bottom: 32px;
        }

        /* price */
        .nd-price-row {
          display: flex; align-items: baseline; gap: 4px; margin-bottom: 6px;
        }
        .nd-price-dollar { font-size: 48px; font-weight: 700; line-height: 1; }
        .nd-price-period { font-size: 15px; color: var(--nd-muted); }
        .nd-price-usage {
          display: flex; align-items: center; gap: 8px;
          font-size: 14px; color: var(--nd-muted);
          padding: 10px 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--nd-border);
          border-radius: 8px;
          margin-top: 14px;
        }
        .nd-price-usage strong { color: var(--nd-text); }
        .nd-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--nd-blue); flex-shrink: 0;
        }
        .nd-divider { height: 1px; background: var(--nd-border); margin: 28px 0; }

        /* features */
        .nd-feature-list {
          list-style: none; display: flex; flex-direction: column;
          gap: 14px; margin-bottom: 36px; padding: 0;
        }
        .nd-feature-list li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 14px; line-height: 1.5; color: var(--nd-muted);
        }
        .nd-feature-list li span { color: var(--nd-text); }
        .nd-check {
          width: 18px; height: 18px; flex-shrink: 0; margin-top: 1px;
          background: rgba(59,130,246,0.15);
          border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
        }

        /* buttons */
        .nd-btn-primary {
          display: block; width: 100%; text-align: center;
          background: var(--nd-blue); color: #fff;
          font-size: 15px; font-weight: 600;
          padding: 14px; border-radius: 9px;
          text-decoration: none; border: none; cursor: pointer;
          transition: background .2s, transform .15s;
        }
        .nd-btn-primary:hover { background: #2563eb; transform: translateY(-1px); }
        .nd-btn-ghost {
          display: block; width: 100%; text-align: center;
          background: transparent; color: var(--nd-text);
          font-size: 15px; font-weight: 600;
          padding: 14px; border-radius: 9px;
          text-decoration: none;
          border: 1px solid var(--nd-border);
          cursor: pointer;
          transition: border-color .2s, background .2s;
        }
        .nd-btn-ghost:hover { border-color: var(--nd-blue); background: var(--nd-blue-glow); }

        /* ── USAGE EXPLAINER ── */
        .nd-usage-explainer {
          max-width: 740px; margin: 0 auto 80px;
          padding: 0 24px;
          position: relative; z-index: 1;
        }
        .nd-usage-box {
          background: var(--nd-bg-card2);
          border: 1px solid var(--nd-border);
          border-radius: 16px;
          padding: 36px 40px;
        }
        .nd-usage-box h2 {
          font-size: 20px; font-weight: 700; margin-bottom: 8px;
        }
        .nd-usage-box p {
          font-size: 14px; color: var(--nd-muted); line-height: 1.65; margin-bottom: 28px;
        }
        .nd-usage-examples {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }
        .nd-usage-ex {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--nd-border);
          border-radius: 10px;
          padding: 18px 20px;
        }
        .nd-ex-label { font-size: 12px; color: var(--nd-muted); margin-bottom: 6px; }
        .nd-ex-calls { font-size: 22px; font-weight: 700; margin-bottom: 2px; }
        .nd-ex-cost  { font-size: 13px; color: var(--nd-blue-mid); font-weight: 500; }

        /* ── FOOTER NOTE ── */
        .nd-footer-note {
          text-align: center;
          font-size: 13px; color: var(--nd-faint);
          padding: 0 24px 60px;
          position: relative; z-index: 1;
        }
        .nd-footer-note a { color: var(--nd-muted); text-decoration: underline; }
      `}</style>

      <main className="nd-root">

        {/* HERO */}
        <section className="nd-hero">
          <span className="nd-eyebrow">Pricing</span>
          <h1>
            Simple pricing.<br />
            <span>No surprises.</span>
          </h1>
          <p>
            One straightforward plan — a flat monthly base plus pay-as-you-go
            usage. Only pay for what you actually use.
          </p>
        </section>

        {/* CARDS */}
        <div className="nd-cards-wrap">

          {/* Pro */}
          <div className="nd-card nd-featured">
            <div className="nd-badge">Most Popular</div>
            <div className="nd-card-label">Core Plan</div>
            <div className="nd-card-name">NoteDoctor Pro</div>
            <div className="nd-card-desc">
              Everything you need to screen prior authorizations, catch denials
              before they happen, and keep patients moving.
            </div>

            <div>
              <div className="nd-price-row">
                <div className="nd-price-dollar">$25</div>
                <div className="nd-price-period">/ month</div>
              </div>
              <div className="nd-price-usage">
                <div className="nd-dot" />
                <div>+ <strong>$0.02</strong> per AI screening call</div>
              </div>
            </div>

            <div className="nd-divider" />
            <FeatureList items={proFeatures} />
            <a href="/subscribe" className="nd-btn-primary">Subscribe — $25 / mo</a>
          </div>

          {/* Enterprise */}
          <div className="nd-card">
            <div className="nd-card-label">For Health Systems</div>
            <div className="nd-card-name">Enterprise</div>
            <div className="nd-card-desc">
              High-volume practices and health systems with custom integration
              and dedicated support needs.
            </div>

            <div>
              <div className="nd-price-row" style={{ marginBottom: 14 }}>
                <div className="nd-price-dollar" style={{ fontSize: 38 }}>Custom</div>
              </div>
              <div className="nd-price-usage">
                <div className="nd-dot" style={{ background: "#60a5fa" }} />
                <div>Volume pricing on AI calls available</div>
              </div>
            </div>

            <div className="nd-divider" />
            <FeatureList items={enterpriseFeatures} />
            <a href="/contact" className="nd-btn-ghost">Contact Sales</a>
          </div>

        </div>

        {/* USAGE EXPLAINER */}
        <div className="nd-usage-explainer">
          <div className="nd-usage-box">
            <h2>How usage pricing works</h2>
            <p>
              Each time NoteDoctor.Ai runs an AI screening — analyzing a note,
              checking payer criteria, or flagging a documentation gap — that
              counts as one AI call at{" "}
              <strong style={{ color: "var(--nd-text)" }}>$0.02</strong>. Your
              monthly bill is your $25 base plus however many calls you run.
              Scale up or down with no commitment.
            </p>
            <div className="nd-usage-examples">
              {usageExamples.map((ex) => (
                <UsageExample key={ex.label} {...ex} />
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <p className="nd-footer-note">
          All prices in USD. HIPAA-compliant infrastructure. Cancel anytime.
          &nbsp;·&nbsp;{" "}
          <a href="/contact">Contact us</a>
        </p>

      </main>
    </>
  );
}
