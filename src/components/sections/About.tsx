import { socials } from "../../utils/data";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="flex flex-col max-container padding-container items-center">
        <div className="w-[4px] h-16 bg-violet-600 rounded-full"></div>
        <h1 className="text-4xl md:text-5xl m-8 font-bold">About Me</h1>
        <div className="flex flex-col gap-2 text-center text-base/relaxed">
          <p>
            I'm Alif, a fresh graduate in Information Technology from Brawijaya
            University with a strong passion for front-end development.
            Originally from Probolinggo, East Java, Indonesia, I love exploring
            modern web technologies and continuously seek opportunities to learn
            and grow.
          </p>
          <p>
            My journey began with a deep curiosity and a passion for creating
            meaningful digital experiences. This passion led me to earn a
            scholarship from{" "}
            <a href="https://idcamp.ioh.co.id/" target="_blank">
              <strong>
                <u> ID Camp</u>
              </strong>
            </a>
            , where I learned the fundamentals of front-end development and
            React.js up to the intermediate level. After completing the program,
            I had the opportunity to work on real-world projects during my
            internship at{" "}
            <a href="https://aksamedia.co.id/" target="_blank">
              <strong>
                <u>PT. Aksamedia</u>
              </strong>
            </a>
            , where I gained hands-on experience in building and maintaining
            complex web applications.
          </p>
          <p>
            Outside of tech, I’m passionate about health and wellness, enjoy
            watching movies, and occasionally unwind with video games.
          </p>
        </div>

        <h1 className="mt-7">
          Let's connect or just say Hi
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block text-xl"
          >
            👋
          </motion.span>
        </h1>
        <div className="flex gap-6 mt-4">
          {socials.map((social) => (
            <a href={social.href} target="_blank">
              <img src={social.image} alt={social.name} className="w-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
