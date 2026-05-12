import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="px-6 py-24"
      style={{ background: "var(--bg2)" }}
    >
      <div className="max-w-[820px] mx-auto text-center">
        <p
          className="text-[12px] font-semibold tracking-[.12em] uppercase mb-4"
          style={{ color: "var(--blue-mid)" }}
        >
          See it on your prior auths
        </p>
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-5">
          Bring a denial. We&apos;ll show you how it could have been caught.
        </h2>
        <p
          className="text-[16px] leading-[1.65] mb-9 max-w-[560px] mx-auto"
          style={{ color: "var(--muted)" }}
        >
          A 20-minute demo on your own prior auths — no slide deck, no
          contract pressure. If it looks useful, we&apos;ll set up a 7-day
          pilot on a slice of your real PA volume.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-7">
          <Link
            href="/request-demo?source=home-cta"
            className="text-white text-[15px] font-semibold px-7 py-3 rounded-[9px] transition-all hover:-translate-y-0.5"
            style={{
              background: "var(--blue)",
              boxShadow: "0 0 32px rgba(59,130,246,0.35)",
            }}
          >
            Request a demo
          </Link>
          <Link
            href="/case-studies"
            className="text-[15px] font-medium px-6 py-3 rounded-[9px] border transition-all hover:bg-white/5"
            style={{ color: "var(--text)", borderColor: "var(--border)" }}
          >
            Read a case study →
          </Link>
        </div>

        <p className="text-[13px]" style={{ color: "var(--muted)" }}>
          Lower-intent question? Email{" "}
          <a
            href="mailto:sales@NoteDoctorAI"
            className="underline"
            style={{ color: "var(--blue-mid)" }}
          >
            sales@NoteDoctorAI
          </a>{" "}
          and we&apos;ll respond same day.
        </p>
      </div>
    </section>
  );
}
