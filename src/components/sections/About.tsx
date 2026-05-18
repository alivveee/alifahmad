import { socials } from "../../utils/data";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="flex flex-col max-container padding-container items-center">
        <div className="w-[4px] h-16 bg-violet-600 rounded-full"></div>
        <h1 className="text-4xl md:text-5xl m-8 font-bold">About Me</h1>
        <div className="flex flex-col gap-4 text-center text-base/relaxed max-w-3xl">
          <p>
            I'm a <strong>Frontend Engineer</strong> with{" "}
            <strong>1+ year of professional experience</strong> building
            scalable and responsive web applications using{" "}
            <strong>React.js, Next.js, TypeScript</strong>, and modern frontend
            technologies.
          </p>
          <p>
            I have a proven track record of delivering complex dashboards,
            marketplace platforms, mobile apps, company profiles, and many more
            in fast-paced startup environments. I am highly skilled in
            collaborating with cross-functional teams to deliver
            production-ready applications and translating UI/UX designs into
            clean, reusable, and responsive interfaces.
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
