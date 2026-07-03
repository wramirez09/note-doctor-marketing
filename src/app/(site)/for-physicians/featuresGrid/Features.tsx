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
import classes from "./featuresGrid.module.css";
import Contact from "@/components/Contact";

import { IconCircleCheck } from "@tabler/icons-react";

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
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="lg" size="xl" mb={7} c="white">
        <strong>{title}</strong>
      </Text>
      <Text size="md" c="#FFF" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <>
      <div className="container">
        <Container size="lg">
          <Title className={classes.title} id="more">
            Challenges Physicians Often Face
          </Title>


        </Container>
        <Container size={"lg"} className={"mb-11"}>
          <SimpleGrid
            mt={60}
            cols={{ base: 1, sm: 2 }}
            spacing={{ base: "xl", md: 50 }}
            verticalSpacing={{ base: "xl", md: 50 }}
            className="mb-11"
          >
            {features}
          </SimpleGrid>
          <div>
            <Text c="white" fz="sm">
              Article: Prior Authorization Physician Survey
            </Text>
            <cite className="text-white dark:text-dark-6">
              <a href="https://www.ama-assn.org/system/files/prior-authorization-survey.pdf">
                https://www.ama-assn.org/system/files/prior-authorization-survey.pdf
              </a>
            </cite>
          </div>
        </Container>
        <Container size="lg" className="mt-9">
          <hr className="mb-9 mt-9" />
          <Title className={classes.title} id="more">
            How NoteDoctor.AI Helps Physicians
          </Title>

          <div className="mb-11 mt-9">
            <List
              spacing={20}
              color="white"
              icon={
                <ThemeIcon color="#1971c2" size={24} radius="xl">
                  <IconInfoCircle size={16} />
                </ThemeIcon>
              }
            >
              <List.Item className="text-white">
                Clarity upfront – Instantly know required documentation
              </List.Item>
              <List.Item className="text-white">
                Automation that works – Eliminate repetitive tasks and reduce
                appeals
              </List.Item>
              <List.Item className="text-white">
                Faster approvals – Get patients into treatment sooner
              </List.Item>
              <List.Item className="text-white">
                Practice protection – Free up staff and reduce overhead
              </List.Item>
            </List>
          </div>
        </Container>

      </div>
      <Contact showNewsLetterSignUp={false} />
    </>
  );
}
