import Marquee from "react-fast-marquee";
import { aboutText } from "../constants/aboutContent";
import { techStack } from "../constants/techStack";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen p-4 sm:p-6 flex flex-col items-center justify-center gap-6 sm:gap-8 pt-20 sm:pt-25" // Adjusted padding and top padding for smaller screens
    >
      <div className="max-w-3xl sm:max-w-6xl mx-auto w-full h-auto p-4 sm:p-6">
        {" "}
        {/* Adjusted max-width and padding */}
        <h2
          className="header text-xl sm:text-2xl md:text-4xl font-bold uppercase mb-6 sm:mb-8 text-center sm:text-left" // Smaller text and centered on mobile
          data-aos="fade-up"
        >
          Who's behind the code?
        </h2>
        <p
          data-aos="zoom-in-up"
          className="leading-relaxed mb-4 text-sm sm:text-base p-0" // Adjusted padding
          dangerouslySetInnerHTML={{
            __html: aboutText.replace(/\n/g, "<br />"),
          }}
        ></p>
        {/* Tech Stack Marquee */}
        <Marquee
          speed={30} // Adjusted speed for mobile
          pauseOnHover
          gradient={false}
          autoFill
          className="overflow-hidden h-20 sm:h-24 md:h-32 mt-4 sm:mt-6" // Adjusted height and margin-top
        >
          <div
            className="flex items-center justify-center gap-3 px-2 sm:gap-4 sm:px-2 md:gap-6 md:px-4" // Further adjusted gap and padding
            data-aos="zoom-in"
          >
            {techStack.map(({ icon: Icon, title, color, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                className="transition-transform transform hover:scale-110"
              >
                <Icon className={`${color} text-3xl sm:text-4xl md:text-7xl`} />{" "}
                {/* Further adjusted icon size */}
              </a>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default About;
