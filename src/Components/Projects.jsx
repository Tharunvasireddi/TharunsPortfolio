import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
void motion;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

function Projects({ projects }) {
  return (
    <section className="border-y border-line bg-panel py-24 sm:py-32" id="project">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">Selected work with real product constraints.</h2>
          </div>
          <p className="section-copy max-w-md lg:text-right">
            Each card highlights the problem space, implementation stack, and
            direct paths to inspect the live result or code.
          </p>
        </div>
        <motion.div
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
