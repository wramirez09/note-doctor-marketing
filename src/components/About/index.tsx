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
            Lower Administrative Costs. Improve Patient Outcomes.
          </h1>

          <Text className={classes.description} color="dimmed">
            Eliminate bottlenecks across your system with smarter prior
            authorization.
          </Text>
          <hr style={{ opacity: "15%" }} className="mt-5" />
        </Container>
      </div>
      <AboutFeatures />
    </>
  );
};

export default About;
