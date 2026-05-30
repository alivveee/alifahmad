import { motion } from "framer-motion";
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { experiences as experiences_en, experiences_id, type Experience } from "../../utils/data";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ExperienceSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const experiences = i18n.language.startsWith('id') ? experiences_id : experiences_en;

  const getIcon = (iconType: Experience["type"]) => {
    switch (iconType) {
      case "work":
        return <MdWork className="w-4 h-4 text-white" />;
      case "education":
        return <IoSchool className="w-4 h-4 text-white" />;
      default:
        return <MdWork className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section id="portfolio" className="py-20 scroll-mt-20 md:scroll-mt-24">
      <div className="padding-container max-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center md:text-left"
        >
          {t('experience.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              onClick={() => navigate(`/portfolio/${exp.slug}`)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm rounded-xl p-5 border border-zinc-700/50 hover:border-indigo-500/50 shadow-xl transition-colors flex flex-col gap-3 cursor-pointer group/card"
            >
              {/* Card Header: Icon + Title + Badge + Period */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5 flex-wrap flex-1 min-w-0">
                  {/* Icon */}
                  <div className="w-8 h-8 shrink-0 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center shadow-md shadow-indigo-500/30">
                    {getIcon(exp.type)}
                  </div>
                  {/* Title + Badge */}
                  <div className="flex items-center gap-2 flex-wrap min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                      {exp.title}
                    </h3>
                    {exp.subtitle && (
                      <span className="text-[10px] text-indigo-300 font-medium bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 shrink-0">
                        {exp.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-center gap-1 text-[10px] md:text-xs font-medium text-gray-400 shrink-0">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="hidden sm:inline">{exp.period}</span>
                </div>
              </div>

              {/* Period (Mobile fallback — full text) */}
              <div className="flex sm:hidden items-center gap-1 text-[10px] font-medium text-gray-400">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {exp.period}
              </div>

              {/* Company Link */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-500/10 text-xs font-semibold text-indigo-300 border border-indigo-500/20 shadow-sm shadow-indigo-500/5 w-fit"
              >
                {exp.company.text}
              </div>

              {/* Divider */}
              <div className="border-t border-zinc-700/50" />

              {/* Description */}
              <div className="text-gray-300 text-xs md:text-sm flex-1 leading-relaxed">
                <p className="line-clamp-2">{exp.companyProfile}</p>
              </div>
              
              <div className="mt-auto pt-2 flex items-center gap-1 text-indigo-400 text-xs font-semibold group-hover/card:text-indigo-300 transition-colors">
                {t('projects.see_project', 'Lihat Detail')} 
                <svg className="w-3 h-3 transform group-hover/card:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
