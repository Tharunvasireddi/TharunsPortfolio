import React from "react";

function About() {
  return (
    <div
      className="hero-theme-a min-h-screen flex flex-col items-center justify-center gap-10 p-4 font-ui"
      id="About"
    >
      <div className="grunge-overlay" />
      <div className="flex flex-col items-center justify-center gap-3 max-w-4xl text-center">
        <h1 className="text-og-red text-4xl font-bold font-display">About</h1>
        <p className="text-white font-ui text-lg leading-relaxed">
          I’m a passionate web developer, currently learning React and building
          dynamic, responsive web applications. I love creating user-friendly
          interfaces and continuously improving my skills through hands-on
          projects. Always eager to solve problems and stay updated with modern
          web technologies. Actively seeking internship opportunities to gain
          real-world experience and grow as a developer.
        </p>
      </div>

      <div className="w-full px-4">
        <h1 className="text-2xl text-og-red font-display font-semibold text-center mb-4">
          Education
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-6 ">
          <div className="flex flex-col items-center justify-center text-white gap-2 border border-gray-500 p-5 rounded-lg   bg-gray-900">
            <h2 className="text-xl font-serif">Bachelor in Technology</h2>
            <p className="text-lg">GMR Institute of Technology</p>
            <p className="text-lg">2023-2027</p>
            <p className="text-lg text-center text-wrap sm:text-nowrap">
              Specialized in Electronics and Communication Engineering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
