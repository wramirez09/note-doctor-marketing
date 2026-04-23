import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { NewsletterSignUp } from "../../../components/NewsletterSignUp/index";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title:
    "Contact NoteDoctor.ai | Get in Touch for Support & Partnerships",
  description:
    "Reach out to the NoteDoctor.ai team for support, media inquiries, or partnership opportunities. We’re here to help you explore AI-driven health insights.",
  openGraph: {
    type: "website",
    url: "https://notedoctor.ai/contact",
    title:
      "Contact NoteDoctor.ai | Get in Touch for Support & Partnerships",
    description:
      "Reach out to the NoteDoctor.ai team for support, media inquiries, or partnership opportunities. We’re here to help you explore AI-driven health insights.",
    images: [
      {
        url: "https://notedoctor.ai/opengraph-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact NoteDoctor.ai | Get in Touch for Support & Partnerships",
    description:
      "Reach out to the NoteDoctor.ai team for support, media inquiries, or partnership opportunities. We’re here to help you explore AI-driven health insights.",
    images: ["https://notedoctor.ai/opengraph-image.jpg"],
  },
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
