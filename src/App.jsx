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
    <div className="min-h-screen m-0 p-0" data-theme="portfolio-theme">
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Projects projects={projectsData} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
