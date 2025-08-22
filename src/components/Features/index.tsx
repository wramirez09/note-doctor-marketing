"use client";

import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <section className="container pb-8 pt-20 dark:bg-dark lg:pb-[20px] lg:pt-[120px]">
        <div className="md:px-12">
          <SectionTitle
            subtitle="Features"
            title="The Problem: Prior Authorization is Broken"
            paragraph=""
            center
          />

          <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
            {featuresData.map((feature, i) => (
              <SingleFeature key={i} feature={feature} />
            ))}
          </div>
        </div>
        <SectionTitle
          subtitle="The result: wasted time, rising costs, physician burnout, and patient
          harm."
          title=""
          paragraph=""
          center
          width="100%"
        />
        <cite className="text-white dark:text-dark-6">
          <strong className="text-white">Source:</strong>{" "}
          <a href="https://www.kff.org/medicare/issue-brief/nearly-50-million-prior-authorization-requests-were-sent-to-medicare-advantage-insurers-in-2023/">
            https://www.kff.org/medicare/issue-brief/nearly-50-million-prior-authorization-requests-were-sent-to-medicare-advantage-insurers-in-2023/
          </a>
        </cite>
      </section>
    </motion.div>
  );
};

export default Features;
