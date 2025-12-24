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
  marginTop?: number;
  marginBottom?: number;
  showDots?: boolean;
  showHr?: boolean;
  btnMarginBottom?: string | number;
  centerText?: boolean;
  paddingTop?: number;
  paddingBottom?: number;
  classOverrides?: string;
  colorOverride?: string;
}> = ({
  headline = "Automated AI",
  subHeadline = "Medical Data",
  desc = "Build more reliable software with AI companion. AI is also trained to detect medical codes do medical analysis.",
  btns = [],
  hideBtn = false,
  marginTop = 100,
  marginBottom,
  showDots = true,
  showHr = true,
  btnMarginBottom = "100px",
  centerText = true,
  paddingTop = 120,
  paddingBottom,
  colorOverride,
}) => {
    return (
      <Container className={`${classes.wrapper} pt-[${paddingTop}px]`} size={1400} style={{ marginTop: marginTop, marginBottom: marginBottom, paddingBottom: paddingBottom }}>
        {showDots && <><Dots className={classes.dots} style={{ left: 0, top: 0 }} />
          <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
          <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
          <Dots className={classes.dots} style={{ right: 0, top: 60 }} /></>}

        <div className={classes.inner} style={{ marginTop: 0 }}>

          <Title className={`${classes.title} ${centerText ? "text-center" : ""}`} c={`${colorOverride ? colorOverride : null}`} >
            {headline}
            <Text component="span" className={classes.highlight} inherit c={`${colorOverride ? colorOverride : null}`}>
              {subHeadline}
            </Text>
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" className={`${classes.description} ${centerText ? "text-center" : ""}`} c={`${colorOverride ? colorOverride : null}`}>
              {desc}
            </Text>
          </Container>

          <div className={`${classes.controls} max-sm:flex-col mb-[${btnMarginBottom}]`}>
            {!hideBtn && (
              <Button
                // className={`${classes.control} button-light max-sm:mb-5 max-xs:w-full md:mr-5`}
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
        {showHr && <hr />}
      </Container>
    );
  };
