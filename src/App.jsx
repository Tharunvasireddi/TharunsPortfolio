import React from "react";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { projectsData } from "./data/projectsData";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-ink" data-theme="portfolio-theme">
      <Navbar />
      <main>
        <HomePage />
        <About />
        <Skills />
        <Projects projects={projectsData} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
