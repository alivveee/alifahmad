import { motion } from "framer-motion";
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { experiences, type Experience } from "../../utils/data";

const ExperienceSection = () => {
  const getIcon = (iconType: Experience["type"]) => {
    switch (iconType) {
      case "work":
        return <MdWork className="w-4 h-4 md:w-5 h-5 text-white" />;
      case "education":
        return <IoSchool className="w-4 h-4 md:w-5 h-5 text-white" />;
      default:
        return <MdWork className="w-4 h-4 md:w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="w-full flex flex-col items-start">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-10"
      >
        Experience
      </motion.h1>

      <div className="relative w-full max-w-2xl">
        {/* Timeline line */}
        <div className="absolute left-5 md:left-7 top-0 h-full w-0.5 bg-gradient-to-b from-violet-500 via-violet-600 to-transparent"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start"
            >
              {/* Icon circle */}
              <div className="absolute left-1 md:left-2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-violet-500 to-violet-700 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/30 z-10 ring-2 md:ring-4 ring-zinc-900">
                {getIcon(exp.type)}
              </div>

              {/* Content card */}
              <div className="ml-14 md:ml-18 w-full">
                <motion.div
                  whileHover={{ scale: 1.01, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm rounded-xl p-4 md:p-5 shadow-xl border border-zinc-700/50 hover:border-violet-500/50 transition-colors"
                >
                  {/* Header */}
                  <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      {exp.subtitle && (
                        <span className="text-[10px] md:text-xs text-violet-300 font-medium bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                          {exp.subtitle}
                        </span>
                      )}
                    </div>
                    
                    {/* Period (Desktop) */}
                    <div className="hidden md:flex items-center gap-1.5 text-xs font-medium text-gray-400">
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
                  </div>

                  {/* Company */}
                  <a
                    href={exp.company.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-violet-500/10 hover:bg-violet-500/20 text-xs md:text-sm font-semibold text-violet-300 hover:text-violet-200 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-200 shadow-sm shadow-violet-500/5 mb-3.5 group w-fit"
                  >
                    {exp.company.text}
                    <svg
                      className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-violet-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>

                  {/* Description */}
                  <div className="space-y-1.5 mb-4 text-gray-300 text-xs md:text-sm">
                    {exp.description.map((list, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start">
                        <span className="text-violet-400 mt-1 text-[9px]">
                          ●
                        </span>
                        <p className="leading-relaxed">
                          {list.map((segment, index) =>
                            typeof segment === "string" ? (
                              <span key={index}>{segment}</span>
                            ) : (
                              <a
                                key={index}
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

                  {/* Period (Mobile) */}
                  <div className="flex md:hidden items-center gap-1.5 text-xs font-medium text-gray-400 pt-2 border-t border-zinc-700/50">
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
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
