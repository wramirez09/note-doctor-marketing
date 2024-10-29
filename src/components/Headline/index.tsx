import { Title, Text, Button, Container } from "@mantine/core";

import classes from "./styles.module.css";
import { Dots } from "./dots";
import React from "react";

type ButtonsData = {
  text: string;
  path: string;
};

export const Headline: React.FC<{
  headline?: string;
  subHeadline?: string;
  desc?: string;
  btns?: ButtonsData[];
}> = ({
  headline = "Automated AI",
  subHeadline = "Medical Data",
  desc = "Build more reliable software with AI companion. AI is also trained to detect medical codes do medical analysis.",
  btns = [],
}) => {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
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

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="md"
            variant="default"
            color="gray"
          >
            Book a demo
          </Button>
          <Button className={classes.control} size="md">
            contact
          </Button>
        </div>
      </div>
    </Container>
  );
};
