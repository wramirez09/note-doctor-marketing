import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";
import { Services } from "./services";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title:
    "About NoteDoctorAI | Transforming Healthcare with AI-Powered Innovation",
  description:
    "Learn about NoteDoctorAI, a pioneer in AI-driven healthcare solutions. Our mission is to revolutionize medical coding with cutting-edge technology, enhancing accuracy, efficiency, and profitability for healthcare organizations globally.",
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "about page",
  headline: metadata.title,
  description: metadata.description,
  author: [
    {
      "@type": "Person",
      name: "Mitesh Patel",
    },
  ],
  datePublished: "2022-09-14T09:00:00.000Z",
};
const AboutPage = () => {
  return (
    <main>
      <StructuredData data={structuredData} />
      <Breadcrumb pageName="About Us Page" />
      <About />
      <Services />
      <Team />
    </main>
  );
};

export default AboutPage;
