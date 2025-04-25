import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { aboutText } from "../constants/aboutContent";
import Marquee from "react-fast-marquee";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiExpress, SiAxios } from "react-icons/si";

const techStack = [
  {
    icon: FaReact,
    title: "React",
    color: "text-cyan-400",
    url: "https://react.dev",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    color: "text-teal-400",
    url: "https://tailwindcss.com",
  },
  {
    icon: FaNodeJs,
    title: "Node.js",
    color: "text-green-500",
    url: "https://nodejs.org",
  },
  {
    icon: SiExpress,
    title: "Express",
    color: "text-gray-300",
    url: "https://expressjs.com",
  },
  {
    icon: SiMysql,
    title: "MySQL",
    color: "text-yellow-300",
    url: "https://www.mysql.com",
  },
  {
    icon: SiAxios,
    title: "Axios",
    color: "text-cyan-300",
    url: "https://axios-http.com",
  },
  {
    icon: FaHtml5,
    title: "HTML5",
    color: "text-orange-500",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: FaCss3Alt,
    title: "CSS3",
    color: "text-blue-400",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    color: "text-white",
    url: "https://github.com",
  },
];

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
        className="max-w-6xl h-auto card transition-colors duration-300 p-6 shadow-lg"
        data-aos="fade-left"
      >
        <h2 className="text-2xl md:text-4xl header uppercase text-center mb-8">
          Who's behind the code?
        </h2>

        <p
          className="leading-relaxed mb-4 text-sm md:text-base p-6"
          dangerouslySetInnerHTML={{
            __html: aboutText.replace(/\n/g, "<br />"),
          }}
        ></p>
      </div>

      <Marquee speed={60} pauseOnHover gradient={false} autoFill>
        <div className=" overflow-hidden flex items-center justify-center gap-2 text-5xl px-2 md:gap-8 md:text-7xl md:px-4">
          {techStack.map(({ icon: Icon, title, color, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
            >
              <Icon
                className={`${color} hover:rotate-360 transition ease duration-500 cursor-pointer`}
              />
            </a>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default About;
