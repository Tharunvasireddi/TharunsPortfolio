import React from "react";
import { motion } from "framer-motion";

// Reusable text reveal that animates each character with a stagger.
// Props:
// - text: string to reveal
// - className: applied to the wrapper (use for font-size, weight)
// - delay: optional delay before animation starts
// - stagger: per-character stagger (default 0.03)
export default function TextReveal({
  text = "",
  className = "",
  delay = 0,
  stagger = 0.03,
}) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={child}
          className={char === " " ? "inline-block w-2" : "inline-block"}
          aria-hidden
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
