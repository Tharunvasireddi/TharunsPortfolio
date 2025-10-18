import React from "react";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function About() {
  return (
    <motion.div
      className="min-h-screen bg-base-200 py-20"
      id="About"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">
            <TextReveal text={"About Me"} className="inline-block" />
          </h2>
          <p className="text-base-content/70 mt-4 text-lg">
            <TextReveal
              text={"A little bit about my journey and education."}
              className="inline-block"
              delay={0.15}
            />
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <div className="prose prose-lg text-base-content/90 max-w-none">
              <p>
                I'm a passionate web developer, currently learning React and
                building dynamic, responsive web applications. I love creating
                user-friendly interfaces and continuously improving my skills
                through hands-on projects.
              </p>
              <p>
                Always eager to solve problems and stay updated with modern web
                technologies. I am actively seeking internship opportunities to
                gain real-world experience and grow as a developer.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <motion.div
              className="card bg-base-100 shadow-2xl"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="card-body">
                <h3 className="card-title text-2xl text-primary">Education</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="font-semibold text-lg">
                      Bachelor in Technology
                    </p>
                    <p className="text-base-content/80">
                      GMR Institute of Technology
                    </p>
                    <p className="text-sm text-base-content/60">2023 - 2027</p>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Specialization</p>
                    <p className="text-base-content/80">
                      Electronics and Communication Engineering
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default About;
