import { Text, SimpleGrid, Container, rem, Title, Button } from "@mantine/core";
import { IconTruck } from "@tabler/icons-react";
import classes from "./styles.module.css";

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
      "Centralized workflows – Standardize processes across departments",
    icon: IconTruck,
  },
  {
    title: "Faster Care, Better Outcomes",
    description:
      "Fewer delays, better outcomes – Prevent avoidable hospitalizations",
    icon: IconTruck,
  },
  {
    title: "Built-In Compliance",
    description: "Compliance at scale – Meet payer requirements the first time",
    icon: IconTruck,
  },
  {
    title: "Protecting Providers",
    description: "Provider protection – Reduce burnout, boost retention",
    icon: IconTruck,
  },
];

export function Services() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <div className="lg:mb-[60px] lg:mt-[120px] xl:px-11">
      <Container mt={30} mb={30} size="xl">
        <Title order={2} className={classes.title} ta="center" mt="sm">
          How NoteDoctor.AI Helps Health Systems
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={1}>
          {items}
        </SimpleGrid>
      </Container>
      <Container className="flex items-center justify-center">
        <Button component="a" href="/contact" className="m-10" size="lg">
          Request a Consultation
        </Button>
      </Container>
      <Services />
    </div>
  );
}
