"use client";

import Link from "next/link";

const HourglassIcon = () => (
  <svg className="w-5 h-5 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h14v3a7 7 0 0 1-7 7 7 7 0 0 1-7-7V4z"/>
    <path d="M5 20h14v-3a7 7 0 0 0-7-7 7 7 0 0 0-7 7v3z"/>
  </svg>
);

const FileStackIcon = () => (
  <svg className="w-5 h-5 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);

const AmbulanceIcon = () => (
  <svg className="w-5 h-5 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);

const StethoscopeIcon = () => (
  <svg className="w-5 h-5 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
  </svg>
);

const HeartIcon = () => (
  <svg className="w-4 h-4 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const BadgeIcon = () => (
  <svg className="w-4 h-4 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-4 h-4 stroke-blue-400" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const problems = [
  { icon: HourglassIcon,   title: "Delaying Critical Care", body: "93% of physicians say prior auth delays care — across your entire system, this means thousands of delayed treatments per year.", source: { text: "Harnessing informatics's power to cut physician burdens", href: "https://www.ama-assn.org/practice-management/prior-authorization/harnessing-informatics-power-cut-physician-burdens" } },
  { icon: FileStackIcon,   title: "Inefficient and Wasteful", body: "Manual processes waste resources and create inefficiencies that compound across departments, locations, and payer contracts." },
  { icon: AmbulanceIcon,   title: "Driving Worse Outcomes", body: "Delays lead to higher ER visits, hospitalizations, and readmissions — all of which cost your system far more than an approval.", source: { text: "Fixing prior auth: Nearly 40 per authorization a week is too many", href: "https://www.ama-assn.org/practice-management/prior-authorization/fixing-prior-auth-nearly-40-prior-authorizations-week-way" } },
  { icon: StethoscopeIcon, title: "Straining the Doctor–Patient Relationship", body: "Prior auth erodes trust as patients blame physicians for delays and denials that originate with insurers — not their care team." },
];

const benefits = [
  { icon: ArrowRightIcon, title: "Streamlined Workflows", body: "Centralize and standardize prior auth processes across departments — smarter decisioning that approves valid requests faster and reduces appeals." },
  { icon: HeartIcon,      title: "Faster Care, Better Outcomes", body: "Fewer delays, fewer avoidable hospitalizations — transparency in requirements reduces re-submissions and prevents denials before they occur." },
  { icon: BadgeIcon,      title: "Built-In Compliance", body: "Meet payer requirements the first time, at scale — better member experience means faster care and higher satisfaction scores across your network." },
  { icon: ShieldIcon,     title: "Protecting Providers", body: "Reduce burnout and boost retention — balanced efficiency that achieves meaningful savings without harming patients or overburdening physicians." },
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
                  <p.icon />
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
          <p className="text-xs font-semibold tracking-[.12em] uppercase text-blue-400 mb-3.5">How NoteDoctor.Ai Helps Health Systems</p>
          <h2 className="text-[clamp(26px,3vw,42px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-3">Cut Costs the Right Way.<br />Improve Member Satisfaction.</h2>
          <p className="text-base leading-[1.65] text-white/50 max-w-[540px]">Streamline prior authorization without sacrificing quality of care — at the scale your system demands.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 items-start">
                <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/10 border border-blue-500/25">
                  <b.icon />
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
