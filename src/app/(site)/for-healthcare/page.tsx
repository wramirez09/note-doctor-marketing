import Breadcrumb from "@/components/Common/Breadcrumb";
import HowItWorksSection from "@/components/HowItWorksSection";
import { StructuredData } from "@/components/StructuredData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How NoteDoctorAI Works | AI-Driven Medical Coding for Healthcare Efficiency",
  description:
    "Discover how NoteDoctorAI's advanced AI technology revolutionizes medical coding. Learn how our solutions drive efficiency, accuracy, and profitability for healthcare organizations globally.",
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

const HowItWorks = () => {
  return (
    <>
      <StructuredData data={structuredData} />
      <section className="container relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
        <div className="container md:px-12">
          {/* <Breadcrumb pageName="How It Works Page" /> */}
          <HowItWorksSection />
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
