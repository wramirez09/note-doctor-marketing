"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// Shared scroll entrance: fade in while rising a short distance. Each element
// animates once, when its top reaches the middle of the viewport. MotionConfig
// in ClientLayout turns the movement off for visitors who prefer reduced motion.

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const DURATION = 0.9;
// Shrinks the observed area to the top half of the viewport, so "in view"
// means the element has scrolled up to the center line.
const CENTER = "0px 0px -50% 0px";

/**
 * True once the element reaches the center of the viewport, or once the page
 * is scrolled to the bottom: content near the end of a short page or on a tall
 * screen may never get that high, and must not stay hidden.
 * `immediate` skips the wait, for above-the-fold content that animates on load.
 */
function useReveal(immediate: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const centered = useInView(ref, { once: true, margin: CENTER });
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    if (immediate || centered || atEnd) return;
    const check = () => {
      const { scrollHeight } = document.documentElement;
      if (window.scrollY + window.innerHeight >= scrollHeight - 2) setAtEnd(true);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [immediate, centered, atEnd]);

  return { ref, shown: immediate || centered || atEnd };
}

type BaseProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

type TriggerProps = {
  delay?: number;
  /** Animate on mount rather than at the center line (hero content). */
  immediate?: boolean;
};

/** A single element that fades up when scrolled to the center of the screen. */
export function Reveal({
  children,
  className,
  style,
  id,
  delay = 0,
  y = 32,
  immediate = false,
}: BaseProps & TriggerProps & { y?: number }) {
  const { ref, shown } = useReveal(immediate);
  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: DURATION, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

const groupVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  shown: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  shown: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

/** Container whose RevealItem children fade up one after another. */
export function RevealGroup({
  children,
  className,
  style,
  id,
  stagger = 0.14,
  delay = 0,
  immediate = false,
}: BaseProps & TriggerProps & { stagger?: number }) {
  const { ref, shown } = useReveal(immediate);
  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      style={style}
      variants={groupVariants(stagger, delay)}
      initial="hidden"
      animate={shown ? "shown" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

/** A child of RevealGroup; takes its turn in the group's stagger. */
export function RevealItem({ children, className, style, id }: BaseProps) {
  return (
    <motion.div id={id} className={className} style={style} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
