import React from "react";

function Projects({ quiz, weather, password }) {
  return (
    <div
      className="hero-theme-a min-h-screen flex flex-col items-center justify-start gap-10 px-4 py-8 font-ui"
      id="project"
      role="region"
      aria-labelledby="projects-heading"
    >
      {/* hide heavy overlay on small screens to improve readability and performance */}
      <div className="grunge-overlay hidden sm:block" />
      <h1
        id="projects-heading"
        className="text-og-red text-3xl sm:text-4xl font-bold font-display"
      >
        Projects
      </h1>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        ].map((project, index) => (
          <article
            key={index}
            className="flex flex-col bg-slate-950 items-stretch justify-between gap-4 border rounded-md p-0 shadow-lg overflow-hidden w-full"
          >
            <figure className="w-full">
              <img
                src={project.img}
                alt={project.title + " screenshot"}
                loading="lazy"
                className="w-full h-48 md:h-60 lg:h-72 object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
            <div className="px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-white font-serif text-lg leading-relaxed">
                {project.title}
              </p>
              <div className="flex gap-3 w-full sm:w-auto flex-col sm:flex-row">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} demo in new tab`}
                  className="w-full sm:w-auto text-center bg-ember text-white text-sm px-4 py-2 rounded hover:bg-og-red focus:outline-none focus:ring-2 focus:ring-ember"
                >
                  Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} source code in new tab`}
                  className="w-full sm:w-auto text-center bg-maroon text-white text-sm px-4 py-2 rounded hover:bg-og-red focus:outline-none focus:ring-2 focus:ring-maroon"
                >
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
