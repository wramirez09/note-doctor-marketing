import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import HowItHelps from "@/components/home/HowItHelps";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";
import TrustStrip from "@/components/home/TrustStrip";
import { StructuredData } from "@/components/StructuredData";
import { faqJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "NoteDoctor.AI — AI-Powered Prior Authorization Screening" },
  description:
    "Cut prior-auth turnaround from days to minutes. NoteDoctor.AI flags denial risk before submission, built for medical practices. HIPAA-compliant.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "NoteDoctor.AI — AI-Powered Prior Authorization Screening",
    description:
      "Cut prior-auth turnaround from days to minutes. NoteDoctor.AI flags denial risk before submission, built for medical practices. HIPAA-compliant.",
  },
};

export default function HomePage() {
  return (
    <main className="relative z-10">
      <StructuredData data={faqJsonLd()} />
      <Hero />
      <Problem />
      <HowItHelps />
      <TrustStrip />
      <FAQ />
      <ContactCTA />
    </main>
  );
}
