import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact NoteDoctor.AI | Get in Touch for AI-Powered Healthcare Solutions",
  description:
    "Reach out to NoteDoctor.AI for innovative AI solutions in healthcare. Our team is here to help transform medical coding and enhance efficiency, accuracy, and profitability for healthcare organizations worldwide.",
};

const ContactPage = () => {
  return (
    <div style={{ backgroundColor: "rgb(17 25 40)" }}>
      <Breadcrumb pageName="Contact Page" />

      <Contact />
    </div>
  );
};

export default ContactPage;
