import React from "react";

function Projects({ quiz, weather, password, age }) {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center gap-10 p-4" id="project">
      <h1 className="text-white text-4xl font-bold font-serif">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            img: quiz,
            title: "Quiz App",
            demo: "https://tharunvasireddi.github.io/QUIZAPP/",
            code: "https://github.com/Tharunvasireddi/QUIZAPP",
          },
          {
            img: weather,
            title: "Weather App",
            demo: "https://tharunvasireddi.github.io/WeatherApp/",
            code: "https://github.com/Tharunvasireddi/WeatherApp/deployments/github-pages",
          },
          {
            img: password,
            title: "Password Generator",
            demo: "https://tharunvasireddi.github.io/PasswordGenerator/",
            code: "https://github.com/Tharunvasireddi/PasswordGenerator",
          },
          {
            img: age,
            title: "Age Calculator",
            demo: "https://github.com/Tharunvasireddi/Agecalculator/",
            code: "https://github.com/Tharunvasireddi/Agecalculator",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-slate-950 items-center justify-center gap-4 border rounded-md p-0 shadow-lg"
          >
            <img
              src={project.img}
              alt={project.title}
              className="hover:scale-110 w-full h-60 object-cover p-4 transition-transform duration-300"
            />
            <p className="text-white font-serif text-lg leading-relaxed">
              {project.title}
            </p>
            <div className="flex gap-4 mb-4">
              <button
                className="bg-indigo-500 text-white text-sm px-4 py-2 rounded hover:bg-indigo-400"
                onClick={() => (window.location.href = project.demo)}
              >
                Demo
              </button>
              <button
                className="bg-rose-500 text-white text-sm px-4 py-2 rounded hover:bg-rose-400"
                onClick={() => (window.location.href = project.code)}
              >
                Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
