# Marketing Audit: NoteDoctor.AI
**URL:** https://a6092dfd.note-doctor-marketing.pages.dev/ (Cloudflare Pages preview of `dev` branch — post content/SSR overhaul; not yet on production `notedoctor.ai`)
**Date:** 2026-05-08
**Business Type:** SaaS (B2B healthcare; provider-side prior-authorization screening)
**Overall Marketing Score: 77/100 (Grade: B)**

---

## Executive Summary

NoteDoctor.AI's marketing site has crossed a structural threshold. The recently-merged `feat/content-real-copy` and SSR-foundation work transformed the site from a client-shell (rendering only a preloader to crawlers) into a fully prerendered, schema-marked, real-content site with a defensible conversion funnel and credible mid-funnel content. The score moves from a baseline near 67 to **77/100, Grade B** — well above average for an early-stage healthcare SaaS, but five points short of the brief's 82+ target.

**Biggest strength: trust and credibility infrastructure.** The site does the things most early-stage AI companies skip and most healthcare buyers demand. A real Security page with explicit certification status (HIPAA + BAA + SOC 2 controls aligned + TLS/AES detail). Three full-length case studies with clinical-language detail (CPT codes, MCG/InterQual references, payer-policy mechanics) that signal domain understanding. Three comparison pages with researched 8-row matrices, sourced from competitor sites, and — rare — a "Where {competitor} wins" fairness section that buyers read to evaluate honesty as much as features. Hero stats now cite KFF directly. Pricing is published. The Org/SoftwareApp/Article/BreadcrumbList/AboutPage/ContactPage/WebPage JSON-LD on every route is unusually thorough.

**Biggest gap: conversion infrastructure isn't wired.** The `/request-demo` form posts to `process.env.NEXT_PUBLIC_LEAD_ENDPOINT` — but that env var is **not configured** on Cloudflare Pages, so submissions fail gracefully to a mailto fallback today. Inline scheduling (Calendly/Cal.com) doesn't exist yet. The homepage trust strip displays the literal string "Used by N+ practices" — a TODO(verify) placeholder that ships to visitors. Founder bios, customer logos, and the "100+ providers / 10,000+ prior auths / 78% turnaround reduction" metric bar are all unverified. Each is small; together they leave revenue on the table the moment a real prospect sees them.

**Top three actions** to reach the 82+ target:

1. **Wire `NEXT_PUBLIC_LEAD_ENDPOINT`** in Cloudflare Pages env vars and add a Calendly/Cal.com inline scheduler on `/request-demo`. This is the single highest-leverage move: every other action assumes the funnel actually captures leads.
2. **Resolve all TODO(verify) numbers** before any marketing campaign drives traffic — replace "N+", "100+", "10,000+", and the homepage 78% claim with real values (or remove them). Showing a placeholder figure to any prospect is worse than showing nothing.
3. **Surface pricing on the homepage** (above the FAQ) and add a third hero CTA "See pricing →". `$25/month + $0.02/call` is a major differentiator vs Cohere/Anterior/Availity (none publish pricing); hiding it one click deep is a strategic miss.

Conservative estimate of monthly revenue lift from implementing all recommendations below: **$8K–$25K MRR within 90 days** at current traffic levels (assumes the recommended changes lift demo-form completion rate by 1.5–3.0× from a baseline of working endpoint plus inline scheduler).

---

## Score Breakdown

| Category | Score | Weight | Weighted | Key Finding |
|---|---|---|---|---|
| Content & Messaging | 78/100 | 25% | 19.5 | Strong domain-expert prose; hero subhead leans on buzzwords vs specific outcome |
| Conversion Optimization | 72/100 | 20% | 14.4 | Single demo path is right; lead endpoint and inline scheduler not wired |
| SEO & Discoverability | 86/100 | 20% | 17.2 | SSR fixed, JSON-LD comprehensive, sitemap dynamic; no /blog yet |
| Competitive Positioning | 79/100 | 15% | 11.85 | Researched matrices and fairness sections; competitor claims pending verification |
| Brand & Trust | 70/100 | 10% | 7.0 | Excellent compliance signals; missing founder bios, logos, third-party reviews |
| Growth & Strategy | 68/100 | 10% | 6.8 | Pay-as-you-go is a strong PLG wedge; no referral, no email nurture, no /blog |
| **TOTAL** |  | **100%** | **76.75** | |

