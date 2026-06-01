import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { project as project_en, project_id } from "../../utils/data";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();
  const project = i18n.language.startsWith("id") ? project_id : project_en;

  return (
    <section
      id="projects"
      data-bg-color="#020617"
      className="relative py-24 bg-transparent w-full overflow-hidden scroll-mt-20 md:scroll-mt-24"
    >
      {/* ══════ BACKGROUND: THE ABYSS ══════ */}
      
      {/* Deepest Ocean Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-abyss to-black opacity-100" />
      
      {/* Subtle bottom glow to indicate discoveries */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 z-0 bg-gradient-to-t from-bioluminescent-purple/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="max-container padding-container w-full mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-glow-blue/40" />
              <h2 className="text-sm tracking-[0.2em] uppercase text-glow-blue/80 font-medium">
                {t("projects.title")}
              </h2>
              <div className="md:hidden w-12 h-px bg-glow-blue/40" />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-text text-center md:text-left">
              Underwater Artifacts
            </h3>
            <p className="mt-4 text-ocean-text/50 font-light text-sm md:text-base text-center md:text-left max-w-xl">
              Hover over these discoveries to reveal their hidden details and technologies.
            </p>
          </motion.div>
        </div>

        {/* ══════ PROJECT ARTIFACTS GRID ══════ */}
        <div className="max-container padding-container w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {project.map((proj, index) => (
            <ProjectArtifact
              key={index}
              index={index}
              title={proj.title}
              year={proj.year}
              description={proj.description}
              stack={proj.stack}
              imageUrl={proj.imageUrl}
              projectUrl={proj.projectUrl}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

function ProjectArtifact({
  title,
  year,
  description,
  stack,
  imageUrl,
  projectUrl,
  index,
  t,
}: {
  title: string;
  year: string;
  description: string;
  stack: string[];
  imageUrl: string;
  projectUrl: string;
  index: number;
  t: TFunction;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -12 }}
      className="group relative w-full h-[400px] lg:h-[480px] rounded-3xl overflow-hidden bg-abyss border border-white/5 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(91,91,247,0.15)] hover:border-glow-blue/30 transition-[border-color,box-shadow] duration-500"
      onClick={() => window.open(projectUrl, "_blank")}
    >
      {/* ── Artifact Image ── */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity scale-105 group-hover:scale-100 group-hover:mix-blend-normal group-hover:opacity-80 transition-all duration-1000 ease-out"
        />
      </div>

      {/* ── Depth Shadows (Gradient overlays) ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#01030b] via-[#01030b]/80 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#01030b]/40 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700" />

      {/* ── Glass Panel (Hover reveals details) ── */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        {/* Content wrapper with transform to animate up on hover */}
        <div className="relative transform translate-y-24 group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1] flex flex-col gap-6">
          
          {/* Always visible: Title & Year */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl lg:text-3xl font-bold text-ocean-text group-hover:text-glow-blue transition-colors duration-500">
                {title}
              </h3>
              <div className="h-px flex-1 bg-white/10 group-hover:bg-glow-blue/20 transition-colors duration-500" />
            </div>
            <p className="text-sm text-ocean-text/40 font-mono tracking-widest uppercase">
              {year}
            </p>
          </div>

          {/* Revealed on hover: Description & Stack */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col gap-6">
            <p className="text-sm lg:text-base text-ocean-text/70 line-clamp-3 font-light leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg text-xs text-ocean-text/60 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-2 mt-2 text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue group-hover:text-white transition-colors duration-300">
              {t("projects.see_project")}
              <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle corner accent lines */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-6" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-6" />
    </motion.div>
  );
}
