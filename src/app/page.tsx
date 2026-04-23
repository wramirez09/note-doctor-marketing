import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import { CTASection } from "@/components/CTASection";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import { Headline } from "@/components/Headline";
import { Feature } from "@/components/HowItWorksSection";

import { StructuredData } from "@/components/StructuredData";
import { Container, SimpleGrid } from "@mantine/core";

import { IconInfoCircle } from "@tabler/icons-react";
import { Metadata } from "next";

const title = "NoteDoctor.AI | Prior authorization screening with AI-driven solutions";
const description = "NoteDoctor.AI streamlines prior authorization screening with AI-driven solutions, helping healthcare providers cut red tape, reduce physician burnout, and deliver patient care without delays.";
const image = "https://notedoctor.ai/images/logo/nd_logo.svg";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://notedoctor.ai/",
    title,
    description,
    images: [{ url: image }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
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
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);
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