---

## Quick Wins (This Week)

1. **Set `NEXT_PUBLIC_LEAD_ENDPOINT` in Cloudflare Pages.** Pick the destination (Loops, Resend, HubSpot, internal endpoint, or even an extended formsubmit.co address). Verify a test submission lands. **Without this, every demo form click is currently silent failure with mailto fallback.** (15 min) — High Impact.

2. **Resolve homepage trust-strip placeholder strings.** The `TrustStrip` component renders `100+ Providers screened / 10,000+ Prior auths analyzed / 78% Avg turnaround reduction` and the `/request-demo` strip renders `Used by N+ practices`. Either replace all with real numbers or remove until you have them. Showing "N+" to any prospect is a credibility hit. (`src/components/home/TrustStrip.tsx`, `src/app/(site)/request-demo/page.tsx`) — High Impact.

3. **Surface pricing on the homepage.** Add a `<PricingTeaser />` section between `TrustStrip` and `CompareCallout`: "$25/month + $0.02 per AI call. Published. No annual lock-in." → "See pricing →". This single change hits competitive differentiation harder than the three comparison pages combined, because it lands before any click. — High Impact.

4. **Replace "Get Started Today" anchor target on `#how`.** The hero secondary CTA points to `#how`, but no element with that ID exists in the rendered homepage HTML — the link is a no-op. Either add `id="how"` to the `HowItHelps` section, change the anchor to `/how-it-works`, or remove the secondary CTA. (`src/components/home/Hero.tsx`) — Medium Impact.

5. **Add an inline scheduler on `/request-demo`.** Provision a Cal.com or Calendly URL and wire it as an iframe below the form. Average B2B demo-conversion improvement when "request → wait for email" is replaced with "book a slot now" is 2–3×. (`src/app/(site)/request-demo/page.tsx`) — High Impact.

6. **Trim the top nav from 8 items to 6.** Current: Home, For You, How it works, Pricing, Security, Request demo, Login, Subscribe. Drop "How it works" (low-click; available in footer + content), and group "Login / Subscribe" into a single account-state-aware "Sign in" link with primary "Request demo". Crowded nav reduces clickthrough across all items. (`src/components/HeaderWithMenu/index.tsx`) — Medium Impact.

7. **Add `id="contact"` to ContactCTA.** A few CTAs across the legacy components still link to `#contact`. The new `ContactCTA` doesn't carry that ID. Either rename anchors or add the ID for backward compatibility. — Low Impact, but free.

8. **Drop `Login` from the top nav on mobile until past first scroll.** The mobile drawer currently lists Login/Subscribe at the bottom of the menu — that's correct — but the desktop header shows three CTAs (Login + Subscribe + Request demo). Three CTAs split intent. Make Login a secondary text link, keep Request demo as the primary. — Medium Impact.

9. **Run a Lighthouse pass and capture LCP/INP/CLS** on the preview URL. The build output suggests LCP-friendly small first-loads (109–133 KB shared JS) but the for-physicians route is 174 KB / 39.6 KB page-specific — the largest in the site. That route includes Mantine + framer-motion. Worth measuring. — Medium Impact.

10. **Add the AMA Prior Auth Physician Survey URL** to the third hero stat (currently links to the AMA prior-auth landing parent with TODO(verify)). The most-cited AMA stat is "13 hours/week per physician" from the annual survey. Either update the framing to "13hrs/wk" with the survey URL, or keep "2hrs/day" and find/cite the matching source. (`src/components/home/Hero.tsx`) — Low Impact.

---

## Strategic Recommendations (This Month)

