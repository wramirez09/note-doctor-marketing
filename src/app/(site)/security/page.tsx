'use client'
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Grid, Container, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { Metadata } from "next";
import classes from "./styles.module.css";
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
       <div className="container mt-11 mb-11">
        <Container>
        <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2] text-center">
          Data Security and Compliance
          </h1>

          <p className="mx-auto mb-9 text-base font-medium text-white sm:text-lg sm:leading-[1.44] text-center">
          At NoteDoctor.AI, safeguarding your data is our top priority. We understand the critical importance of data security in the healthcare industry and are committed to maintaining the highest standards of protection for your sensitive information.
          </p>
          <hr style={{ opacity: "15%" }} className="mt-5" />
        </Container>
      </div>
      <section
        id="home"
        className="relative overflow-hidden bg-primary pb-7 pt-[50px] md:pt-[60px] lg:pb-[60px] lg:pt-[60px]"
      >
        <div className="container">
          <Container>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full">
              <div
                className="hero-content wow fadeInUp mx-auto"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-3xl lg:leading-[1.2]">
                Compliance with Industry Regulations

                </h1>
                <p className="mx-auto mb-9 text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                We comply with the Health Information Technology for Economic and Clinical Health (HITECH) Act, which addresses the security and privacy concerns associated with the electronic transmission of health information.
                </p>
            </div>
            </div>
          </div>
          </Container>
        </div>
      </section>
      <Container my="md">
      <Grid>


        <Grid.Col span={{ base: 12, xs: 4 }}><h2 className="font-bold text-xl text-white flex items-center">HITECH Act
        </h2></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}> <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
        We comply with the Health Information Technology for Economic and Clinical Health (HITECH) Act, which addresses the security and privacy concerns associated with the electronic transmission of health information.</p>
        </Grid.Col>

      </Grid>
    </Container>
    </motion.div>
    </>
  );
};

export default SecurityPage;
