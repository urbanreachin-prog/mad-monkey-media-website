"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { designTokens } from "@/config/tokens";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/**
 * Restrained editorial reveal component.
 * Automatically disables transform/delay when prefers-reduced-motion is active.
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: designTokens.motion.durationBase,
        delay,
        ease: designTokens.motion.easeEditorial,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
