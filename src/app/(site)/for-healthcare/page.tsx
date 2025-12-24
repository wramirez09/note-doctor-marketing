import Breadcrumb from "@/components/Common/Breadcrumb";
import HowItWorksSection from "@/components/HowItWorksSection";
import { StructuredData } from "@/components/StructuredData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AI Clinical Insights for Physicians | NoteDoctor.ai for Physicians",
  description:
    "Empower your practice with NoteDoctor.ai: analyze patient records, discover relevant clinical trials, streamline diagnosis support, and enhance evidence-based care. Trusted, secure, practitioner-focused.",
  openGraph: {
    type: "website",
    url: "https://notedoctor.ai/for-healthcare",
    title:
      "AI Clinical Insights for Physicians | NoteDoctor.ai for Physicians",
    description:
      "Empower your practice with NoteDoctor.ai: analyze patient records, discover relevant clinical trials, streamline diagnosis support, and enhance evidence-based care. Trusted, secure, practitioner-focused.",
    images: [
      {
        url: "https://notedoctor.ai/opengraph-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How NoteDoctorAI Works | AI-Driven Medical Coding for Healthcare Efficiency",
    description:
      "Discover how NoteDoctorAI's advanced AI technology revolutionizes medical coding. Learn how our solutions drive efficiency, accuracy, and profitability for healthcare organizations globally.",
    images: ["https://notedoctor.ai/opengraph-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "how it works page",
  headline: metadata.title,
  description: metadata.description,
  author: [
    {
      "@type": "Person",
      name: "Mitesh Patel",
    },
  ],
  datePublished: "2022-09-14T09:00:00.000Z",
};
export const runtime = "edge";
export const dynamic = "force-dynamic";
const HowItWorks = () => {
  return (
    <>
      <StructuredData data={structuredData} />

      <Breadcrumb pageName="For Healthcare" />
      <HowItWorksSection
        headline="The Bigger Picture: "
        subHeadline="Why This Matters"
        desc=" Insurers claim success by cutting costs, but often at the expense of care. A 2023 investigation revealed AI-driven instant claim rejections — more than 300,000 denials in two months — without patient files ever being reviewed.This isn’t efficiency. This is harm disguised as savings."

      />

    </>
  );
};

export default HowItWorks;
