import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import type { Experience } from "../../utils/data";
import type { TFunction } from "i18next";

interface Props {
  exp: Experience;
  t: TFunction;
  selectedIndex: number | null;
  setSelectedIndex: (v: number | null) => void;
  isGridMode: boolean;
  setIsGridMode: (v: boolean) => void;
}

export default function ArtifactsSection({ exp, t, selectedIndex, setSelectedIndex, isGridMode, setIsGridMode }: Props) {
  if (!exp.galleryImages || exp.galleryImages.length === 0) return null;

  return (
    <>
      <section className="py-4 md:py-6">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-px bg-glow-blue/40" />
              <h2 className="text-sm tracking-[0.2em] uppercase text-glow-blue/80 font-semibold">
                {t("experience.artifacts", "Mission Artifacts")}
              </h2>
            </div>
            <p className="text-sm text-ocean-text/40 font-light mb-6 ml-16">
              {t("experience.artifacts_desc", "Snapshots collected during this expedition.")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {exp.galleryImages.slice(0, exp.galleryImages.length > 9 ? 8 : exp.galleryImages.length).map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="rounded-2xl overflow-hidden cursor-pointer shadow-xl aspect-video bg-abyss border border-white/5 hover:border-glow-blue/30 group transition-colors duration-300"
                onClick={() => setSelectedIndex(idx)}
              >
                <img src={img} alt={`Artifact ${idx + 1}`}
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500" />
              </motion.div>
            ))}
            {exp.galleryImages.length > 9 && (
              <motion.div
                className="relative rounded-2xl overflow-hidden cursor-pointer shadow-xl aspect-video bg-abyss border border-white/5 hover:border-glow-blue/30 group transition-colors duration-300"
                onClick={() => setSelectedIndex(8)}
              >
                <img src={exp.galleryImages[8]} alt="More" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-abyss/40 backdrop-blur-sm group-hover:bg-transparent transition-colors">
                  <span className="text-glow-blue group-hover:text-white text-lg font-bold tracking-wide transition-colors">
                    +{exp.galleryImages.length - 8} More
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {createPortal(
        <AnimatePresence>
          {selectedIndex !== null && exp.galleryImages && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex flex-col justify-between bg-abyss/95 p-6 backdrop-blur-2xl select-none"
              onClick={() => { setSelectedIndex(null); setIsGridMode(false); }}
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between w-full z-10" onClick={e => e.stopPropagation()}>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 hover:bg-white/10 text-white rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                  onClick={() => { setSelectedIndex(null); setIsGridMode(false); }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  Close
                </button>
                <div className="text-ocean-text/60 font-mono tracking-widest text-sm">{selectedIndex + 1} / {exp.galleryImages.length}</div>
                <div className="flex items-center gap-3">
                  <button className={`p-2 border rounded-xl transition-colors cursor-pointer ${isGridMode ? "bg-glow-blue/20 border-glow-blue/50 text-glow-blue" : "bg-white/[0.03] border-white/10 hover:bg-white/10 text-white"}`}
                    onClick={() => setIsGridMode(!isGridMode)}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                  </button>
                </div>
              </div>

              {isGridMode ? (
                <div className="flex-1 overflow-y-auto p-4 my-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent" onClick={e => e.stopPropagation()}>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {exp.galleryImages.map((img, idx) => (
                      <motion.div key={idx}
                        className={`rounded-2xl overflow-hidden cursor-pointer shadow-lg aspect-video bg-abyss border transition-colors ${selectedIndex === idx ? "border-glow-blue ring-2 ring-glow-blue/50" : "border-white/5 hover:border-white/20"}`}
                        onClick={() => { setSelectedIndex(idx); setIsGridMode(false); }}>
                        <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className="relative flex-1 flex items-center justify-center my-6" onClick={e => e.stopPropagation()}>
                    <button className="absolute left-0 md:left-4 z-10 p-3 bg-white/[0.03] border border-white/10 hover:bg-white/10 text-white rounded-full transition-colors backdrop-blur-md cursor-pointer"
                      onClick={() => setSelectedIndex((selectedIndex - 1 + exp.galleryImages!.length) % exp.galleryImages!.length)}>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <motion.img key={selectedIndex} initial={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }} animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }} exit={{ scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }} src={exp.galleryImages[selectedIndex]} alt={`Preview ${selectedIndex + 1}`}
                      className="max-w-full max-h-[50vh] md:max-h-[62vh] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] object-contain border border-white/5" />
                    <button className="absolute right-0 md:right-4 z-10 p-3 bg-white/[0.03] border border-white/10 hover:bg-white/10 text-white rounded-full transition-colors backdrop-blur-md cursor-pointer"
                      onClick={() => setSelectedIndex((selectedIndex + 1) % exp.galleryImages!.length)}>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                  <div className="w-full text-center space-y-4" onClick={e => e.stopPropagation()}>
                    <h3 className="text-white text-base md:text-lg font-semibold tracking-wide">{exp.title} — {exp.company.text}</h3>
                    <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto py-4 max-w-full mx-auto px-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                      {exp.galleryImages.map((img, idx) => (
                        <div key={idx} id={`thumb-${idx}`}
                          className={`w-20 md:w-24 aspect-video rounded-xl overflow-hidden shrink-0 cursor-pointer transition-all duration-300 ${selectedIndex === idx
                            ? "border-2 border-glow-blue opacity-100 scale-110 shadow-[0_0_15px_rgba(124,140,255,0.4)]"
                            : "border border-white/5 opacity-40 hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"}`}
                          onClick={() => setSelectedIndex(idx)}>
                          <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
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
    </>
  );
}
