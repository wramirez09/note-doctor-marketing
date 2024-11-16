import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { NewsletterSignUp } from "../../../components/NewsletterSignUp/index";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title:
    "Contact NoteDoctorAI | Get in Touch for AI-Powered Healthcare Solutions",
  description:
    "Reach out to NoteDoctorAI for innovative AI solutions in healthcare. Our team is here to help transform medical coding and enhance efficiency, accuracy, and profitability for healthcare organizations worldwide.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "contact page",
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

const ContactPage = () => {
  return (
    <>
      <StructuredData data={structuredData} />
      <div style={{ backgroundColor: "rgb(17 25 40)" }}>
        <Breadcrumb pageName="Contact Page" />

        <Contact showNewsLetterSignUp={false} />
      </div>
    </>
  );
};

export default ContactPage;
