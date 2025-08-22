import { Text, SimpleGrid, rem, Title } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import classes from "./styles.module.css";
import { Headline } from "../Headline";
import { Titledfeatures } from "../Titledfeatures";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: React.FC<any>;
  title: string;
  description: string;
  cite?: string;
  citeLink?: string;
}

function Feature({
  icon: Icon,
  title,
  description,
  className,
  cite,
  citeLink,
  ...others
}: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={`${classes.content}`}>
        <Icon
          style={{ width: rem(18), height: rem(18) }}
          className={classes.icon}
          stroke={1.5}
        />
        <Text fw={700} fz="lg" mb="xs" mt={0} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm" className={cite ? "flex flex-col" : ""}>
          {description}
          {cite && (
            <div>
              <Text c="white" fz="sm">
                {cite}
              </Text>
              <cite>
                <a href={citeLink}>{citeLink}</a>
              </cite>
            </div>
          )}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconInfoCircle,
    title: "93% of physicians say prior auth causes care delays",
    description: "",
  },
  {
    icon: IconInfoCircle,
    title: "82% report it leads to treatment abandonment",
    description: "",
  },
  {
    icon: IconInfoCircle,
    title:
      "29% have seen it result in a serious adverse event, including death",
    description: "",
    cite: "From article: Harnessing informatic's power to cut physician burdens.",
    citeLink:
      "https://www.ama-assn.org/practice-management/prior-authorization/harnessing-informatics-power-cut-physician-burdens",
  },
  {
    icon: IconInfoCircle,
    title: "89% confirm it fuels physician burnout",
    description: "",
    cite: "From artricle: Fixing prior auth: Nearly 40 prior authorization a week is to many.",
    citeLink:
      "https://www.ama-assn.org/practice-management/prior-authorization/fixing-prior-auth-nearly-40-prior-authorizations-week-way",
  },
  // {
  //   icon: IconNumber5,
  //   title: "Export with Ease",
  //   description:
  //     "Once the coding masterpiece is complete, NoteDoctorAI offers seamless export capabilities in PDF or Word format.. Share your findings with ease, whether it's for collaboration, review, or presentation purposes.",
  // },
  // {
  //   icon: IconNumber6,
  //   title: "Experience the Magic",
  //   description:
  //     "Embark on your coding journey with NoteDoctorAI and unlock the full potential of your coding workflow. Say goodbye to complexity and hello to seamless efficiency, accuracy, and productivity.",
  // },
];

const HowItWorksSection: React.FC<{
  headline?: string;
  subHeadline?: string;
  desc: string;
}> = ({ headline, subHeadline, desc }) => {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <>
      <Headline headline={headline} subHeadline={subHeadline} desc={desc} />
      <hr style={{ borderColor: "#3b3b3b" }} />
      <Title
        order={2}
        style={{
          color: "#FFF",
        }}
        fw={900}
        className="pb-1 pt-8 max-sm:text-center md:pb-5"
      >
        The Impact on Healthcare
      </Title>
      <Title c="#FFF" size={"lg"} className="lg:pr-[250px]">
        {/* Streamline Concurrent Review and Denials with augmented intelligence.
        Easily summarize provider notes with data supporting ICD diagnosis and
        supporting documentation for inpatient vs observation status for
        patients in acute care. */}
      </Title>
      <SimpleGrid
        cols={{ base: 1, sm: 1 }}
        spacing={5}
        className="mb-10 mt-1 pb-3"
      >
        {items}
      </SimpleGrid>
      <Titledfeatures />
      {/* <NewsletterSignUp /> */}
    </>
  );
};

export default HowItWorksSection;
