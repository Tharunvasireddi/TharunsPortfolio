import React from "react";
import { motion } from "framer-motion";
// ensure build/lint tools that don't detect JSX usage don't mark this as unused
void motion;

// AnimatedButton: a small wrapper around a motion.button or motion.a
// Props:
// - as: "button" | "a" (defaults to button)
// - href: if as === 'a'
// - variant: 'solid' | 'ghost' | 'outline'
// - size: 'sm' | 'md' | 'lg'
// - className: extra classes
// - children
// - icon: React node displayed before children
export default function AnimatedButton({
  as = "button",
  href,
  variant = "solid",
  size = "md",
  className = "",
  children,
  icon = null,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 disabled:pointer-events-none disabled:opacity-60";
  const sizeMap = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-[15px]",
    lg: "h-12 px-5 text-base",
  };

  const variantMap = {
    solid:
      "bg-accent text-white shadow-[0_12px_30px_rgba(99,102,241,0.22)] hover:bg-indigo-500",
    ghost:
      "border border-line bg-white/[0.03] text-ink hover:border-white/16 hover:bg-white/[0.06]",
    outline:
      "border border-line bg-transparent text-muted hover:border-accent/60 hover:text-ink",
  };

  const classes = `${base} ${sizeMap[size] || sizeMap.md} ${
    variantMap[variant] || variantMap.solid
  } ${className}`.trim();

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.18, ease: "easeOut" },
  };

  if (as === "a") {
    return (
      <motion.a {...motionProps} href={href} className={classes} {...props}>
        {icon}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button {...motionProps} className={classes} {...props}>
      {icon}
      {children}
    </motion.button>
  );
}
