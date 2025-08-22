import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  rem,
  Button,
} from "@mantine/core";
import {
  IconArcheryArrow,
  IconCalendarStats,
  IconAffiliate,
  IconAB2,
  IconRefresh,
  IconShape,
} from "@tabler/icons-react";
import classes from "./styles.module.css";

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
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7} style={{ color: "#FFF" }}>
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
    <section className="w-full">
      <hr className={`max-xs:mt-1 ${classes.rule} `} />
      <Title className={classes.title}>The Bigger Picture</Title>

      <Text size="sm" className={classes.description}>
        Insurers claim efficiency, but often at patients’ expense. A 2023
        investigation uncovered 300,000+ instant AI-driven denials in just two
        months — without reviewing patient files. This isn’t cost savings. It’s
        care denied.
      </Text>
      <div className="mb-11 mt-9">
        <p className="text-xs text-white">
          From Aritcle: <strong>Standing Up to Prior Authorization"</strong>
        </p>
        <cite className="text-white dark:text-dark-6">
          <a href="https://ashpublications.org/ashclinicalnews/news/7981/Standing-Up-to-Prior-Authorization">
            https://ashpublications.org/ashclinicalnews/news/7981/Standing-Up-to-Prior-Authorization
          </a>
        </cite>
      </div>

      <Title className={classes.title}>How NoteDoctor.AI Helps</Title>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 2 }}
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
    </section>
  );
}
