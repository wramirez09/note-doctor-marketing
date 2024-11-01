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
    title: "Predictive Coding Accuracy",
    description:
      "Experience coding accuracy like never before with NoteDoctor.AI. Our AI-powered platform analyzes provider notes with precision, predicting the correct ICD 11 codes and minimizing errors. Ensure comprehensive documentation and maximize revenue potential with our advanced solution...",
  },
  {
    icon: IconCalendarStats,
    title: "Hospital Status Accuracy",
    description:
      "NoteDoctor.AI can help accurately determine inpatient vs observation status for hospital settings with data to support it. Avoid long delays with insurance companies as the first pass will have the data to support hospital status.",
  },
  {
    icon: IconAffiliate,
    title: "Streamlined Workflow",
    description:
      "Optimize your coding workflow with NoteDoctor.AI's streamlined solution. From rapid note processing to intuitive coding suggestions, our platform simplifies the entire coding process. Say goodbye to manual tasks and hello to efficiency and productivity.",
  },
  {
    icon: IconAB2,
    title: "Real-Time Feedback and Suggestions",
    description:
      "With NoteDoctor.AI, you're never alone in the coding process. It provides real-time feedback and coding suggestions, empowering you to make informed decisions and produce comprehensive documentation. Improve coding accuracy and efficiency with our intelligent solution.",
  },
  {
    icon: IconRefresh,
    title: "Continuous Improvement and Updates",
    description:
      "At NoteDoctor.AI, we're committed to continuous improvement and innovation. Our platform is regularly updated with the latest advancements in AI technology and coding practices to ensure maximum effectiveness and accuracy. Stay ahead of the curve with NoteDoctor.AI's cutting-edge solutions.",
  },
  {
    icon: IconShape,
    title: "Scalability for Growth",
    description:
      "Whether you're a small clinic or a large healthcare system, NoteDoctor.AI scales to meet your needs. Our platform is designed to accommodate growth, allowing you to expand your operations without sacrificing efficiency or accuracy. Scale your coding capabilities with confidence with NoteDoctor.AI.",
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
    <Container size="xl">
      <hr className={`max-xs:mt-1 ${classes.rule} `} />
      <Title className={classes.title}>
        Explore the full potential of medical coding with NoteDoctor.AI.
      </Title>

      <Text size="sm" className={classes.description}>
        Sign up now to revolutionize your coding processes and transform your
        healthcare organization.
      </Text>

      <div className="mt-5 flex justify-start">
        <Button component="a" href="/contact">
          Get Started Today
        </Button>
      </div>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: "xl", md: 50 }}
        verticalSpacing={{ base: "xl", md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