1. **Stand up `/blog` and ship 4 cornerstone posts.** The repo already has `markdown/blogs/` content and `gray-matter` parsing is installed but no route renders it. Wire `app/blog/page.tsx` (index) and `app/blog/[slug]/page.tsx` (post) plus a `BlogPosting` JSON-LD per post, and add the four highest-intent topics first: "How prior-auth denials happen — and which ones are preventable at intake", "MCG vs InterQual: how payers choose, and what providers should know", "CMS PA rule 0057-F: what it means for providers", "Pre-submission screening vs payer-side decisioning". Add posts to `sitemap.ts`. **This is the cheapest organic-traffic engine you'll ever build given the engineering already done.** Effort: 1.5 weeks. Conservative: +400-1500 monthly organic visitors within 90 days.

2. **Build the ROI calculator** (commit 2i was scoped out of the content PR — bring it back). The pricing teaser → ROI calculator → demo-request funnel is a much stronger conversion path than pricing → demo. Inputs: PA volume, staff time per PA, loaded cost, denial rate, revenue per approved PA. Output: hours/month, $/month staff cost, denial-recovery revenue, total annual impact. Email-gated downloadable HTML summary via Blob. Effort: 3-4 days. Conservative: 8-15% lift in demo-form starts (industry benchmark for ROI-calc → demo handoff in B2B SaaS).

3. **Resolve all TODO(legal) markers on the Security page.** SOC 2 Type II timeline, HITRUST decision, exact data residency. Either commit to a date ("target Q3 2026") or remove the line. The current "Type II report status: in progress" is honest but reads as ambiguous to procurement teams; a target date is much stronger. Effort: 1 hour with legal. Impact: removes a procurement-cycle stall.

4. **Get one customer to the case-study sign-off line.** All three case studies are anonymized, prose is real, but every metric and every quote carries `TODO(verify)`. Get one customer (any of the three personas would do) to sign off on the descriptor + metrics + (ideally) a real attribution. One real, named, signed-off case study is worth more than three anonymized ones. Effort: 2-3 weeks of relationship work. Impact: meaningful trust signal across every page.

5. **Add comparison-page CTAs to LinkedIn ads.** The `/compare/vs-cohere`, `/compare/vs-anterior`, `/compare/vs-availity` pages are intent-pure: anyone reading them is actively evaluating. Run small LinkedIn ad tests targeting "VP Revenue Cycle", "Director Prior Authorization", "Practice Administrator" job titles with each comparison URL as the destination. The matrices and fairness sections are the closest thing to a sales-call answer the site offers. Effort: 1 week to set up, $1K-3K test budget.

6. **Footer redesign — add column structure and a Resources column.** The current footer is a flat single-row of 11 links. Split into 4 columns: Product (How it works, Pricing, Security), Resources (Case studies, Compare, Blog when live, ROI calc when live), Company (About, Contact), Legal (Privacy, Terms). This matches the buyer's mental model and lifts deeper-page traffic. Effort: 2-3 hours. Impact: 5-15% lift on interior page sessions.

7. **Build an email nurture from `/request-demo` form submission.** Even with Calendly inline scheduling, ~50% of demo-form submitters won't book in the same session. A 4-email sequence over 10 days (case study → comparison → security packet → "still interested?") recovers 15-30% of those. Requires the lead endpoint to be wired first. Effort: 1 week with Loops/Customer.io.

---

## Long-Term Initiatives (This Quarter)

1. **Attestation-grade Security page evolution.** Move from "SOC 2 controls aligned, Type II in progress" to a real Trust Center page (e.g. SafeBase, Vanta Trust). For healthcare buyers, the difference between "we say we're secure" and "click here for our control inventory + auditor + subprocessor list" is procurement-cycle measurable. Effort: 4-6 weeks. Impact: shorter sales cycles for health-system deals.

2. **Channel partnerships with EHR vendors.** The "no EHR integration project required" positioning is true and powerful, but a single named EHR integration (eClinicalWorks, Athena, or even a niche specialty EHR) — even a thin one — would unlock that EHR's marketplace and direct-sell channel. Effort: 1-2 quarters. Impact: structural channel rather than search/ad-driven traffic.

3. **Aggregate denial-rate benchmark report.** Once you have meaningful screening volume, an annual or quarterly "Prior Auth Denial Trends" report (anonymized aggregate) becomes a free media play — KFF/AMA-adjacent publication that earns links and press. Effort: 4-6 weeks. Impact: durable backlinks + brand authority.

