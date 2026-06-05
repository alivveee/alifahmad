import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Experience } from "../../utils/data";
import type { TFunction } from "i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Props {
  prev: Experience | null;
  next: Experience | null;
  t: TFunction;
}

export default function NavigationSection({ prev, next, t }: Props) {
  return (
    <section className="py-6 md:py-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-glow-blue/40" />
            <h2 className="text-sm tracking-[0.2em] uppercase text-glow-blue/80 font-semibold">
              {t("experience.continue_exploring", "Continue Exploring")}
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {prev ? (
            <Link to={`/portfolio/${prev.slug}`}
              className="group bg-white/[0.02] backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 hover:border-glow-blue/20 transition-colors duration-500 relative">
              <div className="relative z-10 p-6">
                <div className="flex items-center gap-2 text-ocean-text/40 mb-3">
                  <FaArrowLeft className="w-3 h-3 transition-transform" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                    {t("experience.prev_mission", "Previous Mission")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ocean-text group-hover:text-glow-blue transition-colors duration-300">{prev.title}</h3>
                <p className="text-xs text-ocean-text/40 font-mono tracking-wider mt-1">{prev.company.text}</p>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link to={`/portfolio/${next.slug}`}
              className="group bg-white/[0.02] backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 hover:border-glow-blue/20 transition-colors duration-500 relative text-right">
              <div className="relative z-10 p-6">
                <div className="flex items-center justify-end gap-2 text-ocean-text/40 mb-3">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                    {t("experience.next_mission", "Next Mission")}
                  </span>
                  <FaArrowRight className="w-3 h-3 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-ocean-text group-hover:text-glow-blue transition-colors duration-300">{next.title}</h3>
                <p className="text-xs text-ocean-text/40 font-mono tracking-wider mt-1">{next.company.text}</p>
              </div>
            </Link>
          ) : <div />}
        </div>

        {/* Back to journey log */}
        <div className="text-center">
          <Link to="/#portfolio"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-semibold text-ocean-text/60 hover:text-glow-blue bg-white/[0.02] border border-white/5 hover:border-glow-blue/20 backdrop-blur-xl transition-colors duration-300">
            <FaArrowLeft className="w-3 h-3" />
            {t("experience.back_to_log", "Back to Journey Log")}
          </Link>
        </div>
      </div>
    </section>
  );
}
