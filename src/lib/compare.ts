// TODO(seo-fix): replace placeholder copy with verified competitive positioning.
export type Comparison = {
  slug: string;
  competitor: string;
  title: string;
  description: string;
  bullets: string[];
};

export const comparisons: Comparison[] = [
  {
    slug: "vs-cohere",
    competitor: "Cohere Health",
    title: "NoteDoctor.AI vs Cohere Health",
    description:
      "How NoteDoctor.AI compares to Cohere Health for provider-side prior authorization screening.",
    bullets: [
      "Built for the clinical workflow, not the payer side.",
      "Flags denial risk before submission, not after.",
      "Pay-as-you-go pricing without enterprise lock-in.",
    ],
  },
  {
    slug: "vs-anterior",
    competitor: "Anterior",
    title: "NoteDoctor.AI vs Anterior",
    description:
      "How NoteDoctor.AI compares to Anterior for AI-driven prior authorization review.",
    bullets: [
      "Provider-first: drafts and screens against payer criteria.",
      "Transparent per-call pricing.",
      "HIPAA-compliant infrastructure with practice-grade onboarding.",
    ],
  },
  {
    slug: "vs-availity",
    competitor: "Availity",
    title: "NoteDoctor.AI vs Availity",
    description:
      "How NoteDoctor.AI compares to Availity for prior authorization workflows.",
    bullets: [
      "AI-driven medical necessity review, not just an EDI portal.",
      "Catches documentation gaps before they become denials.",
      "Modern interface, fast onboarding, no integration project required.",
    ],
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
