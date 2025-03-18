import React from "react";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import quizImage from "./Images/quiz.png";
import weatherImage from "./Images/weatherApp.avif";
import passwordImage from "./Images/password.png";
import ageCalculator from "./Images/unnamed.png";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="bg-gray-900 min-h-screen  m-0 p-0 ">
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Projects
        quiz={quizImage}
        weather={weatherImage}
        password={passwordImage}
        age={ageCalculator}
      />
      <Contact />
    </div>
  );
}

export default App;
