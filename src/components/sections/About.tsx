import { socials } from "../../utils/data";

const AboutSection = () => {
  return (
    <div id="about" className="flex flex-col items-center">
      <div className="w-[4px] h-16 mt-6 bg-violet-600 rounded-full"></div>
      <h1 className="text-3xl font-bold mt-6">About Me</h1>
      <div className="flex flex-col mt-6 gap-2 max-w-2xl text-center text-base/relaxed">
        <p>
          I'm Alif, a final-year Information Technology student at Brawijaya
          University with a strong passion for front-end development. Hailing
          from Probolinggo, East Java, Indonesia, I love exploring modern web
          technologies and constantly seek opportunities to learn and grow.
        </p>
        <p>
          Outside of tech, I'm into health and wellness, love watching movies,
          and occasionally unwind with video games.
        </p>
      </div>

      <h1 className="mt-7">Let's connect or just say Hi👋</h1>
      <div className="flex gap-6 mt-4">
        {socials.map((social) => (
          <a href={social.href} target="_blank">
            <img src={social.image} alt={social.name} className="w-8" />
          </a>
        ))}
      </div>
      <div className="projects grid grid-cols-1 md:grid-cols-2 gap-10 mt-5"></div>
    </div>
  );
};

export default AboutSection;
