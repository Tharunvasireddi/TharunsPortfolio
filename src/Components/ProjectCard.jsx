import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
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
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <figure>
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-56 object-cover"
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-base-content">
          {project.title}
        </h2>
        <p className="text-base-content/80 mt-2">{project.description}</p>
        <div className="card-actions justify-start mt-6">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {demoLabel}
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost text-base-content/80"
          >
            {codeLabel}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
