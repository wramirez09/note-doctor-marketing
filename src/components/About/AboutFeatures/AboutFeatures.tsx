"use client";

import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from "@mantine/core";
import {
  IconHearts,
  IconUsers,
  IconTelescope,
  IconEye,
} from "@tabler/icons-react";
import classes from "./aboutFeatrures.module.css";

const mockdata = [
  {
    title: "Who We Are",
    description:
      "NoteDoctor.AI is a leading provider of AI-powered solutions for the healthcare industry. Founded with a vision to revolutionize medical coding, our team combines expertise in artificial intelligence, healthcare, and technology to deliver cutting-edge solutions that drive efficiency, accuracy, and profitability for healthcare organizations worldwide.",
    icon: IconUsers,
  },
  {
    title: "Our Mission",
    description:
      "At NoteDoctor.AI, our mission is to revolutionize the healthcare industry through the power of artificial intelligence. We are committed to empowering healthcare organizations with innovative solutions that enhance efficiency, accuracy, and profitability.",
    icon: IconTelescope,
  },
  {
    title: "Our Vision",
    description:
      "Our vision is to create a future where healthcare providers can focus on what matters most – delivering high-quality care to patients. We envision a world where coding processes are streamlined, errors are minimized, and revenue cycle management is optimized.",
    icon: IconEye,
  },
  {
    title: "Our Values",
    description:
      "At NoteDoctor.AI, we are guided by a set of core values that define who we are and how we operate: Excellence - Integrity - Innovation Collaboration - Impact",
    icon: IconHearts,
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
    <Container size="lg" py="xl" className="bgAlt mt-12">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          NoteDoctor.Ai
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any technology stack
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs.
        This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
