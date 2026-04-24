"use client";

const CalendarTimeIcon = () => (
  <svg className="w-5 h-5 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.795 21h-6.795a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/>
    <circle cx="18" cy="18" r="4"/>
    <path d="M15 3v4"/><path d="M7 3v4"/><path d="M3 11h16"/>
    <path d="M18 16.5v1.5l1 1"/>
  </svg>
);

const UsersGroupIcon = () => (
  <svg className="w-5 h-5 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/>
    <path d="M8 21v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"/>
    <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/>
    <path d="M17 10h2a2 2 0 0 1 2 2v1"/>
    <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/>
    <path d="M3 13v-1a2 2 0 0 1 2-2h2"/>
  </svg>
);

const FlameIcon = () => (
  <svg className="w-5 h-5 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1 0 12 0c0-1.532-1.056-3.94-2-5-1.786 3-2.791 3-4 2z"/>
  </svg>
);

const ClockExclamationIcon = () => (
  <svg className="w-5 h-5 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5"/><path d="M12 17v.01"/>
  </svg>
);

const challenges = [
  { icon: CalendarTimeIcon,     title: "A Heavy Weekly Burden",             body: "Average 39 prior auths per week, consuming 13 hours of physician time — hours that should be spent with patients.", source: { text: "AMA Prior Authorization Physician Survey", href: "https://www.ama-assn.org/system/files/prior-authorization-survey.pdf" } },
  { icon: UsersGroupIcon,       title: "Staff Dedicated Just to Paperwork", body: "40% of practices employ staff solely for prior authorization — an operational cost that grows year over year." },
  { icon: FlameIcon,            title: "Fueling Physician Burnout",         body: "89% of physicians say prior auth drives burnout. The mental load of administrative overhead is unsustainable." },
  { icon: ClockExclamationIcon, title: "Delays in Patient Care",            body: "Physician and staff spend 13 hours per week completing PAs — time that compounds into weeks of patient wait time." },
];

const checkItems = [
  { strong: "Clarity upfront", rest: " — Instantly know required documentation for any procedure and payer combination." },
  { strong: "Automation that works", rest: " — Eliminate repetitive tasks and reduce appeals with AI-screened submissions." },
  { strong: "Faster approvals", rest: " — Get patients into treatment sooner with first-pass approval rates that actually improve." },
  { strong: "Practice protection", rest: " — Free up staff and reduce overhead by automating what shouldn't require a human at all." },
];

const metrics = [
  { num: "13 hrs", label: "saved per physician per week", sub: "That's more than 600 hours a year back in your hands." },
  { num: "40%", label: "of denials are technically incorrect", sub: "We help you win those back — before they're ever denied." },
  { num: "$0.02", label: "per AI screening call", sub: "Less than the cost of a stamp. Starts at $25/mo flat." },
];

export default function Physicians() {
  return (
    <>
      <section className="py-20 px-6 bg-[#0f1522]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[.12em] uppercase text-blue-400 mb-3.5">Challenges Physicians Face</p>
          <h2 className="text-[clamp(26px,3vw,42px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-3">Less Paperwork.<br />More Patient Care.</h2>
          <p className="text-base leading-[1.65] text-white/50 max-w-[540px]">Reclaim your time and reduce burnout with transparent, streamlined prior authorization.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden bg-white/[0.07]">
            {challenges.map((c) => (
              <div key={c.title} className="bg-[#131929] p-9">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-blue-500/10 border border-blue-500/20 mb-5">
                  <c.icon />
                </div>
                <h3 className="text-base font-bold tracking-[-0.01em] mb-1.5">{c.title}</h3>
                <p className="text-[13.5px] text-white/50 leading-relaxed">{c.body}</p>
                {c.source && (
                  <a href={c.source.href} target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-3 text-[11px] text-white/25 hover:text-white/40 transition-colors leading-relaxed">
                    {c.source.text}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[.12em] uppercase text-blue-400 mb-3.5">How NoteDoctor.Ai Helps Physicians</p>
            <h2 className="text-[clamp(26px,3vw,42px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-3">Tools Built Around Your Workflow</h2>
            <p className="text-base leading-[1.65] text-white/50 max-w-[420px] mb-10">Stop fighting the system. Let the AI navigate it for you.</p>

            <ul className="flex flex-col gap-4 list-none">
              {checkItems.map((item) => (
                <li key={item.strong} className="flex items-start gap-3.5 text-[15px] leading-relaxed">
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center bg-blue-500/15 border border-blue-500/30">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <polyline points="1.5,6 4.5,9 10.5,3" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span><strong>{item.strong}</strong>{item.rest}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 pt-5">
            {metrics.map((m) => (
              <div key={m.num} className="bg-[#131929] border border-white/[0.07] rounded-2xl px-7 py-8">
                <div className="text-[40px] font-extrabold text-blue-400 tracking-[-0.03em] leading-none mb-1.5">{m.num}</div>
                <div className="text-[15px] font-semibold mb-1">{m.label}</div>
                <div className="text-[13px] text-white/50">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
