import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import {
  experiences as experiences_en,
  experiences_id,
  type Experience,
} from "../../utils/data";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const depthMarkers = ["10m", "50m", "100m", "250m", "500m", "1000m", "Abyss"];

const ExperienceSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const experiences = i18n.language.startsWith("id")
    ? experiences_id
    : experiences_en;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const getIcon = (iconType: Experience["type"]) => {
    switch (iconType) {
      case "work":
        return <MdWork className="w-4 h-4 text-glow-blue" />;
      case "education":
        return <IoSchool className="w-4 h-4 text-bioluminescent-purple" />;
      default:
        return <MdWork className="w-4 h-4 text-glow-blue" />;
    }
  };

  return (
    <section
      id="portfolio"
      data-bg-color="#020617"
      className="relative py-24 bg-transparent text-ocean-text w-full overflow-hidden scroll-mt-20 md:scroll-mt-24"
    >
      <div className="relative z-10 max-container padding-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-glow-blue/40" />
            <h2 className="text-sm tracking-[0.2em] uppercase text-glow-blue/80 font-medium">
              {t("experience.title")}
            </h2>
            <div className="w-12 h-px bg-glow-blue/40" />
          </div>
          <p className="text-ocean-text/50 text-center max-w-lg font-light text-sm md:text-base">
            Descending into the depths of my professional journey.
          </p>
        </motion.div>

        {/* ══════ VERTICAL TIMELINE ══════ */}
        <div ref={containerRef} className="relative max-w-5xl lg:max-w-6xl mx-auto">
          {/* Background Track Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
          
          {/* Glowing Progress Line */}
          <motion.div
            className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-glow-blue via-bioluminescent-purple to-transparent -translate-x-1/2 origin-top shadow-[0_0_15px_rgba(124,140,255,0.6)]"
            style={{ scaleY: lineHeight }}
          />

          <div className="flex flex-col gap-12 md:gap-20">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const depth = depthMarkers[Math.min(index, depthMarkers.length - 1)];

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-12 group`}
                >
                  {/* Glowing Checkpoint & Depth Marker */}
                  <div className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center z-10">
                    <div className="relative flex items-center justify-center w-4 h-4">
                      {/* Depth Text */}
                      <span className={`absolute top-1/2 -translate-y-1/2 text-[10px] font-mono tracking-widest text-glow-blue/60 transition-colors duration-300 group-hover:text-glow-blue ${
                        isEven ? "left-8 md:right-8 md:left-auto" : "left-8"
                      }`}>
                        {depth}
                      </span>
                      
                      {/* Dot */}
                      <div className="w-3 h-3 rounded-full bg-abyss border-2 border-glow-blue/50 group-hover:border-glow-blue group-hover:bg-glow-blue/20 transition-all duration-300 z-10" />
                      
                      {/* Pulse effect */}
                      <div className="absolute inset-0 rounded-full bg-glow-blue/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    onClick={() => navigate(`/portfolio/${exp.slug}`)}
                    className="w-full md:w-1/2 pl-16 md:pl-0 cursor-pointer"
                  >
                    <div className="relative p-8 md:p-10 lg:p-12 min-h-[280px] lg:min-h-[340px] bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/5 hover:border-glow-blue/30 rounded-2xl transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(91,91,247,0.2)] group/card flex flex-col justify-center">
                      {/* Inner subtle glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-glow-blue/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                      {/* Visual Artifact Preview on Hover (Scattered Collage) */}
                      {exp.galleryImages && exp.galleryImages.length > 0 && (
                        <div className="absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-all duration-700 pointer-events-none overflow-hidden rounded-2xl">
                          
                          
                          {/* Image Container */}
                          <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[75%] h-[90%] lg:w-[70%] lg:h-[85%] flex items-center justify-center perspective-[1000px]">
                            {exp.galleryImages.slice(0, 3).reverse().map((img, idx) => {
                              const total = Math.min(exp.galleryImages!.length, 3);
                              const i = total - 1 - idx; // 0 is top, 1 is middle, 2 is bottom
                              
                              return (
                                <img 
                                  key={i}
                                  src={img} 
                                  alt={`preview-${i}`}
                                  className={`absolute w-full h-full object-cover rounded-xl border border-white/10 shadow-2xl transition-all duration-1000 ease-[0.22,1,0.36,1]
                                    ${
                                      i === 2 ? "z-10 group-hover/card:translate-x-12 group-hover/card:translate-y-8 group-hover/card:rotate-[15deg] group-hover/card:scale-90 opacity-10 mix-blend-luminosity delay-200" :
                                      i === 1 ? "z-20 group-hover/card:translate-x-4 group-hover/card:translate-y-0 group-hover/card:rotate-[5deg] group-hover/card:scale-95 opacity-30 mix-blend-luminosity delay-100" :
                                      "z-30 group-hover/card:-translate-x-6 group-hover/card:-translate-y-6 group-hover/card:-rotate-[4deg] group-hover/card:scale-100 opacity-60 mix-blend-normal delay-0"
                                    } 
                                    translate-y-32 translate-x-32 rotate-[35deg] scale-125
                                  `}
                                />
                              );
                            })}
                          </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] from-30% via-[#020617]/90 to-transparent z-40" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-transparent to-[#020617]/80 z-40" />
                      </div>
                    )}

                    <div className="relative z-10 flex flex-col gap-4 lg:gap-5 md:max-w-[90%]">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 shrink-0 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center shadow-inner group-hover/card:border-glow-blue/50 transition-colors duration-300">
                              {getIcon(exp.type)}
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-lg md:text-xl font-bold text-ocean-text group-hover/card:text-glow-blue transition-colors duration-300">
                                {exp.title}
                              </h3>
                              <span className="text-sm text-ocean-text/50 font-medium">
                                {exp.company.text}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono tracking-wider text-ocean-text/40">
                            {exp.year || exp.period}
                          </div>
                          {exp.subtitle && (
                            <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-bioluminescent-purple/10 border border-bioluminescent-purple/20 text-[11px] font-medium tracking-wide text-bioluminescent-purple">
                              {exp.subtitle}
                            </div>
                          )}
                        </div>

                        <p className="text-sm md:text-base leading-relaxed text-ocean-text/60 line-clamp-2 mt-2 font-light">
                          {exp.companyProfile}
                        </p>

                        <div className="flex items-center gap-2 mt-2 text-xs font-semibold tracking-wider uppercase text-glow-blue/70 group-hover/card:text-glow-blue transition-colors duration-300">
                          {t("projects.see_project", "View Details")}
                          <svg
                            className="w-4 h-4 transform group-hover/card:translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
          
          {/* End of Descent Marker */}
          <div className="relative mt-20 flex justify-center">
             <div className="w-16 h-px bg-gradient-to-r from-transparent via-bioluminescent-purple/50 to-transparent" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-bioluminescent-purple shadow-[0_0_10px_rgba(91,91,247,0.8)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
