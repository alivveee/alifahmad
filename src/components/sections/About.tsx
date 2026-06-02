import { socials } from "../../utils/data";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const oceanZones = [
  {
    name: "Surface Layer",
    depth: "Frontend & UI",
    color: "text-glow-blue",
    border: "border-glow-blue/30",
    bg: "bg-glow-blue/5",
    iconColor: "bg-glow-blue",
    skills: ["JavaScript", "Vite", "Tailwind CSS", "Shadcn UI", "Chakra UI", "Material UI", "Figma"],
  },
  {
    name: "Coral Zone",
    depth: "React Ecosystem",
    color: "text-bioluminescent-purple",
    border: "border-bioluminescent-purple/30",
    bg: "bg-bioluminescent-purple/5",
    iconColor: "bg-bioluminescent-purple",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
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
    name: "Deep Current",
    depth: "Backend & Database",
    color: "text-ocean-text/90",
    border: "border-ocean-text/20",
    bg: "bg-white/[0.02]",
    iconColor: "bg-ocean-text/70",
    skills: ["Supabase", "MongoDB", "SQL", "Express.js", "Laravel"],
  },
  {
    name: "Abyss Tools",
    depth: "DevOps & Performance",
    color: "text-ocean-text/50",
    border: "border-white/5",
    bg: "bg-black/40",
    iconColor: "bg-ocean-text/30",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "VS Code",
      "Cursor",
      "Vercel",
      "GitHub Actions",
      "Lighthouse",
      "Web Vitals",
      "SEO Optimization",
    ],
  },
];

const highlightedSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Redux Toolkit",
  "TanStack Query",
  "Tailwind CSS",
  "Git",
  "Express.js",
  "SQL",
  "GitHub Actions",
  "SEO Optimization",
];

const AboutSection = () => {
  const { t } = useTranslation();
  // No longer need activeTab state

  const getSocialIcon = (name: string) => {
    const iconClass = "w-5 h-5 md:w-6 md:h-6 text-ocean-text/60 group-hover:text-glow-blue group-hover:scale-110 transition-all duration-300";
    switch (name.toLowerCase()) {
      case "instagram":
        return <FaInstagram className={iconClass} />;
      case "linkedin":
        return <FaLinkedin className={iconClass} />;
      case "github":
        return <FaGithub className={iconClass} />;
      case "email":
        return <FiMail className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <section
      id="about"
      data-bg-color="#071426"
      className="relative pt-24 pb-20 bg-transparent text-ocean-text w-full overflow-hidden scroll-mt-20 md:scroll-mt-24"
    >
      <div className="relative z-10 max-container padding-container">
        <div className="flex flex-col gap-16 lg:gap-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
            {/* Left Side: About Me */}
            <div className="flex flex-col gap-6 text-base/relaxed h-full justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-glow-blue/40" />
                  <h2 className="text-sm tracking-[0.2em] uppercase text-glow-blue/80 font-medium">
                    {t('about.title')}
                  </h2>
                </div>
                
                <div className="flex flex-col gap-6 text-ocean-text/60 text-base md:text-lg leading-relaxed font-light">
                  <h3 className="text-2xl md:text-3xl text-ocean-text font-semibold tracking-tight">
                    {t('about.headline')}
                  </h3>
                  <p>
                    {t('about.p1')}
                  </p>
                  <p>
                    {t('about.p2')}
                  </p>
                  <p>
                    {t('about.p3')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col items-start mt-4"
              >
                <h3 className="mb-4 text-sm tracking-wider uppercase text-ocean-text/40 font-medium flex items-center gap-2">
                  {t('about.lets_connect')}
                  <motion.span
                    animate={{ rotate: [0, 20, -10, 20, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: 2,
                      repeatDelay: 1,
                    }}
                    className="inline-block text-base ml-1"
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
                      className="p-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-glow-blue/30 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-glow-blue/20 group"
                    >
                      {getSocialIcon(social.name)}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side: Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end items-center w-full"
            >
              <div className="relative group w-[280px] sm:w-[320px] lg:w-[360px] aspect-square my-4 rounded-full p-3 md:p-4 bg-gradient-to-br from-slate-800/80 to-[#020617] shadow-[0_0_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(0,0,0,0.8)] border border-slate-700/50">
                {/* Glowing edge effect inside the window */}
                <div className="absolute inset-3 md:inset-4 rounded-full border border-glow-blue/20 shadow-[inset_0_0_30px_rgba(124,140,255,0.15)] z-10 pointer-events-none transition duration-500 group-hover:border-glow-blue/50 group-hover:shadow-[inset_0_0_50px_rgba(124,140,255,0.3)]" />
                
                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-abyss/50 backdrop-blur-sm">
                  <motion.img
                    src="/alif-ahmad-photo.jpg"
                    alt="Alif Ahmad Mukhtar Darma Hidayat photo"
                    loading="lazy"
                    className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  {/* Subtle deep blue tint overlay */}
                  <div className="absolute inset-0 bg-deep-ocean/30 mix-blend-overlay pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full Width: Skills & Tech Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col w-full"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-bioluminescent-purple/40" />
              <h2 className="text-sm tracking-[0.2em] uppercase text-bioluminescent-purple/80 font-medium">
                Ocean Technology Stack
              </h2>
            </div>
            
            <div className="w-full flex flex-col gap-4 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[19px] md:left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-glow-blue/50 via-bioluminescent-purple/30 to-black/50 z-0" />

              {oceanZones.map((zone, index) => (
                <motion.div
                  key={zone.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative z-10 flex flex-col md:flex-row gap-4 md:gap-8 p-6 md:p-8 rounded-2xl border backdrop-blur-md transition-colors duration-300 ${zone.bg} ${zone.border}`}
                >
                  {/* Depth Marker / Icon */}
                  <div className="flex items-center md:items-start gap-4 md:w-48 shrink-0">
                    <div className={`w-3 h-3 rounded-full mt-1.5 shadow-[0_0_10px_rgba(255,255,255,0.1)] ${zone.iconColor}`} />
                    <div className="flex flex-col">
                      <h3 className={`text-base md:text-lg font-semibold tracking-wide ${zone.color}`}>
                        {zone.name}
                      </h3>
                      <span className="text-xs font-mono tracking-widest uppercase text-ocean-text/30 mt-1">
                        {zone.depth}
                      </span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2.5 md:gap-3 items-center">
                    {zone.skills.map((skill) => {
                      const isHighlighted = highlightedSkills.includes(skill);
                      return (
                        <span
                          key={skill}
                          className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium tracking-wide border transition-all duration-300 shadow-sm ${
                            isHighlighted
                              ? "bg-glow-blue/10 text-glow-blue border-glow-blue/30 shadow-[0_0_15px_rgba(124,140,255,0.15)]"
                              : "bg-white/[0.03] text-ocean-text/70 border-white/5 hover:border-white/20 hover:bg-white/[0.06] hover:text-ocean-text"
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
