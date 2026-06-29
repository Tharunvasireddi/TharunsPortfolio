import React from "react";
import { Briefcase, GraduationCap, MapPin, Radar, Sparkles } from "lucide-react";
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
    },
  },
};

const aboutCards = [
  {
    icon: Briefcase,
    label: "Experience",
    value: "Hands-on projects",
    detail: "Building practical web apps across frontend flows and backend basics.",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech, 2023 - 2027",
    detail: "Electronics and Communication Engineering at GMR Institute of Technology.",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    detail: "Working remotely and collaborating across async-first teams.",
  },
  {
    icon: Radar,
    label: "Current Focus",
    value: "React, DSA, systems",
    detail: "Sharpening interface craft, JavaScript fundamentals, and problem solving.",
  },
  {
    icon: Sparkles,
    label: "Open To Work",
    value: "Internships",
    detail: "Looking for roles where I can contribute, learn, and ship real software.",
  },
];

function About() {
  return (
    <motion.section
      className="border-y border-line bg-panel py-24 sm:py-32"
      id="About"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title">A developer growing through shipped work.</h2>
          </div>
          <div className="space-y-6 section-copy">
            <p>
              I am a web developer focused on building dynamic, responsive
              applications with React and modern JavaScript. I enjoy translating
              ideas into interfaces that feel clear, fast, and easy to use.
            </p>
            <p>
              My learning is project-led: I build, test, refine, and keep
              improving the fundamentals behind every decision. I am actively
              seeking internship opportunities where I can contribute to real
              products and grow with experienced engineers.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {aboutCards.map(({ icon: _Icon, label, value, detail }) => (
            <motion.article
              key={label}
              className="premium-card rounded-lg p-5 transition-colors duration-200 hover:border-accent/40"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {React.createElement(_Icon, {
                size: 20,
                className: "text-accent",
                "aria-hidden": "true",
              })}
              <p className="mt-5 text-sm font-medium text-muted">{label}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{value}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
