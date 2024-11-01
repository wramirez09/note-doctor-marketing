import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import { CTASection } from "@/components/CTASection";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { NewsletterSignUp } from "@/components/NewsletterSignUp";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "NoteDoctor.AI | Leading AI-Powered Healthcare Solutions for Enhanced Medical Coding Efficiency",
  description:
    "Discover NoteDoctor.AI, the premier provider of AI-driven solutions for healthcare. Revolutionizing medical coding with advanced technology to improve accuracy, efficiency, and profitability for healthcare organizations worldwide.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
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
      <NewsletterSignUp />
      <Contact showNewsLetterSignUp={false} />
      {/* <Clients /> */}
    </main>
  );
}
