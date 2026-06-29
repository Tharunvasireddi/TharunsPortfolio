import React from "react";
import { ArrowUp, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
void motion;

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="border-t border-line bg-panel"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="section-shell flex flex-col items-center justify-between gap-5 py-8 md:flex-row">
        <div className="flex items-center gap-3">
          <AnimatedButton
            as="a"
            href="https://github.com/Tharunvasireddi"
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="sm"
            aria-label="GitHub"
          >
            <Github size={17} />
          </AnimatedButton>
          <AnimatedButton
            as="a"
            href="https://linkedin.com/in/tarun-vasireddi-152310319"
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </AnimatedButton>
        </div>

        <div className="text-center text-sm text-muted">
          Copyright {year} Tarun Vasireddi. Built with React, Vite, and Tailwind CSS.
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex h-9 items-center gap-2 rounded-md border border-line bg-white/[0.03] px-3 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-ink"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
          Top
        </button>
      </div>
    </motion.footer>
  );
}
