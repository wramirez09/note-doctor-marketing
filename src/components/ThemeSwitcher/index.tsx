"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// next-themes keys stay "light"/"dark" so Tailwind's dark: variant and the
// System option resolve without a mapping; the names visitors see are below.
const THEMES = [
  {
    value: "light",
    label: "Classic",
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </>
    ),
  },
  {
    value: "dark",
    label: "Midnight",
    icon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
  },
  {
    value: "system",
    label: "System",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
];

/** Classic / Midnight / System picker. `showLabels` spells the names out (mobile drawer). */
export default function ThemeSwitcher({ showLabels = false }: { showLabels?: boolean }) {
  const { theme, setTheme } = useTheme();
  // The stored theme is only known on the client; render no selection until then.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className="inline-flex items-center gap-0.5 rounded-[10px] border p-0.5"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      {THEMES.map((t) => {
        const selected = mounted && theme === t.value;
        return (
          <button
            key={t.value}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={t.label}
            title={t.label}
            onClick={() => setTheme(t.value)}
            className={`flex items-center gap-1.5 rounded-[8px] text-[13px] font-medium transition-colors ${
              showLabels ? "px-3 py-1.5" : "p-1.5"
            } ${selected ? "" : "hover:text-ink"}`}
            style={
              selected
                ? { background: "var(--bg-card)", color: "var(--text)", boxShadow: "0 1px 3px rgba(0,0,0,0.12)" }
                : { color: "var(--muted)" }
            }
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              {t.icon}
            </svg>
            {showLabels && t.label}
          </button>
        );
      })}
    </div>
  );
}
