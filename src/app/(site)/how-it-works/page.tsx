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
    <div style={{ backgroundColor: "rgb(17 25 40)" }}>
      <Breadcrumb pageName="How It Works Page" />
      <HowItWorksSection />
    </div>
  );
};

export default HowItWorks;
