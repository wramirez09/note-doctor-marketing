import { CTASectionProps } from "@/types/cta-section";
import { Button } from "@mantine/core";
import SectionTitle from "../Common/SectionTitle";
import classes from "./index.module.css";

export function CTASection({ title, body, onClick }: CTASectionProps) {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[50px]">
      <SectionTitle title={title} paragraph={body} width="640px" center />
      <div className={classes.controls}>
        <Button className="button-primary" size="lg">
          Try It Now
        </Button>
      </div>
    </section>
  );
}
