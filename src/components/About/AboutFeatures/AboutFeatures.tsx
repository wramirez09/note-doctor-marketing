"use client";

import {
  Badge,
  Card,
  Container,
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
    cite: "From article: Harnessing informatic's power to cut physician burdens.",
    citeLink:
      "https://www.ama-assn.org/practice-management/prior-authorization/harnessing-informatics-power-cut-physician-burdens",
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
    cite: "From artricle: Fixing prior auth: Nearly 40 prior authorization a week is to many.",
    citeLink:
      "https://www.ama-assn.org/practice-management/prior-authorization/fixing-prior-auth-nearly-40-prior-authorizations-week-way",
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
      className="hover:shadow-lg transition-shadow duration-300 bg-gray-1"
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="xl" fw={500} mt="md">
        {feature.title}
      </Text>
      <Text fz="lg" c="dimmed" mt="sm">
        {feature.description}
      </Text>
      {feature.cite && (
        <p className="mb-3 mt-6 text-xs font-bold ">{feature.cite}</p>
      )}
      {feature.citeLink && (
        <cite className="text-xs dark:text-dark-6">
          <a href={feature.citeLink}>{feature.citeLink}</a>
        </cite>
      )}
    </Card>
  ));

  return (
    <section className="mt-12">
      <Container size={"lg"}>
        <Group justify="center">
          <Badge variant="filled" size="lg">
            NoteDoctorAI
          </Badge>
        </Group>

        <Title order={2} ta="center" mt="lg">
          Your Partner in Innovative Digital Solutions
        </Title>

        {/* <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs.
        This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text> */}

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    </section>
  );
}
