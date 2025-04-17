import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      category: "I Have Experience With",
      items: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-teal-500" />,
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-purple-500" />,
        },
        { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      ],
    },
    {
      category: "I'm Currently Learning",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-teal-500" />,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen p-6 pt-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-2xl md:text-4xl font-bold header uppercase">
          My Skills
        </h2>
        <p className="mt-4 text-sm md:text-lg">
          Here are the technologies I have experience with and the ones I'm
          currently learning to expand my expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="card p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <h3 className="text-lg md:text-2xl font-bold mb-8 text-center header">
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-6 md:gap-10 justify-center">
              {skill.items.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center w-1/8 sm:1/4 md:w-auto"
                  data-aos="zoom-in-down"
                  data-aos-delay={index * 300}
                >
                  <div className="text-2xl md:text-4xl p-4 bg-[#e2e8f0] dark:bg-[#1a3a4a]  shadow-md transition-transform transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="md:mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
