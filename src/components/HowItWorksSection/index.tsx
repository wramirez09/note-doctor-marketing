import { Text, SimpleGrid, Container, rem, Title } from "@mantine/core";
import {
  IconTruck,
  IconCertificate,
  IconCoin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconNumber6,
} from "@tabler/icons-react";
import classes from "./styles.module.css";
import { Headline } from "../Headline";
import { Titledfeatures } from "../Titledfeatures";
import { NewsletterSignUp } from "../NewsletterSignUp";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: React.FC<any>;
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
        <Icon
          style={{ width: rem(38), height: rem(38) }}
          className={classes.icon}
          stroke={1.5}
        />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconNumber1,
    title: "Effortless Upload",
    description:
      "With NoteDoctor.AI's drag and drop system, uploading files for processing is a breeze. Simply drag your files into the designated area, sit back, and let the magic unfold. It's like having a personal assistant handle the paperwork, freeing up your time for more important tasks.",
  },
  {
    icon: IconNumber2,
    title: "Review and Analyze",
    description:
      "It proceeds to meticulously review the information provided in the healthcare provider's note. It's like having a seasoned expert at your fingertips, sifting through the details and unraveling the complexities to reveal valuable insights.",
  },
  {
    icon: IconNumber3,
    title: "Precision Prediction",
    description:
      "Armed with a wealth of knowledge, NoteDoctor.AI predicts the correct ICD 11 code with unparalleled precision. It also provides supporting data for diagnosis, empowering you with comprehensive information to make informed decisions.",
  },
  {
    icon: IconNumber4,
    title: "Summarizing for Clarity",
    description:
      "Provider notes can be overwhelming, but fret not – NoteDoctor.AI summarizes the essential information, making it easily digestible for coders by ensuring clarity and focus amidst the complexity.",
  },
  {
    icon: IconNumber5,
    title: "Export with Ease",
    description:
      "Once the coding masterpiece is complete, NoteDoctor.AI offers seamless export capabilities in PDF or Word format.. Share your findings with ease, whether it's for collaboration, review, or presentation purposes.",
  },
  {
    icon: IconNumber6,
    title: "Experience the Magic",
    description:
      "Embark on your coding journey with NoteDoctor.AI and unlock the full potential of your coding workflow. Say goodbye to complexity and hello to seamless efficiency, accuracy, and productivity.",
  },
];

export default function HowItWorksSection() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container
      mt={30}
      mb={0}
      size="xl"
      style={{ backgroundColor: "rgb(17 25 40)" }}
    >
      <Headline />
      <hr style={{ borderColor: "#3b3b3b" }} />
      <Title
        order={2}
        style={{
          color: "#FFF",
        }}
        fw={900}
        className="pb-1 pt-8 max-sm:text-center md:pb-8 md:pl-9"
      >
        How it Works
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50} className="pb-10">
        {items}
      </SimpleGrid>
      <Titledfeatures />
      <NewsletterSignUp />
    </Container>
  );
}
