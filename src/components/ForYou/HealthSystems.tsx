"use client";

import Link from "next/link";

const problems = [
  { title: "Delaying Critical Care",               body: "93% of physicians say prior auth delays care — across your entire system, this means thousands of delayed treatments per year.", source: { text: "Harnessing informatics's power to cut physician burdens", href: "https://www.ama-assn.org/practice-management/prior-authorization/harnessing-informatics-power-cut-physician-burdens" } },
  { title: "Inefficient and Wasteful",             body: "Manual processes waste resources and create inefficiencies that compound across departments, locations, and payer contracts." },
  { title: "Driving Worse Outcomes",               body: "Delays lead to higher ER visits, hospitalizations, and readmissions — all of which cost your system far more than an approval.", source: { text: "Fixing prior auth: Nearly 40 per authorization a week is too many", href: "https://www.ama-assn.org/practice-management/prior-authorization/fixing-prior-auth-nearly-40-prior-authorizations-week-way" } },
  { title: "Straining the Doctor–Patient Relationship", body: "Prior auth erodes trust as patients blame physicians for delays and denials that originate with insurers — not their care team." },
];

const benefits = [
  { title: "Streamlined Workflows",        body: "Centralize and standardize prior auth processes across departments — smarter decisioning that approves valid requests faster and reduces appeals." },
  { title: "Faster Care, Better Outcomes", body: "Fewer delays, fewer avoidable hospitalizations — transparency in requirements reduces re-submissions and prevents denials before they occur." },
  { title: "Built-In Compliance",          body: "Meet payer requirements the first time, at scale — better member experience means faster care and higher satisfaction scores across your network." },
  { title: "Protecting Providers",         body: "Reduce burnout and boost retention — balanced efficiency that achieves meaningful savings without harming patients or overburdening physicians." },
];

export default function HealthSystems() {
  return (
    <>
      <section className="py-20 px-6 bg-[#0f1522]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[.12em] uppercase text-blue-400 mb-3.5">The Problem for Health Systems</p>
          <h2 className="text-[clamp(26px,3vw,42px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-3">Prior Auth Is Costing<br />Your System — Every Day</h2>
          <p className="text-base leading-[1.65] text-white/50 max-w-[540px]">Administrative overhead from prior authorization drains resources, delays care, and strains the physician-patient relationship at scale.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden bg-white/[0.07]">
            {problems.map((p) => (
              <div key={p.title} className="bg-[#131929] p-9">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-blue-500/10 border border-blue-500/20 mb-5">
                  <svg className="w-5 h-5 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h3 className="text-base font-bold tracking-[-0.01em] mb-1.5">{p.title}</h3>
                <p className="text-[13.5px] text-white/50 leading-relaxed">{p.body}</p>
                {p.source && (
                  <a href={p.source.href} target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-3 text-[11px] text-white/25 hover:text-white/40 transition-colors leading-relaxed">
                    {p.source.text}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[.12em] uppercase text-blue-400 mb-3.5">How NoteDoctor.AI Helps Health Systems</p>
          <h2 className="text-[clamp(26px,3vw,42px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-3">Cut Costs the Right Way.<br />Improve Member Satisfaction.</h2>
          <p className="text-base leading-[1.65] text-white/50 max-w-[540px]">Streamline prior authorization without sacrificing quality of care — at the scale your system demands.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 items-start">
                <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/10 border border-blue-500/25">
                  <svg className="w-4 h-4 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold tracking-[-0.01em] mb-1">{b.title}</h3>
                  <p className="text-[13.5px] text-white/50 leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f1522]">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 bg-[#131929] border border-white/[0.07] rounded-2xl px-14 py-11">
          <div>
            <h2 className="text-[clamp(22px,2.5vw,34px)] font-extrabold tracking-[-0.025em] leading-[1.2]">Ready to Transform Authorization at Scale?</h2>
            <p className="text-[15px] text-white/50 leading-relaxed mt-2.5">Enterprise plans include EHR integration, dedicated account management, SLA guarantees, and volume pricing.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="#contact"
              className="inline-block bg-blue-500 text-white text-[15px] font-semibold px-8 py-3.5 rounded-[9px] shadow-[0_0_28px_rgba(59,130,246,0.3)] hover:bg-blue-600 hover:-translate-y-0.5 transition-all no-underline whitespace-nowrap">
              Request a Consultation
            </Link>
            <Link href="/pricing"
              className="inline-block text-white text-[15px] font-medium px-7 py-3.5 rounded-[9px] border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.04] transition-all no-underline whitespace-nowrap">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
