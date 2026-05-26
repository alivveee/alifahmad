import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { experiences as experiences_en, experiences_id } from "../utils/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaLink, FaCheck } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function PortfolioDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const experiences = i18n.language.startsWith('id') ? experiences_id : experiences_en;

  const exp = experiences.find((e) => e.slug === slug);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [copiedPlatform, setCopiedPlatform] = useState<string | null>(null);
  const [isGridMode, setIsGridMode] = useState<boolean>(false);

  const handleCopyLink = (platform?: string) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedPlatform(platform || "copy");
    setTimeout(() => setCopiedPlatform(null), 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      const activeEl = document.getElementById(`thumb-${selectedIndex}`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Portfolio Not Found</h1>
          <button onClick={() => navigate("/")} className="text-violet-400 hover:underline">
            &larr; Back to Home
          </button>
        </div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-zinc-500 mb-8 items-center gap-2">
          <Link to="/" className="hover:text-violet-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/#portfolio" className="hover:text-violet-400 transition-colors">Portfolio</Link>
          <span>/</span>
          <span className="text-zinc-300 font-medium">{exp.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1 space-y-10">
            {/* Header: Company Name & Logo */}
            <div className="flex items-center gap-4">
              {exp.company.logo ? (
                <div className="w-16 h-16 rounded-xl bg-white p-2 shrink-0 flex items-center justify-center">
                  <img src={exp.company.logo} alt={exp.company.text} className="max-w-full max-h-full object-contain" />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-xl bg-violet-600 shrink-0 flex items-center justify-center text-white font-bold text-2xl">
                  {exp.company.text.charAt(0)}
                </div>
              )}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{exp.title}</h1>
                <a 
                  href={exp.company.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg text-violet-400 hover:text-violet-300 font-medium transition-colors"
                >
                  {exp.company.text}
                </a>
              </div>
            </div>

            {/* Company Profile */}
            {exp.companyProfile && (
              <section className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800">
                <h2 className="text-xl font-bold text-white mb-4">Company Profile</h2>
                <p className="leading-relaxed">{exp.companyProfile}</p>
              </section>
            )}

            {/* Experience / Description */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Experience & Details</h2>
              <div className="space-y-4">
                {exp.description.map((list, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-zinc-900/30 p-4 rounded-xl border border-zinc-800/50">
                    <span className="text-violet-500 mt-1 shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <p className="leading-relaxed text-zinc-300 text-base">
                      {list.map((segment, i) =>
                        typeof segment === "string" ? (
                          <span key={i}>{segment}</span>
                        ) : (
                          <a
                            key={i}
                            href={segment.href}
                            target="_blank"
                            className="text-violet-400 hover:text-violet-300 underline decoration-violet-400/30 hover:decoration-violet-300 underline-offset-2 transition-colors font-medium"
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
            <div className="sticky top-28 bg-zinc-900/80 backdrop-blur-md rounded-2xl p-6 border border-zinc-800 shadow-xl flex flex-col gap-6">
              
              <div className="space-y-4">
                {exp.subtitle && (
                  <div>
                    <h3 className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Status</h3>
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20">
                      {exp.subtitle}
                    </div>
                  </div>
                )}

                {exp.category && (
                  <div>
                    <h3 className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Category</h3>
                    <p className="font-medium text-white">{exp.category}</p>
                  </div>
                )}

                {exp.year && (
                  <div>
                    <h3 className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Period</h3>
                    <p className="font-medium text-white">{exp.year}</p>
                  </div>
                )}
              </div>

              <div className="h-px bg-zinc-800 w-full" />

              <div className="space-y-3">
                <h3 className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
                  {t('experience.share_title', 'Share')}
                </h3>
                <div className="flex items-center gap-2.5 flex-wrap">
                  {/* WhatsApp */}
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(exp.title + ' - ' + window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-violet-500 hover:text-violet-400 text-zinc-400 rounded-xl transition-all duration-200 hover:scale-105"
                    title="Share to WhatsApp"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>

                  {/* Instagram */}
                  <button
                    onClick={() => handleCopyLink("instagram")}
                    className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-violet-500 hover:text-violet-400 text-zinc-400 rounded-xl transition-all duration-200 hover:scale-105 relative cursor-pointer"
                    title="Share to Instagram (Copy Link)"
                  >
                    <FaInstagram className="w-5 h-5" />
                    {copiedPlatform === "instagram" && (
                      <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-800 text-emerald-400 text-[10px] py-1 px-2 rounded-md font-semibold whitespace-nowrap shadow-md z-10">
                        Copied!
                      </span>
                    )}
                  </button>

                  {/* X */}
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(exp.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-violet-500 hover:text-violet-400 text-zinc-400 rounded-xl transition-all duration-200 hover:scale-105"
                    title="Share to X"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-violet-500 hover:text-violet-400 text-zinc-400 rounded-xl transition-all duration-200 hover:scale-105"
                    title="Share to LinkedIn"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>

                  {/* Copy Link */}
                  <button
                    onClick={() => handleCopyLink("copy")}
                    className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-violet-500 hover:text-violet-400 text-zinc-400 rounded-xl transition-all duration-200 hover:scale-105 relative cursor-pointer"
                    title="Copy Link"
                  >
                    {copiedPlatform === "copy" ? (
                      <FaCheck className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <FaLink className="w-5 h-5" />
                    )}
                    {copiedPlatform === "copy" && (
                      <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-800 text-emerald-400 text-[10px] py-1 px-2 rounded-md font-semibold whitespace-nowrap shadow-md z-10">
                        Copied!
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {exp.galleryImages.slice(0, exp.galleryImages.length > 8 ? 7 : exp.galleryImages.length).map((img, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-xl overflow-hidden cursor-pointer shadow-lg aspect-video bg-zinc-900 border border-zinc-800 group"
                  onClick={() => setSelectedIndex(idx)}
                >
                  <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                </motion.div>
              ))}

              {exp.galleryImages.length > 8 && (
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg aspect-video bg-zinc-900 border border-zinc-800 group"
                  onClick={() => setSelectedIndex(7)}
                >
                  <img 
                    src={exp.galleryImages[7]} 
                    alt="More Gallery" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center transition-colors group-hover:bg-black/70">
                    <span className="text-violet-400 text-lg md:text-xl font-bold tracking-wide">
                      +{exp.galleryImages.length - 7} See More
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox / Preview Gallery */}
      <AnimatePresence>
        {selectedIndex !== null && exp.galleryImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-zinc-900/80 p-6 backdrop-blur-xl select-none"
            data-lenis-prevent
            onClick={() => {
              setSelectedIndex(null);
              setIsGridMode(false);
            }}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between w-full z-10" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-lg text-sm font-semibold transition-colors"
                onClick={() => {
                  setSelectedIndex(null);
                  setIsGridMode(false);
                }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Close
              </button>

              {/* Progress Indicator */}
              <div className="text-white/90 font-bold text-base md:text-lg">
                {selectedIndex + 1} / {exp.galleryImages.length}
              </div>

              {/* Utilities */}
              <div className="flex items-center gap-3">
                <button 
                  className={`p-2 border rounded-lg transition-colors ${isGridMode ? 'bg-violet-600 border-violet-500 text-white' : 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-white'}`}
                  title="Toggle Grid View"
                  onClick={() => setIsGridMode(!isGridMode)}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button 
                  className="p-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-lg transition-colors"
                  title="Toggle Fullscreen"
                  onClick={() => {
                    if (!document.fullscreenElement) {
                      document.documentElement.requestFullscreen().catch(() => {});
                    } else {
                      document.exitFullscreen().catch(() => {});
                    }
                  }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
            </div>

            {isGridMode ? (
              <div className="flex-1 overflow-y-auto p-4 my-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent" onClick={(e) => e.stopPropagation()}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                  {exp.galleryImages.map((img, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className={`rounded-xl overflow-hidden cursor-pointer shadow-lg aspect-video bg-zinc-900 border ${selectedIndex === idx ? 'border-violet-500 ring-2 ring-violet-500/50' : 'border-zinc-800'}`}
                      onClick={() => {
                        setSelectedIndex(idx);
                        setIsGridMode(false);
                      }}
                    >
                      <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {/* Middle: Arrow Left + Image + Arrow Right */}
                <div className="relative flex-1 flex items-center justify-center my-6" onClick={(e) => e.stopPropagation()}>
                  {/* Prev Button */}
                  <button 
                    className="absolute left-0 md:left-4 z-10 p-3 bg-zinc-900/60 border border-zinc-800/80 hover:bg-zinc-800 text-white rounded-full transition-all"
                    onClick={() => setSelectedIndex((selectedIndex - 1 + exp.galleryImages!.length) % exp.galleryImages!.length)}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Active Image */}
                  <motion.img
                    key={selectedIndex}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    src={exp.galleryImages[selectedIndex]}
                    alt={`Preview ${selectedIndex + 1}`}
                    className="max-w-full max-h-[50vh] md:max-h-[62vh] rounded-xl shadow-2xl object-contain"
                  />

                  {/* Next Button */}
                  <button 
                    className="absolute right-0 md:right-4 z-10 p-3 bg-zinc-900/60 border border-zinc-800/80 hover:bg-zinc-800 text-white rounded-full transition-all"
                    onClick={() => setSelectedIndex((selectedIndex + 1) % exp.galleryImages!.length)}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Bottom Metadata & Thumbnails */}
                <div className="w-full text-center space-y-4" onClick={(e) => e.stopPropagation()}>
                  <h3 className="text-white text-base md:text-lg font-semibold tracking-wide">
                    {exp.title} - {exp.company.text}
                  </h3>

                  {/* Thumbnails Row */}
                  <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto py-2 max-w-full mx-auto px-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
                    {exp.galleryImages.map((img, idx) => (
                      <div 
                        key={idx}
                        id={`thumb-${idx}`}
                        className={`w-20 md:w-24 aspect-video rounded-lg overflow-hidden shrink-0 cursor-pointer transition-all duration-200 ${
                          selectedIndex === idx 
                            ? "border-2 border-white opacity-100 scale-105 shadow-lg shadow-white/10" 
                            : "border-2 border-transparent opacity-40 hover:opacity-75"
                        }`}
                        onClick={() => setSelectedIndex(idx)}
                      >
                        <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
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
