import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });

      // 👇 Refresh AOS so it recalculates positions after initial render
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col p-6 items-center justify-center pt-16"
      data-aos="fade-up"
    >
      <div className="w-full text-center">
        {/* Hero Title */}
        <h1
          className="text-4xl md:text-7xl header font-extrabold mb-6"
          data-aos="slide-right"
        >
          Hi I'm Yafer
        </h1>

        {/* Typewriter Effect */}
        <p
          className="text-xl md:text-4xl font-bold text-center mb-6"
          data-aos="fade-up"
        >
          <span className="type-writer transition-colors duration-300">
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
              deleteSpeed={30}
              delaySpeed={1000}
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
