import { motion } from "framer-motion";
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { experiences, type Experience } from "../../utils/data";

const ExperienceSection = () => {
  const getIcon = (iconType: Experience["type"]) => {
    switch (iconType) {
      case "work":
        return <MdWork className="w-6 h-6 text-white" />;
      case "education":
        return <IoSchool className="w-6 h-6 text-white" />;
      default:
        return <MdWork className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="padding-container flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Experience
        </motion.h1>

        <div className="relative w-full max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 h-full w-0.5 bg-gradient-to-b from-violet-500 via-violet-600 to-transparent"></div>

          <div className="space-y-16">
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
                <div className="absolute left-0 md:left-2 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-violet-500 to-violet-700 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/50 z-10 ring-4 ring-zinc-900">
                  {getIcon(exp.type)}
                </div>

                {/* Content card */}
                <div className="ml-20 md:ml-24 w-full">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-zinc-700/50 hover:border-violet-500/50 transition-colors"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      {exp.subtitle && (
                        <span className="text-sm md:text-base text-violet-300 font-medium">
                          {exp.subtitle}
                        </span>
                      )}
                    </div>

                    {/* Company */}
                    <a
                      href={exp.company.href}
                      target="_blank"
                      className="inline-block mb-4 text-lg md:text-xl font-semibold text-white hover:text-violet-400 transition-colors group"
                    >
                      {exp.company.text}
                      <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </a>

                    {/* Description */}
                    <div className="space-y-2 mb-5 text-gray-300">
                      {exp.description.map((list, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <span className="text-violet-400 mt-1.5 text-sm">
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

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-400 pt-3 border-t border-zinc-700/50">
                      <svg
                        className="w-4 h-4"
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
    </section>
  );
};

export default ExperienceSection;
