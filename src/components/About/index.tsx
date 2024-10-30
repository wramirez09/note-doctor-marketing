"use client";

// import Image from "next/image";
import { Container, Text, Button, Group } from "@mantine/core";
import classes from "./about.module.css";
import { AboutFeatures } from "./AboutFeatures/AboutFeatures";

const About = () => {
  return (
    <div className={`${classes.wrapper} md:px-12`}>
      <Container className={classes.inner}>
        <h1 className={classes.title}>Bringing Change, Making Waves</h1>

        <Text className={classes.description} color="dimmed">
          Through AI-driven applications, we are bringing change and making
          waves in the healthcare systems. With a steadfast commitment to
          precision, innovation, and efficiency, we are redefining the paradigm
          of medical coding. We are empowering healthcare through innovation and
          excellence.
        </Text>

        <Group className={`${classes.controls}, mt-12`}>
          {/* <Button
            size="l"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
          >
            Lear More
          </Button> */}
        </Group>
        <hr style={{ opacity: "15%" }} />
      </Container>

      <AboutFeatures />
    </div>
  );
};

export default About;
