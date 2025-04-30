import React from "react";
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
const App = () => {
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
