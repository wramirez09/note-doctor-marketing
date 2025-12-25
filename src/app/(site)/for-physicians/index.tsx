"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { Button, Container, Title, Text } from "@mantine/core";
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
        <section className="hero-patient-care-bg py-100">
          <Container size="lg" className="py-20 md:py-40 text-center">
            <Title c="white" mb={15} order={1} size={60}>
              Less Paperwork. More Patient Care.
            </Title>

            <Text c={"white"} mb={30} size="lg">
              Reclaim your time and reduce burnout with transparent, streamlined
              prior authorization.
            </Text>
            <Button component="a" href="#more" className="shadow-md" size="lg">
              Take Back Your Time
            </Button>
          </Container>
        </section>
      </motion.div>

      <FeaturesGrid />

    </>
  );
};

export default PhysiciansPage;
