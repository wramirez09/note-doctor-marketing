# NoteDoctorAi — Real Content & Conversion Infrastructure

**Use:** Paste the prompt below into Claude Code while in `/Users/williamramirez/repos/note-doctor-marketing` (on a fresh branch off `dev`).

**Goal:** Replace all placeholder content with production-ready marketing copy and ship the conversion infrastructure. Score target: 67 → 82+.

**Companion content:** Three drafted case studies and reference copy live at the bottom of this document so the engineer running the prompt has ready reference text to paste in if Claude's first pass needs editing.

---

## The Prompt

````
# Task: Replace all placeholder content with real, shippable marketing copy

The marketing audit identified the foundation as solid (SSR works, sitemap dynamic,
metadata correct) but flagged a credibility gap: case study bodies are literal
"Placeholder body." strings, comparison pages are 3-bullet stubs, the About page
has no team, there are no trust signals on the homepage, two demo paths split
intent, and brand capitalization is inconsistent.

This task replaces all placeholder content with production-ready marketing copy
and ships the conversion infrastructure. Score target: 67 → 82+.

CRITICAL RULES — read these before writing anything:

  1. WRITE REAL MARKETING COPY. No "Placeholder body." No "Lorem ipsum."
     Every paragraph that ships to users must be production-quality.

  2. DO NOT FABRICATE CUSTOMER-SPECIFIC FACTS. Customer names, exact metric
     values from real engagements, and direct quotes attributed to real
     people MUST be marked with `// TODO(verify): <what to verify>`
     comments. The marketing prose around them is real; the numbers and
     names are flagged for human verification.

     The line is: writing "a 12-physician cardiology practice in the
     Midwest" with `// TODO(verify): customer agreement to use this
     description` is fine — it's anonymized and verification is procedural.
     Inventing "Dr. Sarah Chen, Chief of Cardiology at Mercy Cleveland"
     is NOT fine — that's a fake person.

  3. DO NOT FABRICATE COMPETITOR FACTS. Every claim about Cohere,
     Anterior, or Availity must either come from their own public website
     (use WebFetch to source) or carry `// TODO(verify): claim about
     <competitor> <date>`. Comparison pages are credibility-defining.

  4. DO NOT FABRICATE COMPLIANCE STATUS. SOC 2 Type II claims must
     reflect reality (e.g., "in progress, target Q3 2026" if true).
     If unknown, use `// TODO(legal): confirm SOC 2 status` and write
     "SOC 2 controls aligned" rather than "SOC 2 Type II certified."

Hosting: Cloudflare Pages, Next.js 15 App Router, `output: 'export'`. No
server runtime at request time. Forms post via `fetch` to external endpoints.

Work in three phases. Pause after Phase 1. Create a new branch
`feat/content-real-copy` off `dev` before editing.

---

## Phase 1 — Discovery (read-only, ~10 min)

Report:

1. Existing patterns to match: read 3 representative pages
   (`src/app/(site)/page.tsx`, `src/app/(site)/for-physicians/page.tsx`,
   `src/app/(site)/pricing/page.tsx`) and report the design-token /
   component patterns to reuse (Tailwind classes, Mantine components,
   section structures).

2. Current shape of `src/lib/case-studies.ts` and
   `src/lib/compare.ts` — list every field, every entry, every TODO.

3. Current rendering of `src/app/(site)/case-studies/[slug]/page.tsx`
   and `src/app/(site)/compare/[slug]/page.tsx` — what fields are
   currently displayed, what is missing.

4. State of `src/app/(site)/about/page.tsx`, `src/app/(site)/security/page.tsx`,
   `src/app/(site)/request-demo/page.tsx` — what's shippable, what's stub.

5. Existing form-submit pattern: search for `fetch(`, `nodemailer`,
   `Resend`, `Loops`, `mailto:`, `app.NoteDoctorAi/api`. Where do
   forms post today? Is there a centralized lead-capture endpoint?

6. Brand string usage: count occurrences of `NoteDoctorAi` vs
   `NoteDoctorAi` vs `NoteDoctorAi` across the repo. Identify which
   is canonical (per `src/app/layout.tsx` it should be `NoteDoctorAi`).

7. Confirm whether a Calendly / Chili Piper / SavvyCal / Cal.com link
   exists anywhere — search for `calendly`, `chilipiper`, `savvycal`,
   `cal.com`. Report URL if found.

8. Confirm whether a customer-logos asset exists in `public/` or
   `src/components/Clients/` (the audit noted a `Clients` component
   directory).

Then propose the full edit plan (file-by-file) and wait for approval.

---

## Phase 2 — Build (after approval)

### 2a. Real case study content (highest-leverage fix on the site)

Expand `src/lib/case-studies.ts` to this richer shape:

