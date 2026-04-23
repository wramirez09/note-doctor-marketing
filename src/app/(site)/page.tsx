"use client";

import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import HowItHelps from "@/components/home/HowItHelps";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <main className="relative z-10">
      <Hero />
      <Problem />
      <HowItHelps />
      <FAQ />
      <Contact />
    </main>
  );
}
