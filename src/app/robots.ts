import type { MetadataRoute } from "next";

// Required by `output: 'export'` so Next.js prerenders robots.txt at build time.
export const dynamic = "force-static";

const SITE_URL = "https://notedoctor.ai";

// Note: AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended,
// Applebot-Extended) are intentionally NOT disallowed. The previous production
// robots.txt blocked them, which opted us out of AI-search referrals.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/app/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
