import React from "react";
import { Github, Linkedin } from "lucide-react";

function HomePage({ github }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen gap-6 p-4 md:p-8 bg-gray-700 " id="Home">
      {/* <img
        src=""
        alt=""
        className="text-white w-32 h-32 md:w-48 md:h-48 object-cover rounded-full"
      /> */}

      <h1 className="text-white font-serif text-2xl md:text-4xl text-center">
        Hi, I'm Tarun Vasireddi
      </h1>

      <p className="text-white font-serif text-lg md:text-2xl text-center">
        Frontend Developer | DSA Enthusiast | Problem Solver
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          className="bg-slate-400 px-4 py-2 text-white text-sm md:text-base hover:bg-slate-600 rounded-lg hover:text-black font"
          onClick={() =>
            (window.location.href = "https://github.com/Tharunvasireddi")
          }
        >
          <Github  />
        </button>
        <button
          className="bg-slate-400 px-4 py-2 text-white text-sm md:text-base hover:bg-slate-600 rounded-lg hover:text-black font-mono"
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
