import {
  ThemeIcon,
  Text,
  Title,
  SimpleGrid,
  rem,
  Button,
  Container,
} from "@mantine/core";
import {
  IconArcheryArrow,
  IconCalendarStats,
  IconAffiliate,
  IconAB2,

} from "@tabler/icons-react";
import classes from "./styles.module.css";
import Image from "next/image";
export const MOCKDATA = [
  {
    icon: IconArcheryArrow,
    title: "Clarity upfront",
    description: "Know exactly what documentation is required",
  },
  {
    icon: IconCalendarStats,
    title: "Smarter workflows",
    description: "Reduce denials and avoid endless appeals",
  },
  {
    icon: IconAffiliate,
    title: "Faster approvals",
    description: "Move patients to treatment sooner",
  },
  {
    icon: IconAB2,
    title: "Physician protection",
    description: "Cut burnout by reducing administrative burden",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="bg-gray-200 dark:bg-dark-7 p-8 rounded-md justify center items-center text-center hover:shadow-lg transition-shadow duration-300">
      <ThemeIcon variant="light" size={40} radius={40} autoContrast>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7} c="black" fw={700}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function Titledfeatures() {
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <>

      <section className="my-20 p-6">
        <Container size={"xl"}>
          <hr />
          <div className="grid grid-cols-2 items-center justify-center gap-6">
            <div>
              <Title className={classes.title} c={"black"} mb={10} mt={3}>The Bigger Picture</Title>

              <Text size="sm" className={classes.description} c={"black"}>
                Insurers claim efficiency, but often at patients’ expense. A 2023
                investigation uncovered 300,000+ instant AI-driven denials in just two
                months — without reviewing patient files. This isn’t cost savings. It’s
                care denied.
              </Text>
              <Text className="text-xs text-black" size="xs" mt={60}>
                From Aritcle: <strong>Standing Up to Prior Authorization</strong>
              </Text>
              <Text className="text-xs text-black" size="xs" mt={4}>
                <a href="https://ashpublications.org/ashclinicalnews/news/7981/Standing-Up-to-Prior-Authorization">
                  https://ashpublications.org/ashclinicalnews/news/7981/Standing-Up-to-Prior-Authorization
                </a>
              </Text>
            </div>
            <div>     <Image src="/images/icons-workshop.png" alt="doctor image" width={700} height={600} /></div>
          </div>
          <hr />


        </Container>
      </section >
      <section className="mb-40">
        <Container size={"xl"}>

          <Title className={classes.title} c={"black"}>How NoteDoctor.AI Helps</Title>

          <SimpleGrid
            mt={60}
            cols={{ base: 1, sm: 3, md: 4 }}
            spacing={{ base: "xl", md: 50 }}
            verticalSpacing={{ base: "xl", md: 50 }}
          >
            {features}
          </SimpleGrid>
          <div className="mt-5 mt-9 flex justify-start">
            <Button component="a" href="/contact">
              Get Started Today
            </Button>
          </div>
        </Container>
      </section >
    </>
  );
}
