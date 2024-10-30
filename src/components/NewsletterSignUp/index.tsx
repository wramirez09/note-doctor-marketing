import { Button, TextInput } from "@mantine/core";
import SectionTitle from "../Common/SectionTitle";
import classes from "./index.module.css";

export const NewsletterSignUp: React.FC<{
  title?: string;
  paragraph?: string;
  btnText?: string;
  width?: string;
  pb?: string | number;
}> = ({
  title = "Transform Your Practice with AI",
  paragraph = "Sign up to receive exclusive AI healthcare updates and unlock your discount.",
  btnText = "Subscribe",
  width = "640px",
  pb = "70px",
}) => {
  return (
    <section
      className={`relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[${pb}] lg:pt-[20px]`}
    >
      <SectionTitle title={title} paragraph={paragraph} width={width} center />
      <div className="flex justify-center">
        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>{btnText}</Button>
        </div>
      </div>
    </section>
  );
};
