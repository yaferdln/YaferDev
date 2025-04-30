import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";

import { aboutText } from "../constants/aboutContent";
import { techStack } from "../constants/techStack";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen p-6 flex flex-col items-center justify-center gap-8 pt-16"
    >
      <div
        className="custom-container max-w-6xl mx-auto h-auto p-6 shadow-lg"
        data-aos="fade-up-left"
      >
        <h2
          className="header text-2xl md:text-4xl font-bold uppercase text-center mb-8"
          data-aos="slide-left"
        >
          Who's behind the code?
        </h2>

        <p
          data-aos="slide-right"
          className="leading-relaxed mb-4 text-sm md:text-base p-0 md:p-6"
          dangerouslySetInnerHTML={{
            __html: aboutText.replace(/\n/g, "<br />"),
          }}
        ></p>
      </div>

      <Marquee speed={60} pauseOnHover gradient={false} autoFill>
        <div
          className="overflow-hidden flex items-center justify-center gap-2 text-5xl px-2 md:gap-8 md:text-7xl md:px-4"
          data-aos="zoom-in"
        >
          {techStack.map(({ icon: Icon, title, color, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
            >
              <Icon
                className={`${color} hover:rotate-360 transform duration-500 cursor-pointer`}
              />
            </a>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default About;
