import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center pt-25 relative overflow-hidden"
    >
      {/* Hero Content */}
      <div className="w-full text-center relative z-10">
        {/* Hero Title */}
        <h1
          className="header text-4xl md:text-7xl font-extrabold mb-6"
          data-aos="zoom-in-down"
        >
          Hi I'm Yafer
        </h1>

        {/* Typewriter Effect */}
        <p
          className="text-xl md:text-4xl font-bold text-center mb-6"
          data-aos="zoom-in-up"
        >
          <span className="type-writer">
            <Typewriter
              words={[
                "Web Developer",
                "Tech Support",
                "PC Builder",
                "Content Creator",
                "Airdrop Hunter",
                "Crypto Enthusiast",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
            />
          </span>
        </p>

        {/* Unique Button */}
        <a href="#projects">
          <button
            className="button px-2 py-1 md:px-4 md:py-3 text-sm md:text-md md:font-semibold
              hover:scale-105 transition duration-300"
            data-aos="zoom-in-up"
          >
            View My Work
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
