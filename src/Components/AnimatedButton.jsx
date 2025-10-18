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
  const base = "flex items-center gap-2 justify-center font-medium rounded-md";
  const sizeMap = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantMap = {
    solid: "btn btn-primary",
    ghost: "btn btn-ghost",
    outline: "btn btn-outline",
  };

  const classes = `${base} ${sizeMap[size] || sizeMap.md} ${
    variantMap[variant] || variantMap.solid
  } ${className}`.trim();

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.96 },
    transition: { type: "spring", stiffness: 400, damping: 28 },
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
