import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { project as project_en, project_id } from "../../utils/data";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

import { useRef, useState } from "react";

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();
  const project = i18n.language.startsWith("id") ? project_id : project_en;
  
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragAmount, setDragAmount] = useState(0);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;
    
    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      if (index === 0 || index === container.children.length - 1) return;
      
      const htmlElement = child as HTMLElement;
      const childCenter = htmlElement.offsetLeft + htmlElement.clientWidth / 2;
      const distance = Math.abs(scrollCenter - childCenter);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index - 1;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setDragAmount(0);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const scrollToProject = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const child = container.children[index + 1] as HTMLElement;
    if (child) {
      container.scrollTo({
        left: child.offsetLeft - container.clientWidth / 2 + child.clientWidth / 2,
        behavior: "smooth"
      });
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (dragAmount > 5) scrollToProject(activeIndex);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (dragAmount > 5) {
      scrollToProject(activeIndex);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX); // 1:1 tracking for seamless drag
    setDragAmount(Math.abs(walk));
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    if (dragAmount > 5) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  const scrollPrev = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    scrollToProject(newIndex);
  };

  const scrollNext = () => {
    const newIndex = Math.min(project.length - 1, activeIndex + 1);
    scrollToProject(newIndex);
  };

  return (
    <section
      id="projects"
      data-bg-color="#020617"
      className="relative py-32 bg-transparent w-full overflow-hidden scroll-mt-20 md:scroll-mt-24"
    >
      {/* ══════ BACKGROUND: THE ABYSS ══════ */}
      
      {/* Deepest Ocean Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-abyss to-black opacity-100" />
      
      {/* Subtle bottom glow to indicate discoveries */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 z-0 bg-gradient-to-t from-bioluminescent-purple/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="max-container padding-container w-full mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start w-full"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between w-full">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-glow-blue/40" />
                  <h2 className="text-sm tracking-[0.2em] uppercase text-glow-blue/80 font-medium">
                    {t("projects.title")}
                  </h2>
                  <div className="md:hidden w-12 h-px bg-glow-blue/40" />
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ocean-text text-center md:text-left tracking-tight">
                  Underwater Artifacts
                </h3>
                <p className="mt-6 text-ocean-text/50 font-light text-base md:text-lg text-center md:text-left max-w-2xl leading-relaxed">
                  Hover over these discoveries to reveal their hidden details and technologies. Drag horizontally to explore the depths.
                </p>
              </div>
              
              {/* Navigation Arrows for Desktop */}
              <div className="hidden md:flex items-center gap-4 mt-8 md:mt-0 pb-2">
                <button 
                  onClick={scrollPrev}
                  disabled={activeIndex === 0}
                  className={`p-4 rounded-full border transition-all duration-300 group shadow-lg ${
                    activeIndex === 0 
                      ? "bg-white/[0.01] border-white/5 opacity-50 cursor-not-allowed" 
                      : "bg-white/[0.03] hover:bg-white/[0.08] border-white/10 hover:border-glow-blue/50"
                  }`}
                  aria-label="Scroll Left"
                >
                  <FaArrowLeft className={`w-5 h-5 transition-colors ${activeIndex === 0 ? "text-ocean-text/30" : "text-ocean-text/70 group-hover:text-glow-blue"}`} />
                </button>
                <button 
                  onClick={scrollNext}
                  disabled={activeIndex === project.length - 1}
                  className={`p-4 rounded-full border transition-all duration-300 group shadow-lg ${
                    activeIndex === project.length - 1 
                      ? "bg-white/[0.01] border-white/5 opacity-50 cursor-not-allowed" 
                      : "bg-white/[0.03] hover:bg-white/[0.08] border-white/10 hover:border-glow-blue/50"
                  }`}
                  aria-label="Scroll Right"
                >
                  <FaArrowRight className={`w-5 h-5 transition-colors ${activeIndex === project.length - 1 ? "text-ocean-text/30" : "text-ocean-text/70 group-hover:text-glow-blue"}`} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ══════ PREMIUM SHOWCASE CAROUSEL ══════ */}
        <div className="w-full relative">
          {/* Edge Fade Masks for Premium Feel */}
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-48 bg-gradient-to-r from-abyss to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-48 bg-gradient-to-l from-abyss to-transparent z-20 pointer-events-none" />

          {/* Scroll Container */}
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onClickCapture={handleClickCapture}
            className={`flex gap-6 md:gap-10 overflow-x-auto pb-12 pt-4 scrollbar-hide items-center ${
              isDragging ? "cursor-grabbing snap-none" : "cursor-grab snap-x snap-mandatory"
            }`}
          >
            {/* Start Spacer to allow centering of first item */}
            <div className="w-[5vw] md:w-[15vw] lg:w-[20vw] shrink-0" />

            {project.map((proj, index) => (
              <div 
                key={index} 
                className="w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[480px] xl:w-[600px] shrink-0 snap-center"
              >
                <ProjectArtifact
                  index={index}
                  title={proj.title}
                  year={proj.year}
                  description={proj.description}
                  stack={proj.stack}
                  imageUrl={proj.imageUrl}
                  projectUrl={proj.projectUrl}
                  t={t}
                />
              </div>
            ))}

            {/* End Spacer to allow centering of last item */}
            <div className="w-[5vw] md:w-[15vw] lg:w-[20vw] shrink-0" />
          </div>
        </div>

        {/* ══════ DOT NAVIGATION ══════ */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 md:mt-8 flex justify-center items-center gap-3 px-8"
        >
          {project.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToProject(index)}
              className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                activeIndex === index
                  ? "bg-white w-8"
                  : "bg-white/20 w-2.5 hover:bg-white/40"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </motion.div>
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
      <div className="absolute inset-x-0 bottom-0 p-8">
        {/* Content wrapper with transform to animate up on hover */}
        <div className="relative transform group-hover:-translate-y-[220px] transition-transform duration-700 ease-[0.22,1,0.36,1]">
          
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
          <div className="absolute top-full left-0 w-full pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col gap-6 pointer-events-none group-hover:pointer-events-auto">
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
