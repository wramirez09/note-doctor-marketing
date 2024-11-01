import { CTASectionProps } from "@/types/cta-section";
import { Button, Container } from "@mantine/core";
import SectionTitle from "../Common/SectionTitle";
import classes from "./index.module.css";

export function CTASection({ title, body, onClick }: CTASectionProps) {
  return (
    <div className="w-full bg-dark">
      <Container className="relative z-20 overflow-hidden pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[50px]">
        <SectionTitle title={title} paragraph={body} center />
        <div className={classes.controls}>
          <Button
            className={` button-primary ml-0 max-xs:w-full`}
            size="md"
            component="a"
            href="/how-it-works"
          >
            Learn More
          </Button>
        </div>
      </Container>
    </div>
  );
}
