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
    <section id="portfolio" data-bg-color="#09090b" className="py-14 bg-transparent text-white scroll-mt-20 md:scroll-mt-24">
      <div className="padding-container max-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left"
        >
          {t('experience.title')}
        </motion.h2>

        <div className="flex flex-col gap-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              onClick={() => navigate(`/portfolio/${exp.slug}`)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`py-5 flex flex-col gap-3 cursor-pointer group/card transition-colors hover:bg-white/[0.02] -mx-4 px-4 rounded-xl ${
                index !== experiences.length - 1 ? "border-b border-zinc-800/80" : ""
              }`}
            >
              {/* Item Header: Icon + Title + Badge + Period */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3 flex-wrap flex-1 min-w-0">
                  {/* Icon */}
                  <div className="w-10 h-10 shrink-0 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 group-hover/card:text-indigo-400 group-hover/card:border-indigo-500/30 transition-colors">
                    {getIcon(exp.type)}
                  </div>
                  {/* Title + Badge */}
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg md:text-xl font-bold text-zinc-100 leading-tight group-hover/card:text-indigo-400 transition-colors">
                        {exp.title}
                      </h3>
                      {exp.subtitle && (
                        <span className="text-[10px] text-indigo-300 font-medium bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 shrink-0">
                          {exp.subtitle}
                        </span>
                      )}
                    </div>
                    {/* Company */}
                    <div className="text-sm font-medium text-zinc-400">
                      {exp.company.text}
                    </div>
                  </div>
                </div>
 
                {/* Period */}
                <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 shrink-0 pt-1">
                  <svg
                    className="w-3.5 h-3.5"
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
 
              {/* Period (Mobile fallback) */}
              <div className="flex sm:hidden items-center gap-1.5 text-xs font-medium text-zinc-500">
                <svg
                  className="w-3.5 h-3.5"
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
 
              {/* Description */}
              <div className="text-zinc-400 text-sm md:text-base flex-1 leading-relaxed mt-1 md:pl-13">
                <p className="line-clamp-2">{exp.companyProfile}</p>
              </div>
              
              <div className="pt-1 flex items-center gap-1 text-indigo-400 text-sm font-semibold group-hover/card:text-indigo-300 transition-colors md:pl-13">
                {t('projects.see_project', 'Lihat Detail')} 
                <svg className="w-4 h-4 transform group-hover/card:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
