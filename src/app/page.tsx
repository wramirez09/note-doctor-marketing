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
  title: "Play Next.js - SaaS Starter Kit and Boilerplate for Next.js",
  description:
    "Free Next.js SaaS Boilerplate and Starter Kit designed and built for SaaS startups. It comes with all necessary integrations, pages, and components you need to launch a feature-rich SaaS websites.",
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
