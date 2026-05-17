"use client";

import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import DemoVideo from "@/components/home/DemoVideo";
import HowItHelps from "@/components/home/HowItHelps";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <main className="relative z-10">
      <Hero />
      <Problem />
      <DemoVideo src="https://res.cloudinary.com/diyenxuol/video/upload/v1779047155/voice_over_app_demo_taiirs.mp4" />
      <HowItHelps />
      <FAQ />
      <Contact />
    </main>
  );
}
