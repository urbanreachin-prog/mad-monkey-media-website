import React from "react";

interface GlassPanelProps {
  children: React.ReactNode;
  variant?: "default" | "strong" | "pill";
  className?: string;
  as?: "div" | "section" | "aside" | "article" | "span";
}

/**
 * Selective Luxury Glassmorphism Surface
 * Uses semi-transparent white surfaces, controlled backdrop blur, thin borders,
 * and automatic solid fallbacks when backdrop-filter is unsupported.
 */
export function GlassPanel({
  children,
  variant = "default",
  className = "",
  as: Component = "div",
}: GlassPanelProps) {
  const variantClasses = {
    default: "glass-surface rounded-2xl",
    strong: "glass-surface-strong rounded-3xl",
    pill: "glass-media-pill rounded-full",
  }[variant];

  return (
    <Component className={`${variantClasses} ${className}`.trim()}>
      {children}
    </Component>
  );
}
