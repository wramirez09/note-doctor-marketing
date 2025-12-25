"use client"

import { CTASectionProps } from "@/types/cta-section";
import { Button, Container } from "@mantine/core";
import { motion } from 'framer-motion';
import SectionTitle from "../Common/SectionTitle";
import classes from "./index.module.css";

export function CTASection({ title, body, onClick }: CTASectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <section className="relative z-20 overflow-hidden bg-white pb-8 pt-10 dark:bg-dark lg:pb-[50px] ">
        <Container className={classes.hrContainer}>
          <hr />
        </Container>
        <div className="container mt-12 md:px-12">
          <SectionTitle title={title} paragraph={body} center />
          <div className={classes.controls}>
            <Button
              className={` button-primary ml-0 max-xs:w-full shsadow-md`}
              size="md"
              component="a"
              href="/how-it-works"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