4. **Reposition `/for-you` as a buyer-routing page.** Currently `/for-you` is a tabbed three-persona page with a single H1. Better as a pure routing splitter ("Which describes you?" → 3 cards → /for-physicians / /for-health-systems / /for-healthcare). Reduces cognitive load and lets each persona page own its full message. Effort: 1-2 days. Impact: 5-10% lift on persona-page sessions.

5. **Public roadmap or changelog.** A simple `/changelog` page that lists shipped features by date is unusually trust-building for healthcare AI buyers, who default-distrust black-box AI. Even monthly cadence is enough. Effort: ongoing, 1 day to scaffold.

---

## Detailed Analysis by Category

### Content & Messaging Analysis (78/100)

**What's working:**
- **Domain expertise visible.** Case studies reference CPT codes (75561, 78452, 93306), MCG/InterQual/NCDs/LCDs, conservative-therapy duration requirements, neurological-exam findings — language no marketing copywriter would invent. This is the single strongest content signal on the site.
- **Pricing transparency** as strategic copy. "$25/month + $0.02/call. Published." appears on the pricing page, comparison matrices, and About page principles. This is a coherent message.
- **Fairness in comparisons.** The "Where {competitor} wins" sections on every `/compare/[slug]` page are unusual and credibility-positive; most comparison pages on competitor sites are one-sided.
- **Real, citation-grade hero stats.** 53M+ MA prior-auth determinations and 80% appeal-overturn linking to KFF 2024 is a much stronger signal than the prior unsourced 50M+ figures.
- **Honest brand voice.** "We anonymize by default", "We never train on customer data", "We publish prices", "We explain our screening logic" on the About page are concrete principles, not platitudes.

**What's not:**
- **Hero subhead leans buzzword.** "Empowers providers with clarity, speed, and compliance" is generic. Replace with a specific outcome: e.g., "Catches the documentation gaps that cause prior-auth denials before submission. Built for practices, $25/month."
- **H1 vs eyebrow visual hierarchy.** The eyebrow chip "AI-Powered Prior Authorization" reads larger than expected to crawler heuristics (the WebFetch summary mistook it for the H1). The actual H1 "Cut the Red Tape. Deliver Care Without Delays." is brand-y rather than search-intent. Consider an A/B with a problem-first H1 like "Stop losing prior auths to documentation that doesn't match the payer rulebook."
- **Founder bios are placeholder.** Three "F / F / C" initial tiles with "Bio coming soon" on `/about` is honest but visibly under-finished.
- **No customer logos.** Logo bar is a high-leverage homepage feature; even 3-4 anonymized "Mid-sized cardiology group, Midwest" tiles using shape silhouettes would be better than nothing while real logos are pending.

---

### Conversion Optimization Analysis (72/100)

**What's working:**
- **Single demo path.** Hero CTA, ContactCTA, case-study slug pages, comparison-page CTAs, About page CTA, Security page CTA all funnel to `/request-demo`. Source tracking via `?source=...&slug=...` query params is in place.
- **Form structure is right.** First/Last name, work email, practice name, role (dropdown), PA volume per month (range select), optional message. Six fields with progressive disclosure is on-target for B2B healthcare.
- **What-to-expect block** on `/request-demo` reduces submission anxiety: book → live demo → 7-day pilot.
- **Case-study cards under the form** answer "is this real" without requiring the user to leave.
- **Trust strip near the form** (HIPAA, BAA, "Used by N+ practices", sales@ mailto) is the right pattern.

