"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { Button, Container } from "@mantine/core";
import { motion } from "framer-motion";
import classes from "./styles.module.css";
import { FeaturesGrid } from "./featuresGrid/Features";
import { StructuredData } from "@/components/StructuredData";

const metadata = {
  title: "Security Page | Get in Touch for AI-Powered Healthcare Solutions",
  description:
    "Security | At NoteDoctorAI, safeguarding your data is our top priority. We understand the critical importance of data security in the healthcare industry and are committed to maintaining the highest standards of protection for your sensitive information.",
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

const SecurityPage = () => {
  return (
    <>
      <StructuredData data={structuredData} />
      <Breadcrumb pageName="Security Page" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="container mb-11 mb-[160px] mt-11">
          <Container size="md">
            <h1 className="lg:mb[150px] accent mt-[160px] text-center text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
              Data Security and Compliance
            </h1>

            <p className="mx-auto mb-9 text-center text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
              At NoteDoctorAI, safeguarding your data is our top priority. We
              understand the critical importance of data security in the
              healthcare industry and are committed to maintaining the highest
              standards of protection for your sensitive information.
            </p>
            <div className="flex items-center justify-center">
              <Button component="a" href="#more">
                Learn More
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

export default SecurityPage;
