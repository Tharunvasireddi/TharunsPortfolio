import React from "react";
import { Github, Linkedin } from "lucide-react";

function HomePage() {
  return (
    <div
      className="hero-theme-a flex justify-center items-center flex-col min-h-screen gap-6 p-4 md:p-8 font-ui"
      id="Home"
    >
      <div className="grunge-overlay" />

      <h1 className="text-og-red font-display text-2xl md:text-4xl text-center">
        Hi, I'm Tarun Vasireddi
      </h1>

      <p className="text-white font-ui text-lg md:text-2xl text-center">
        Frontend Developer | DSA Enthusiast | Problem Solver
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          className="bg-ember px-4 py-2 text-white text-sm md:text-base hover:bg-og-red rounded-lg"
          onClick={() =>
            (window.location.href = "https://github.com/Tharunvasireddi")
          }
        >
          <Github />
        </button>
        <button
          className="bg-ember px-4 py-2 text-white text-sm md:text-base hover:bg-og-red rounded-lg"
          onClick={() =>
            (window.location.href =
              "https://linkedin.com/in/tarun-vasireddi-152310319")
          }
        >
          <Linkedin />
        </button>
      </div>
    </div>
  );
}

export default HomePage;
