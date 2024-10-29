import { Button, TextInput } from '@mantine/core';
import SectionTitle from '../Common/SectionTitle';
import classes from './index.module.css';

export function NewsletterSignUp() {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <SectionTitle
        title="Transform Your Practice with AI"
        paragraph="Sign up to receive exclusive AI healthcare updates and unlock your discount."
        width="640px"
        center
      />
      <div className="flex justify-center">
        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Subscribe</Button>
        </div>
      </div>
    </section>
  );
}