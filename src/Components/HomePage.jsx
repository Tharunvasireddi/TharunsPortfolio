import React from "react";
import { Github, Linkedin, Download } from "lucide-react";
import resumePDF from "../Assests/TharunResume (3).pdf";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function HomePage() {
  return (
    <div className="hero min-h-screen bg-base-100" id="Home">
      <motion.div
        className="hero-content text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-2xl">
          <motion.h1
            className="text-5xl font-bold sm:text-7xl text-base-content"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-primary">Tarun Vasireddi</span>
          </motion.h1>
          <motion.p
            className="py-8 text-lg text-base-content/80"
            variants={itemVariants}
          >
            Full Stack Developer | DSA Enthusiast | Problem Solver
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            variants={itemVariants}
          >
            <motion.a
              href={resumePDF}
              download="Tharun-Vasireddi-Resume.pdf"
              className="btn btn-primary btn-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="mr-2" />
              Download Resume
            </motion.a>
            <motion.a
              href="https://github.com/Tharunvasireddi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/tarun-vasireddi-152310319"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;
