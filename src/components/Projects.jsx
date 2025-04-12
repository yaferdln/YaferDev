import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "My Portfolio Website",
      description:
        "My personal portfolio website to showcase my skills and projects.",
      image: "/portfolio.png", // Replace with your image path
      demoLink: "https://yaferdev.vercel.app/",
      codeLink: "https://github.com/yaferdln/YaferDev.git",
    },
    {
      title: "E-Commerce Store",
      description:
        "A fully functional e-commerce store with cart and payment integration.",
      image: "/src/assets/ecommerce-thumbnail.jpg", // Replace with your image path
      demoLink: "https://your-ecommerce-demo-link.com",
      codeLink: "https://github.com/your-ecommerce-repo",
    },
    {
      title: "Blog Platform",
      description:
        "A blog platform where users can create, edit, and delete posts.",
      image: "/src/assets/blog-thumbnail.jpg", // Replace with your image path
      demoLink: "https://your-blog-demo-link.com",
      codeLink: "https://github.com/your-blog-repo",
    },
  ];

  return (
    <section id="projects" className="min-h-screen p-6">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-amber-300  uppercase transition-colors duration-300">
          My Projects
        </h2>
        <p className="mt-4 text-lg">
          Here are some of the projects I’ve worked on. Click the demo or source
          code links to explore more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-50 dark:bg-slate-900 hover:bg-gray-200 dark:hover:bg-slate-800  rounded-lg shadow-lg hover:shadow-2xl/70 transition duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-amber-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-amber-300 hover:underline transition-colors duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-amber-300 hover:underline transition-colors duration-300"
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
