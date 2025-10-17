"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { Button, Container } from "@mantine/core";
import { motion } from "framer-motion";

import { FeaturesGrid } from "./featuresGrid/Features";
import { StructuredData } from "@/components/StructuredData";

const metadata = {
  title: "AI Clinical Insight Tools for Physicians | NoteDoctor.ai",
  description:
    "Equip your practice with NoteDoctor.ai — analyze patient notes, surface research-based insights, and streamline diagnostic workflows. Trusted, secure, physician-focused AI support (not medical advice).",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "security page",
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

const PhysiciansPage = () => {
  return (
    <>
      <StructuredData data={structuredData} />
      <Breadcrumb pageName="For Physicians" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="container mb-11 md:mb-[160px] mt-11">
          <Container size="md">
            <h1 className="lg:mb[150px] accent md:mt-[160px] text-center text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
              Less Paperwork. More Patient Care.
            </h1>

            <p className="mx-auto mb-9 text-center text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
              Reclaim your time and reduce burnout with transparent, streamlined
              prior authorization.
            </p>
            <div className="flex items-center justify-center">
              <Button component="a" href="#more">
                Take Back Your Time
              </Button>
            </div>
            <hr style={{ opacity: "15%" }} className="mt-5" />
          </Container>
        </div>
        <FeaturesGrid />
      </motion.div>
    </>
  );
};

export default PhysiciansPage;
