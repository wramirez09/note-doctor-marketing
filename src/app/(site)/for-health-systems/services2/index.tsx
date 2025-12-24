import { Text, SimpleGrid, Container, rem, Title, Button } from "@mantine/core";
import { IconTruck, IconCertificate, IconCoin } from "@tabler/icons-react";
import classes from "./styles.module.css";
import SectionTitle from "@/components/Common/SectionTitle";
import { m } from "framer-motion";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon?: React.FC<any>;
  title: string;
  description: string;
}

function Feature({
  icon: Icon,
  title,
  description,
  className,
  ...others
}: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        {/* <Icon style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} /> */}
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="md">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    title: "Streamlined Workflows",
    description:
      "Smarter decisioning – Approve valid requests faster, reduce appeals",
  },
  {
    title: "Faster Care, Better Outcomes",
    description: "Transparency – Clear requirements reduce re-submissions",
  },
  {
    title: "Built-In Compliance",
    description:
      "Better member experience – Faster care means higher satisfaction",
  },
  {
    title: "Protecting Providers",
    description:
      "Balanced savings – Achieve efficiency without harming patients",
  },
];

export function Services2() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <div className="lg:mb-[60px] lg:mt-[120px] xl:px-11">
      <Container mt={30} mb={30} size="lg">
        <SectionTitle
          title={"Cut Costs the Right Way. Improve Member Satisfaction."}
          paragraph={
            "Streamline prior authorization without sacrificing quality of care."
          }
        />
        <hr style={{ opacity: "15%" }} className="mb-9 mt-9" />
        <Title className={classes.title} id="more" size={"large"}>
          How NoteDoctor.AI Helps Health Plans
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={1}>
          {items}
        </SimpleGrid>
      </Container>
      <Container className="flex items-center justify-center">
        <Button component="a" href="/contact" className="m-10" size="lg">
          Partner With Us
        </Button>
      </Container>
    </div>
  );
}
