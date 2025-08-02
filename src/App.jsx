import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Education/>
      <Skills />
      <Projects />
      <Achievements/>
      <Contact />
    </>
  );
};

export default App;
