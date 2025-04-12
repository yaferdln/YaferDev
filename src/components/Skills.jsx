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
      category: "Technologies I Have Experience With",
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
      category: "Technologies I'm Currently Learning",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen p-6">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-amber-300 uppercase">
          My Skills
        </h2>
        <p className="mt-4 text-lg">
          Here are the technologies I have experience with and the ones I'm
          currently learning to expand my expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-neutral-50 dark:bg-slate-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-600 dark:text-amber-300">
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {skill.items.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center"
                  data-aos="zoom-in-down"
                  data-aos-delay={index * 300}
                >
                  <div className="text-5xl p-4 bg-neutral-200 dark:bg-slate-700 rounded-lg shadow-md transition-transform transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
