import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "My Portfolio Website",
      description:
        "My personal portfolio website built with ReactJS and TailwindCSS to showcase my skills and projects.",
      image: "/portfolio.png",
      demoLink: "https://yaferdev.vercel.app/",
      codeLink: "https://github.com/yaferdln/YaferDev.git",
    },
    {
      title: "Portfolio UI",
      description:
        "A simple portfolio UI template built with using only HTML and CSS.",
      image: "/projects/yaferdln.github.io_Profle-Card-UI.png",
      demoLink: "https://yaferdln.github.io/Profle-Card-UI/",
      codeLink: "https://github.com/yaferdln/Profle-Card-UI.git",
    },
    {
      title: "Animated Image Gallery",
      description:
        "Basic Image gallery with hover effects and animations, built using HTML, CSS",
      image: "/projects/yaferdln.github.io_Animated-Image-Gallery.png",
      demoLink: "https://yaferdln.github.io/Animated-Image-Gallery/",
      codeLink: "https://github.com/yaferdln/Animated-Image-Gallery.git",
    },
    {
      title: "Icon Neon Hover Effect",
      description:
        "Stunning neon hover effect for icons, built using HTML and CSS",
      image: "/projects/yaferdln.github.io_Icon-Neon-Hover-Effect.png",
      demoLink: "https://yaferdln.github.io/Icon-Neon-Hover-Effect/",
      codeLink: "https://github.com/yaferdln/Icon-Neon-Hover-Effect.git",
    },
    {
      title: "Dice Roller",
      description: "Simple dice roller using Javascript",
      image: "/projects/diceroller.png",
      demoLink: "https://yaferdln.github.io/Dice-Roller/",
      codeLink: "https://github.com/yaferdln/Dice-Roller.git",
    },
    {
      title: "Quiz App",
      description: "Quiz App using javascript",
      image: "/projects/quizapp.png",
      demoLink: "https://yaferdln.github.io/Quiz-App/",
      codeLink: "https://github.com/yaferdln/Quiz-App.git",
    },
    {
      title: "Number Guessing Game",
      description: "Number guessing game using Javascript",
      image: "/projects/numberguessinggame.png",
      demoLink: "https://yaferdln.github.io/Number-Guessing-Game/",
      codeLink: "https://github.com/yaferdln/Number-Guessing-Game.git",
    },
    {
      title: "Lyric Sync Display",
      description:
        "Sync lyrics like spotify while playing a song using Javascript",
      image: "/projects/lyricsync.png",
      demoLink: "https://yaferdln.github.io/Lyrics-Sync-Display/",
      codeLink: "https://github.com/yaferdln/Lyrics-Sync-Display.git",
    },
    {
      title: "Live Digital Clock",
      description: "Live digital clock with theme toggle using Javascript",
      image: "/projects/digitalclock.png",
      demoLink: "https://yaferdln.github.io/Digital-Clock/",
      codeLink: "https://github.com/yaferdln/Digital-Clock.git",
    },
  ];

  return (
    <section id="projects" className="min-h-screen p-6 pt-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-2xl md:text-4xl font-bold header uppercase transition-colors duration-300">
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
            className="card shadow-lg hover:shadow-2xl/70 hover:scale-105 transition duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-lg w-full h-48 object-cover "
            />
            <div className="p-6">
              <h3 className="text-base md:text-xl font-bold mb-2 header transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-base link hover:underline transition-colors duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-base link hover:underline transition-colors duration-300"
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
