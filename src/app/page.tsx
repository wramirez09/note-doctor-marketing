"use client";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Image from "next/image";
import Features from "@/components/Features";
import { Headline } from "@/components/Headline";

import { StructuredData } from "@/components/StructuredData";
import Testimonials from "@/components/Testimonials";

import { getAllPosts } from "@/utils/markdown";
import { Button, Container, rem, SimpleGrid, Text } from "@mantine/core";

import { Metadata } from "next";
import { Dots } from "@/components/Headline/Dots";
import { Icon, IconCheck, IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { motion } from "framer-motion";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  title: string;
  description: string;
  cite?: string;
  citeLink?: string;
}
function Feature({
  icon: Icon,
  title,
  description,
  className,
  cite,
  citeLink,
  ...others
}: FeatureProps) {
  return (
    <div  {...others}>

      <div className="flex flex-row items-start justify-start gap-4">
        {Icon && <Icon
          style={{ width: rem(20), height: rem(20) }}

          stroke={1.5}
        />}
        <div className="mb-4">
          <Text fw={700} fz="lg" mt={0}>
            {title}
          </Text>
          <Text c="dimmed" fz="sm" className={cite ? "flex flex-col" : ""}>
            {description}
            {cite && (
              <div>
                <Text c="white" fz="sm">
                  {cite}
                </Text>
                <cite>
                  <a href={citeLink}>{citeLink}</a>
                </cite>
              </div>
            )}
          </Text>
        </div>
      </div>
    </div >
  );
}

const metadata: Metadata = {
  title:
    "AI Health Insights from Your Medical Records | NoteDoctor.ai",
  description:
    "Unlock science-backed health insights with NoteDoctor.ai. Upload your medical records, explore clinical trial data, and get personalized questions to discuss with your doctor. Not medical advice—just smarter health clarity.",
  openGraph: {
    type: "website",
    url: "https://notedoctor.ai/",
    title:
      "AI Health Insights from Your Medical Records | NoteDoctor.ai",
    description:
      "Unlock science-backed health insights with NoteDoctor.ai. Upload your medical records, explore clinical trial data, and get personalized questions to discuss with your doctor. Not medical advice—just smarter health clarity.",
    images: [
      {
        url: "https://notedoctor.ai/opengraph-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NoteDoctorAI | Leading AI-Powered Healthcare Solutions for Enhanced Medical Coding Efficiency",
    description:
      "Discover NoteDoctorAI, the premier provider of AI-driven solutions for healthcare. Revolutionizing medical coding with advanced technology to improve accuracy, efficiency, and profitability for healthcare organizations worldwide.",
    images: ["https://notedoctor.ai/opengraph-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "homePage",
  headline: metadata.title,
  description: metadata.description,
  author: [
    {
      "@type": "Person",
      name: "Mitesh Patel",
    },
  ],
  datePublished: "2022-09-14T09:00:00.000Z",
};

const mockdata = [
  {
    icon: IconCheck,
    title: "Clarifying requirements upfront",
    description: "know exactly what documentation is needed.",
  },
  {
    icon: IconCheck,
    title: "Confidence with transparency",
    description: "reduce time wasted on appeals.",
  },
  {
    icon: IconCheck,
    title: "Protecting physicians",
    description: "cut burnout by minimizing administrative overhead.",
  },
];

export default function Home() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);
  return (
    <main>
      <StructuredData data={structuredData} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Container size="lg" className="items-center justify-center my-20 md:mt-10 mb-20 hero-bg">

          <div className="grid grid-cols-1 items-end my-6 mt-[170px]">
            <><Dots className="dots" style={{ left: 0, top: 0 }} />
              <Dots className="dots" style={{ left: 60, top: 0 }} />
              <Dots className="dots" style={{ left: 0, top: 140 }} />
              <Dots className="dots" style={{ right: 0, top: 60 }} /></>
            <Headline
              headline="Cut the Red Tape & Deliver Care"
              subHeadline=" Without Delays"
              showHr={false}
              showDots={false}
              paddingTop={0}
              marginTop={0}


              desc="Prior authorization wastes valuable time, burdens physicians, and puts patients at risk. NoteDoctor.AI empowers providers with clarity, speed, and compliance — so you can focus on care, not paperwork."
            // hideBtn
            />
            {/* <div>
            <Image src="/images/hero-2.png" alt="mac image" width={500} height={500} />
          </div> */}
          </div>

        </Container>
      </motion.div>

      <Features />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Container size="lg" >
          <div className="grid grid-cols-2 gap-6 items-center mb-20 mt-10 md:mt-0">
            <div>
              <Headline
                headline={`Real-Time AI Support for Unmatched Coding Precision`}
                subHeadline=""
                marginTop={0}
                showDots={false}
                showHr={false}
                desc={
                  "Minimize errors with real-time AI assistance, providing accurate coding suggestions in seconds. Improve precision and efficiency with automated, intelligent support."
                }
              />
            </div>
            <div>
              <Image src="/images/mac.png" alt="mac image" width={500} height={500} />
            </div>
          </div >
        </Container >
      </motion.div>

      <Testimonials />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Container size="lg" className="my-[60px]">


          <div className="grid grid-cols-2 gap-1 items-center mb-9 mt-0 justify-center">

            <div className="flex flex-col items-center gap-1 ">
              <Image src="/images/ai.png" alt="doctor image" width={600} height={500} />

            </div>
            <div>
              <Headline
                headline="How NoteDoctor.AI "
                subHeadline="Helps"
                desc="NoteDoctor.Ai simplifies prior authorization by:"
                marginTop={0}
                btnMarginBottom={0}
                paddingTop={0}
                showDots={false}
                hideBtn={true}
                centerText={false}
                showHr={false}
              />
              <SimpleGrid
                cols={{ base: 3, sm: 1 }}
                spacing={5}
                className="mb-7 mt-0 pb-3"
              >
                {items}
              </SimpleGrid>
              <div className="flex justify-start ml-10">
                <Button component="a" href="/contact">
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <section className="bg-gray-1">
          <Contact showNewsLetterSignUp={false} />
        </section>
      </motion.div>
      <ScrollUp />
    </main >
  );
}
