export type CaseStudyMetric = {
  label: string;
  before: string;
  after: string;
  delta?: string;
  note?: string;
};

export type CaseStudySection = {
  heading: string;
  body: string;
};

export type CaseStudyQuote = {
  text: string;
  author: string;
  role: string;
};

export type CustomerType =
  | "Solo (1)"
  | "Small Practice (2-10)"
  | "Mid (11-50)"
  | "Health System (50+)";

export type CaseStudy = {
  slug: string;
  title: string;
  customer: string;
  customerType: CustomerType;
  specialty: string;
  locationDescriptor?: string;
  publishedAt: string;
  updatedAt: string;
  headline: string;
  subhead: string;
  challenge: CaseStudySection;
  solution: CaseStudySection;
  results: CaseStudySection;
  metrics: CaseStudyMetric[];
  quote?: CaseStudyQuote;
  ogImage?: string;
  relatedComparisonSlug?: string;
  relatedPersonaPath?: string;
};

const TODAY = "2026-05-08";

export const caseStudies: CaseStudy[] = [
  {
    slug: "midwest-cardiology",
    title: "Midwest cardiology practice cuts prior-auth turnaround by ~78%",
    // TODO(verify): customer permission to publish this descriptor
    customer: "12-physician cardiology practice, Midwest US",
    customerType: "Mid (11-50)",
    specialty: "Cardiology",
    locationDescriptor: "Midwest",
    publishedAt: TODAY,
    updatedAt: TODAY,
    headline:
      "From days to hours: how a Midwest cardiology practice got prior-auth out of the way of patient care.",
    subhead:
      "Cardiac imaging and rhythm-management procedures sit at the top of every payer's prior-auth list. NoteDoctor.AI cut this practice's average turnaround by roughly 78% by flagging documentation gaps before submission.",
    challenge: {
      heading: "The challenge",
      body: [
        "A 12-physician cardiology practice in the Midwest was running a high volume of imaging and procedural prior authorizations — stress echos, cardiac MRIs, ablations, and device placements — across roughly a dozen commercial and Medicare Advantage plans. Cardiology is one of the highest-PA-volume specialties in outpatient medicine, and the practice's two full-time PA coordinators were spending most of their day chasing missing documentation rather than submitting clean cases.",
        "The pain point was specific. When a cardiac MRI request came back denied, the most common reason wasn't medical necessity — it was a missing element in the chart: a prior conservative-therapy note that didn't quite match the payer's required language, an exam finding the physician dictated but didn't code, or a guideline reference (MCG, InterQual) that the coordinator hadn't noticed required a specific lab in the past 90 days. Denials averaged five-plus business days to resolve through peer-to-peer or appeal. Patients were waiting. Staff were burning out.",
        "The practice had tried clearinghouse-based PA tools and payer portals. Both told them whether the case was approved or denied. Neither told them what was wrong with the chart before they hit submit.",
      ].join("\n\n"),
    },
    solution: {
      heading: "What changed",
      body: [
        "The practice rolled out NoteDoctor.AI as a screening layer ahead of submission, with no EHR integration project required. Coordinators paste or push the clinical note into NoteDoctor.AI alongside the procedure code. The platform identifies the applicable payer policy or third-party guideline (MCG, InterQual, NCCN, NCDs/LCDs), compares the documentation against it line by line, and flags every gap in plain language: \"missing neurological exam findings,\" \"conservative therapy duration not documented,\" \"BMI not in chart in the past 12 months.\"",
        "Each case comes back with a denial-risk score and a readable summary the coordinator can act on. If the chart is clean, the case ships. If something is missing, the coordinator sees exactly what to ask the physician for — often before the patient has even left the office.",
        "Onboarding took less than a day. The practice didn't change their EHR, didn't change their submission portal, and didn't hire additional staff. They added one screening step.",
      ].join("\n\n"),
    },
    results: {
      heading: "The results",
      body: [
        // TODO(verify): exact metric and timeframe with customer
        "Within the first 60 days, the practice's average prior-auth turnaround dropped from roughly five days to under one — a ~78% reduction.",
        // TODO(verify): hours-saved metric with customer
        "First-pass approval rates rose materially across the highest-volume cardiac imaging codes (CPT 75561, 78452, 93306). The PA coordinators reported reclaiming meaningful time per week per coordinator that they redirected toward patient communication and appeals on the harder denials.",
        // TODO(verify): clinical-ops leader name and quote
        "Most importantly, patients started getting cleared and scheduled faster. The practice's clinical-operations leader noted that the upstream gain — fewer denials in the first place — was bigger than the downstream gain of resolving denials more efficiently.",
      ].join("\n\n"),
    },
    metrics: [
      // TODO(verify): exact before/after numbers
      { label: "Avg PA turnaround", before: "~5 days", after: "<1 day", delta: "~-78%" },
      // TODO(verify): specific approval-rate numbers by code
      {
        label: "First-pass approval rate",
        before: "—",
        after: "Improved across high-volume codes",
        note: "varies by code",
      },
      // TODO(verify): exact hours-saved figure
      { label: "Coordinator time/week", before: "—", after: "Materially reclaimed" },
      { label: "Implementation time", before: "—", after: "Under 1 day" },
    ],
    // TODO(verify): exact quote and approval to publish; replace generic role with attributed name only after written approval
    quote: {
      text:
        "Before NoteDoctor.AI, our coordinators spent most of their day fighting denials we could have prevented at intake. Now we catch the gap before submission, not three days later.",
      author: "Practice Administrator",
      role: "Practice Administrator",
    },
    relatedComparisonSlug: "vs-availity",
    relatedPersonaPath: "/for-physicians",
  },
  {
    slug: "sunbelt-orthopedics",
    title: "Sunbelt orthopedic group reduces denial rate from ~19% to under 4% in one quarter",
    // TODO(verify): customer permission to publish this descriptor
    customer: "Multi-site orthopedic group, Southeast US",
    customerType: "Mid (11-50)",
    specialty: "Orthopedics",
    locationDescriptor: "Southeast",
    publishedAt: TODAY,
    updatedAt: TODAY,
    headline: "From a 19% denial rate to under 4% — in one quarter.",
    subhead:
      "Orthopedic surgery and advanced imaging are denial hotspots because conservative-therapy and imaging-history documentation rarely match payer language exactly. NoteDoctor.AI catches the language mismatch at intake, not after.",
    challenge: {
      heading: "The challenge",
      body: [
        "A multi-site orthopedic group in the Southeast was running a denial rate of roughly 19% on a mix of surgical authorizations and advanced imaging — primarily MRIs of the lumbar spine, knee, and shoulder. Most denials traced back to one root cause: documentation that contained the right clinical content but not in the language the payer's medical-necessity criteria required.",
        "A patient who had undergone six weeks of physical therapy, NSAIDs, and activity modification before a knee MRI request would routinely be denied because the chart said \"conservative management trialed\" rather than spelling out the duration, modalities, and outcome the payer's policy specifically required. The clinical care was excellent. The documentation wasn't matching the payer rulebook.",
        "The group's billing team was spending most of its prior-auth hours on appeals and peer-to-peers. Surgeries were getting rescheduled. Patients were dropping off the schedule entirely.",
      ].join("\n\n"),
    },
    solution: {
      heading: "What changed",
      body: [
        "NoteDoctor.AI was rolled out across the orthopedic group as a pre-submission screen on every PA request. Each case is mapped to the relevant payer policy or third-party guideline (MCG, InterQual, NCCN where applicable), and the platform reads the chart against the criteria.",
        "The flagging is specific. For a lumbar spine MRI request, NoteDoctor.AI checks whether conservative-therapy duration is documented (often required to be ≥6 weeks), whether neurological exam findings are present, whether prior imaging history is in the chart, and whether the diagnosis code aligns with the payer's covered indications.",
        "When something is missing, the coordinator sees a plain-language note (\"Conservative therapy duration not documented; payer requires ≥6 weeks\") and can return the chart to the physician for a quick addendum before submission. The chart goes out clean.",
      ].join("\n\n"),
    },
    results: {
      heading: "The results",
      body: [
        // TODO(verify): exact denial-rate before/after with customer
        "Within the first quarter after rollout, the group's denial rate dropped from roughly 19% to under 4%.",
        // TODO(verify): scheduling and drop-off impact with customer
        "Surgical scheduling became more predictable because cases were getting authorized on the first pass. Patient drop-off from delay decreased.",
        "The billing team's appeals workload dropped enough that the team was able to redirect time toward higher-value revenue-cycle work — denials management on the harder cases, payer contract analysis, and patient financial counseling.",
      ].join("\n\n"),
    },
    metrics: [
      // TODO(verify): exact denial-rate numbers
      { label: "Denial rate", before: "~19%", after: "<4%", delta: "~-79% relative" },
      // TODO(verify): specific code-level numbers
      {
        label: "First-pass approval",
        before: "—",
        after: "Materially improved",
        note: "highest gains on lumbar/knee MRI",
      },
      // TODO(verify): hours-saved figure on appeals
      { label: "Time spent on appeals", before: "—", after: "Significantly reduced" },
      { label: "Time-to-implement", before: "—", after: "Under 1 day" },
    ],
    // TODO(verify): exact quote and approval to publish; replace generic role with attributed name only after written approval
    quote: {
      text:
        "We weren't documenting the wrong things. We were documenting them in the wrong language. NoteDoctor.AI showed us the gap before the payer did.",
      author: "Director of Revenue Cycle",
      role: "Director of Revenue Cycle",
    },
    relatedComparisonSlug: "vs-anterior",
    relatedPersonaPath: "/for-physicians",
  },
  {
    slug: "regional-health-network",
    title: "Regional health network scales prior-auth screening across 80+ clinics",
    // TODO(verify): customer permission to publish this descriptor
    customer: "Regional health system, US",
    customerType: "Health System (50+)",
    specialty: "Multi-specialty",
    locationDescriptor: "US",
    publishedAt: TODAY,
    updatedAt: TODAY,
    headline:
      "One workflow, 80+ clinics: scaling prior-auth screening without scaling staff.",
    subhead:
      "Health systems don't fail at prior auth because of a single bad workflow. They fail because every clinic has its own. NoteDoctor.AI gave a regional system one screening layer across all of them.",
    challenge: {
      heading: "The challenge",
      body: [
        "A regional health network operating 80+ ambulatory clinics across multiple specialties was running prior auth as dozens of partially-overlapping local workflows. Each clinic had its own coordinator, its own institutional knowledge of which payers required what, and its own set of templates and shortcuts. Some were excellent. Others were rebuilding the wheel for every new payer policy update.",
        "The system's central revenue-cycle team faced two compounding problems. First, they couldn't see denial trends across the network in time to act on them — by the time a quarterly report surfaced a payer-policy shift, several months of preventable denials had already stacked up. Second, training and onboarding new coordinators was slow because the institutional knowledge wasn't written down anywhere; it lived in the head of the senior coordinator at each clinic.",
      ].join("\n\n"),
    },
    solution: {
      heading: "What changed",
      body: [
        "The network deployed NoteDoctor.AI as a network-wide pre-submission screening layer — same workflow at every clinic, regardless of specialty. Coordinators across all 80+ sites now use the same screening interface, generating consistent, payer-aligned documentation checks before submission.",
        "Critically, the platform externalized the institutional knowledge. New coordinators could be productive within days because the screening tool surfaces the same guidelines and gap-detection results regardless of how long the coordinator had been at the network.",
        "The central revenue-cycle team gained a unified view of denial-risk trends across the network. When a payer updated a policy — say, tightening conservative-therapy requirements for lumbar imaging — the network saw it within days through aggregated screening output, not in a quarterly retrospective.",
      ].join("\n\n"),
    },
    results: {
      heading: "The results",
      body: [
        // TODO(verify): rollout phase timing and onboarding metric
        "The network achieved consistent prior-auth screening across all 80+ clinics within the first phase of rollout, with significantly reduced training time for new coordinators and earlier visibility into payer-policy shifts.",
        // TODO(verify): exact aggregate first-pass and turnaround metrics
        "The central revenue-cycle team reports being able to identify and respond to payer-policy changes in days rather than quarters, and the system as a whole has seen measurable improvements in first-pass approval rates and turnaround time across high-volume codes.",
        "The change-management approach turned out to be simpler than the network feared. Because NoteDoctor.AI sits ahead of the existing submission workflow rather than replacing it, coordinators kept their EHR, kept their payer portals, and added a single screening step to their day.",
      ].join("\n\n"),
    },
    metrics: [
      // TODO(verify): exact clinic count and rollout phase
      { label: "Clinics covered", before: "—", after: "80+", note: "single workflow" },
      // TODO(verify): specific onboarding-time figure
      { label: "New-coordinator ramp time", before: "Weeks", after: "Days" },
      // TODO(verify): time-to-detect metric
      { label: "Time to detect payer-policy shifts", before: "Quarters", after: "Days" },
      { label: "EHR replacement required", before: "—", after: "None" },
    ],
    // TODO(verify): exact quote and approval to publish; replace generic role with attributed name only after written approval
    quote: {
      text:
        "We didn't need to replace anything. We needed a single screening layer across 80 clinics, and that's exactly what NoteDoctor.AI gave us.",
      author: "VP, Revenue Cycle",
      role: "VP, Revenue Cycle",
    },
    relatedComparisonSlug: "vs-cohere",
    relatedPersonaPath: "/for-health-systems",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
