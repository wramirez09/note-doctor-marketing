// Comparison pages are credibility-defining. Never disparage competitors,
// never invent feature gaps, always include a "where they win" section.
// Buyers read these to evaluate honesty as much as features.

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
    title: "NoteDoctor.AI vs Cohere Health",
    description:
      "How NoteDoctor.AI compares to Cohere Health for prior authorization. Provider-side pre-submission screening vs. payer-side utilization management and decisioning.",
    sharedAudience:
      "Healthcare organizations that want to reduce friction, denials, and turnaround time on prior authorizations using AI.",
    bestFitFor: {
      notedoctor:
        "Practices and provider groups that want to screen documentation against payer criteria before submission and reduce denials at the source.",
      competitor:
        "Regional or national health plans modernizing utilization-management workflows on the payer side.",
    },
    matrix: [
      {
        dimension: "Primary customer",
        notedoctor: "Providers — practices, multi-site groups, and health systems.",
        // TODO(verify): "primarily health plans" claim from https://coherehealth.com 2026-05-08
        competitor: "Primarily health plans (payers); platform also serves provider workflows.",
        winner: "depends",
        note: "Different sides of the same prior-auth conversation.",
      },
      {
        dimension: "Deployment model",
        notedoctor: "SaaS, web-based screening tool. No EHR integration project required.",
        // TODO(verify): "in-house, delegated, API-based" deployment models from https://coherehealth.com 2026-05-08
        competitor:
          "Enterprise SaaS with three deployment shapes: in-house platform, delegated (platform + services), and API-based.",
        winner: "depends",
      },
      {
        dimension: "Integrations",
        notedoctor:
          "Works alongside any EHR and any submission path (payer portals, clearinghouses, Availity). Paste/upload notes.",
        // TODO(verify): "CRD, DTR, PAS APIs included" claim from https://coherehealth.com 2026-05-08
        competitor:
          "FHIR-based payer interoperability APIs (CRD, DTR, PAS). EHR/clearinghouse partners not enumerated publicly.",
        winner: "depends",
      },
      {
        dimension: "HIPAA / SOC 2 / HITRUST",
        // TODO(legal): confirm SOC 2 Type II status before publishing
        notedoctor:
          "HIPAA-compliant. BAA available. SOC 2 controls aligned (Type II in progress).",
        // TODO(verify): SOC 2 / HITRUST status from a Cohere trust page or BAA appendix; not stated on https://coherehealth.com homepage 2026-05-08
        competitor:
          "Compliance certifications not stated on the public homepage; assume enterprise-grade given health-plan customer base, verify in procurement.",
        winner: "tie",
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
        notedoctor:
          "Self-serve sign-up plus practice-grade onboarding. Direct line to the team during rollout.",
        // TODO(verify): support model details from Cohere; not detailed publicly 2026-05-08
        competitor:
          "Enterprise support with dedicated account teams and services. Designed around health-plan procurement.",
        winner: "depends",
      },
      {
        dimension: "Prior-auth feature depth",
        notedoctor:
          "Pre-submission screening: identifies the applicable payer policy or third-party guideline (MCG, InterQual, NCDs/LCDs), reads the chart against it, flags gaps in plain language, returns a denial-risk score.",
        // TODO(verify): "Cohere Unify gathers and deciphers patient clinical and claim data for automation" from https://coherehealth.com 2026-05-08
        competitor:
          "Payer-side utilization management — intake, decisioning, review assist, payment integrity, reconciliation. Cohere Unify is the core platform.",
        winner: "depends",
        note: "Different feature surface for different sides of the workflow.",
      },
    ],
    fairnessNote: [
      "Cohere Health is one of the most well-funded companies in the prior-auth space and is purpose-built for the payer side of the workflow — health plans running utilization management at scale. If you're a national or regional health plan looking to modernize utilization review, integrate AI-driven medical-necessity decisioning into your auth platform, and you have the procurement budget and timeline of an enterprise health-plan deal, Cohere is a credible and capable option.",
      // TODO(verify): Cohere Health public positioning, accessed https://coherehealth.com 2026-05-08
      "NoteDoctor.AI is built for the other side of that conversation — the providers submitting the requests. If you're a practice or health system trying to improve the documentation that goes into a PA before it ever reaches a payer's review queue, the two products solve related problems but for different customers.",
    ].join("\n\n"),
    summary:
      "Pick Cohere if you're a health plan modernizing utilization management. Pick NoteDoctor.AI if you're a provider trying to reduce denials and turnaround on the requests you're submitting. The two often coexist on opposite sides of the same workflow.",
    relatedCaseStudySlug: "regional-health-network",
  },

  // ==========================================================================
  // SOURCE: Anterior public site, https://anterior.com — accessed 2026-05-08
  // Anterior positions itself as a payer-focused clinical AI platform.
  // Public claim about former "Co:Helm" identity could not be verified from
  // the homepage on the date accessed; flagged TODO(verify).
  // ==========================================================================
  {
    slug: "vs-anterior",
    competitor: "Anterior",
    competitorTagline:
      "Clinical AI for health-plan workflows, including prior authorization — modular, deploy-ready actions and configured solutions.",
    publishedAt: TODAY,
    updatedAt: TODAY,
    title: "NoteDoctor.AI vs Anterior",
    description:
      "How NoteDoctor.AI compares to Anterior for AI-driven prior authorization. Provider-first pre-submission screening vs. payer-focused clinical AI platform.",
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
        notedoctor: "Providers — practices, multi-site groups, and health systems.",
        // TODO(verify): "AI transformation… for health plans" positioning from https://anterior.com 2026-05-08
        competitor: "Health plans (payers).",
        winner: "depends",
      },
      {
        dimension: "Deployment model",
        notedoctor: "SaaS, web-based screening tool, no integration project required.",
        // TODO(verify): "Enterprise SaaS, modular Actions and Solutions" positioning from https://anterior.com 2026-05-08
        competitor:
          "Enterprise SaaS — modular AI Actions configured into Solutions for health-plan workflows.",
        winner: "depends",
      },
      {
        dimension: "Integrations",
        notedoctor:
          "Works alongside any EHR and any submission path. Paste, upload, or push notes.",
        // TODO(verify): no EHR/clearinghouse integrations enumerated on https://anterior.com 2026-05-08
        competitor:
          "Integration surface tailored per health-plan engagement; not enumerated publicly.",
        winner: "depends",
      },
      {
        dimension: "HIPAA / SOC 2 / HITRUST",
        // TODO(legal): confirm SOC 2 Type II status before publishing
        notedoctor:
          "HIPAA-compliant. BAA available. SOC 2 controls aligned (Type II in progress).",
        // TODO(verify): compliance certifications not stated on https://anterior.com homepage 2026-05-08
        competitor:
          "Compliance certifications not stated on the public homepage; assume enterprise-grade given health-plan customer base, verify in procurement.",
        winner: "tie",
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
        notedoctor: "Onboarding under one day.",
        // TODO(verify): "moving health plans past proof of concept, into proof of result" implies a structured POC-to-deploy cycle; specific timing not published
        competitor:
          "Bespoke deployment per health-plan engagement; positioned around moving past proof-of-concept.",
        winner: "notedoctor",
      },
      {
        dimension: "Support and onboarding",
        notedoctor: "Self-serve sign-up plus direct, practice-grade onboarding.",
        // TODO(verify): support model not detailed publicly 2026-05-08
        competitor:
          "Enterprise account-team support oriented around health-plan deployments.",
        winner: "depends",
      },
      {
        dimension: "Prior-auth feature depth",
        notedoctor:
          "Pre-submission screening of clinical notes against payer criteria; gap detection and denial-risk scoring on each case.",
        // TODO(verify): "modular AI tasks that apply to any health plan workflow" claim from https://anterior.com 2026-05-08
        competitor:
          "Modular clinical-AI \"Actions\" composed into prior-auth and broader utilization-management workflows on the payer side.",
        winner: "depends",
      },
    ],
    fairnessNote: [
      "Anterior has built a strong technical foundation in AI-driven clinical-document review and serves customers across the prior-auth and utilization-management space. If your organization has heavy ML and engineering talent in-house, wants deep customization of the screening models and tight control over the integration surface, and is comfortable with a more bespoke implementation, Anterior is a credible option.",
      // TODO(verify): Anterior public positioning, accessed https://anterior.com 2026-05-08
      "NoteDoctor.AI is designed for practices that want to be running tomorrow with the screening their staff actually uses today — pasted notes, PDFs pulled from the EHR, light setup, transparent per-call pricing. That's a different product shape for a different buyer.",
    ].join("\n\n"),
    summary:
      "Pick Anterior if you're a health plan looking for configurable clinical-AI actions across utilization management. Pick NoteDoctor.AI if you're a provider who wants a screening layer working tomorrow on real prior auths, without a custom-build cycle.",
    relatedCaseStudySlug: "midwest-cardiology",
  },

  // ==========================================================================
  // SOURCE: Availity public site, https://www.availity.com — accessed 2026-05-08
  // Availity is the dominant US healthcare clearinghouse and operates a
  // dual-sided network. AuthPal is referenced as the prior-authorization
  // submission product within the Intelligent Utilization Management suite.
  // ==========================================================================
  {
    slug: "vs-availity",
    competitor: "Availity AuthPal",
    competitorTagline:
      "Prior-auth submission inside the largest US healthcare clearinghouse network — dual-sided payer/provider connectivity.",
    publishedAt: TODAY,
    updatedAt: TODAY,
    title: "NoteDoctor.AI vs Availity AuthPal",
    description:
      "How NoteDoctor.AI compares to Availity AuthPal for prior authorizations. Pre-submission screening that runs ahead of any submission tool vs. clearinghouse-native submission and intelligent UM.",
    sharedAudience:
      "Practices and health systems submitting prior authorizations through clearinghouses or payer portals.",
    bestFitFor: {
      notedoctor:
        "Practices that want to know whether documentation will hold up before they submit, regardless of submission tool.",
      competitor:
        "Practices and health systems already deeply standardized on Availity for eligibility, claims, ERA, and submission — wanting an integrated single-vendor workflow.",
    },
    matrix: [
      {
        dimension: "Primary customer",
        notedoctor: "Providers.",
        // TODO(verify): "dual-sided" provider/payer positioning from https://www.availity.com 2026-05-08
        competitor:
          "Both providers and payers — Availity operates a dual-sided network.",
        winner: "depends",
      },
      {
        dimension: "Deployment model",
        notedoctor: "Standalone SaaS screening; sits ahead of any submission path.",
        // TODO(verify): "nation's largest dual-sided, real-time healthcare network" positioning from https://www.availity.com 2026-05-08
        competitor:
          "Network/clearinghouse-native; deployed as part of Availity's broader provider/payer connectivity.",
        winner: "depends",
      },
      {
        dimension: "Integrations",
        notedoctor:
          "Submission-path-agnostic. Works alongside Availity, payer portals, or any clearinghouse.",
        // TODO(verify): "95+ direct payer connections, 3M+ connected providers" from https://www.availity.com 2026-05-08
        competitor:
          "Largest US clearinghouse footprint — 95+ direct payer connections claimed; references Epic among case-study integrations.",
        winner: "competitor",
      },
      {
        dimension: "HIPAA / SOC 2 / HITRUST",
        // TODO(legal): confirm SOC 2 Type II status before publishing
        notedoctor:
          "HIPAA-compliant. BAA available. SOC 2 controls aligned (Type II in progress).",
        // TODO(verify): specific certifications not detailed on the homepage 2026-05-08; Availity links to a Regulatory Compliance page (https://www.availity.com/regulatory-compliance/)
        competitor:
          "Industry-leading cybersecurity claimed; specific certifications not detailed on the public homepage.",
        winner: "tie",
      },
      {
        dimension: "Pricing transparency",
        notedoctor: "$25/mo base + $0.02 per AI screening call. Published.",
        // TODO(verify): no public pricing on https://www.availity.com 2026-05-08; clearinghouse pricing typically negotiated per-customer
        competitor:
          "Pricing not published publicly; clearinghouse contracts are negotiated per organization.",
        winner: "notedoctor",
      },
      {
        dimension: "Time to first value",
        notedoctor: "Under one day. Screen real prior auths immediately.",
        // TODO(verify): typical onboarding for AuthPal not published 2026-05-08
        competitor:
          "Depends on existing Availity footprint. Faster if already connected; longer if new.",
        winner: "depends",
      },
      {
        dimension: "Support and onboarding",
        notedoctor: "Self-serve plus direct onboarding from the NoteDoctor.AI team.",
        // TODO(verify): support model not detailed publicly 2026-05-08
        competitor:
          "Enterprise/network support model. Single relationship across eligibility, claims, ERA, and PA.",
        winner: "depends",
      },
      {
        dimension: "Prior-auth feature depth",
        notedoctor:
          "Pre-submission screening: payer policy / guideline matching, gap detection, denial-risk scoring. Does not handle submission itself.",
        // TODO(verify): "transform the prior authorization process" claim from https://www.availity.com/intelligentum/ 2026-05-08
        competitor:
          "Submission and end-to-end PA workflow inside the clearinghouse — Intelligent Utilization Management, AuthPal, FHIR-API-based PA flows.",
        winner: "depends",
        note: "Complementary: NoteDoctor.AI screens before AuthPal submits.",
      },
    ],
    fairnessNote: [
      "Availity is the dominant healthcare clearinghouse in the US and AuthPal is its prior-auth product. If your practice or health system is already deeply standardized on Availity for eligibility, claims, and ERA, the integrated workflow inside one vendor may matter more than best-of-breed PA screening — fewer logins, fewer contracts, one support relationship.",
      // TODO(verify): Availity AuthPal public positioning, accessed https://www.availity.com 2026-05-08
      "NoteDoctor.AI does one thing: pre-submission screening against payer criteria. We sit ahead of whatever submission path you already use — Availity, payer portals, clearinghouse — and tell you whether the documentation will hold up before you send it. If AuthPal is your submission tool today, NoteDoctor.AI is the screening layer that runs before AuthPal.",
    ].join("\n\n"),
    summary:
      "Pick Availity AuthPal if you want one integrated network for eligibility, claims, ERA, and PA submission. Pick NoteDoctor.AI as the screening layer that runs before submission, regardless of which tool you submit through. The two are complementary — many practices will end up using both.",
    relatedCaseStudySlug: "sunbelt-orthopedics",
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
