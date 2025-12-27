"use client";

import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { Container, Text, Title } from "@mantine/core";
const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <section className="bg-gray-1 py-20 dark:bg-dark-2">
        <Container size="lg">
          <section className="pb-8  dark:bg-dark lg:pb-[20px]">
            <div className="md:px-12">
              <div className="center mb-12 text-center">
                <Title c={"#228dd2"}>The Problem: Prior Authorization is Broken</Title>
              </div>

              <div className="-mx-4 mt-12 flex flex-wrap md:mt-[70px]">
                {featuresData.map((feature, i) => (
                  <SingleFeature key={i} feature={feature} />
                ))}
              </div>
              <p className="mb-1 block text-lg font-bold text-secondary">
                The result: wasted time, rising costs, physician burnout, and patient
              </p>
              <Text c={"blue"} size="xs" component="a" href="https://www.kff.org/medicare/nearly-50-million-prior-authorization-requests-were-sent-to-medicare-advantage-insurers-in-2023/">
                <strong>Source:&nbsp;</strong>
                Medicare Advantage Insurers Made Nearly 50 Million Prior Authorization Determinations in 2023
              </Text>
            </div>


          </section>
        </Container>
      </section>
    </motion.div>
  );
};

export default Features;
