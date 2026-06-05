import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { project as project_en, project_id } from "../utils/data";
import type { Project } from "../utils/data";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DeepSeaParticles from "../components/ui/DeepSeaParticles";

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const projects = i18n.language.startsWith("id") ? project_id : project_en;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const proj = currentIndex !== -1 ? projects[currentIndex] : null;
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const [selectedImg, setSelectedImg] = useState<number | null>(null);
  const [isGridMode, setIsGridMode] = useState<boolean>(false);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setSelectedImg(null);
    setIsGridMode(false);
  }, [slug]);

  useEffect(() => {
    if (selectedImg !== null) {
      document.body.style.overflow = "hidden";
      const activeEl = document.getElementById(`thumb-${selectedImg}`);
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedImg]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImg === null || !proj?.galleryImages) return;
      if (e.key === "ArrowLeft") {
        setSelectedImg(
          (selectedImg - 1 + proj.galleryImages.length) %
            proj.galleryImages.length
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImg((selectedImg + 1) % proj.galleryImages.length);
      } else if (e.key === "Escape") {
        setSelectedImg(null);
        setIsGridMode(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImg, proj]);

  if (!proj) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-abyss text-ocean-text">
        <div className="text-center z-10 relative">
          <h1 className="text-3xl font-bold mb-4 tracking-wider uppercase">
            {t("project_detail.not_found", "Artifact Not Found")}
          </h1>
          <button onClick={() => navigate("/")} className="text-glow-blue hover:text-white font-medium transition-colors">
            &larr; {t("project_detail.return", "Return to Surface")}
          </button>
        </div>
        <DeepSeaParticles count={10} className="fixed inset-0 pointer-events-none opacity-30" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-abyss text-ocean-text overflow-hidden">
      {/* ══════ BACKGROUND ══════ */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-deep-ocean to-abyss pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(91,91,247,0.05)_0%,_transparent_60%)] pointer-events-none" />
      <DeepSeaParticles count={20} className="opacity-15 fixed inset-0 z-0" />

      <AnimatePresence mode="wait">
        <motion.div
          key={slug}
          className="relative z-10"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* ══════ HERO SECTION ══════ */}
          <HeroSection proj={proj} t={t} />

          {/* ══════ OVERVIEW ══════ */}
          <OverviewSection proj={proj} t={t} />

          {/* ══════ GALLERY ══════ */}
          {proj.galleryImages.length > 0 && (
            <GallerySection
              proj={proj}
              t={t}
              selectedImg={selectedImg}
              setSelectedImg={setSelectedImg}
              isGridMode={isGridMode}
              setIsGridMode={setIsGridMode}
            />
          )}

          {/* ══════ TECH STACK ══════ */}
          <TechStackSection proj={proj} t={t} />

          {/* ══════ FEATURES ══════ */}
          <FeaturesSection proj={proj} t={t} />

          {/* ══════ NAVIGATION ══════ */}
          <NavigationSection prev={prevProject} next={nextProject} t={t} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════ */
