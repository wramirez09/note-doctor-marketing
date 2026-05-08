import type { Metadata } from "next";
import PricingClient from "./PricingClient";

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

export default function PricingPage() {
  return <PricingClient />;
}
