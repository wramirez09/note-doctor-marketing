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
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
          { label: "Pricing", href: "/pricing" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
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
