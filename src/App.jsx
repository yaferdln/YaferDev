import React, { useEffect } from "react";
import {
  Navbar,
  Hero,
  About,
  Services,
  Skills,
  Projects,
  Contact,
  Footer,
  BackToTopButton,
} from "./sections/index.js";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
      easing: "ease-in-sine",
      duration: 500,
    }); // Initialize AOS
  }, []);
  return (
    <div className="min-h-screen font-inter bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text overflow-x-hidden">
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