```ts
export type CaseStudyMetric = {
  label: string;          // "Prior-auth turnaround"
  before: string;         // "5.2 days"
  after: string;          // "14 hours"
  delta?: string;         // "-89%"
  note?: string;          // optional caveat
};

export type CaseStudySection = {
  heading: string;
  body: string;           // 2-4 paragraphs of real prose, plain-text/markdown
};

export type CaseStudyQuote = {
  text: string;
  author: string;
  role: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  customer: string;       // anonymized OK ("Multi-specialty cardiology group, Midwest")
  customerType: 'Solo (1)' | 'Small Practice (2-10)' | 'Mid (11-50)' | 'Health System (50+)';
  specialty: string;
  locationDescriptor?: string;  // "Midwest", "Southeast", etc. — region, not city, unless verified
  publishedAt: string;    // ISO date
  updatedAt: string;
  headline: string;
  subhead: string;
  challenge: CaseStudySection;
  solution: CaseStudySection;
  results: CaseStudySection;
  metrics: CaseStudyMetric[];   // exactly 3-4 metrics
  quote?: CaseStudyQuote;       // optional — only if a real quote exists or marked TODO
  ogImage?: string;
};
```

Rewrite the three existing entries with real prose. Use the reference
case-study text appended at the bottom of this prompt as the starting
point — adapt voice and details to match the existing pricing / hero
tone. Do not copy verbatim if a more domain-accurate version is
available; do use the structure (challenge/solution/results sections,
3-4 metrics, optional quote) and the TODO markers exactly.

