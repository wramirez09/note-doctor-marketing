import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";
import { Services } from "./services";

export const metadata: Metadata = {
  title:
    "About NoteDoctorAI | Transforming Healthcare with AI-Powered Innovation",
  description:
    "Learn about NoteDoctorAI, a pioneer in AI-driven healthcare solutions. Our mission is to revolutionize medical coding with cutting-edge technology, enhancing accuracy, efficiency, and profitability for healthcare organizations globally.",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />
      <About />
      <Services />
      <Team />
      
    </main>
  );
};

export default AboutPage;
