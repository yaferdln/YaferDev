import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      icon: "bx bx-code-alt",
      title: "Web Development",
      description: "Building responsive and modern websites with clean code.",
    },
    {
      icon: "bx bx-paint",
      title: "UI/UX Design",
      description: "Designing user-friendly and visually appealing interfaces.",
    },
    {
      icon: "bx bx-cart",
      title: "E-Commerce Solutions",
      description: "Creating online stores with seamless user experiences.",
    },
    {
      icon: "bx bx-bolt-circle",
      title: "SEO Optimization",
      description: "Improving website ranking with SEO best practices.",
    },
    {
      icon: "bx bx-desktop",
      title: "Custom Web Apps",
      description: "Developing tailor-made web applications for businesses.",
    },
    {
      icon: "bx bx-wrench",
      title: "Website Maintenance",
      description: "Keeping websites secure, updated, and running smoothly.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen max-w-6xl mx-auto  p-6 pt-16"
    >
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-2xl md:text-4xl font-bold header transition-colors duration-300 uppercase">
          Services I Offer
        </h2>
        <p className="mt-4 text-sm md:text-lg">
          Here are the services I provide to help businesses and individuals
          achieve their digital goals with high-quality web solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="card p-6 shadow-lg 
                       hover:shadow-2xl/70 transition duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center justify-center mb-4 text-4xl icon transition-colors duration-300">
              <i className={service.icon}></i>
            </div>
            <h3 className="text-lg md:text-xl font-semibold md:font-bold text-center mb-2">
              {service.title}
            </h3>
            <p className="text-center text-sm md:text-md">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
