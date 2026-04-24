import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between px-12 py-7 border-t text-[13px]"
      style={{ borderColor: "var(--border)", color: "var(--faint)" }}
    >
      <span>© 2026 NoteDoctor.Ai — All rights reserved.</span>
      <div className="flex gap-6">
        {[
          { label: "Privacy", href: "https://app.notedoctor.ai/legal/privacy-policy", external: true },
          { label: "Terms", href: "https://app.notedoctor.ai/legal/terms-of-service", external: true },
          { label: "Pricing", href: "/pricing" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href, external }) => (
          <Link
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="no-underline transition-colors hover:text-white"
            style={{ color: "var(--muted)" }}
          >
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
