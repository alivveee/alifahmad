import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../../api/client";

interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
}

const StackSection = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await api.get("/skills");
        setSkills(response.data.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSkills();
  }, []);

  if (isLoading) return null;

  return (
    <section id="technologies" className="py-20">
      <div className="flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-10"
        >
          Technologies
        </motion.h1>
        <div className="stacks grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-container padding-container">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group flex flex-col justify-center items-center p-6 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-violet-500/50 rounded-2xl transition-all"
            >
              <span className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">
                {skill.name}
              </span>
              <span className="text-xs text-gray-400 mt-2">
                {skill.category}
              </span>
              <div className="w-full h-1 bg-zinc-700 rounded-full mt-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-violet-600"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