**What's not:**
- **Lead endpoint not configured.** `NEXT_PUBLIC_LEAD_ENDPOINT` is unset; `RequestDemoClient` falls back to a logged warning + user-facing error pointing them to `mailto:sales@notedoctor.ai`. **Today, every form submission is a silent failure for the user and a missed lead for the team.** This is the single highest-leverage fix in the audit.
- **No inline scheduler.** Calendly/Cal.com would lift form-completion-to-meeting-booked rate by 2-3× (industry benchmark). The TODO(integration) marker for this was removed in the JSX-cleanup pass; the slot is still available.
- **Pricing is one click away.** The strongest competitive differentiator (published price vs Cohere/Anterior/Availity opaque enterprise pricing) is hidden behind a nav click. Surface it on the homepage.
- **Hero secondary CTA broken.** `#how` anchor doesn't match any element ID on the homepage.
- **Subscribe button in nav** points to the app's signup flow but with no context — a healthcare buyer is unlikely to click "Subscribe" on a SaaS site they're evaluating without seeing the price first. The sequence should be Pricing visible → Subscribe.
- **Mobile nav has eight items** (drawer is fine; desktop is what crowds).
- **No micro-conversion** at the homepage exit-intent (newsletter signup, security packet download, ROI calc) for visitors who don't want a demo today.

---

### SEO & Discoverability Analysis (86/100)

**What's working:**
- **SSR is real.** Crawlers see the H1, headline copy, FAQ content, comparison matrices, case-study prose. The 1-second `useEffect` PreLoader gate is gone.
- **JSON-LD across the site.** Organization + SoftwareApplication on every page (root layout). FAQPage on homepage. Article + BreadcrumbList on case-study and compare slug pages. AboutPage, WebPage (about: Information security policy), ContactPage on About / Security / Request-demo respectively. This is unusually thorough.
- **Sitemap dynamic.** `app/sitemap.ts` returns 18 routes (12 static + 3 case studies + 3 comparisons), all with `lastModified`, priority weighting (1.0 home, 0.7 static, 0.6 dynamic).
- **robots.txt does NOT block AI crawlers.** No GPTBot/ClaudeBot/PerplexityBot/Google-Extended/Applebot-Extended disallows. Critical given the rise of AI-search referrals.
- **Per-page canonical alternates** and OG metadata.
- **Title template** `%s — NoteDoctor.AI` with `title.absolute` for pages that already include the brand.
- **External link signal.** Hero stats now link out to KFF, which is a quality referent.
- **Zero `NoteDoctor.Ai` (mixed-case) variants** in user-visible HTML; canonical brand and lowercase domain are clean.

**What's not:**
- **No `/blog` route.** `markdown/blogs/` exists in repo, gray-matter is installed, but no Next.js route renders it. This is the biggest organic-traffic gap.
- **Internal-link density is light.** Beyond the top nav, footer, and the new `RelatedLinks` blocks on three persona pages, there isn't much article-to-article cross-linking. Once `/blog` lands, build a topic-cluster pattern (one pillar page per topic, 3-5 supporting articles, cross-linked).
- **No `Product` schema on pricing.** A lightweight `Product` JSON-LD on `/pricing` with offer detail would surface price snippets in SERPs.
- **`for-physicians` page is heavy.** 39.6 KB page-specific JS is the largest in the site (next-largest is `/for-you` at 7.57 KB). Mantine + framer-motion are pulling weight; consider deferring `framer-motion` or replacing the persona page's Mantine components.
- **No `<link rel="me">` or other entity-graph signals** for AI-search disambiguation. Rare to deploy, but cheap.
- **Hero H1 keyword opportunity missed.** "Cut the Red Tape" doesn't carry "prior authorization." A subhead-as-H2 is fine but the H1 is your strongest on-page signal.

---

### Competitive Positioning Analysis (79/100)

**What's working:**
- **Three real comparison pages** (`/compare/vs-cohere`, `/compare/vs-anterior`, `/compare/vs-availity`) with researched 8-row matrices.
- **`SOURCE:` comments above each entry** capturing where each competitor claim came from (homepages, accessed 2026-05-08).
- **`TODO(verify):` on every individual competitor cell** so claims are reverified before campaign use — the right defensive pattern given competitor sites change.
- **"Best fit for" two-column block** on every comparison page that explicitly says when to pick the competitor.
- **"Where {competitor} wins" fairness section** is the strongest credibility move on these pages — buyers read these to evaluate honesty.
- **`relatedCaseStudySlug`** wires each comparison to the most relevant case study (vs-cohere → regional-health-network, vs-anterior → midwest-cardiology, vs-availity → sunbelt-orthopedics).
- **Cross-linked between comparisons** ("Other comparisons" footer block on each `/compare/[slug]` page).
- **Provider-vs-payer wedge is clear.** "We're built for the other side of that conversation" is a coherent and defensible positioning vs the well-funded payer-side incumbents.

