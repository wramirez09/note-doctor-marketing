"use client";

import { useState } from "react";
import Contact from "@/components/ForYou/Contact";
import HealthSystems from "@/components/ForYou/HealthSystems";
import Physicians from "@/components/ForYou/Physicians";
import Problem from "@/components/ForYou/Problem";

const TABS = [
  { id: "healthcare", label: "For Healthcare" },
  { id: "physicians", label: "For Physicians" },
  { id: "systems",    label: "For Health Systems" },
];

export default function ForYouPage() {
  const [active, setActive] = useState("healthcare");

  return (
    <main className="relative z-10">
      <section className="relative text-center px-6 pt-24 pb-12 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[900px] h-[480px] bg-[radial-gradient(ellipse_at_50%_30%,rgba(59,130,246,0.2)_0%,transparent_70%)]" />

        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[.12em] uppercase rounded-full px-4 py-1.5 mb-7 border border-blue-500/20 bg-blue-500/10 text-blue-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6]" />
          Built for Every Stakeholder
        </div>

        <h1 className="text-[clamp(38px,5vw,66px)] font-extrabold leading-[1.09] tracking-[-0.03em] max-w-[820px] mx-auto mb-5">
          The Right Tool for{" "}
          <span className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Your Role in Healthcare
          </span>
        </h1>

        <p className="text-[17px] leading-[1.7] max-w-[540px] mx-auto mb-12 text-white/50">
          Whether you're a physician, practice administrator, or health system leader — NoteDoctor.AI eliminates prior authorization friction for everyone.
        </p>

        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl border border-white/[0.07] bg-[#131929] mx-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-6 py-2.5 rounded-[9px] text-sm font-medium transition-all cursor-pointer border-none font-sans
                ${active === t.id
                  ? "bg-blue-500 text-white font-semibold shadow-[0_4px_20px_rgba(59,130,246,0.3)]"
                  : "bg-transparent text-white/50 hover:text-white"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {active === "healthcare" && <Problem />}
      {active === "physicians"  && <Physicians />}
      {active === "systems"     && <HealthSystems />}

      <Contact />
    </main>
  );
}
