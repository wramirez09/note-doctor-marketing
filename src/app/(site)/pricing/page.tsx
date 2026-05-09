import type { Metadata } from "next";
import PricingClient from "./PricingClient";
import { StructuredData } from "@/components/StructuredData";

const SITE_URL = "https://notedoctor.ai";

const TITLE = "Pricing";
const DESCRIPTION =
  "Simple pricing for AI-powered prior authorization screening. $25 per month plus $0.02 per AI call. HIPAA-compliant. Cancel anytime.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    url: "/pricing",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI-powered prior authorization screening",
  serviceType: "Prior authorization screening",
  provider: { "@type": "Organization", name: "NoteDoctor.AI", url: SITE_URL },
  description: DESCRIPTION,
  areaServed: "United States",
  audience: {
    "@type": "Audience",
    audienceType: "Healthcare providers, medical practices, and health systems",
  },
  offers: [
    {
      "@type": "Offer",
      name: "NoteDoctor Pro",
      url: `${SITE_URL}/pricing/`,
      priceCurrency: "USD",
      price: "25",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "25",
        priceCurrency: "USD",
        unitText: "month",
      },
      description: "$25 per month base plus $0.02 per AI screening call. No annual commitment.",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      url: `${SITE_URL}/contact/`,
      priceCurrency: "USD",
      description: "Volume pricing on AI calls available. Contact sales.",
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <PricingClient />
    </>
  );
}
