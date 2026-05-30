import { socials } from "../../utils/data";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

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
    skills: ["Lighthouse", "Web Vitals", "SEO Optimization"],
  },
];

const AboutSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(skillCategories[0].category);
  return (
    <section
      id="about"
      data-bg-color="#ffffff"
      className="pt-20 pb-0 bg-transparent text-zinc-900 w-full overflow-hidden scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-container padding-container">
        {/* <div className="flex justify-center mb-16">
          <div className="w-[4px] h-16 bg-violet-600 rounded-full"></div>
        </div> */}

        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
            {/* Left Side: About Me */}
            <div className="flex flex-col gap-6 text-base/relaxed h-full justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left text-zinc-900">
                  {t('about.title')}
                </h2>
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
            </div>

            {/* Right Side: Photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end items-center w-full"
            >
              <div className="relative group w-[280px] sm:w-[320px] aspect-[3/4] my-4 lg:mr-5">
                {/* Background offset card */}
                <div className="absolute inset-0 bg-indigo-950 rounded-[20px] translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />
                
                {/* Image container */}
                <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-xl border border-zinc-200/50">
                  <motion.img
                    src="/alif-ahmad-photo.jpg"
                    alt="Alif Ahmad Mukhtar Darma Hidayat photo"
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-indigo-950/40 mix-blend-color group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full Width: Skills & Tech Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col w-full"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left text-zinc-900">
              {t('about.skills')}
            </h2>
            <div className="w-full bg-white/40 backdrop-blur-md rounded-2xl border border-zinc-200/50 overflow-hidden shadow-sm mb-12 lg:mb-16">
              {/* Tabs Header */}
              <div className="flex overflow-x-auto md:justify-center border-b border-zinc-200/50 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {skillCategories.map((item) => (
                  <button
                    key={item.category}
                    onClick={() => setActiveTab(item.category)}
                    className={`px-5 md:px-6 py-4 text-sm md:text-base font-semibold whitespace-nowrap transition-colors relative ${
                      activeTab === item.category
                        ? "text-indigo-700"
                        : "text-zinc-500 hover:text-zinc-700 hover:bg-zinc-200/20"
                    }`}
                  >
                    {item.category}
                    {activeTab === item.category && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-600"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tabs Content */}
              <div className="p-5 md:p-8 min-h-[160px] flex items-center justify-center w-full">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-3 justify-center"
                >
                  {skillCategories
                    .find((c) => c.category === activeTab)
                    ?.skills.map((skill) => {
                      const isHighlighted = [
                        "React", "Next.js", "TypeScript", "React Native", "Redux Toolkit",
                        "TanStack Query", "Tailwind CSS", "Git", "Express.js",
                        "SQL", "GitHub Actions", "SEO Optimization"
                      ].includes(skill);
                      
                      return (
                        <span
                          key={skill}
                          className={`px-4 py-2 rounded-xl text-sm shadow-sm transition-colors border ${
                            isHighlighted 
                              ? "bg-indigo-700 text-white border-indigo-600 font-semibold shadow-indigo-600/20" 
                              : "bg-indigo-50/60 backdrop-blur-sm text-indigo-700 border-indigo-100/60 font-medium shadow-indigo-500/5"
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
