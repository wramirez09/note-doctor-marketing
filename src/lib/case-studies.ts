// TODO(seo-fix): replace placeholder copy with real customer case studies.
export type CaseStudy = {
  slug: string;
  title: string;
  customer: string;
  summary: string;
  body: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "midwest-cardiology",
    title: "Midwest Cardiology cuts prior-auth turnaround by 78%",
    customer: "Midwest Cardiology Associates",
    summary:
      "How a 12-physician cardiology practice used NoteDoctor.AI to flag denial risk before submission and reclaim staff hours.",
    body: "Placeholder body.",
  },
  {
    slug: "sunbelt-orthopedics",
    title: "Sunbelt Orthopedics drops denial rate to under 4%",
    customer: "Sunbelt Orthopedic Group",
    summary:
      "An orthopedic group's path from a 19% denial rate to under 4% in the first quarter after rollout.",
    body: "Placeholder body.",
  },
  {
    slug: "regional-health-network",
    title: "Regional Health Network scales prior-auth across 80+ clinics",
    customer: "Regional Health Network",
    summary:
      "Enterprise rollout playbook: integration, change management, and the financial impact in year one.",
    body: "Placeholder body.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
