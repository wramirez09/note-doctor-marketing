import { Button, Container, Text, Title } from "@mantine/core";

import classes from "./styles.module.css";

import React from "react";
import { Dots } from "./Dots";

type ButtonsData = {
  text: string;
  path: string;
};

export const Headline: React.FC<{
  headline?: string;
  subHeadline?: string;
  desc?: string;
  btns?: ButtonsData[];
  hideBtn?: boolean;
}> = ({
  headline = "Automated AI",
  subHeadline = "Medical Data",
  desc = "Build more reliable software with AI companion. AI is also trained to detect medical codes do medical analysis.",
  btns = [],
  hideBtn = false,
}) => {
    return (
      <Container className={classes.wrapper} size={1400} style={{ marginTop: 100 }}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner} style={{ marginTop: 0 }}>
          <Title className={`${classes.title}`}>
            {headline}{" "}
            <Text component="span" className={classes.highlight} inherit>
              {subHeadline}
            </Text>{" "}
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" c="dimmed" className={classes.description}>
              {desc}
            </Text>
          </Container>

          <div className={`${classes.controls} max-sm:flex-col md:mb-[100px]`}>
            {!hideBtn && (
              <Button
                className={`${classes.control} button-light max-sm:mb-5 max-xs:w-full md:mr-5`}
                size="md"
                component="a"
                href="/contact"
              >
                Contact Us
              </Button>
            )}
            {/* <Button
            className={`${classes.control} button-primary ml-0 max-xs:w-full`}
            size="md"
            component="a"
            href="#newsLetter"
          >
            Subscribe to our newsletter
          </Button> */}
          </div>
        </div>
      </Container>
    );
  };
