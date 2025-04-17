import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from "/yafer.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once
    });
  }, []);
  const socialLinks = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/yaferdeleon",
      iconClass: "bx bxl-facebook",
      colorClass: "hover:text-blue-600",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/yaferdln/",
      iconClass: "bx bxl-instagram",
      colorClass: "hover:text-pink-500",
    },
    {
      platform: "Twitter",
      url: "https://x.com/yafercrypto",
      iconClass: "bx bxl-twitter",
      colorClass: "hover:text-blue-500",
    },
    {
      platform: "GitHub",
      url: "https://github.com/yaferdln",
      iconClass: "bx bxl-github",
      colorClass: "hover:text-gray-800 md:dark:hover:text-white",
    },
    {
      platform: "TikTok",
      url: "https://www.tiktok.com/@yafercrypto",
      iconClass: "bx bxl-tiktok",
      colorClass: "hover:text-black",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen p-6 flex flex-col md:flex-row items-center justify-center gap-8 pt-16"
    >
      {/* Left Column */}
      <div
        className="w-full md:w-1/3 h-auto card transition-colors duration-300 p-6 shadow-lg"
        data-aos="fade-right"
      >
        <div className="rounded-t-lg flex flex-col items-center justify-between">
          <img
            src={profileImage}
            alt="Yafer Profile"
            className="rounded-full h-30 w-30 mt-6 transition-colors duration-300"
          />
          <div className="profile-section mt-4 text-center md:text-left text-sm md:text-base">
            <h4 className="pl-2 mb-4 ">Name: Yafer De Leon</h4>
            <h4 className="pl-2 mb-4 ">Address: Quezon City, Philippines</h4>
            <h4 className="pl-2 mb-4 ">Age: 27</h4>
            <h4 className="pl-2 mb-4 ">Status: Single</h4>
            <h4 className="pl-2 mb-4 ">Email: deleonyafer@gmail.com</h4>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div
        className="w-full md:w-2/3 h-auto card transition-colors duration-300 p-6 shadow-lg"
        data-aos="fade-left"
      >
        <h2 className="text-2xl md:text-4xl header transition-colors duration-300 uppercase text-center mb-8">
          Who's behind the code?
        </h2>
        <p className="leading-relaxed mb-4 text-sm md:text-base">
          Hi, I'm Yafer, a passionate Web Developer with a background in IT
          Support. I have two years of experience as an IT Support Assistant at
          the Manila International Airport Authority, where I developed strong
          problem-solving skills. I specialize in HTML, CSS, JavaScript,
          React.js, Tailwind CSS, Bootstrap, PHP, and MySQL. My goal is to
          transition into a full-time Web Developer role, focusing on building
          modern, user-friendly applications.
        </p>
        <p className="leading-relaxed mb-4 text-sm md:text-base">
          I’m always learning and keeping up with the latest web technologies to
          create high-quality, efficient projects. Currently, I’m diving deeper
          into React and Tailwind CSS while also learning Node.js and Express.js
          to expand my backend development skills. These tools allow me to build
          scalable and efficient applications that meet modern web standards.
        </p>
        <p className="leading-relaxed mb-4 text-sm md:text-base">
          My ultimate goal is to become a full-stack developer capable of
          building end-to-end solutions. I believe in continuous learning and am
          excited to grow in this field. With a strong foundation in both
          frontend and backend technologies, I aim to create impactful,
          user-friendly applications that solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default About;
