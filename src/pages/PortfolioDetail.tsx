import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { experiences as experiences_en, experiences_id } from "../utils/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaLinkedinIn, FaLink, FaCheck } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import DeepSeaParticles from "../components/ui/DeepSeaParticles";

export default function PortfolioDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const experiences = i18n.language.startsWith("id")
    ? experiences_id
    : experiences_en;

  const exp = experiences.find((e) => e.slug === slug);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [copiedPlatform, setCopiedPlatform] = useState<string | null>(null);
  const [isGridMode, setIsGridMode] = useState<boolean>(false);

  const handleCopyLink = (platform?: string) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedPlatform(platform || "copy");
    setTimeout(() => setCopiedPlatform(null), 2000);
  };

  const handleSocialShare = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const width = 550;
    const height = 450;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    window.open(
      href,
      "share-dialog",
      `width=${width},height=${height},left=${left},top=${top},toolbar=0,status=0,menubar=0`
    );
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: exp?.title || "Portfolio",
          text: `Check out this project: ${exp?.title} - ${exp?.company?.text}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      handleCopyLink("copy");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      const activeEl = document.getElementById(`thumb-${selectedIndex}`);
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

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null || !exp?.galleryImages) return;
      if (e.key === "ArrowLeft") {
        setSelectedIndex(
          (selectedIndex - 1 + exp.galleryImages.length) %
            exp.galleryImages.length
        );
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
          <h1 className="text-3xl font-bold mb-4 tracking-wider uppercase">Artifact Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-glow-blue hover:text-white font-medium transition-colors"
          >
            &larr; Return to Surface
          </button>
        </div>
        <DeepSeaParticles count={10} className="fixed inset-0 pointer-events-none opacity-30" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-abyss text-ocean-text py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* ══════ BACKGROUND: THE DEEP SEA ══════ */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-deep-ocean to-abyss opacity-100 pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(91,91,247,0.05)_0%,_transparent_60%)] pointer-events-none" />
      <DeepSeaParticles count={25} className="opacity-20 fixed inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex text-xs md:text-sm text-ocean-text/40 mb-12 items-center gap-2 font-mono tracking-widest uppercase">
          <Link to="/" className="hover:text-glow-blue transition-colors duration-300">
            Home
          </Link>
          <span className="opacity-30">/</span>
          <Link to="/#portfolio" className="hover:text-glow-blue transition-colors duration-300">
            Portfolio
          </Link>
          <span className="opacity-30">/</span>
          <span className="text-glow-blue/80 font-medium truncate max-w-[150px] sm:max-w-none">
            {exp.title}
          </span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="flex-1 space-y-12">
            {/* Header: Company Name & Logo */}
            <div className="flex items-center gap-6">
              {exp.company.logo ? (
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 p-3 shrink-0 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <img
                    src={exp.company.logo}
                    alt={exp.company.text}
                    className="max-w-full max-h-full object-contain filter drop-shadow-md"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-glow-blue/20 to-bioluminescent-purple/20 border border-white/10 shrink-0 flex items-center justify-center text-glow-blue font-bold text-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
                  {exp.company.text.charAt(0)}
                </div>
              )}
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                  {exp.title}
                </h1>
                <a
                  href={exp.company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg text-glow-blue hover:text-white font-medium transition-colors duration-300"
                >
                  {exp.company.text}
                </a>
              </div>
            </div>

            {/* Company Profile */}
            {exp.companyProfile && (
              <section className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-glow-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-8 h-px bg-glow-blue/40" />
                  <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-glow-blue/80">
                    Company Profile
                  </h2>
                </div>
                <p className="leading-relaxed text-ocean-text/70 font-light relative z-10">
                  {exp.companyProfile}
                </p>
              </section>
            )}

            {/* Experience / Description */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-bioluminescent-purple/40" />
                <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-bioluminescent-purple/80">
                  Experience & Details
                </h2>
              </div>
              <div className="space-y-4">
                {exp.description.map((list, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-start bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md p-5 rounded-2xl border border-white/5 hover:border-glow-blue/20 hover:shadow-[0_10px_30px_rgba(91,91,247,0.1)] transition-all duration-300 group"
                  >
                    <span className="text-glow-blue/50 mt-1 shrink-0 group-hover:text-glow-blue transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <p className="leading-relaxed text-ocean-text/70 text-sm md:text-base font-light">
                      {list.map((segment, i) =>
                        typeof segment === "string" ? (
                          <span key={i}>{segment}</span>
                        ) : (
                          <a
                            key={i}
                            href={segment.href}
                            target="_blank"
                            className="text-glow-blue hover:text-white underline decoration-glow-blue/30 hover:decoration-white underline-offset-4 transition-colors font-medium"
                          >
                            {segment.text}
                          </a>
                        )
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Aside */}
          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-28 bg-white/[0.02] backdrop-blur-2xl rounded-3xl p-8 border border-white/5 shadow-2xl flex flex-col gap-8">
              <div className="space-y-6">
                {exp.subtitle && (
                  <div>
                    <h3 className="text-[10px] text-ocean-text/40 font-bold uppercase tracking-widest mb-2">
                      Status
                    </h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-bioluminescent-purple/10 text-bioluminescent-purple border border-bioluminescent-purple/20">
                      {exp.subtitle}
                    </div>
                  </div>
                )}

                {exp.category && (
                  <div>
                    <h3 className="text-[10px] text-ocean-text/40 font-bold uppercase tracking-widest mb-2">
                      Category
                    </h3>
                    <p className="font-medium text-ocean-text/90">
                      {exp.category}
                    </p>
                  </div>
                )}

                {exp.year && (
                  <div>
                    <h3 className="text-[10px] text-ocean-text/40 font-bold uppercase tracking-widest mb-2">
                      Period
                    </h3>
                    <p className="font-medium text-ocean-text/90 font-mono">
                      {exp.year}
                    </p>
                  </div>
                )}
              </div>

              <div className="h-px bg-white/5 w-full" />

              <div className="space-y-4">
                <h3 className="text-[10px] text-ocean-text/40 font-bold uppercase tracking-widest">
                  {t("experience.share_title", "Share")}
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {/* WhatsApp */}
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      exp.title + " - " + window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleSocialShare}
                    className="p-3 bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-glow-blue/50 hover:bg-glow-blue/10 text-ocean-text/60 hover:text-white rounded-xl transition-all duration-300 shadow-lg"
                    title="Share to WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>

                  {/* X */}
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      exp.title
                    )}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleSocialShare}
                    className="p-3 bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-glow-blue/50 hover:bg-glow-blue/10 text-ocean-text/60 hover:text-white rounded-xl transition-all duration-300 shadow-lg"
                    title="Share to X"
                  >
                    <FaXTwitter className="w-4 h-4" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleSocialShare}
                    className="p-3 bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-glow-blue/50 hover:bg-glow-blue/10 text-ocean-text/60 hover:text-white rounded-xl transition-all duration-300 shadow-lg"
                    title="Share to LinkedIn"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>

                  {/* Copy Link / Native Share */}
                  <button
                    onClick={handleNativeShare}
                    className="p-3 bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-bioluminescent-purple/50 hover:bg-bioluminescent-purple/10 text-ocean-text/60 hover:text-white rounded-xl transition-all duration-300 shadow-lg relative cursor-pointer"
                    title="Share / Copy Link"
                  >
                    {copiedPlatform === "copy" ? (
                      <FaCheck className="w-4 h-4 text-glow-blue" />
                    ) : (
                      <FaLink className="w-4 h-4" />
                    )}
                    {copiedPlatform === "copy" && (
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] py-1 px-2 rounded-md font-semibold tracking-wider whitespace-nowrap shadow-xl z-10">
                        COPIED
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Gallery Section */}
        {exp.galleryImages && exp.galleryImages.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-glow-blue/40" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-glow-blue/80">
                Visual Artifacts
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {exp.galleryImages
                .slice(0, exp.galleryImages.length > 8 ? 7 : exp.galleryImages.length)
                .map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="rounded-2xl overflow-hidden cursor-pointer shadow-xl aspect-video bg-abyss border border-white/5 hover:border-glow-blue/30 group transition-all duration-300"
                    onClick={() => setSelectedIndex(idx)}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
                    />
                  </motion.div>
                ))}

              {exp.galleryImages.length > 8 && (
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden cursor-pointer shadow-xl aspect-video bg-abyss border border-white/5 hover:border-glow-blue/30 group transition-all duration-300"
                  onClick={() => setSelectedIndex(7)}
                >
                  <img
                    src={exp.galleryImages[7]}
                    alt="More Gallery"
                    className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center transition-colors bg-abyss/40 backdrop-blur-sm group-hover:bg-transparent">
                    <span className="text-glow-blue group-hover:text-white text-lg md:text-xl font-bold tracking-wide transition-colors">
                      +{exp.galleryImages.length - 7} View More
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ══════ LIGHTBOX / PREVIEW GALLERY ══════ */}
      <AnimatePresence>
        {selectedIndex !== null && exp.galleryImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-abyss/95 p-6 backdrop-blur-2xl select-none"
            data-lenis-prevent
            onClick={() => {
              setSelectedIndex(null);
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
                className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 hover:bg-white/10 text-white rounded-xl text-sm font-semibold transition-colors"
                onClick={() => {
                  setSelectedIndex(null);
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
                {selectedIndex + 1} / {exp.galleryImages.length}
              </div>

              {/* Utilities */}
              <div className="flex items-center gap-3">
                <button
                  className={`p-2 border rounded-xl transition-colors ${
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
                  className="p-2 bg-white/[0.03] border border-white/10 hover:bg-white/10 text-white rounded-xl transition-colors"
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
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                  {exp.galleryImages.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className={`rounded-2xl overflow-hidden cursor-pointer shadow-lg aspect-video bg-abyss border ${
                        selectedIndex === idx
                          ? "border-glow-blue ring-2 ring-glow-blue/50"
                          : "border-white/5"
                      }`}
                      onClick={() => {
                        setSelectedIndex(idx);
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
                    className="absolute left-0 md:left-4 z-10 p-3 bg-white/[0.03] border border-white/10 hover:bg-white/10 text-white rounded-full transition-all backdrop-blur-md"
                    onClick={() =>
                      setSelectedIndex(
                        (selectedIndex - 1 + exp.galleryImages!.length) %
                          exp.galleryImages!.length
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
                    key={selectedIndex}
                    initial={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    src={exp.galleryImages[selectedIndex]}
                    alt={`Preview ${selectedIndex + 1}`}
                    className="max-w-full max-h-[50vh] md:max-h-[62vh] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] object-contain border border-white/5"
                  />

                  {/* Next Button */}
                  <button
                    className="absolute right-0 md:right-4 z-10 p-3 bg-white/[0.03] border border-white/10 hover:bg-white/10 text-white rounded-full transition-all backdrop-blur-md"
                    onClick={() =>
                      setSelectedIndex(
                        (selectedIndex + 1) % exp.galleryImages!.length
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
                    {exp.title} - {exp.company.text}
                  </h3>

                  {/* Thumbnails Row */}
                  <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto py-4 max-w-full mx-auto px-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    {exp.galleryImages.map((img, idx) => (
                      <div
                        key={idx}
                        id={`thumb-${idx}`}
                        className={`w-20 md:w-24 aspect-video rounded-xl overflow-hidden shrink-0 cursor-pointer transition-all duration-300 ${
                          selectedIndex === idx
                            ? "border-2 border-glow-blue opacity-100 scale-110 shadow-[0_0_15px_rgba(124,140,255,0.4)]"
                            : "border border-white/5 opacity-40 hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                        }`}
                        onClick={() => setSelectedIndex(idx)}
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
      </AnimatePresence>
    </div>
  );
}
