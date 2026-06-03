import { motion } from "framer-motion";
import type { Experience } from "../../utils/data";
import type { TFunction } from "i18next";

export default function MissionOverview({ exp, t }: { exp: Experience; t: TFunction }) {
  if (!exp.companyProfile) return null;
  return (
    <section className="py-4 md:py-6">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-glow-blue/40" />
            <h2 className="text-sm tracking-[0.2em] uppercase text-glow-blue/80 font-semibold">
              {t("experience.mission_overview", "Mission Overview")}
            </h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="group bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/5 hover:border-glow-blue/20 transition-colors duration-500 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-glow-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="relative z-10 flex gap-6 items-start">
            {exp.company.logo && (
              <div className="hidden md:flex shrink-0 w-14 h-14 rounded-xl bg-white/[0.05] border border-white/10 p-3 items-center justify-center">
                <img src={exp.company.logo} alt="" className="max-w-full max-h-full object-contain" />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">{exp.company.text}</h3>
              <p className="text-base md:text-lg text-ocean-text/60 font-light leading-relaxed">{exp.companyProfile}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
