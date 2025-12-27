"use client";
import { Text, rem, Title, Container, Accordion } from "@mantine/core";
import { Icon, IconInfoCircle, IconProps, IconQuote } from "@tabler/icons-react";
import classes from "./styles.module.css";
import { Headline } from "../Headline";
import { Titledfeatures } from "../Titledfeatures";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import Image from "next/image";
import { NewsletterSignUp } from "../NewsletterSignUp";
import { useMediaQuery } from "@mantine/hooks";


interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  title: string;
  description: string;
  cite?: string;
  citeLink?: string;
}

export function Feature({
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

      <div className="flex flex-row items-center justify-start gap-4">
        {Icon && <Icon
          style={{ width: rem(30), height: rem(30) }}
          className={classes.icon}
          stroke={1.5}
        />}
        <div className="">
          <Text fw={700} fz="lg" mt={0}>
            {title}
          </Text>
          <Text c="dimmed" fz="sm" className={cite ? "flex flex-col" : ""}>
            {description}
            {cite && (
              <div>
                <Text c="dimmed" fz="sm">
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
    </div >
  );
}

const data = [
  {
    icon: IconInfoCircle,
    title: "93% of physicians say prior auth causes care delays",
    description: "",
    cite: "From article: Harnessing informatic's power to cut physician burdens.",
    citeLink: "https://www.ama-assn.org/practice-management/prior-authorization/harnessing-informatics-power-cut-physician-burdens",
  },
  {
    icon: IconInfoCircle,
    title: "82% report it leads to treatment abandonment",
    description: "",
    cite: "From article: Harnessing informatic's power to cut physician burdens.",
    citeLink: "https://www.ama-assn.org/practice-management/prior-authorization/harnessing-informatics-power-cut-physician-burdens",
  },
  {
    icon: IconInfoCircle,
    title:
      "29% have seen it result in a serious adverse event, including death",
    description: "In fact, in a December 2024 survey of 1,000 physicians (PDF) that the AMA conducted, 82% reported that prior authorization said it has resulted in care delays, and 29% said it has led to a serious adverse event—including death—for a patient.",
    cite: "From article: Harnessing informatic's power to cut physician burdens.",
    citeLink:
      "https://www.ama-assn.org/practice-management/prior-authorization/harnessing-informatics-power-cut-physician-burdens",
  },
  {
    icon: IconInfoCircle,
    title: "89% confirm it fuels physician burnout",
    description: "When I prescribe a medication, I would say 95% of the time, I have to obtain a prior authorization. We have four full-time employees who their sole focus is on obtaining prior authorization for medications to treat Crohn’s disease and ulcerative colitis. And that’s for just one disease state, - Korman, MD,",
    cite: "From artricle: Fixing prior auth: Nearly 40 prior authorization a week is to many.",
    citeLink:
      "https://www.ama-assn.org/practice-management/prior-authorization/fixing-prior-auth-nearly-40-prior-authorizations-week-way",
  },
];

const HowItWorksSection: React.FC<{
  headline?: string;
  subHeadline?: string;
  desc: string;
}> = ({ headline, subHeadline, desc }) => {
  const items = data.map((item) => <Feature {...item} key={item.title} />);
  const isMobile = useMediaQuery(`(max-width: 750px)`);
  return (
    <>
      <section className="bg-gray-800 py-10 hero-history-bg">
        <Container size="lg" className="pt-0">
          <div className="">
            <Headline headline={headline} subHeadline={subHeadline} desc={desc} showHr={false} paddingBottom={`${isMobile ? "20px" : "100px"}`} showDots={false} marginTop={0} colorOverride="white" marginBottom={`${isMobile ? "20px" : "60px"}`} />
          </div>
        </Container >
      </section >
      <section>
        <Container size="lg" my={40}>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-0 md:gap-10">
            <div className="col-span-1 shadow-md"> <Image src="/images/bad-news.png" alt="bad news image" width={500} height={500} /></div>
            <div className="col-span-2">
              <Title c={"#1971c2"} mt="md" mb="md">
                The Impact on Healthcare
              </Title>


              {items.map((items) => {
                return <blockquote className="text-md italic font-semibold text-heading mb-3 flex">
                  <p>"{items.props.title}"</p>
                </blockquote>
              })}

              <a href="https://www.ama-assn.org/practice-management/prior-authorization/fixing-prior-auth-nearly-40-prior-authorizations-week-way"><Text size="sm" c={"blue"}>From article: Harnessing informatic's power to cut physician burdens.</Text></a>


            </div>
          </div>
        </Container>

      </section >

      <Titledfeatures />
      <section className="bg-gray-1 rounded-md py-0">
        <NewsletterSignUp btnText="Subscribe" />
      </section>
    </>
  );
};

export default HowItWorksSection;
