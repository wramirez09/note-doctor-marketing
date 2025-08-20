"use client";

import {
  Badge,
  Card,
  Group,
  rem,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import {
  IconAmbulance,
  IconStethoscope,
  IconFileStack,
  IconHourglassHigh,
} from "@tabler/icons-react";
import classes from "./aboutFeatrures.module.css";

const mockdata = [
  {
    title: "Delaying Critical Care",
    description: "93% of physicians say prior auth delays care",
    icon: IconHourglassHigh,
  },
  {
    title: "Inefficient and Wasteful",
    description: "Manual processes waste resources and create inefficiencies",
    icon: IconFileStack,
  },
  {
    title: "Driving Worse Outcomes",
    description:
      "Delays lead to higher ER visits, hospitalizations, and readmissions",
    icon: IconAmbulance,
  },
  {
    title: "Straining the Doctor–Patient Relationship",
    description:
      "Prior auth erodes trust as patients blame physicians for delays and denials",
    icon: IconStethoscope,
  },
];

export function AboutFeatures() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <section className="bgAlt container mt-12 lg:px-[60px]">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          NoteDoctorAI
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Your Partner in Innovative Digital Solutions
      </Title>

      {/* <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs.
        This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text> */}

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </section>
  );
}
