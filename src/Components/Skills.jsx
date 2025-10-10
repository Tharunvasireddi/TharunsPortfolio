import React from "react";

function Skills() {
  const skills = [
    { name: "React", percentage: 75 },
    { name: "JavaScript", percentage: 85 },
    { name: "Tailwind CSS", percentage: 85 },
    { name: "HTML", percentage: 80 },
  ];

  const Technologies = [
    { name: "Git", percentage: 75 },
    { name: "GitHub", percentage: 75 },
    { name: "VS Code", percentage: 75 },
  ];
  const ProgrammingLan = [
    { name: "C", percentage: 85 },
    { name: "java", percentage: 75 },
    { name: "python", percentage: 70 },
  ];

  return (
    <div
      className="hero-theme-a text-white p-6 flex flex-col items-center justify-center gap-6 min-h-screen font-ui"
      id="Skills"
    >
      <div className="grunge-overlay" />
      <h1 className="text-4xl font-bold font-display">Skills</h1>

      <div className="flex flex-wrap items-start justify-center gap-6 w-full max-w-6xl">
        <div className="flex flex-col border  p-4 rounded-md w-full md:w-1/2 lg:w-2/5">
          <h2 className="text-2xl font-bold mb-4">Frontend Development</h2>
          <div>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-lg">{skill.name}</span>
                  <span className="text-lg">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-paper  rounded-full h-2">
                  <div
                    className="bg-ember h-2 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col border  p-4 rounded-md w-full md:w-1/2 lg:w-2/5">
          <h2 className="text-2xl font-bold mb-4">Tools & Technology</h2>
          <div>
            {Technologies.map((tech, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-lg">{tech.name}</span>
                  <span className="text-lg">{tech.percentage}%</span>
                </div>
                <div className="w-full bg-paper rounded-full h-2">
                  <div
                    className="bg-ember h-2 rounded-full"
                    style={{ width: `${tech.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col border  p-4 rounded-md w-full md:w-1/2 lg:w-2/5">
          <h2 className="text-2xl font-bold mb-4">Languages</h2>
          <div>
            {ProgrammingLan.map((lang, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-lg">{lang.name}</span>
                  <span className="text-lg">{lang.percentage}%</span>
                </div>
                <div className="w-full bg-paper rounded-full h-2">
                  <div
                    className="bg-ember h-2 rounded-full"
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
