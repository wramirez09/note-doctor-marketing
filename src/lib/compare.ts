// Comparison pages are positioned to make the NoteDoctorAI advantage clear.
// Each matrix row is written from the provider's point of view, and every
// page closes with a "Where NoteDoctorAI wins" section.

export type ComparisonWinner = "notedoctor" | "competitor" | "tie" | "depends";

export type ComparisonRow = {
  dimension: string;
  notedoctor: string;
  competitor: string;
  winner: ComparisonWinner;
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
  fairnessNote: string;
  summary: string;
  relatedCaseStudySlug?: string;
};

const TODAY = "2026-05-08";

export const comparisons: Comparison[] = [
  // ==========================================================================
  // SOURCE: Cohere Health public site, https://coherehealth.com — accessed 2026-05-08
  // Positioning, products, and customer focus drawn from the homepage.
  // Every competitor cell carries a TODO(verify) marker; competitor sites
  // change frequently and claims must be reverified before any campaign.
  // ==========================================================================
  {
    slug: "vs-cohere",
    competitor: "Cohere Health",
    competitorTagline:
      "Clinically trained AI for utilization management and payment integrity, primarily for health plans.",
    publishedAt: TODAY,
    updatedAt: TODAY,
    title: "NoteDoctorAI vs Cohere Health",
    description:
      "How NoteDoctorAI compares to Cohere Health for prior authorization. Provider-side pre-submission screening that stops denials at the source vs. payer-side utilization management.",
    sharedAudience:
      "Healthcare organizations that want to reduce friction, denials, and turnaround time on prior authorizations using AI.",
    bestFitFor: {
      notedoctor:
        "Practices, multi-site groups, and health systems that want to screen documentation against payer criteria before submission and stop denials at the source.",
      competitor:
        "Regional or national health plans modernizing utilization-management workflows on the payer side.",
    },
    matrix: [
      {
        dimension: "Primary customer",
        notedoctor: "Purpose-built for providers — practices, multi-site groups, and health systems.",
        // TODO(verify): "primarily health plans" claim from https://coherehealth.com 2026-05-08
        competitor: "Built primarily for health plans (payers); not designed around the submitter's workflow.",
        winner: "notedoctor",
        note: "If you're submitting prior auths, you want the tool built for your side of the conversation.",
      },
      {
        dimension: "Deployment model",
        notedoctor: "SaaS, web-based screening tool. No EHR integration project required — sign in and screen a real auth the same day.",
        // TODO(verify): "in-house, delegated, API-based" deployment models from https://coherehealth.com 2026-05-08
        competitor:
          "Enterprise SaaS with multiple deployment shapes (in-house, delegated, API-based) sized for health-plan procurement.",
        winner: "notedoctor",
      },
      {
        dimension: "Integrations",
        notedoctor:
          "Works alongside any EHR and any submission path — payer portals, clearinghouses, Availity. Paste or upload notes.",
        // TODO(verify): "CRD, DTR, PAS APIs included" claim from https://coherehealth.com 2026-05-08
        competitor:
          "FHIR-based payer interoperability APIs (CRD, DTR, PAS). EHR/clearinghouse partners not enumerated publicly for the provider side.",
        winner: "notedoctor",
      },
      {
        dimension: "HIPAA / SOC 2 / HITRUST",
        // TODO(legal): confirm SOC 2 Type II status before publishing
        notedoctor:
          "HIPAA-compliant. BAA available. SOC 2 controls aligned (Type II in progress). Stated publicly.",
        // TODO(verify): SOC 2 / HITRUST status from a Cohere trust page or BAA appendix; not stated on https://coherehealth.com homepage 2026-05-08
        competitor:
          "Compliance certifications not stated on the public homepage; verify in procurement.",
        winner: "notedoctor",
      },
      {
        dimension: "Pricing transparency",
        notedoctor:
          "Published: $25/mo base + $0.02 per AI screening call. No annual commitment.",
        // TODO(verify): no public pricing on https://coherehealth.com 2026-05-08; confirm via sales conversation
        competitor:
          "Enterprise pricing, not published. Typical of payer-side SaaS contracts.",
        winner: "notedoctor",
      },
      {
        dimension: "Time to first value",
        notedoctor:
          "Onboarding under one day. Screen a real prior auth in the first session.",
        // TODO(verify): typical implementation timeline for Cohere not stated publicly 2026-05-08
        competitor:
          "Enterprise rollout — typical health-plan platform implementations measured in months to quarters.",
        winner: "notedoctor",
      },
      {
        dimension: "Support and onboarding",
        notedoctor: "Self-serve sign-up plus practice-grade onboarding. Direct line to the team during rollout.",
        // TODO(verify): support model details from Cohere; not detailed publicly 2026-05-08
        competitor:
          "Enterprise support designed around health-plan procurement, not practice workflows.",
        winner: "notedoctor",
      },
      {
        dimension: "Prior-auth feature depth",
        notedoctor:
          "Pre-submission screening: identifies the applicable payer policy or third-party guideline (MCG, InterQual, NCDs/LCDs), reads the chart against it, flags gaps in plain language, and returns a denial-risk score before you submit.",
        // TODO(verify): "Cohere Unify gathers and deciphers patient clinical and claim data for automation" from https://coherehealth.com 2026-05-08
        competitor:
          "Payer-side utilization management — intake, decisioning, review assist, payment integrity, reconciliation. Not focused on improving the request before it's sent.",
        winner: "notedoctor",
        note: "We stop denials at the source. Payer-side tools only see the request after it arrives.",
      },
    ],
    fairnessNote: [
      "NoteDoctorAI is built for the side of the prior-auth workflow that actually controls the outcome — the provider preparing the request. Cohere Health is a payer-side platform; by the time a request reaches their review queue, the documentation is already locked. We catch the gaps before submission, while there's still time to fix them.",
      // TODO(verify): Cohere Health public positioning, accessed https://coherehealth.com 2026-05-08
      "If you're a practice or health system, the question isn't \"which AI does the payer use to review my request?\" — it's \"what AI did I use to prepare the request before sending it?\" That's where NoteDoctorAI wins: transparent pricing, same-day onboarding, no enterprise procurement cycle, and a screening engine purpose-built for providers.",
    ].join("\n\n"),
    summary:
      "Cohere is a payer-side platform. NoteDoctorAI is the provider-side screening layer that gets your documentation right before it ever reaches a payer's review queue. For practices and health systems, NoteDoctorAI is the better fit — faster to deploy, transparently priced, and aimed at the part of the workflow you actually control.",
    relatedCaseStudySlug: "regional-health-network",
  },

  // ==========================================================================
  // SOURCE: Anterior public site, https://anterior.com — accessed 2026-05-08
  // Anterior positions itself as a payer-focused clinical AI platform.
  // ==========================================================================
  {
    slug: "vs-anterior",
    competitor: "Anterior",
    competitorTagline:
      "Clinical AI for health-plan workflows, including prior authorization — modular, deploy-ready actions and configured solutions.",
    publishedAt: TODAY,
    updatedAt: TODAY,
    title: "NoteDoctorAI vs Anterior",
    description:
      "How NoteDoctorAI compares to Anterior for AI-driven prior authorization. Provider-first pre-submission screening that ships today vs. payer-focused clinical AI platform.",
    sharedAudience:
      "Healthcare organizations using AI to read clinical documentation against medical-necessity criteria.",
    bestFitFor: {
      notedoctor:
        "Practices that want a working screening tool today, with transparent per-call pricing and minimal setup.",
      competitor:
        "Health plans deploying configurable clinical-AI actions across utilization-management workflows.",
    },
    matrix: [
      {
        dimension: "Primary customer",
        notedoctor: "Purpose-built for providers — practices, multi-site groups, and health systems.",
        // TODO(verify): "AI transformation… for health plans" positioning from https://anterior.com 2026-05-08
        competitor: "Built for health plans (payers).",
        winner: "notedoctor",
      },
      {
        dimension: "Deployment model",
        notedoctor: "SaaS, web-based screening tool, no integration project required.",
        // TODO(verify): "Enterprise SaaS, modular Actions and Solutions" positioning from https://anterior.com 2026-05-08
        competitor:
          "Enterprise SaaS — modular AI Actions configured into Solutions over a deployment cycle.",
        winner: "notedoctor",
      },
      {
        dimension: "Integrations",
        notedoctor:
          "Works alongside any EHR and any submission path. Paste, upload, or push notes.",
        // TODO(verify): no EHR/clearinghouse integrations enumerated on https://anterior.com 2026-05-08
        competitor:
          "Integration surface tailored per health-plan engagement; not enumerated publicly for providers.",
        winner: "notedoctor",
      },
      {
        dimension: "HIPAA / SOC 2 / HITRUST",
        // TODO(legal): confirm SOC 2 Type II status before publishing
        notedoctor:
          "HIPAA-compliant. BAA available. SOC 2 controls aligned (Type II in progress). Stated publicly.",
        // TODO(verify): compliance certifications not stated on https://anterior.com homepage 2026-05-08
        competitor:
          "Compliance certifications not stated on the public homepage; verify in procurement.",
        winner: "notedoctor",
      },
      {
        dimension: "Pricing transparency",
        notedoctor: "$25/mo base + $0.02 per AI screening call. Published.",
        // TODO(verify): no public pricing on https://anterior.com 2026-05-08
        competitor: "Enterprise pricing, not published.",
        winner: "notedoctor",
      },
      {
        dimension: "Time to first value",
        notedoctor: "Onboarding under one day. Screen real prior auths immediately.",
        // TODO(verify): "moving health plans past proof of concept, into proof of result" implies a structured POC-to-deploy cycle
        competitor:
          "Bespoke deployment per engagement; positioned around moving past proof-of-concept.",
        winner: "notedoctor",
      },
      {
        dimension: "Support and onboarding",
        notedoctor: "Self-serve sign-up plus direct, practice-grade onboarding.",
        // TODO(verify): support model not detailed publicly 2026-05-08
        competitor:
          "Enterprise account-team support oriented around health-plan deployments.",
        winner: "notedoctor",
      },
      {
        dimension: "Prior-auth feature depth",
        notedoctor:
          "Pre-submission screening of clinical notes against payer criteria; gap detection and denial-risk scoring on every case — before you submit.",
        // TODO(verify): "modular AI tasks that apply to any health plan workflow" claim from https://anterior.com 2026-05-08
        competitor:
          "Modular clinical-AI \"Actions\" composed into payer-side utilization-management workflows.",
        winner: "notedoctor",
      },
    ],
    fairnessNote: [
      "NoteDoctorAI is designed for the practice that wants to be running tomorrow with screening their staff actually uses today — pasted notes, PDFs pulled from the EHR, light setup, transparent per-call pricing. That's a product shape Anterior's enterprise-deployment model doesn't compete with on the provider side.",
      // TODO(verify): Anterior public positioning, accessed https://anterior.com 2026-05-08
      "Anterior is a strong technical platform — for payers. If you're a provider, you don't want a bespoke build cycle and a procurement deck. You want a working tool, a published price, and a screening pass on the auth sitting in front of you right now. That's what NoteDoctorAI ships.",
    ].join("\n\n"),
    summary:
      "Anterior is built for health plans. NoteDoctorAI is built for the providers submitting requests — same-day onboarding, published pricing, and a screening pass on real prior auths in the first session. For practices and health systems, NoteDoctorAI is the clear pick.",
    relatedCaseStudySlug: "sunbelt-orthopedics",
  },

  // ==========================================================================
  // SOURCE: Availity public site, https://www.availity.com — accessed 2026-05-08
  // Availity is the dominant US healthcare clearinghouse. AuthPal is the
  // prior-authorization submission product within Intelligent UM.
  // ==========================================================================
  {
    slug: "vs-availity",
    competitor: "Availity AuthPal",
    competitorTagline:
      "Prior-auth submission inside the largest US healthcare clearinghouse network — dual-sided payer/provider connectivity.",
    publishedAt: TODAY,
    updatedAt: TODAY,
    title: "NoteDoctorAI vs Availity AuthPal",
    description:
      "How NoteDoctorAI compares to Availity AuthPal for prior authorizations. Pre-submission screening that catches denials before they happen vs. clearinghouse-native submission.",
    sharedAudience:
      "Practices and health systems submitting prior authorizations through clearinghouses or payer portals.",
    bestFitFor: {
      notedoctor:
        "Practices that want to know whether documentation will hold up before they submit — and stop denials at the source, regardless of submission tool.",
      competitor:
        "Practices and health systems already deeply standardized on Availity for eligibility, claims, ERA, and submission.",
    },
    matrix: [
      {
        dimension: "Primary customer",
        notedoctor: "Built for providers, full stop. The workflow assumes you're the one preparing the request.",
        // TODO(verify): "dual-sided" provider/payer positioning from https://www.availity.com 2026-05-08
        competitor:
          "Dual-sided network serving both providers and payers — provider workflow is one of several priorities.",
        winner: "notedoctor",
      },
      {
        dimension: "Deployment model",
        notedoctor: "Standalone SaaS screening; sits ahead of any submission path. No network onboarding required.",
        // TODO(verify): "nation's largest dual-sided, real-time healthcare network" positioning from https://www.availity.com 2026-05-08
        competitor:
          "Network/clearinghouse-native; requires being onboarded into Availity's broader connectivity.",
        winner: "notedoctor",
      },
      {
        dimension: "Integrations",
        notedoctor:
          "Submission-path-agnostic by design. Works alongside Availity, payer portals, or any clearinghouse — you don't have to switch vendors to use us.",
        // TODO(verify): "95+ direct payer connections, 3M+ connected providers" from https://www.availity.com 2026-05-08
        competitor:
          "Largest US clearinghouse footprint (95+ direct payer connections claimed) — but that breadth doesn't change whether a given request will be denied.",
        winner: "notedoctor",
        note: "Submission breadth matters at submission. NoteDoctorAI matters before submission.",
      },
      {
        dimension: "HIPAA / SOC 2 / HITRUST",
        // TODO(legal): confirm SOC 2 Type II status before publishing
        notedoctor:
          "HIPAA-compliant. BAA available. SOC 2 controls aligned (Type II in progress). Stated publicly.",
        // TODO(verify): specific certifications not detailed on the homepage 2026-05-08
        competitor:
          "Industry-leading cybersecurity claimed; specific certifications not detailed on the public homepage.",
        winner: "notedoctor",
      },
      {
        dimension: "Pricing transparency",
        notedoctor: "$25/mo base + $0.02 per AI screening call. Published.",
        // TODO(verify): no public pricing on https://www.availity.com 2026-05-08
        competitor:
          "Pricing not published; clearinghouse contracts are negotiated per organization.",
        winner: "notedoctor",
      },
      {
        dimension: "Time to first value",
        notedoctor: "Under one day. Screen real prior auths immediately.",
        // TODO(verify): typical onboarding for AuthPal not published 2026-05-08
        competitor:
          "Depends on Availity onboarding state. Faster if already connected; otherwise a network-onboarding project.",
        winner: "notedoctor",
      },
      {
        dimension: "Support and onboarding",
        notedoctor: "Self-serve plus direct onboarding from the NoteDoctorAI team — practice-sized, not network-sized.",
        // TODO(verify): support model not detailed publicly 2026-05-08
        competitor:
          "Enterprise/network support model. Designed for the contract relationship, not the individual practice rolling out a new screening step.",
        winner: "notedoctor",
      },
      {
        dimension: "Prior-auth feature depth",
        notedoctor:
          "Pre-submission screening: payer policy / guideline matching, gap detection, denial-risk scoring. We catch the denial before it happens.",
        // TODO(verify): "transform the prior authorization process" claim from https://www.availity.com/intelligentum/ 2026-05-08
        competitor:
          "Submission and end-to-end PA workflow inside the clearinghouse — Intelligent UM, AuthPal, FHIR PA flows. Helpful at sending, not at preventing denials.",
        winner: "notedoctor",
        note: "AuthPal sends the request. NoteDoctorAI makes sure the request is worth sending.",
      },
    ],
    fairnessNote: [
      "Submitting faster doesn't help if the submission is going to be denied. Availity AuthPal is excellent at moving requests through the clearinghouse — but it doesn't tell you whether the documentation will hold up against the payer's criteria. NoteDoctorAI does, before AuthPal ever sends it.",
      // TODO(verify): Availity AuthPal public positioning, accessed https://www.availity.com 2026-05-08
      "For practices submitting prior auths, the highest-leverage moment is the few minutes before the request leaves your office. That's where NoteDoctorAI wins: pre-submission screening against payer policy, gap detection, and denial-risk scoring — independent of whichever submission path you use. You don't have to replace AuthPal to use us. You just stop denying yourself the screening step.",
    ].join("\n\n"),
    summary:
      "AuthPal sends requests. NoteDoctorAI prevents denials. For practices and health systems that care about the denial rate — not just the submission rate — NoteDoctorAI is the layer that pays for itself in avoided rework.",
    relatedCaseStudySlug: "midwest-cardiology",
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
