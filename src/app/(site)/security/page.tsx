'use client'

import Breadcrumb from "@/components/Common/Breadcrumb";
import { Button, Container } from "@mantine/core";
import { motion } from "framer-motion";
import { Metadata } from "next";
import classes from "./styles.module.css";
import { FeaturesGrid } from "./Features";
const metadata: Metadata = {
  title: "Security Page | ",
  description: "security",
};



const SecurityPage = () => {
  return (
    <>
      <Breadcrumb pageName="Security Page" />
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
       <div className="container mt-11 mb-11 mb-[160px]">
        <Container size="md">
        <h1 className="mt-[160px] text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2] text-center lg:mb[150px] accent">
          Data Security and Compliance
          </h1>

          <p className="mx-auto mb-9 text-base font-medium text-white sm:text-lg sm:leading-[1.44] text-center">
          At NoteDoctor.AI, safeguarding your data is our top priority. We understand the critical importance of data security in the healthcare industry and are committed to maintaining the highest standards of protection for your sensitive information.
          </p>
          <div className="flex justify-center items-center">
          <Button component="a" href="#more">Learn More</Button>
          </div>
          <hr style={{ opacity: "15%" }} className="mt-5" />
          </Container>
      </div>
    <FeaturesGrid/>
    </motion.div>
    </>
  );
};

export default SecurityPage;
