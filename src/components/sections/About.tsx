import { socials } from "../../utils/data";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "Vite",
    ],
  },
  {
    category: "State & Data",
    skills: [
      "Zustand",
      "Redux Toolkit",
      "TanStack Query",
      "SWR",
      "Axios",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    category: "Styling & UI",
    skills: ["Tailwind CSS", "Shadcn UI", "Chakra UI", "Material UI"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "GitLab", "Figma", "VS Code", "Cursor"],
  },
  {
    category: "Backend",
    skills: ["Supabase", "MongoDB", "SQL", "Express.js", "Laravel"],
  },
  {
    category: "CI/CD",
    skills: ["Vercel", "GitHub Actions"],
  },
  {
    category: "Performance",
    skills: ["Lighthouse", "Web Vitals"],
  },
];

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="pt-20 pb-0 bg-white text-zinc-900 w-full overflow-hidden"
    >
      <div className="max-container padding-container">
        {/* <div className="flex justify-center mb-16">
          <div className="w-[4px] h-16 bg-violet-600 rounded-full"></div>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Side: About Me */}
          <div className="flex flex-col gap-6 text-base/relaxed h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left text-zinc-900">
                {t('about.title')}
              </h1>
              <div className="flex flex-col gap-4 text-zinc-600 text-center lg:text-left">
                <p>
                  {t('about.p1_1')}{" "}
                  <strong className="text-zinc-900">{t('about.p1_bold1')}</strong>{" "}
                  {t('about.p1_2')}{" "}
                  <strong className="text-zinc-900">
                    {t('about.p1_bold2')}
                  </strong>{" "}
                  {t('about.p1_3')}{" "}
                  <strong className="text-zinc-900">
                    {t('about.p1_bold3')}
                  </strong>
                  {t('about.p1_4')}
                </p>
                <p>
                  {t('about.p2')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center lg:items-start"
            >
              <h3 className="mt-2 mb-4 text-xl font-bold text-zinc-900 flex items-center gap-2">
                {t('about.lets_connect')}
                <motion.span
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="inline-block text-xl ml-1"
                >
                  👋
                </motion.span>
              </h3>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 hover:border-zinc-300 rounded-xl transition-colors flex items-center justify-center shadow-sm"
                  >
                    <img
                      src={social.image}
                      alt={social.name}
                      className={`w-5 h-5 md:w-6 md:h-6 object-contain ${
                        social.name === "Github" || social.name === "Email"
                          ? "filter invert opacity-80"
                          : ""
                      }`}
                    />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Emoji/Avatar Image */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 4 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center mt-auto mb-0 md:mr-20"
            >
              <motion.img
                src="/alif-ahmad-emoji.png"
                alt="Alif Ahmad Emoji"
                className="w-56 h-56 md:w-100 lg:w-200 xl:w-210 2xl:w-220 md:h-56 lg:h-110 xl:h-120 2xl:h-130 object-contain pointer-events-none drop-shadow-xl"
              />
            </motion.div>
          </div>

          {/* Right Side: Skills & Tech Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col w-full"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left text-zinc-900">
              {t('about.skills')}
            </h1>
            <div className="w-full bg-zinc-50 rounded-2xl border border-zinc-200/80 overflow-hidden shadow-sm">
              {skillCategories.map((item, index) => (
                <div
                  key={item.category}
                  className={`flex flex-col sm:flex-row sm:items-center gap-4 p-5 md:p-6 ${index !== skillCategories.length - 1 ? "border-b border-zinc-200/80" : ""}`}
                >
                  <h3 className="text-sm md:text-base font-bold text-zinc-800 sm:w-32 shrink-0">
                    {item.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 w-full">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-violet-50 text-violet-700 border border-violet-100/60 rounded-lg text-xs md:text-sm font-medium shadow-sm shadow-violet-500/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
