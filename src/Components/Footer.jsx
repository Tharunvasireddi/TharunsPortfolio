import React from "react";
import { Github, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
// prevent false-positive 'unused' lint errors in some toolchains
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
      className="bg-base-200 border-t border-base-300 mt-16"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <AnimatedButton
            as="a"
            href="https://github.com/Tharunvasireddi"
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="sm"
            aria-label="GitHub"
            className=""
          >
            <Github />
          </AnimatedButton>
          <AnimatedButton
            as="a"
            href="https://linkedin.com/in/tarun-vasireddi-152310319"
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="sm"
            aria-label="LinkedIn"
            className=""
          >
            <Linkedin />
          </AnimatedButton>
        </div>

        <div className="text-center text-sm text-base-content/70">
          © {year} Tarun Vasireddi. All rights reserved.
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={scrollToTop}
            className="btn btn-outline btn-sm flex items-center gap-2"
          >
            <ArrowUp />
            Top
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
