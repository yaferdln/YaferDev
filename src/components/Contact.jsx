import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Import the image from the assets folder
import shakeImage from "/shake.jpg"; // Correct relative path

const Contact = () => {
  return (
    <section id="contact" className="relative h-[80vh]">
      {/* Background Image */}
      <img
        src={shakeImage} // Use the imported image
        alt="Parallax Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <button
          className="px-8 py-4 text-lg font-semibold text-neutral-50 bg-blue-600 dark:bg-amber-300 dark:text-neutral-950 rounded-lg shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
          data-aos="zoom"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSe70qGikNwWiwVwRC0UsZ1ZTBIVwR3az7-6_HHO-woaVRoTVA/viewform?usp=header",
              "_blank"
            )
          }
        >
          Let's Work Together
        </button>
      </div>
    </section>
  );
};

export default Contact;
