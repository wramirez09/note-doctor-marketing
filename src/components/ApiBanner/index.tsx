"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BANNER_DISMISS_KEY, MCP_GUIDE_URL } from "@/config/apiLaunch";

const BANNER_HEIGHT = 44;

/** Matches the `hidden sm:flex` below — the bar does not render under 640px. */
const SM_QUERY = "(min-width: 640px)";

/**
 * Slim announcement bar on the home page. Sits above the fixed site header and
 * publishes its own height as `--api-banner-h` so HeaderWithMenu can offset
 * itself and page content can shift down by the same amount.
 *
 * Home only: it advertises one thing, and a reader who has already navigated
 * into the site has either taken it or not. The variable is what makes that
 * safe to do — every consumer of the offset reads it, so the bar disappearing
 * closes the space it occupied rather than leaving a gap.
 */
export default function ApiBanner() {
  // Start hidden: localStorage and matchMedia are only readable after mount,
  // and rendering the bar before that check would flash it at users who
  // already dismissed it.
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    const setOffset = (px: number) =>
      document.documentElement.style.setProperty("--api-banner-h", `${px}px`);

    if (!onHome) {
      setVisible(false);
      setOffset(0);
      return;
    }

    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(BANNER_DISMISS_KEY) === "1";
    } catch {
      // Private mode / storage disabled — show the bar, just don't remember.
    }
    if (dismissed) {
      setOffset(0);
      return;
    }

    setVisible(true);

    // The offset has to track the same breakpoint the bar renders at, or a
    // phone reserves 44px for a bar that is not on screen.
    const mq = window.matchMedia(SM_QUERY);
    const sync = () => setOffset(mq.matches ? BANNER_HEIGHT : 0);
    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      setOffset(0);
    };
  }, [onHome]);

  const dismiss = () => {
    setVisible(false);
    document.documentElement.style.setProperty("--api-banner-h", "0px");
    try {
      window.localStorage.setItem(BANNER_DISMISS_KEY, "1");
    } catch {
      // Nothing to persist to; the bar stays dismissed for this page view.
    }
  };

  if (!visible) return null;

  return (
    <div
      className="hidden sm:flex fixed left-0 top-0 z-[1000] w-full items-center justify-center gap-3.5 px-6 text-[14px] text-white flex-wrap"
      style={{ height: BANNER_HEIGHT, background: "linear-gradient(90deg,#2f86d5,#238dd2 60%,#1c79b8)" }}
    >
      <span className="text-[10.5px] font-bold tracking-[.08em] uppercase rounded-full px-2.5 py-1" style={{ background: "rgba(255,255,255,0.2)" }}>
        New
      </span>

      <span className="max-sm:hidden">
        <b className="font-bold">NoteDoctor.AI now speaks MCP</b> — connect Claude, Cursor or any MCP client to the
        screening engine.
      </span>
      <span className="sm:hidden">
        <b className="font-bold">NoteDoctor.AI now speaks MCP</b>
      </span>

      <Link
        href={MCP_GUIDE_URL}
        className="inline-flex items-center gap-1.5 font-bold text-white underline underline-offset-[3px] whitespace-nowrap"
      >
        See how
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>

      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="ml-2 grid place-items-center w-[22px] h-[22px] rounded-md opacity-75 transition-opacity hover:opacity-100"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
