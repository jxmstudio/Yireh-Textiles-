"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Image scale-on-scroll (plan §2.6): 1.08 → 1.0 across the scroll range.
 *
 * The plan singles this out as the one effect that does the most for "modern
 * and premium", so it is used sparingly — the editorial intro and the featured
 * project only. Never more than two sections, per the "do not add" list.
 *
 * The wrapper owns `overflow-hidden`; the child is the thing that scales.
 */
export function ScaleOnScroll({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale }} className="relative h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
