import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is contact page description",
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
