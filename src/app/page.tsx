import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import { CTASection } from "@/components/CTASection";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { StructuredData } from "@/components/StructuredData";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title:
//     "NoteDoctorAI | Leading AI-Powered Healthcare Solutions for Enhanced Medical Coding Efficiency",
//   description:
//     "Discover NoteDoctorAI, the premier provider of AI-driven solutions for healthcare. Revolutionizing medical coding with advanced technology to improve accuracy, efficiency, and profitability for healthcare organizations worldwide.",
//   openGraph: {
//     type: "website",
//     url: "https://notedoctor.ai/",
//     title:
//       "NoteDoctorAI | Leading AI-Powered Healthcare Solutions for Enhanced Medical Coding Efficiency",
//     description:
//       "Discover NoteDoctorAI, the premier provider of AI-driven solutions for healthcare. Revolutionizing medical coding with advanced technology to improve accuracy, efficiency, and profitability for healthcare organizations worldwide.",
//     images: [
//       {
//         url: "https://notedoctor.ai/opengraph-image.jpg",
//         width: 1200,
//         height: 630,
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title:
//       "NoteDoctorAI | Leading AI-Powered Healthcare Solutions for Enhanced Medical Coding Efficiency",
//     description:
//       "Discover NoteDoctorAI, the premier provider of AI-driven solutions for healthcare. Revolutionizing medical coding with advanced technology to improve accuracy, efficiency, and profitability for healthcare organizations worldwide.",
//     images: ["https://notedoctor.ai/opengraph-image.jpg"],
//   },
// };

// const structuredData = {
//   "@context": "https://schema.org",
//   "@type": "homePage",
//   headline: metadata.title,
//   description: metadata.description,
//   author: [
//     {
//       "@type": "Person",
//       name: "Mitesh Patel",
//     },
//   ],
//   datePublished: "2022-09-14T09:00:00.000Z",
// };

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      {/* <StructuredData data={structuredData} /> */}
      <ScrollUp />
      <Hero />
      <Features />
      {/* <About />
      <CallToAction /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <CTASection
        title={"Real-Time AI Support for Unmatched Coding Precision"}
        body={
          "Minimize errors with real-time AI assistance, providing accurate coding suggestions in seconds. Improve precision and efficiency with automated, intelligent support."
        }
      />
      <Faq />
      {/* <Team /> */}
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact showNewsLetterSignUp={false} />
      {/* <Clients /> */}
    </main>
  );
}
