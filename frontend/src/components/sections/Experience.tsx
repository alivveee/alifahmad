import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";
import api from "../../api/client";

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExp = async () => {
      try {
        const response = await api.get("/experiences");
        setExperiences(response.data.data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchExp();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-10 h-10 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

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
                <div className="absolute left-0 md:left-2 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-violet-500 to-violet-700 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/50 z-10 ring-4 ring-zinc-900">
                  <MdWork className="w-6 h-6 text-white" />
                </div>

                <div className="ml-20 md:ml-24 w-full">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-zinc-700/50 hover:border-violet-500/50 transition-colors"
                  >
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <span className="text-lg md:text-xl font-semibold text-violet-300">
                        {exp.company}
                      </span>
                    </div>

                    <div className="text-gray-300 mb-5 whitespace-pre-wrap leading-relaxed">
                      {exp.description}
                    </div>

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