For each entry:

  - Customer string: anonymized ("12-physician cardiology practice,
    Midwest US"), with `// TODO(verify): customer permission to publish
    description`.
  - Specialty, customerType, locationDescriptor: realistic and consistent.
  - publishedAt / updatedAt: today's date.
  - headline + subhead: production-quality, customer-outcome-focused.
  - challenge, solution, results: 2-4 paragraphs each of real prose.
    Voice: clinical, specific, honest. Reference actual PA mechanics
    (CPT codes, MCG/InterQual, denial appeal cycles, payer policy
    language) so the reader knows the writer understands the domain.
    Avoid hype words ("revolutionary", "game-changing", "leverage").
  - metrics: 3-4 entries with realistic before/after/delta. Mark each
    with `// TODO(verify): exact metric from <customer> <date>` so the
    actual number is human-confirmed before launch.
  - quote: include a quote ONLY with `// TODO(verify): quote and
    attribution from <customer> <date>` and use a generic role
    ("Practice Administrator", "Director of Revenue Cycle") not a
    fake name. If unsure, OMIT the quote field — empty is better
    than fabricated.

Update `src/app/(site)/case-studies/[slug]/page.tsx` to render:
  - Hero with headline / subhead / customer / specialty / location
  - Metrics strip (3-4 cards: label, before → after, delta)
  - Three named sections: Challenge, Solution, Results (heading + body)
  - Pull quote if `quote` is present
  - Sticky/below-fold CTA: "Book a 20-min demo" → /request-demo with
    `?source=case-study&slug=<slug>`
  - JSON-LD `Article` and `BreadcrumbList`
  - `generateMetadata` per slug (title, description, canonical, OG)

Update `src/app/(site)/case-studies/page.tsx` (index) to render:
  - Hero with headline ("Real practices, real results")
  - Filter UI (URL search params): customerType, specialty
  - Grid of cards with headline, customer descriptor, key metric,
    "Read the case study →" link
  - CTA below grid linking to /request-demo

### 2b. Real comparison content (matrix + fairness)

Before writing, use WebFetch to read the public pages of:
  - coherehealth.com
  - anterior.com (formerly Co:Helm)
  - availity.com (specifically their Auth/Authpal product)

Capture: positioning, target audience, pricing model (often opaque),
EHR integrations claimed, compliance certifications listed, key
features highlighted. Record sources in a `// SOURCE:` comment above
each row.

Expand `src/lib/compare.ts`:

```ts
export type ComparisonRow = {
  dimension: string;       // "Target customer", "Deployment", etc.
  notedoctor: string;      // factual claim about us
  competitor: string;      // factual claim about them, sourced
  winner: 'notedoctor' | 'competitor' | 'tie' | 'depends';
  note?: string;
};

export type Comparison = {
  slug: string;
  competitor: string;
  competitorTagline: string;
  publishedAt: string;
  updatedAt: string;
  title: string;
  description: string;
  sharedAudience: string;
  bestFitFor: { notedoctor: string; competitor: string };
  matrix: ComparisonRow[];
  fairnessNote: string;       // "Where {competitor} wins" — REQUIRED
  summary: string;            // "When to pick which"
  relatedCaseStudySlug?: string;
};
```

Required matrix dimensions for every comparison (8 rows minimum):
  1. Primary customer (provider vs. payer, practice size)
  2. Deployment model (SaaS, integrated, services-led)
  3. EHR / clearinghouse integrations
  4. HIPAA / SOC 2 status
  5. Pricing model and transparency
  6. Time to first value
  7. Support and onboarding model
  8. Prior-auth-specific feature depth (pre-submission screening,
     payer-policy alignment, denial-risk scoring, gap detection)

For competitor cells: every factual claim carries
`// TODO(verify): <claim> from <competitor URL> <date>` even though
sourced today, because competitor sites change.

`fairnessNote` is non-negotiable: 1-2 paragraphs honestly describing
where the competitor is the better choice. Use the reference
fairness-note text appended to this prompt as a starting point.

`summary`: 3-5 sentences on when to pick which.

Update `src/app/(site)/compare/[slug]/page.tsx` to render:
  - Hero (title, description, shared audience)
  - Two-column "Best fit for" block
  - Comparison matrix (responsive table — verify mobile layout)
  - "Where {competitor} wins" section (the fairnessNote)
  - Summary
  - Two CTAs: demo + linked relatedCaseStudy
  - Internal links to the other comparison pages
  - JSON-LD `Article` + `BreadcrumbList` (NOT `Product` — Google
    penalizes overtly comparative `Product` schema)

Add this comment hardcoded at the top of the template:
  // Comparison pages are credibility-defining. Never disparage
  // competitors, never invent feature gaps, always include a
  // "where they win" section. Buyers read these to evaluate
  // honesty as much as features.

### 2c. Conversion infrastructure consolidation

  - **Single demo path.** Decide canonical: `/request-demo` (recommended).
    Update homepage hero CTA "Get Started Today" to link to
    `/request-demo` instead of `#contact`. Remove or repurpose the
    homepage `#contact` section (keep the FAQ above it; replace
    the form section with a CTA card linking to /request-demo and
    the contact email for low-intent inquiries).

  - **Build a real `/request-demo` page.** Currently thin. New layout:
    - Hero: "See NoteDoctorAi screen a prior auth in 20 minutes"
    - Subhead: real value prop ("Bring a denial or a workflow that's
      eating your team — we'll show you how risk gets flagged before
      submission")
    - "What to expect" 3-step block (book → live demo → 7-day pilot
      offer if interested)
    - Form with fields: First Name, Last Name, Work Email, Practice
      Name, Role (dropdown: Physician / Practice Admin / Health
      System Leader / Billing-RCM / Other), PA Volume / month
      (range select: <100, 100-500, 500-2000, 2000+), Optional message.
    - Form posts via `fetch` to `process.env.NEXT_PUBLIC_LEAD_ENDPOINT`
      (stub URL with `// TODO(integration):` if not yet configured —
      do not invent an endpoint).
    - If a Calendly / Cal.com URL was found in Phase 1, embed inline
      below the form via `<iframe>` (or load on success). If not
      found, mark with `// TODO(integration): inline scheduler when
      Calendly/Cal.com URL configured` and skip.
    - Trust strip below form: "HIPAA-compliant • BAA available •
      Used by N+ practices [TODO(verify): customer count]"
    - Below-fold: "Read a case study" cards (3 thumbnails to the
      case studies)
    - JSON-LD: `ContactPage`

  - **Trust strip on homepage above the FAQ.** Single horizontal
    strip: "HIPAA-compliant • BAA Available • SOC 2 controls aligned
    [TODO(legal): update if/when Type II achieved]". Use existing
    Tailwind tokens.

  - **Customer-logo or metric bar.** If any approved customer logos
    exist in `public/` or `src/components/Clients/`, render a logo
    bar above the FAQ. Otherwise render a metrics bar:
    "100+ providers screened [TODO(verify)] • 10,000+ prior auths
    analyzed [TODO(verify)] • 78% avg turnaround reduction
    [TODO(verify): aggregate metric]" — with the TODOs the marketing
    team must fill in real numbers before launch.

### 2d. About page (real)

Rewrite `src/app/(site)/about/page.tsx`. New structure:

  - Hero: "Built by clinicians and engineers tired of watching prior
    auth get in the way of patient care."
  - Mission section (2-3 paragraphs of real prose)
  - "Why now" section (the regulatory + AI moment — CMS PA rule
    finalization, payer-side AI race, provider burnout)
  - "Why we're different" (provider-first, transparent pricing,
    pre-submission screening)
  - Team section: scaffold for 3-5 team cards (photo / name / role /
    one-paragraph bio). Use `// TODO(content): real founder bios
    and photos` for each card. Do not invent names.
  - "Our principles" section: 4 principles (we anonymize by default,
    we never train on customer data, we publish prices, we explain
    our screening logic) — these mirror the Security page values
    and reinforce trust.
  - CTA: demo
  - JSON-LD: `AboutPage`

### 2e. Security page (concrete, honest)

Edit `src/app/(site)/security/page.tsx`:

  - Add explicit certification status block:
    - HIPAA: "Yes — BAA available"
    - SOC 2: "Controls aligned. Type II report status:
      [TODO(legal): in progress / target Q3 2026 / complete]"
    - HITRUST: "[TODO(legal): planned / not pursuing]"
    - Encryption: "TLS 1.2+ in transit; AES-256 at rest"
    - Data residency: "[TODO(legal): US only / specify regions]"
  - Subprocessor list block: scaffold table
    (Subprocessor / Purpose / Region) with `// TODO(legal): current
    subprocessor list from BAA appendix`.
  - "Request a security packet" CTA at bottom.
  - JSON-LD: `WebPage` with `about: { @type: 'Thing', name:
    'Information security policy' }`.

### 2f. Brand consistency pass

Search-and-replace across the codebase: any user-facing string
containing `NoteDoctorAi` or `NoteDoctorAi` becomes `NoteDoctorAi`.
Do NOT change identifiers, package names, URLs, env var names, or
git history. Only user-visible copy in JSX/MDX/strings.

Confirm before mass-replace by reporting count and sample.

### 2g. Title template and metadata polish

In `src/app/layout.tsx`, update the title template so the homepage
title doesn't double up. Current produces:
  "NoteDoctorAi — AI-Powered Prior Authorization Screening | NoteDoctorAi"

Better: change `title.template` to `"%s — NoteDoctorAi"` and on
each page set the title without the brand suffix. The homepage's
own `metadata.title` should be the full brand+tagline string and
should NOT pass through the template (use `title: { absolute: '...' }`
in Next 15).

### 2h. Source links on homepage stats

Wherever the homepage displays the "50M+", "80%", "2hrs" stats,
make the citation a real link:
  - "50M+ MA prior-auth requests" → link to KFF source
  - "80% overturned on appeal" → link to KFF source
  - "2hrs/day lost" → link to AMA / KFF source

Verify URLs with WebFetch before committing. If a source URL
cannot be confirmed, mark the citation `// TODO(verify): source URL`
and link to a stable parent (e.g., kff.org).

### 2i. ROI calculator (new route)

Create `src/app/(site)/roi-calculator/page.tsx`. Implementation
spec is already in the prior conversation prompt — follow that.
Key constraints for this codebase:
  - Server Component page imports a Client Component for the
    inputs/math.
  - No server PDF. On submit, generate a downloadable HTML
    summary via `Blob` + `URL.createObjectURL`.
  - Form posts via `fetch` to `NEXT_PUBLIC_LEAD_ENDPOINT`.
  - Add to `STATIC_PATHS` in `src/app/sitemap.ts`.
  - Add nav link and homepage callout.

Inputs (defaults shown):
  - PA volume per month (default 200)
  - Avg staff time per PA in minutes (default 18)
  - Loaded staff cost per hour (default 35)
  - First-pass denial rate % (default 12)
  - Avg revenue per approved PA (default 600)
  - Practice size (Solo / 2-10 / 11-50 / 50+)

Live output:
  - Hours/month spent on PAs (current vs. with NoteDoctorAi)
  - $/month staff cost (current vs. with)
  - $/month revenue recovered from denial-rate reduction
  - Total estimated annual impact (hero number)
  - "How we calculated this" expandable: 60% time reduction
    assumption, 40% relative denial reduction assumption, all
    formulas shown.

Email-gated detailed report: work email, practice name, role.
On submit: POST to NEXT_PUBLIC_LEAD_ENDPOINT, then offer a
downloadable HTML summary via Blob.

### 2j. Cross-linking pass

  - Homepage: add "Customer stories" section (3 case study cards,
    above FAQ) and "Compare to your current tool" section (3
    comparison cards, above stories).
  - Footer: add Resources column — Case Studies, ROI Calculator,
    Compare, Security. Already exists for some.
  - `/pricing`: add "Calculate your ROI" callout card above pricing
    tiers, linking to `/roi-calculator`.
  - `/for-physicians`, `/for-health-systems`, `/for-healthcare`:
    add at-bottom links to the most relevant case study and
    comparison page each.

---

## Phase 3 — Verify

```bash
yarn build

# All routes still 200 in static export
for p in / /about/ /pricing/ /security/ /contact/ /request-demo/ \
         /how-it-works/ /case-studies/ /case-studies/midwest-cardiology/ \
         /case-studies/sunbelt-orthopedics/ /case-studies/regional-health-network/ \
         /compare/vs-cohere/ /compare/vs-anterior/ /compare/vs-availity/ \
         /roi-calculator/ /for-physicians/ /for-health-systems/; do
  ls "out${p%/}.html" 2>/dev/null || ls "out${p}index.html" 2>/dev/null \
    && echo "$p OK" || echo "$p MISSING"
done

# Case study bodies are real prose, not placeholder
grep -c "Placeholder body" out/case-studies/midwest-cardiology/index.html
# Expect: 0
grep -oE "Challenge|Solution|Results" out/case-studies/midwest-cardiology/index.html \
  | sort -u
# Expect: all three

# Comparison pages contain matrix and fairness
grep -c "Where" out/compare/vs-cohere/index.html
# Expect: >= 1

# Brand consistency
grep -roE "NoteDoctor\.(Ai|ai)" out/ | wc -l
# Expect: 0

# Sitemap includes new routes
grep -c roi-calculator out/sitemap.xml
# Expect: 1

# JSON-LD blocks
for f in out/case-studies/midwest-cardiology/index.html \
         out/compare/vs-cohere/index.html \
         out/about/index.html \
         out/security/index.html \
         out/roi-calculator/index.html; do
  echo -n "$f: "
  grep -c 'application/ld\+json' "$f"
done

# Lighthouse SEO on three new page types
npx --yes lighthouse "file://$(pwd)/out/case-studies/midwest-cardiology/index.html" \
  --only-categories=seo --quiet --chrome-flags="--headless" --output=json \
  | grep -oE '"score":[0-9.]+' | head -1
# Expect: >= 0.95
```

Then list every `// TODO(verify):`, `// TODO(content):`,
`// TODO(legal):`, and `// TODO(integration):` left in the codebase,
grouped by category, so marketing/ops/legal know exactly what to
fill in before production launch.

---

## Constraints

  - Real marketing prose. No placeholder strings ship. The only
    placeholders that remain are inline `// TODO(verify):` markers
    on customer-specific facts and competitor claims.
  - Do NOT invent customer names, fake people, or unverified
    competitor capabilities. The line is anonymized-realistic
    (allowed) vs. fabricated-specific (not allowed).
  - Do NOT change `output: 'export'` or break the static export.
  - Do NOT introduce server runtime dependencies.
  - Reuse existing Tailwind / Mantine / NextUI components. Do not
    install a new design system.
  - Every new page exports `metadata` (or `generateMetadata`) and
    is reachable from nav or footer.
  - One commit per logical chunk (case studies, comparison pages,
    /request-demo + trust strip, About, Security, brand pass, ROI
    calculator, cross-linking) so each can be reviewed independently.
  - Open one PR `feat/content-real-copy` → `dev` at the end.

---

## Reference content

The following case-study text and competitor fairness notes are
production-ready first drafts. Use them as the starting point for
the entries in `src/lib/case-studies.ts` and `src/lib/compare.ts`.
Adapt to match existing voice; do not over-edit. All inline TODO
markers must be preserved or expanded.

### Reference case study 1 — Midwest cardiology

**slug:** `midwest-cardiology`
**title:** Midwest cardiology practice cuts prior-auth turnaround by ~78%
**customer:** 12-physician cardiology practice, Midwest US
  // TODO(verify): customer permission to publish this descriptor
**customerType:** Mid (11-50)
**specialty:** Cardiology
**locationDescriptor:** Midwest
**headline:** From days to hours: how a Midwest cardiology practice
got prior-auth out of the way of patient care.
**subhead:** Cardiac imaging and rhythm-management procedures sit at
the top of every payer's prior-auth list. NoteDoctorAi cut this
practice's average turnaround by ~78% by flagging documentation
gaps before submission.

**Challenge (heading: "The challenge"):**
> A 12-physician cardiology practice in the Midwest was running a
> high volume of imaging and procedural prior authorizations —
> stress echos, cardiac MRIs, ablations, and device placements —
> across roughly a dozen commercial and Medicare Advantage plans.
> Cardiology is one of the highest-PA-volume specialties in
> outpatient medicine, and the practice's two full-time PA
> coordinators were spending most of their day chasing missing
> documentation rather than submitting clean cases.
>
> The pain point was specific. When a cardiac MRI request came
> back denied, the most common reason wasn't medical necessity —
> it was a missing element in the chart: a prior conservative
> therapy note that didn't quite match the payer's required
> language, an exam finding the physician dictated but didn't
> code, or a guideline reference (MCG, InterQual) that the
> coordinator hadn't noticed required a specific lab in the past
> 90 days. Denials averaged five-plus business days to resolve
> through peer-to-peer or appeal. Patients were waiting. Staff
> were burning out.
>
> The practice had tried clearinghouse-based PA tools and
> payer portals. Both told them whether the case was approved
> or denied. Neither told them what was wrong with the chart
> before they hit submit.

**Solution (heading: "What changed"):**
> The practice rolled out NoteDoctorAi as a screening layer
> ahead of submission, with no EHR integration project required.
> Coordinators paste or push the clinical note into NoteDoctorAi
> alongside the procedure code. The platform identifies the
> applicable payer policy or third-party guideline (MCG,
> InterQual, NCCN, NCDs/LCDs), compares the documentation
> against it line by line, and flags every gap in plain
> language: "missing neurological exam findings," "conservative
> therapy duration not documented," "BMI not in chart in the
> past 12 months."
>
> Each case comes back with a denial-risk score and a
> readable summary the coordinator can act on. If the chart
> is clean, the case ships. If something is missing, the
> coordinator sees exactly what to ask the physician for —
> often before the patient has even left the office.
>
> Onboarding took less than a day. The practice didn't change
> their EHR, didn't change their submission portal, and didn't
> hire additional staff. They added one screening step.

**Results (heading: "The results"):**
> Within the first 60 days, the practice's average prior-auth
> turnaround dropped from roughly five days to under one — a
> ~78% reduction.
> // TODO(verify): exact metric and timeframe with customer
>
> First-pass approval rates rose materially across the
> highest-volume cardiac imaging codes (CPT 75561, 78452,
> 93306). The PA coordinators reported reclaiming meaningful
> time per week per coordinator that they redirected toward
> patient communication and appeals on the harder denials.
> // TODO(verify): hours-saved metric with customer
>
> Most importantly, patients started getting cleared and
> scheduled faster. The practice's clinical-operations leader
> noted that the upstream gain — fewer denials in the first
> place — was bigger than the downstream gain of resolving
> denials more efficiently.
> // TODO(verify): clinical-ops leader name and quote

**metrics:**
  - { label: "Avg PA turnaround", before: "~5 days", after: "<1 day", delta: "~-78%" }
    // TODO(verify): exact before/after numbers
  - { label: "First-pass approval rate", before: "—", after: "improved across high-volume codes", note: "varies by code" }
    // TODO(verify): specific approval-rate numbers
  - { label: "Coordinator time/week", before: "—", after: "materially reclaimed" }
    // TODO(verify): exact hours-saved figure
  - { label: "Implementation time", before: "—", after: "Under 1 day" }

**quote (only with TODOs):**
  - text: "Before NoteDoctorAi, our coordinators spent most of
    their day fighting denials we could have prevented at
    intake. Now we catch the gap before submission, not three
    days later."
    // TODO(verify): exact quote and approval to publish
  - author: "Practice Administrator"
    // TODO(verify): name and approval to attribute
  - role: "Practice Administrator"

---

### Reference case study 2 — Sunbelt orthopedics

**slug:** `sunbelt-orthopedics`
**title:** Sunbelt orthopedic group reduces denial rate from
~19% to under 4% in one quarter
**customer:** Multi-site orthopedic group, Southeast US
  // TODO(verify): customer permission to publish this descriptor
**customerType:** Mid (11-50)
**specialty:** Orthopedics
**locationDescriptor:** Southeast
**headline:** From a 19% denial rate to under 4% — in one quarter.
**subhead:** Orthopedic surgery and advanced imaging are denial
hotspots because conservative-therapy and imaging-history
documentation rarely match payer language exactly. NoteDoctorAi
catches the language mismatch at intake, not after.

**Challenge (heading: "The challenge"):**
> A multi-site orthopedic group in the Southeast was running
> a denial rate of roughly 19% on a mix of surgical
> authorizations and advanced imaging — primarily MRIs of
> the lumbar spine, knee, and shoulder. Most denials traced
> back to one root cause: documentation that contained the
> right clinical content but not in the language the payer's
> medical necessity criteria required.
>
> A patient who had undergone six weeks of physical therapy,
> NSAIDs, and activity modification before a knee MRI request
> would routinely be denied because the chart said "conservative
> management trialed" rather than spelling out the duration,
> modalities, and outcome the payer's policy specifically
> required. The clinical care was excellent. The documentation
> wasn't matching the payer rulebook.
>
> The group's billing team was spending most of its prior-auth
> hours on appeals and peer-to-peers. Surgeries were getting
> rescheduled. Patients were dropping off the schedule
> entirely.

**Solution (heading: "What changed"):**
> NoteDoctorAi was rolled out across the orthopedic group as
> a pre-submission screen on every PA request. Each case is
> mapped to the relevant payer policy or third-party guideline
> (MCG, InterQual, NCCN where applicable), and the platform
> reads the chart against the criteria.
>
> The flagging is specific. For a lumbar spine MRI request,
> NoteDoctorAi checks whether conservative therapy duration
> is documented (often required to be ≥6 weeks), whether
> neurological exam findings are present, whether prior
> imaging history is in the chart, and whether the diagnosis
> code aligns with the payer's covered indications.
>
> When something is missing, the coordinator sees a plain-
> language note ("Conservative therapy duration not
> documented; payer requires ≥6 weeks") and can return the
> chart to the physician for a quick addendum before
> submission. The chart goes out clean.

**Results (heading: "The results"):**
> Within the first quarter after rollout, the group's denial
> rate dropped from roughly 19% to under 4%.
> // TODO(verify): exact denial-rate before/after with customer
>
> Surgical scheduling became more predictable because cases
> were getting authorized on the first pass. Patient drop-off
> from delay decreased.
> // TODO(verify): scheduling and drop-off impact with customer
>
> The billing team's appeals workload dropped enough that the
> team was able to redirect time toward higher-value revenue-
> cycle work — denials management on the harder cases, payer
> contract analysis, and patient financial counseling.

**metrics:**
  - { label: "Denial rate", before: "~19%", after: "<4%", delta: "~-79% relative" }
    // TODO(verify): exact denial-rate numbers
  - { label: "First-pass approval", before: "—", after: "Materially improved", note: "highest gains on lumbar/knee MRI" }
    // TODO(verify): specific code-level numbers
  - { label: "Time spent on appeals", before: "—", after: "Significantly reduced" }
    // TODO(verify): hours-saved figure
  - { label: "Time-to-implement", before: "—", after: "Under 1 day" }

**quote (only with TODOs):**
  - text: "We weren't documenting the wrong things. We were
    documenting them in the wrong language. NoteDoctorAi
    showed us the gap before the payer did."
    // TODO(verify): exact quote and approval to publish
  - author: "Director of Revenue Cycle"
    // TODO(verify): name and approval to attribute
  - role: "Director of Revenue Cycle"

---

### Reference case study 3 — Regional health network

**slug:** `regional-health-network`
**title:** Regional health network scales prior-auth screening
across 80+ clinics
**customer:** Regional health system, US
  // TODO(verify): customer permission to publish this descriptor
**customerType:** Health System (50+)
**specialty:** Multi-specialty
**locationDescriptor:** US
**headline:** One workflow, 80+ clinics: scaling prior-auth
screening without scaling staff.
**subhead:** Health systems don't fail at prior auth because of
a single bad workflow. They fail because every clinic has its
own. NoteDoctorAi gave a regional system one screening layer
across all of them.

**Challenge (heading: "The challenge"):**
> A regional health network operating 80+ ambulatory clinics
> across multiple specialties was running prior auth as
> dozens of partially-overlapping local workflows. Each
> clinic had its own coordinator, its own institutional
> knowledge of which payers required what, and its own
> set of templates and shortcuts. Some were excellent.
> Others were rebuilding the wheel for every new payer
> policy update.
>
> The system's central revenue-cycle team faced two
> compounding problems. First, they couldn't see denial
> trends across the network in time to act on them —
> by the time a quarterly report surfaced a payer-policy
> shift, several months of preventable denials had already
> stacked up. Second, training and onboarding new
> coordinators was slow because the institutional
> knowledge wasn't written down anywhere; it lived in
> the head of the senior coordinator at each clinic.

**Solution (heading: "What changed"):**
> The network deployed NoteDoctorAi as a network-wide
> pre-submission screening layer — same workflow at every
> clinic, regardless of specialty. Coordinators across all
> 80+ sites now use the same screening interface,
> generating consistent, payer-aligned documentation
> checks before submission.
>
> Critically, the platform externalized the institutional
> knowledge. New coordinators could be productive within
> days because the screening tool surfaces the same
> guidelines and gap-detection results regardless of how
> long the coordinator had been at the network.
>
> The central revenue-cycle team gained a unified view
> of denial-risk trends across the network. When a payer
> updated a policy — say, tightening conservative-therapy
> requirements for lumbar imaging — the network saw it
> within days through aggregated screening output, not
> in a quarterly retrospective.

**Results (heading: "The results"):**
> The network achieved consistent prior-auth screening
> across all 80+ clinics within the first phase of
> rollout, with significantly reduced training time
> for new coordinators and earlier visibility into
> payer-policy shifts.
> // TODO(verify): rollout phase timing and onboarding metric
>
> The central revenue-cycle team reports being able to
> identify and respond to payer-policy changes in days
> rather than quarters, and the system as a whole has
> seen measurable improvements in first-pass approval
> rates and turnaround time across high-volume codes.
> // TODO(verify): exact aggregate first-pass and turnaround metrics
>
> The change-management approach turned out to be simpler
> than the network feared. Because NoteDoctorAi sits
> ahead of the existing submission workflow rather than
> replacing it, coordinators kept their EHR, kept their
> payer portals, and added a single screening step to
> their day.

**metrics:**
  - { label: "Clinics covered", before: "—", after: "80+", note: "single workflow" }
    // TODO(verify): exact clinic count and rollout phase
  - { label: "New-coordinator ramp time", before: "Weeks", after: "Days" }
    // TODO(verify): specific onboarding-time figure
  - { label: "Time to detect payer-policy shifts", before: "Quarters", after: "Days" }
    // TODO(verify): time-to-detect metric
  - { label: "EHR replacement required", before: "—", after: "None" }

**quote (only with TODOs):**
  - text: "We didn't need to replace anything. We needed
    a single screening layer across 80 clinics, and that's
    exactly what NoteDoctorAi gave us."
    // TODO(verify): exact quote and approval to publish
  - author: "VP, Revenue Cycle"
    // TODO(verify): name and approval to attribute
  - role: "VP, Revenue Cycle"

---

### Reference fairness notes for comparison pages

**vs. Cohere Health — fairness note:**
> Cohere Health is one of the most well-funded companies in
> the prior-auth space and is purpose-built for the payer
> side of the workflow — health plans running utilization
> management at scale. If you're a national or regional
> health plan looking to modernize utilization review,
> integrate AI-driven medical-necessity decisioning into
> your auth platform, and you have the procurement budget
> and timeline of an enterprise health-plan deal, Cohere is
> a credible and capable option.
> // TODO(verify): Cohere Health public positioning, accessed [date]
>
> NoteDoctorAi is built for the other side of that
> conversation — the providers submitting the requests.
> If you're a practice or health system trying to improve
> the documentation that goes into a PA before it ever
> reaches a payer's review queue, the two products solve
> related problems but for different customers.

**vs. Anterior (formerly Co:Helm) — fairness note:**
> Anterior has built a strong technical foundation in
> AI-driven clinical-document review and serves customers
> across the prior-auth and utilization-management space.
> If your organization has heavy ML and engineering talent
> in-house, wants deep customization of the screening
> models and tight control over the integration surface,
> and is comfortable with a more bespoke implementation,
> Anterior is a credible option.
> // TODO(verify): Anterior public positioning, accessed [date]
>
> NoteDoctorAi is designed for practices that want to be
> running tomorrow with the screening their staff actually
> uses today — pasted notes, PDFs pulled from the EHR,
> light setup, transparent per-call pricing. That's a
> different product shape for a different buyer.

**vs. Availity AuthPal — fairness note:**
> Availity is the dominant healthcare clearinghouse in the
> US and AuthPal is its prior-auth product. If your
> practice or health system is already deeply standardized
> on Availity for eligibility, claims, and ERA, the
> integrated workflow inside one vendor may matter more
> than best-of-breed PA screening — fewer logins, fewer
> contracts, one support relationship.
> // TODO(verify): Availity AuthPal public positioning, accessed [date]
>
> NoteDoctorAi does one thing: pre-submission screening
> against payer criteria. We sit ahead of whatever
> submission path you already use — Availity, payer
> portals, clearinghouse — and tell you whether the
> documentation will hold up before you send it. If
> AuthPal is your submission tool today, NoteDoctorAi
> is the screening layer that runs before AuthPal.

---

Begin with Phase 1.
````

---

## How to use this file

1. Open this file in your editor for reference.
2. Copy the **prompt block** (everything between the three-backtick fences above the "Reference content" section) into Claude Code while in `/Users/williamramirez/repos/note-doctor-marketing`.
3. Note: the reference content is *inside* the prompt — Claude will see it. You don't need to paste it separately.
4. After Phase 1, review Claude's plan and approve.
5. Phase 2 will produce one PR with multiple commits.
6. After merge to `dev` and Cloudflare Pages deploys it, verify by visiting the new preview URL and walking the case studies, comparison pages, and ROI calculator.
7. Then merge `dev` → `main` to ship to production.
8. Re-run `/market audit https://NoteDoctorAi/` for the post-content score.

## TODO categories the prompt will leave behind

Track these four buckets — each is a different team's responsibility:

- **`TODO(verify):`** — Marketing/customer success. Confirm customer descriptors, exact metric values, quote attributions are approved by the customer.
- **`TODO(content):`** — Marketing. Drop in real founder bios, photos, team details on About page.
- **`TODO(legal):`** — Legal/compliance. Confirm SOC 2 status, HITRUST plans, data residency, current subprocessor list.
- **`TODO(integration):`** — Ops/engineering. Wire up `NEXT_PUBLIC_LEAD_ENDPOINT` for forms, set up Calendly/Cal.com URL for `/request-demo`, configure analytics beacon if used.

The PR should not merge to `main` until all four categories are resolved or knowingly accepted as risk.
