import { motion } from "framer-motion";
import type { Experience } from "../../utils/data";
import type { TFunction } from "i18next";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

export default function HeroSection({ exp, t }: { exp: Experience; t: TFunction }) {
  return (
    <section className="relative pt-20 pb-8 md:pt-28 md:pb-12 overflow-hidden">
      {/* Sonar pulse behind title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-glow-blue/10 animate-[ping_3s_ease-in-out_infinite] opacity-20" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[300px] h-[300px] rounded-full border border-glow-blue/15 animate-[ping_3s_ease-in-out_infinite_0.5s] opacity-15" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          className="flex text-xs text-ocean-text/40 mb-8 items-center gap-2 font-mono tracking-widest uppercase"
        >
          <Link to="/" className="hover:text-glow-blue transition-colors">Home</Link>
          <span className="opacity-30">/</span>
          <Link to="/#portfolio" className="hover:text-glow-blue transition-colors">
            {t("experience.journey_log", "Journey Log")}
          </Link>
          <span className="opacity-30">/</span>
          <span className="text-glow-blue/80 font-medium truncate max-w-[150px] sm:max-w-none">{exp.title}</span>
        </motion.nav>

        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
          {/* Depth indicator */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-glow-blue animate-pulse" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-glow-blue/60">
              {t("experience.mission_record", "Mission Record")} — {exp.year || ""}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-glow-blue/20 to-transparent" />
          </motion.div>

          {/* Company logo card + Title */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Glassmorphism logo card */}
            <motion.div variants={fadeUp} className="shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-4 flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-glow-blue/10 to-bioluminescent-purple/5 pointer-events-none" />
                {exp.company.logo ? (
                  <img src={exp.company.logo} alt={exp.company.text} className="max-w-full max-h-full object-contain relative z-10 filter drop-shadow-md" />
                ) : (
                  <span className="text-glow-blue font-bold text-3xl relative z-10">{exp.company.text.charAt(0)}</span>
                )}
              </div>
            </motion.div>

            <div className="flex-1">
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-4">
                {exp.title}
              </motion.h1>

              <motion.div variants={fadeUp}>
                <a href={exp.company.href} target="_blank" rel="noopener noreferrer"
                  className="text-lg md:text-xl text-glow-blue hover:text-white font-medium transition-colors">
                  {exp.company.text}
                </a>
              </motion.div>

              {/* Meta badges */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mt-6">
                {exp.subtitle && (
                  <span className="px-4 py-2 rounded-xl text-xs font-semibold bg-bioluminescent-purple/10 border border-bioluminescent-purple/20 text-bioluminescent-purple">
                    {exp.subtitle}
                  </span>
                )}
                {exp.category && (
                  <span className="px-4 py-2 rounded-xl text-xs font-semibold bg-glow-blue/10 border border-glow-blue/20 text-glow-blue/80">
                    {exp.category}
                  </span>
                )}
              </motion.div>

              {/* Mission summary */}
              {exp.shortDescription && (
                <motion.p variants={fadeUp} className="text-base md:text-lg text-ocean-text/60 font-light leading-relaxed max-w-3xl mt-6">
                  {exp.shortDescription}
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
