import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  rem,
  List,
} from "@mantine/core";
import {
  IconFlame,
  IconUsersGroup,
  IconCalendarTime,
  IconClockExclamation,
  IconInfoCircle,
} from "@tabler/icons-react";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import Image from "next/image";


export const MOCKDATA = [
  {
    icon: IconCalendarTime,
    title: "A Heavy Weekly Burden",
    description:
      "Average 39 prior auths per week, consuming 13 hours of physician time",
  },
  {
    icon: IconUsersGroup,
    title: "Staff Dedicated Just to Paperwork",
    description: "40% of practices employ staff solely for prior auth",
  },
  {
    icon: IconFlame,
    title: "Fueling Physician Burnout",
    description: "89% of physicians say it drives burnout",
  },
  {
    icon: IconClockExclamation,
    title: "Delays in Patient Care",
    description: "Physician and staff spent 13 hours completing PA's",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="bg-gray-2 py-8 px-20 rounded-md justify center items-center text-center hover:shadow-lg transition-shadow duration-300 shadow-md hover:shadow-lg">
      {Icon && <ThemeIcon variant="light" size={40} radius={40}>
        < Icon style={{ width: rem(25), height: rem(25) }
        } stroke={1.5} />
      </ThemeIcon >}
      <Text mt="lg" size="lg" mb={7} >
        <strong>{title}</strong>
      </Text>
      <Text size="md" lh={1.6}>
        {description}
      </Text>
    </div >
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Container size="lg" className={"mb-11 pt-9"}>
          <Title c="dark" >
            Challenges Physicians Often Face
          </Title>

          <SimpleGrid
            mt={60}
            cols={{ base: 1, md: 2 }}
            spacing={{ base: "xl", md: 50 }}
            verticalSpacing={{ base: "xl", md: 50 }}
            className="mb-11"
          >
            {features}
          </SimpleGrid>
          <div>

            <Text size="xs" component="a" href="https://www.ama-assn.org/system/files/prior-authorization-survey.pdf" c="blue">
              2024 AMA prior authorization physician survey
            </Text>
          </div>
        </Container>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <section className="bg-gray-1">
          <Container size="lg" className="mt-9">
            <div className="mb-5 md:mb-11 grid grid-cols-1 md:grid-cols-2 items-center gap-3">
              <div>
                <Title mb={20} c="dark" variant="h2">
                  How NoteDoctor.AI Helps Physicians
                </Title>
                <List
                  spacing={20}
                  color="white"
                  icon={
                    <ThemeIcon color="#1971c2" size={24} radius="xl">
                      <IconInfoCircle size={16} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <Text size="lg">Clarity upfront – Instantly know required documentation</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="lg">Automation that works – Eliminate repetitive tasks and reduce</Text>
                    appeals
                  </List.Item>
                  <List.Item>
                    <Text size="lg">Faster approvals – Get patients into treatment sooner</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="lg">Practice protection – Free up staff and reduce overhead</Text>
                  </List.Item >
                </List>
              </div>
              <div>
                <Image src="/images/chatbot.png" alt="chat bot image" width={700} height={700} />
              </div>
            </div >
          </Container >
        </section>
      </motion.div >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Contact showNewsLetterSignUp={false} />
      </motion.div>
    </>
  );
}
