import About from "@/components/About";
// import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import { Services } from "./services";
import { Services2 } from "./services2";

import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title:
    "AI Platform for Health Systems & Hospitals | NoteDoctor.Ai",
  description:
    "Support entire health systems with NoteDoctor.Ai — AI-powered patient record analytics, trial matching, population insights, operational intelligence & provider tools. Secure, scalable, institution-grade.",
  openGraph: {
    type: "website",
    url: "https://NoteDoctor.Ai/about",
    title:
      "AI Platform for Health Systems & Hospitals | NoteDoctor.Ai",
    description:
      "Support entire health systems with NoteDoctor.Ai — AI-powered patient record analytics, trial matching, population insights, operational intelligence & provider tools. Secure, scalable, institution-grade.",
    images: [
      {
        url: "https://NoteDoctor.Ai/opengraph-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About NoteDoctorAI | Transforming Healthcare with AI-Powered Innovation",
    description:
      "Learn about NoteDoctorAI, a pioneer in AI-driven healthcare solutions. Our mission is to revolutionize medical coding with cutting-edge technology, enhancing accuracy, efficiency, and profitability for healthcare organizations globally.",
    images: ["https://NoteDoctor.Ai/opengraph-image.jpg"],
  },
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
      {/* <Breadcrumb pageName="For Health Systems" /> */}
      <About />
      <Services />
      {/* <hr style={{ opacity: "15%" }} className="mt-5" /> */}
      <Services2 />
    </main>
  );
};

export default AboutPage;
