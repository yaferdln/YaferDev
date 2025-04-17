import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTopButton from "./components/BackToTop.jsx";

const App = () => {
  return (
    <div className="min-h-screen font-jet bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
