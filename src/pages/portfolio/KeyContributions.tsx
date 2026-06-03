import { motion } from "framer-motion";
import type { Experience } from "../../utils/data";
import type { TFunction } from "i18next";

export default function KeyContributions({ exp, t }: { exp: Experience; t: TFunction }) {
  return (
    <section className="py-4 md:py-6">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-bioluminescent-purple/40" />
            <h2 className="text-sm tracking-[0.2em] uppercase text-bioluminescent-purple/80 font-semibold">
              {t("experience.key_contributions", "Key Contributions")}
            </h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div>
            {exp.description.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex gap-6 items-start group pb-6 last:pb-0"
              >
                {/* Line segment below the node */}
                {idx < exp.description.length - 1 && (
                  <div className="absolute left-[23px] md:left-[27px] top-12 md:top-14 bottom-0 w-px bg-gradient-to-b from-glow-blue/40 to-bioluminescent-purple/30" />
                )}

                {/* Timeline node */}
                <div className="relative shrink-0 z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 group-hover:border-glow-blue/30 flex items-center justify-center transition-colors duration-500 shadow-lg">
                    <span className="text-xs font-mono font-bold text-glow-blue/70 group-hover:text-glow-blue transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white/[0.02] backdrop-blur-xl rounded-2xl p-5 md:p-6 border border-white/5 group-hover:border-bioluminescent-purple/20 transition-colors duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-bioluminescent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-ocean-text/30 mb-3 block">
                      {t("experience.contribution", "Mission Contribution")} #{String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm md:text-base text-ocean-text/70 font-light leading-relaxed">
                      {item.map((segment, i) =>
                        typeof segment === "string" ? (
                          <span key={i}>{segment}</span>
                        ) : (
                          <a key={i} href={segment.href} target="_blank" rel="noopener noreferrer"
                            className="text-glow-blue hover:text-white underline decoration-glow-blue/30 hover:decoration-white underline-offset-4 transition-colors font-medium">
                            {segment.text}
                          </a>
                        )
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
