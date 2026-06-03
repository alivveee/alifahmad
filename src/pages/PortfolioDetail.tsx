import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { experiences as experiences_en, experiences_id } from "../utils/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useLayoutEffect } from "react";
import DeepSeaParticles from "../components/ui/DeepSeaParticles";

import HeroSection from "./portfolio/HeroSection";
import MissionOverview from "./portfolio/MissionOverview";
import KeyContributions from "./portfolio/KeyContributions";
import TechStackSection from "./portfolio/TechStackSection";
import ArtifactsSection from "./portfolio/ArtifactsSection";
import MissionImpact from "./portfolio/MissionImpact";
import NavigationSection from "./portfolio/NavigationSection";

export default function PortfolioDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const experiences = i18n.language.startsWith("id") ? experiences_id : experiences_en;

  const currentIndex = experiences.findIndex((e) => e.slug === slug);
  const exp = currentIndex !== -1 ? experiences[currentIndex] : null;
  const prevExp = currentIndex > 0 ? experiences[currentIndex - 1] : null;
  const nextExp = currentIndex < experiences.length - 1 ? experiences[currentIndex + 1] : null;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isGridMode, setIsGridMode] = useState<boolean>(false);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setSelectedIndex(null);
    setIsGridMode(false);
  }, [slug]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      const activeEl = document.getElementById(`thumb-${selectedIndex}`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null || !exp?.galleryImages) return;
      if (e.key === "ArrowLeft") {
        setSelectedIndex((selectedIndex - 1 + exp.galleryImages.length) % exp.galleryImages.length);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((selectedIndex + 1) % exp.galleryImages.length);
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
        setIsGridMode(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, exp]);

  if (!exp) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-abyss text-ocean-text">
        <div className="text-center z-10 relative">
          <h1 className="text-3xl font-bold mb-4 tracking-wider uppercase">
            {t("experience.not_found", "Mission Record Not Found")}
          </h1>
          <button onClick={() => navigate("/")} className="text-glow-blue hover:text-white font-medium transition-colors cursor-pointer">
            &larr; {t("experience.return", "Return to Surface")}
          </button>
        </div>
        <DeepSeaParticles count={10} className="fixed inset-0 pointer-events-none opacity-30" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-abyss text-ocean-text overflow-hidden">
      {/* Background */}
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
          <HeroSection exp={exp} t={t} />
          <MissionOverview exp={exp} t={t} />
          <KeyContributions exp={exp} t={t} />
          <TechStackSection slug={exp.slug} t={t} />
          <ArtifactsSection
            exp={exp} t={t}
            selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}
            isGridMode={isGridMode} setIsGridMode={setIsGridMode}
          />
          <MissionImpact slug={exp.slug} t={t} />
          <NavigationSection prev={prevExp} next={nextExp} t={t} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
