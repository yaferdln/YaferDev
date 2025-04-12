import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once
    });
    AOS.refresh(); // Refresh AOS to ensure animations are applied
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col md:flex-row p-6 items-center justify-center"
      data-aos="fade-up"
    >
      <div className="w-full text-center">
        {/* Hero Title */}
        <h1
          className="text-5xl md:text-8xl font-extrabold mb-6"
          data-aos="fade-down"
        >
          YaferDev
        </h1>

        {/* Typewriter Effect */}
        <p className="text-4xl font-bold text-center mb-6" data-aos="fade-down">
          I'm Yafer{" "}
          <span className="text-blue-600 dark:text-amber-300  transition-colors duration-300">
            <Typewriter
              words={[
                "a Web Developer",
                "a Tech Support",
                "a PC Builder",
                "a Content Creator",
                "an Airdrop Hunter",
                "a Crypto Enthusiast",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>
        </p>

        {/* Unique Button */}
        <button
          className="px-6 py-3 text-lg font-semibold text-neutral-50 bg-blue-600 
             hover:bg-blue-800 dark:text-neutral-950 dark:bg-amber-300 hover:scale-110 transition duration-300"
          data-aos="zoom-in-up"
          onClick={() =>
            window.open("https://your-resume-or-portfolio-link.com", "_blank")
          }
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
