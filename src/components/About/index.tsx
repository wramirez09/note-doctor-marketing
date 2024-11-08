"use client";

// import Image from "next/image";
import { Container, Text, Button, Group } from "@mantine/core";
import classes from "./about.module.css";
import { AboutFeatures } from "./AboutFeatures/AboutFeatures";

const About = () => {
  return (
    <>
      <div className="container mt-7">
        <Container size="lg">
          <h1 className={`${classes.title} max-sm:text-xs`}>
            Bringing Change, Making Waves
          </h1>

          <Text className={classes.description} color="dimmed">
            Through AI-driven applications, we are bringing change and making
            waves in the healthcare systems. With a steadfast commitment to
            precision, innovation, and efficiency, we are redefining the
            paradigm of medical coding. We are empowering healthcare through
            innovation and excellence.
          </Text>
          <hr style={{ opacity: "15%" }} className="mt-5" />
        </Container>
      </div>
      <AboutFeatures />
    </>
  );
};

export default About;
