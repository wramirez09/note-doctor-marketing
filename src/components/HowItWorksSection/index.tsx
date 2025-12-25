"use client";
import { Text, rem, Title, Container, Accordion } from "@mantine/core";
import { Icon, IconInfoCircle, IconProps } from "@tabler/icons-react";
import classes from "./styles.module.css";
import { Headline } from "../Headline";
import { Titledfeatures } from "../Titledfeatures";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import Image from "next/image";
import NewsLatterBox from "../Contact/NewsLetterBox";
import Contact from "../Contact";
import ContactPage from "@/app/(site)/contact/page";
import { Sign } from "crypto";
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
    </div >
  );
}

const mockdata = [
  {
    icon: IconInfoCircle,
    title: "93% of physicians say prior auth causes care delays",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
  },
  {
    icon: IconInfoCircle,
    title: "82% report it leads to treatment abandonment",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
  },
  {
    icon: IconInfoCircle,
    title:
      "29% have seen it result in a serious adverse event, including death",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
    cite: "From article: Harnessing informatic's power to cut physician burdens.",
    citeLink:
      "https://www.ama-assn.org/practice-management/prior-authorization/harnessing-informatics-power-cut-physician-burdens",
  },
  {
    icon: IconInfoCircle,
    title: "89% confirm it fuels physician burnout",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
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
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);
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
              <Title className={`${classes.title} mt-0`} c={"#1971c2"}>
                The Impact on Healthcare
              </Title>
              <Text className="mb-9">Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</Text>

              <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated" className="mt-6 mb-10 ">
                {items.map((item, index) => (
                  <Accordion.Item value={item.props.title} key={index}>
                    <Accordion.Control className="font-semibold bg-gray-2 shadow-sm"><Text>{item.props.title}</Text></Accordion.Control>
                    <Accordion.Panel><Text c={"dimmed"}>{item.props.description}</Text></Accordion.Panel>
                  </Accordion.Item>
                ))}

              </Accordion>
            </div>
          </div>
        </Container>

      </section >

      <Titledfeatures />
      <section className="bg-gray-1 rounded-md py-20">
        <NewsletterSignUp />
      </section>
    </>
  );
};

export default HowItWorksSection;
