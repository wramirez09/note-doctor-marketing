'use client';

import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import { CTASection } from "@/components/CTASection";
import { Faq } from "@/components/Faq";

import Features from "@/components/Features";
import { Headline } from "@/components/Headline";
import { Feature } from "@/components/HowItWorksSection";

import { StructuredData } from "@/components/StructuredData";
import { Container, SimpleGrid } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { Metadata } from "next";

 const metadata: Metadata = {
  title:
    "AI Health Insights from Your Medical Records | NoteDoctor.ai",
  description:
    "Unlock science-backed health insights with NoteDoctor.ai. Upload your medical records, explore clinical trial data, and get personalized questions to discuss with your doctor. Not medical advice—just smarter health clarity.",
  openGraph: {
    type: "website",
    url: "https://notedoctor.ai/",
    title:
      "AI Health Insights from Your Medical Records | NoteDoctor.ai",
    description:
      "Unlock science-backed health insights with NoteDoctor.ai. Upload your medical records, explore clinical trial data, and get personalized questions to discuss with your doctor. Not medical advice—just smarter health clarity.",
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
      "NoteDoctorAI | Leading AI-Powered Healthcare Solutions for Enhanced Medical Coding Efficiency",
    description:
      "Discover NoteDoctorAI, the premier provider of AI-driven solutions for healthcare. Revolutionizing medical coding with advanced technology to improve accuracy, efficiency, and profitability for healthcare organizations worldwide.",
    images: ["https://notedoctor.ai/opengraph-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "homePage",
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

const mockdata = [
  {
    icon: IconInfoCircle,
    title: "Clarifying requirements upfront",
    description: "know exactly what documentation is needed.",
  },
  {
    icon: IconInfoCircle,
    title: "Confidence with transparency",
    description: "reduce time wasted on appeals.",
  },
  {
    icon: IconInfoCircle,
    title: "Protecting physicians",
    description: "cut burnout by minimizing administrative overhead.",
  },
];

export default function Home() {
  

  return (
    <main>
      <StructuredData data={structuredData} />
      <ScrollUp />

      <Headline
        headline="Cut the Red Tape. Deliver Care"
        subHeadline="Without Delays"
        desc="Prior authorization wastes valuable time, burdens physicians, and puts patients at risk. NoteDoctor.AI empowers providers with clarity, speed, and compliance — so you can focus on care, not paperwork."
      // hideBtn
      />
      <Features />
      {/* <About />
      <CallToAction /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <CTASection
        title={"Real-Time AI Support for Unmatched Coding Precision"}
        body={
          "Minimize errors with real-time AI assistance, providing accurate coding suggestions in seconds. Improve precision and efficiency with automated, intelligent support."
        }
      />
      <Faq />
      <Headline
        headline="How NoteDoctor.AI "
        subHeadline="Helps"
        desc="NoteDoctor.Ai simplifies prior authorization by:"
        hideBtn
      />
      <Container mt={30} mb={30} size="sm" >
        <SimpleGrid
          cols={{ base: 1, sm: 1 }}
          spacing={5}
          className="mb-10 mt-1 pb-3"
        >
          {items}
        </SimpleGrid>
      </Container>
      {/* <Team /> */}
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact showNewsLetterSignUp={false} />
      {/* <Clients /> */}
    </main>
  );
}
