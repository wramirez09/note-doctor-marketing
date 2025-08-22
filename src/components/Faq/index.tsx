"use client";

import { Container } from "@mantine/core";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";
import { Blockquote } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import classes from "./index.module.css";
import classNames from "classnames";

const icon = <IconInfoCircle />;

const Faq = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <section className="container relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[50px]">
        <Container className={classes.hrContainer}>
          <hr />
        </Container>
        <div className="mt-12 md:px-12">
          <SectionTitle
            subtitle=""
            title="What Physicians Are Saying"
            paragraph=""
            width="640px"
            center
          />

          <div className="-mx-4 mb-7 mt-[60px] flex flex-wrap lg:mt-20">
            <div className="mb-9 w-full px-4 lg:w-1/2">
              <Blockquote color="blue" icon={icon} mt="xl" c={"white"}>
                “We don’t actually know what piece of information the insurer is
                looking for.”
              </Blockquote>
            </div>

            <div className="mb-9 w-full px-4 lg:w-1/2">
              <Blockquote color="blue" icon={icon} mt="xl" c={"white"}>
                “It’s a huge diversion of time and resources.”
              </Blockquote>
            </div>
            <div className="mb-9 w-full px-4 lg:w-1/2">
              <Blockquote color="blue" icon={icon} mt="xl" c={"white"}>
                “Many of us have staff who do nothing but focus on prior
                authorization paperwork.”
              </Blockquote>
            </div>
            <div className="mb-9 w-full px-4 lg:w-1/2">
              <Blockquote color="blue" icon={icon} mt="xl" c={"white"}>
                "Prior Auth is a guessing game"
              </Blockquote>
            </div>
          </div>
          <div className="mb-11 mt-9">
            <p className="text-white">
              <strong>
                From article: What doctors wish patients knew about prior
                authorization
              </strong>
            </p>
            <cite className="text-white dark:text-dark-6">
              <a href="https://www.ama-assn.org/practice-management/prior-authorization/what-doctors-wish-patients-knew-about-prior-authorization">
                https://www.ama-assn.org/practice-management/prior-authorization/what-doctors-wish-patients-knew-about-prior-authorization
              </a>
            </cite>
          </div>
          <SectionTitle
            subtitle="This cycle leaves patients without timely treatment — raising hospitalization risk and worsening outcomes."
            title=""
            paragraph=""
            width="640px"
            center
          />
        </div>

        <div>
          <span className="absolute left-4 top-4 -z-[1]">
            <svg
              width="48"
              height="134"
              viewBox="0 0 48 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="45.6673"
                cy="132"
                r="1.66667"
                transform="rotate(180 45.6673 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 45.6673 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 45.6673 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 45.6673 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="73.3335"
                r="1.66667"
                transform="rotate(180 45.6673 73.3335)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 45.6673 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 45.6673 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 45.6673 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 45.6673 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 45.6673 1.66683)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="132"
                r="1.66667"
                transform="rotate(180 31.0013 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 31.0013 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 31.0013 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 31.0013 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="73.3335"
                r="1.66667"
                transform="rotate(180 31.0013 73.3335)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 31.0013 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 31.0013 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 31.0013 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 31.0013 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 31.0013 1.66683)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="132"
                r="1.66667"
                transform="rotate(180 16.3333 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 16.3333 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 16.3333 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 16.3333 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="73.3335"
                r="1.66667"
                transform="rotate(180 16.3333 73.3335)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 16.3333 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 16.3333 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 16.3333 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 16.3333 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 16.3333 1.66683)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="132"
                r="1.66667"
                transform="rotate(180 1.66732 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 1.66732 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 1.66732 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 1.66732 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="73.3335"
                r="1.66667"
                transform="rotate(180 1.66732 73.3335)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 1.66732 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 1.66732 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 1.66732 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 1.66732 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 1.66732 1.66683)"
                fill="#5ab1ff"
              />
            </svg>
          </span>
          <span className="absolute bottom-4 right-4 -z-[1]">
            <svg
              width="48"
              height="134"
              viewBox="0 0 48 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="45.6673"
                cy="132"
                r="1.66667"
                transform="rotate(180 45.6673 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 45.6673 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 45.6673 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 45.6673 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 45.6673 73.3333)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 45.6673 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 45.6673 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 45.6673 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 45.6673 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 45.6673 1.66683)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0006"
                cy="132"
                r="1.66667"
                transform="rotate(180 31.0006 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0006"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 31.0006 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0006"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 31.0006 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0006"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 31.0006 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0008"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 31.0008 73.3333)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0008"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 31.0008 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0008"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 31.0008 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0008"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 31.0008 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0008"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 31.0008 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0008"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 31.0008 1.66683)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3341"
                cy="132"
                r="1.66667"
                transform="rotate(180 16.3341 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3341"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 16.3341 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3341"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 16.3341 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3341"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 16.3341 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3338"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 16.3338 73.3333)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3338"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 16.3338 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3338"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 16.3338 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3338"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 16.3338 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3338"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 16.3338 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3338"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 16.3338 1.66683)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="132"
                r="1.66667"
                transform="rotate(180 1.66732 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 1.66732 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 1.66732 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 1.66732 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 1.66732 73.3333)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 1.66732 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 1.66732 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 1.66732 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 1.66732 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 1.66732 1.66683)"
                fill="#5ab1ff"
              />
            </svg>
          </span>
        </div>
      </section>
    </motion.div>
  );
};

export default Faq;
