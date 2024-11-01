import Breadcrumb from "@/components/Common/Breadcrumb";
import HowItWorksSection from "@/components/HowItWorksSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How NoteDoctor.AI Works | AI-Driven Medical Coding for Healthcare Efficiency",
  description:
    "Discover how NoteDoctor.AI's advanced AI technology revolutionizes medical coding. Learn how our solutions drive efficiency, accuracy, and profitability for healthcare organizations globally.",
};

const HowItWorks = () => {
  return (
    <section className="container relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container md:px-12">
        {/* <Breadcrumb pageName="How It Works Page" /> */}
        <HowItWorksSection />
      </div>
    </section>
  );
};

export default HowItWorks;
