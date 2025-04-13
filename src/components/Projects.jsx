import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "My Portfolio Website",
      description:
        "My personal portfolio website built with ReactJS and TailwindCSS to showcase my skills and projects.",
      image: "/portfolio.png", // Replace with your image path
      demoLink: "https://yaferdev.vercel.app/",
      codeLink: "https://github.com/yaferdln/YaferDev.git",
    },
    {
      title: "Portfolio UI",
      description:
        "A simple portfolio UI template built with using only HTML and CSS.",
      image: "/projects/yaferdln.github.io_Profle-Card-UI.png", // Replace with your image path
      demoLink: "https://yaferdln.github.io/Profle-Card-UI/",
      codeLink: "https://github.com/yaferdln/Profle-Card-UI.git",
    },
    {
      title: "Animated Image Gallery",
      description:
        "Basic Image gallery with hover effects and animations, built using HTML, CSS",
      image: "/projects/yaferdln.github.io_Animated-Image-Gallery.png", // Replace with your image path
      demoLink: "https://yaferdln.github.io/Animated-Image-Gallery/",
      codeLink: "https://github.com/yaferdln/Animated-Image-Gallery.git",
    },
    {
      title: "Icon Neon Hover Effect",
      description:
        "Stunning neon hover effect for icons, built using HTML and CSS",
      image: "/projects/yaferdln.github.io_Icon-Neon-Hover-Effect.png", // Replace with your image path
      demoLink: "https://yaferdln.github.io/Icon-Neon-Hover-Effect/",
      codeLink: "https://github.com/yaferdln/Icon-Neon-Hover-Effect.git",
    },
  ];

  return (
    <section id="projects" className="min-h-screen p-6 pt-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-600 dark:text-amber-300  uppercase transition-colors duration-300">
          My Projects
        </h2>
        <p className="mt-4 text-sm md:text-lg">
          Here are some of the projects I’ve worked on. Click the demo or source
          code links to explore more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-50 dark:bg-slate-900 hover:bg-gray-200 dark:hover:bg-slate-800  rounded-lg shadow-lg hover:shadow-2xl/70 hover:scale-105 transition duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-lg w-full h-48 object-cover "
            />
            <div className="p-6">
              <h3 className="text-base md:text-xl font-bold mb-2 text-blue-600 dark:text-amber-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-base text-blue-600 dark:text-amber-300 hover:underline transition-colors duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-base text-blue-600 dark:text-amber-300 hover:underline transition-colors duration-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
