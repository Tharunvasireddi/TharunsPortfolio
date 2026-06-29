import React from "react";
import { Code2, Database, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";
void motion;

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Interfaces, state, responsive layouts, and product polish.",
    skills: ["React", "JavaScript", "TypeScript", "HTML", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    icon: Database,
    description: "APIs, persistence, authentication flows, and data handling.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Programming & Tools",
    icon: TerminalSquare,
    description: "Problem solving, version control, and daily developer workflow.",
    skills: ["C", "Java", "Python", "Git", "GitHub", "VS Code"],
  },
];

const techInitial = (skill) =>
  skill
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

function Skills() {
  return (
    <motion.section
      className="bg-bg py-24 sm:py-32"
      id="Skills"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">A practical stack for modern web apps.</h2>
          <p className="section-copy mt-5">
            Technologies are grouped by how I use them: building interfaces,
            connecting product flows, and solving implementation problems.
          </p>
        </div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3"
          variants={sectionVariants}
        >
          {skillCategories.map(({ title, icon: _Icon, description, skills }) => (
            <motion.article
              key={title}
              className="premium-card rounded-lg p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.32)]"
              variants={cardVariants}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white/[0.04] text-accent">
                {React.createElement(_Icon, {
                  size: 20,
                  "aria-hidden": "true",
                })}
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-[0] text-ink">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex min-h-12 items-center gap-3 rounded-md border border-line bg-bg/70 px-3 text-sm text-ink transition-colors duration-200 hover:border-white/16"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent/12 text-xs font-semibold text-indigo-300">
                      {techInitial(skill)}
                    </span>
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;
