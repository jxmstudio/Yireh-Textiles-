"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Section reveal (plan §2.6): opacity 0→1, translateY 24px→0, 600ms on
 * ease-out-expo, triggered at 15% in view, stagger 80ms across children.
 *
 * Wrap a group in <Reveal> and each child in <RevealItem> to get the stagger.
 * A lone <RevealItem> inside <Reveal> just animates once.
 *
 * Under prefers-reduced-motion both render as plain elements with no transform
 * or opacity animation at all (§8.4).
 */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