function HeroSection({ proj, t }: { proj: Project; t: TFunction }) {
  return (
    <section className="relative pt-28 pb-8 md:pt-36 md:pb-10">
      {/* Hero image background */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={proj.imageUrl} alt="" className="w-full h-full object-cover opacity-[0.07] scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/60 via-abyss/90 to-abyss" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12"
        variants={stagger} initial="hidden" animate="visible"
      >
        {/* Breadcrumbs */}
        <motion.nav variants={fadeUp} className="flex text-xs text-ocean-text/40 mb-10 items-center gap-2 font-mono tracking-widest uppercase">
          <Link to="/" className="hover:text-glow-blue transition-colors duration-300">Home</Link>
          <span className="opacity-30">/</span>
          <Link to="/#projects" className="hover:text-glow-blue transition-colors duration-300">
            {t("projects.title", "Projects")}
          </Link>
          <span className="opacity-30">/</span>
          <span className="text-glow-blue/80 font-medium truncate max-w-[180px] sm:max-w-none">{proj.title}</span>
        </motion.nav>



        {/* Title */}
        <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
          {proj.title}
        </motion.h1>

        {/* Category */}
        <motion.p variants={fadeUp} className="text-sm md:text-base text-glow-blue/70 font-mono tracking-widest uppercase mb-8">
          {proj.category}
        </motion.p>

        {/* Summary */}
        <motion.p variants={fadeUp} className="text-base md:text-lg text-ocean-text/60 font-light leading-relaxed max-w-3xl mb-10">
          {proj.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          {proj.liveUrl && (
            <a
              href={proj.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden transition-all duration-300 active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, #5B5BF7 0%, #7C8CFF 100%)" }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
              <FiExternalLink className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{t("project_detail.live_preview", "View Live Preview")}</span>
              <FiArrowUpRight className="w-4 h-4 relative z-10 transition-transform" />
            </a>
          )}
          {proj.githubUrl && (
            <a
              href={proj.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-ocean-text/80 border border-ocean-text/10 bg-ocean-text/[0.03] backdrop-blur-md hover:bg-ocean-text/[0.08] hover:border-ocean-text/20 transition-all duration-300 active:scale-[0.98]"
            >
              <FiGithub className="w-4 h-4" />
              <span>{t("project_detail.source_code", "View Source Code")}</span>
              <FiArrowUpRight className="w-4 h-4 transition-transform" />
            </a>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   OVERVIEW SECTION
   ═══════════════════════════════════════════════ */
function OverviewSection({ proj, t }: { proj: Project; t: TFunction }) {
  const items = [
    { label: t("project_detail.problem", "The Challenge"), icon: "🎯", text: proj.overview.problem },
    { label: t("project_detail.users", "Target Explorers"), icon: "👥", text: proj.overview.users },
    { label: t("project_detail.objectives", "Mission Objectives"), icon: "🧭", text: proj.overview.objectives },
  ];

  return (
    <section className="py-6 md:py-8">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-glow-blue/40" />
            <h2 className="text-sm tracking-[0.2em] uppercase text-glow-blue/80 font-semibold">
              {t("project_detail.overview_title", "Expedition Overview")}
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white/[0.02] backdrop-blur-xl rounded-2xl p-7 border border-white/5 hover:border-glow-blue/20 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-glow-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-2xl mb-4 block">{item.icon}</span>
                <h3 className="text-xs uppercase tracking-[0.2em] text-glow-blue/70 font-bold mb-4">{item.label}</h3>
                <p className="text-sm text-ocean-text/60 font-light leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   GALLERY SECTION
   ═══════════════════════════════════════════════ */
function GallerySection({ proj, t, selectedImg, setSelectedImg, isGridMode, setIsGridMode }: {
  proj: Project; t: TFunction; selectedImg: number | null; setSelectedImg: (v: number | null) => void;
  isGridMode: boolean; setIsGridMode: (v: boolean) => void;
}) {
  return (
    <section className="py-4 md:py-6">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-bioluminescent-purple/40" />
            <h2 className="text-sm tracking-[0.2em] uppercase text-bioluminescent-purple/80 font-semibold">
              {t("project_detail.gallery_title", "Expedition Records")}
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {proj.galleryImages
            .slice(0, proj.galleryImages.length > 8 ? 7 : proj.galleryImages.length)
            .map((img, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl overflow-hidden cursor-pointer shadow-xl aspect-video bg-abyss border border-white/5 hover:border-glow-blue/30 group transition-colors duration-300"
                onClick={() => setSelectedImg(idx)}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
                />
              </motion.div>
            ))}

          {proj.galleryImages.length > 8 && (
            <motion.div
              className="relative rounded-2xl overflow-hidden cursor-pointer shadow-xl aspect-video bg-abyss border border-white/5 hover:border-glow-blue/30 group transition-colors duration-300"
              onClick={() => setSelectedImg(7)}
            >
              <img
                src={proj.galleryImages[7]}
                alt="More Gallery"
                className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-colors bg-abyss/40 backdrop-blur-sm group-hover:bg-transparent">
                <span className="text-glow-blue group-hover:text-white text-lg md:text-xl font-bold tracking-wide transition-colors">
                  +{proj.galleryImages.length - 7} View More
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* ══════ LIGHTBOX / PREVIEW GALLERY ══════ */}
      {createPortal(
        <AnimatePresence>
          {selectedImg !== null && proj.galleryImages && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex flex-col justify-between bg-abyss/95 p-6 backdrop-blur-2xl select-none"
              data-lenis-prevent
              onClick={() => {
                setSelectedImg(null);
                setIsGridMode(false);
              }}
            >
              {/* Top Bar */}
              <div
                className="flex items-center justify-between w-full z-10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 hover:bg-white/10 text-white rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                  onClick={() => {
                    setSelectedImg(null);
                    setIsGridMode(false);
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Close
                </button>

                {/* Progress Indicator */}
                <div className="text-ocean-text/60 font-mono tracking-widest text-sm md:text-base">
                  {selectedImg + 1} / {proj.galleryImages.length}
                </div>

                {/* Utilities */}
                <div className="flex items-center gap-3">
                  <button
                    className={`p-2 border rounded-xl transition-colors cursor-pointer ${
                      isGridMode
                        ? "bg-glow-blue/20 border-glow-blue/50 text-glow-blue"
                        : "bg-white/[0.03] border-white/10 hover:bg-white/10 text-white"
                    }`}
                    title="Toggle Grid View"
                    onClick={() => setIsGridMode(!isGridMode)}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </button>
                  <button
                    className="p-2 bg-white/[0.03] border border-white/10 hover:bg-white/10 text-white rounded-xl transition-colors cursor-pointer"
                    title="Toggle Fullscreen"
                    onClick={() => {
                      if (!document.fullscreenElement) {
                        document.documentElement
                          .requestFullscreen()
                          .catch(() => {});
                      } else {
                        document.exitFullscreen().catch(() => {});
                      }
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {isGridMode ? (
                <div
                  className="flex-1 overflow-y-auto p-4 my-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {proj.galleryImages.map((img, idx) => (
                      <motion.div
                        key={idx}
                        className={`rounded-2xl overflow-hidden cursor-pointer shadow-lg aspect-video bg-abyss border transition-colors ${
                          selectedImg === idx
                            ? "border-glow-blue ring-2 ring-glow-blue/50"
                            : "border-white/5 hover:border-white/20"
                        }`}
                        onClick={() => {
                          setSelectedImg(idx);
                          setIsGridMode(false);
                        }}
                      >
                        <img
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {/* Middle: Arrow Left + Image + Arrow Right */}
                  <div
                    className="relative flex-1 flex items-center justify-center my-6"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Prev Button */}
                    <button
                      className="absolute left-0 md:left-4 z-10 p-3 bg-white/[0.03] border border-white/10 hover:bg-white/10 text-white rounded-full transition-all backdrop-blur-md cursor-pointer"
                      onClick={() =>
                        setSelectedImg(
                          (selectedImg - 1 + proj.galleryImages.length) %
                            proj.galleryImages.length
                        )
                      }
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    {/* Active Image */}
                    <motion.img
                      key={selectedImg}
                      initial={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }}
                      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      src={proj.galleryImages[selectedImg]}
                      alt={`Preview ${selectedImg + 1}`}
                      className="max-w-full max-h-[50vh] md:max-h-[62vh] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] object-contain border border-white/5"
                    />

                    {/* Next Button */}
                    <button
                      className="absolute right-0 md:right-4 z-10 p-3 bg-white/[0.03] border border-white/10 hover:bg-white/10 text-white rounded-full transition-all backdrop-blur-md cursor-pointer"
                      onClick={() =>
                        setSelectedImg(
                          (selectedImg + 1) % proj.galleryImages.length
                        )
                      }
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Bottom Metadata & Thumbnails */}
                  <div
                    className="w-full text-center space-y-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3 className="text-white text-base md:text-lg font-semibold tracking-wide">
                      {proj.title}
                    </h3>

                    {/* Thumbnails Row */}
                    <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto py-4 max-w-full mx-auto px-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                      {proj.galleryImages.map((img, idx) => (
                        <div
                          key={idx}
                          id={`thumb-${idx}`}
                          className={`w-20 md:w-24 aspect-video rounded-xl overflow-hidden shrink-0 cursor-pointer transition-all duration-300 ${
                            selectedImg === idx
                              ? "border-2 border-glow-blue opacity-100 scale-110 shadow-[0_0_15px_rgba(124,140,255,0.4)]"
                              : "border border-white/5 opacity-40 hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                          }`}
                          onClick={() => setSelectedImg(idx)}
                        >
                          <img
                            src={img}
                            alt={`Thumb ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </section>
  );
}

/* ═══════════════════════════════════════════════
   TECH STACK SECTION
   ═══════════════════════════════════════════════ */
function TechStackSection({ proj, t }: { proj: Project; t: TFunction }) {
  return (
    <section className="py-6 md:py-8">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-glow-blue/40" />
            <h2 className="text-sm tracking-[0.2em] uppercase text-glow-blue/80 font-semibold">
              {t("project_detail.stack_title", "Exploration Tools")}
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {proj.stack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-white/[0.02] backdrop-blur-xl rounded-2xl p-5 border border-white/5 hover:border-glow-blue/30 transition-colors duration-500 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-glow-blue/5 via-bioluminescent-purple/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_30px_rgba(91,91,247,0.06)]" />
              <p className="relative z-10 text-sm font-semibold text-ocean-text/80 group-hover:text-white transition-colors duration-300">{tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FEATURES SECTION
   ═══════════════════════════════════════════════ */
function FeaturesSection({ proj, t }: { proj: Project; t: TFunction }) {
  return (
    <section className="py-6 md:py-8">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-bioluminescent-purple/40" />
            <h2 className="text-sm tracking-[0.2em] uppercase text-bioluminescent-purple/80 font-semibold">
              {t("project_detail.features_title", "Discoveries")}
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proj.features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white/[0.02] backdrop-blur-xl rounded-2xl p-7 border border-white/5 hover:border-bioluminescent-purple/20 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bioluminescent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative z-10 flex gap-5">
                <span className="text-3xl shrink-0 mt-1">{feat.icon}</span>
                <div>
                  <h3 className="text-base font-bold text-ocean-text group-hover:text-white transition-colors duration-300 mb-2">
                    {feat.name}
                  </h3>
                  <p className="text-sm text-ocean-text/50 font-light leading-relaxed">{feat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   NAVIGATION SECTION
   ═══════════════════════════════════════════════ */
function NavigationSection({ prev, next, t }: { prev: Project | null; next: Project | null; t: TFunction }) {
  return (
    <section className="py-8 md:py-12 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous */}
          {prev ? (
            <Link
              to={`/project/${prev.slug}`}
              className="group bg-white/[0.02] backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 hover:border-glow-blue/20 transition-all duration-500 relative"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img src={prev.imageUrl} alt="" className="w-full h-full object-cover opacity-[0.06] group-hover:opacity-[0.12] scale-110 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="relative z-10 p-7">
                <div className="flex items-center gap-2 text-ocean-text/40 mb-3">
                  <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                    {t("project_detail.prev_project", "Previous Expedition")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ocean-text group-hover:text-glow-blue transition-colors duration-300">{prev.title}</h3>
                <p className="text-xs text-ocean-text/40 font-mono tracking-wider mt-1">{prev.category}</p>
              </div>
            </Link>
          ) : <div />}

          {/* Next */}
          {next ? (
            <Link
              to={`/project/${next.slug}`}
              className="group bg-white/[0.02] backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 hover:border-glow-blue/20 transition-all duration-500 relative text-right"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img src={next.imageUrl} alt="" className="w-full h-full object-cover opacity-[0.06] group-hover:opacity-[0.12] scale-110 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="relative z-10 p-7">
                <div className="flex items-center justify-end gap-2 text-ocean-text/40 mb-3">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                    {t("project_detail.next_project", "Next Expedition")}
                  </span>
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-ocean-text group-hover:text-glow-blue transition-colors duration-300">{next.title}</h3>
                <p className="text-xs text-ocean-text/40 font-mono tracking-wider mt-1">{next.category}</p>
              </div>
            </Link>
          ) : <div />}
        </div>
      </div>
    </section>
  );
}