**What's not:**
- **No comparison page for the closest provider-side competitors.** Cohere/Anterior are payer-side (the matrices say so explicitly). Availity is dual-sided clearinghouse. None of them are direct provider-side competitors. If Banjo Health, Olive AI's surviving prior-auth assets, Rhyme, Glidian, or any other provider-side tool exists, those are the comparisons that should be built.
- **No analyst recognition** (Gartner, KLAS, Frost). Typical for early stage; flag for the 9-12 month roadmap.
- **No third-party reviews** (G2, Capterra, TrustRadius). G2 free profile setup is a quick win once there are 10+ customers comfortable leaving reviews.
- **Comparisons aren't in main nav.** Reachable only via homepage `CompareCallout` section, footer, and persona-page `RelatedLinks`. Adding "Compare" to the top nav is contentious (already 8 items) but worth A/B testing.

---

### Brand & Trust Analysis (70/100)

**What's working:**
- **Compliance signals are concrete.** Security page enumerates HIPAA / SOC 2 controls aligned (Type II in progress) / TLS 1.2+ / AES-256 / US data residency in a status-at-a-glance table. This is the level of detail that makes it through procurement.
- **About page principles are specific.** "We never train on customer data" is the single most important sentence on the site for healthcare AI trust; surface it more prominently.
- **Source-cited stats** on the homepage (KFF link, AMA link) signal research rigor.
- **Real domain language** in case studies (CPT codes, payer-policy mechanics) signals lived experience.
- **Pricing transparency** is a trust move — most healthcare AI is opaque.

**What's not:**
- **No real founder names, photos, or bios.** The `/about` team scaffold renders three placeholder tiles. Healthcare buyers — especially health-system buyers — want to know who is behind a HIPAA-handling vendor.
- **No customer logos.** Logo bar absent.
- **"N+" / "100+" / "10,000+" / "78%" placeholder metrics** on the trust strip and metric bar. Each shipping with TODO(verify). This is the biggest single-line credibility risk on the site.
- **No press / analyst coverage.** Typical for early stage; not penalized heavily.
- **No public LinkedIn presence** referenced (no `sameAs` URLs on the Organization JSON-LD; the array is `[]`). Add LinkedIn, Crunchbase, GitHub if applicable.
- **Quotes in case studies** are attributed to generic roles ("Practice Administrator", "Director of Revenue Cycle", "VP, Revenue Cycle") — better than fake names but a real attributed quote would be much stronger.

---

### Growth & Strategy Analysis (68/100)

**What's working:**
- **Pay-as-you-go pricing model** ($25/mo + $0.02/call) is a strong product-led-growth wedge in a market dominated by enterprise contracts. Low-commitment trial path.
- **Self-serve subscribe flow available.** "Subscribe" in the top nav links to the app's signup. No sales gate for the entry-level price.
- **Three-persona content architecture** (For Physicians / For Health Systems / For Healthcare) with persona-specific case study + comparison links via `RelatedLinks`.
- **Source tracking on every CTA** (`?source=hero`, `?source=case-study&slug=…`, etc.) — funnel attribution will work as soon as the lead endpoint is wired.
- **Static export on Cloudflare Pages** is the right choice for marketing-site cost and edge performance.

**What's not:**
- **Lead endpoint unwired.** Until `NEXT_PUBLIC_LEAD_ENDPOINT` is set, no growth instrumentation works.
- **No referral mechanism.** $25/mo PLG businesses gain a lot from "give a month, get a month" referral flows.
- **No content engine.** `/blog` route doesn't exist; no email-capturable lead magnets; no SEO landing pages targeting long-tail PA queries.
- **No email nurture.** Demo-form fall-throughs and pricing-page bounces are unrecoverable today.
- **No ROI calculator.** Scoped out of the recent content PR; remains the highest-ROI single piece of conversion content for a self-serve healthcare SaaS.
- **No assisted trial.** "Subscribe" or "Request demo" are the only options; there's no "Try it on one prior auth" lightweight entry path that would suit specialty practices browsing in research mode.
- **No `sameAs` social links** on Organization JSON-LD, so no entity graph for AI search.

