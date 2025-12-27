"use client";

import { Button, Container, Text, Title } from "@mantine/core";
import { AboutFeatures } from "./AboutFeatures/AboutFeatures";
import Image from "next/image";
import { Dots } from "../Headline/Dots";
const About = () => {
  return (
    <>
      <section>
        <Container size="md" pt={100} >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-1 b-2">
            <><Dots className="dots" style={{ left: 0, top: 0 }} />
              <Dots className="dots" style={{ left: 60, top: 0 }} />
              <Dots className="dots" style={{ left: 0, top: 140 }} />
              <Dots className="dots" style={{ right: 0, top: 60 }} /></>
            <div className="xs:mb-5">
              <Title mb={10}>
                Lower Administrative Costs.<br /> <span style={{ color: "#228be6" }}>Improve Patient Outcomes.</span>
              </Title>

              <Text color="dimmed" mb={30}>
                Eliminate bottlenecks across your system with smarter prior
                authorization.
              </Text>
              <Button className="button-primary shadow-md" component="a" href="https://preauthproduction.vercel.app/">Learn More</Button>
            </div>
            <div>
              <Image src="/images/payment.png" alt="mac image" width={700} height={700} />
            </div>
          </div>
        </Container >
      </section>
      <section className="bg-gray-1 py-10">
        <AboutFeatures />
      </section>
    </>
  );
};

export default About;
