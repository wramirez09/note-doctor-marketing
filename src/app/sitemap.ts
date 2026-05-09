import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { comparisons } from "@/lib/compare";

// Required by `output: 'export'` so Next.js prerenders sitemap.xml at build time.
export const dynamic = "force-static";

const SITE_URL = "https://notedoctor.ai";

// next.config.js has `trailingSlash: true`, so canonical URLs all end in /.
// Sitemap <loc> entries must match the canonical exactly or crawlers waste
// budget following 301s.
const STATIC_PATHS = [
  "/",
  "/about/",
  "/case-studies/",
  "/compare/",
  "/contact/",
  "/for-health-systems/",
  "/for-healthcare/",
  "/for-physicians/",
  "/for-you/",
  "/how-it-works/",
  "/pricing/",
  "/request-demo/",
  "/security/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));

  const caseStudyEntries = caseStudies.map((c) => ({
    url: `${SITE_URL}/case-studies/${c.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const compareEntries = comparisons.map((c) => ({
    url: `${SITE_URL}/compare/${c.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...caseStudyEntries, ...compareEntries];
}
