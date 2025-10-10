import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Skills() {
  const skillCategories = [
    {
      title: "Frontend & Backend",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
      ],
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "Git", "GitHub", "VS Code"],
    },
    {
      title: "Programming Languages",
      skills: ["C", "Java", "Python"],
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-base-100 py-20"
      id="Skills"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">
            Technical Skills
          </h2>
          <p className="text-base-content/70 mt-4 text-lg">
            A summary of my technical capabilities.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="card-body">
                <h3 className="card-title text-2xl text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 mt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="badge badge-lg badge-outline border-primary/50 text-primary/90"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
