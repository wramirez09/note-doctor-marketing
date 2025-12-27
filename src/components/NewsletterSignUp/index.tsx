"use client";

import { Button, TextInput } from "@mantine/core";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import classes from "./index.module.css";

export const NewsletterSignUp: React.FC<{
  title?: string;
  paragraph?: string;
  btnText?: string;
  width?: string;
  mt?: string | number;
}> = ({
  title = "Transform Your Practice with AI",
  paragraph = "Sign up to begin streamlining pre authorizations",
  btnText = "Subscribe",
  width = "680px",
  mt = "120px",
}) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <section
          className={`relative z-20 overflow-hidden bg-white pb-8  dark:bg-dark lg:pb-[50px] pt-[${mt}]`}
        >
          <div className="container md:px-12">
            <SectionTitle
              title={title}
              paragraph={paragraph}
              width={width}
              center
            />
            <div className="flex justify-center mt-3">
              <Button size="lg" variant="primary" className="shadow-md" component="a" href="https://preauthproduction.vercel.app/" target="_blank">
                {btnText}
              </Button>

            </div>
          </div>
        </section>
      </motion.div >
    );
  };
