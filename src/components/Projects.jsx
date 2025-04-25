import { projects } from "../constants/projects";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen max-w-6xl mx-auto p-6 pt-16">
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
