import Breadcrumb from "@/components/Common/Breadcrumb";
import HowItWorksSection from "@/components/HowItWorksSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions Page | ",
  description: "This is solutions page description",
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
