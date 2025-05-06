import { SKILLS_DATA } from "../constants/skills";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen max-w-6xl mx-auto p-6 pt-25">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-2xl md:text-4xl font-bold header uppercase text-center sm:text-left">
          Skills
        </h2>
        <p className="mt-4 text-sm md:text-lg text-center sm:text-left">
          Here are the technologies I have experience with and the ones I'm
          currently learning to expand my expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS_DATA.map((skill, index) => (
          <div
            key={index}
            className="card p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
          >
            <h3 className="header text-lg md:text-2xl font-bold mb-8 text-center">
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-6 md:gap-10 justify-center">
              {skill.items.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center w-1/8 sm:1/4 md:w-auto"
                    data-aos="zoom-in"
                  >
                    <div
                      className={`text-2xl md:text-5xl p-4 ${item.color} transition-transform transform hover:scale-110`}
                    >
                      <IconComponent />
                    </div>
                    <span className="md:mt-2 text-xs text-center">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
