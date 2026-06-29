import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
void motion;

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProjectCard = ({
  project,
  demoLabel = "Live Demo",
  codeLabel = "Source Code",
}) => {
  return (
    <motion.div
      className="group premium-card flex h-full flex-col overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_28px_70px_rgba(0,0,0,0.38)]"
      variants={cardVariants}
    >
      <figure className="overflow-hidden border-b border-line bg-bg">
        <img
          src={project.img}
          alt={project.title}
          className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          loading="lazy"
        />
      </figure>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold tracking-[0] text-ink">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {(project.tech ?? ["JavaScript", "HTML", "CSS"]).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <AnimatedButton
            as="a"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            variant="solid"
            size="md"
          >
            <ExternalLink size={16} />
            {demoLabel}
          </AnimatedButton>
          <AnimatedButton
            as="a"
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="md"
          >
            <Github size={16} />
            {codeLabel}
          </AnimatedButton>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