---

## Competitor Comparison

NoteDoctor.AI's three published comparison pages already do this work in depth. The summary table below is from the buyer's-eye-view rather than feature-by-feature parity.

| Factor | NoteDoctor.AI | Cohere Health | Anterior | Availity AuthPal |
|---|---|---|---|---|
| Primary customer | Provider | Payer | Payer | Both |
| Headline clarity | 7/10 | 8/10 | 6/10 | 7/10 |
| Value-prop specificity | 7/10 | 7/10 | 6/10 | 7/10 |
| Pricing transparency | **9/10** | 2/10 | 2/10 | 3/10 |
| Compliance disclosure | **8/10** | 5/10 | 5/10 | 5/10 |
| Time-to-value clarity | **9/10** | 5/10 | 5/10 | 5/10 |
| Trust signals (logos/quotes/press) | 5/10 | 8/10 | 7/10 | 9/10 |
| Comparison-page presence | **9/10** | 5/10 | 5/10 | 5/10 |
| Site search-engine readiness | **8/10** | 7/10 | 6/10 | 8/10 |

**Where NoteDoctor.AI clearly wins:** pricing transparency, time-to-value clarity, compliance disclosure depth, and the existence of fair comparison pages. **Where it lags:** trust signals (logos, named customers, press, analyst coverage). The competitive positioning is healthier than the brand maturity.

---

## Revenue Impact Summary

Estimates assume current monthly traffic of ~2,000-5,000 visitors (typical for an early-stage healthcare-SaaS marketing site with light paid). Revenue lift figures assume the average path-to-paid is demo-form → demo call → paid customer, and that paid customers are a mix of $25/mo Pro and Enterprise. Conservative ARR-per-customer assumption: $1,200/yr blended.

| Recommendation | Est. Monthly Impact | Confidence | Timeline |
|---|---|---|---|
| Wire `NEXT_PUBLIC_LEAD_ENDPOINT` | $2,000–8,000 | High | < 1 day |
| Resolve placeholder trust-strip / metric-bar numbers | $500–2,000 | Medium | < 1 day |
| Add Calendly/Cal.com inline scheduler | $1,500–6,000 | High | 2-3 days |
| Surface pricing on homepage | $800–3,000 | Medium | 2-3 hours |
| Fix `#how` hero secondary CTA | $200–600 | Medium | 5 min |
| Stand up `/blog` with 4 cornerstone posts | $400–1,500 | Medium | 1.5 weeks (90-day ramp) |
| Build ROI calculator | $1,200–4,000 | Medium | 3-4 days |
| Resolve TODO(legal) on Security page | $300–1,000 | Medium | 1 hour with legal |
| One signed-off named case study | $500–2,500 | High | 2-3 weeks |
| Email nurture from demo-form drop-off | $600–2,500 | Medium | 1 week |
| Footer column redesign | $200–800 | Low | 2-3 hours |
| Comparison-page LinkedIn ad test | $1,000–4,000 | Medium | 1 week + budget |
| **Total potential lift (90-day window)** | **$8,000–25,000 MRR** | | |

---

## Next Steps

1. **Today: wire `NEXT_PUBLIC_LEAD_ENDPOINT` and replace placeholder trust-strip numbers.** Without these two, every other recommendation is stacking on a leaky foundation.
2. **This week: provision an inline scheduler on `/request-demo` and surface pricing on the homepage.** Together, these are the highest-leverage funnel fixes.
3. **This month: stand up `/blog`, build the ROI calculator, get one signed-off named case study, and resolve all TODO(legal) markers.** These move the score from 77 to 82+ and start the organic-traffic flywheel.

---

*Generated by AI Marketing Suite — `/market audit`. For deeper dives: `/market copy` for messaging A/B candidates, `/market funnel` for end-to-end funnel design, `/market seo` for content gap and keyword strategy, `/market competitors` for fuller competitive landscape including provider-side competitors not covered above.*
