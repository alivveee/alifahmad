import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "React Native", "Vite"]
  },
  {
    category: "State & Data",
    skills: ["Zustand", "Redux Toolkit", "TanStack Query", "SWR", "Axios", "React Hook Form", "Zod"]
  },
  {
    category: "Styling & UI",
    skills: ["Tailwind CSS", "Shadcn UI", "Chakra UI", "Material UI"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "GitLab", "Figma", "VS Code", "Cursor"]
  },
  {
    category: "Backend",
    skills: ["Supabase", "MongoDB", "SQL", "Express.js", "Laravel"]
  },
  {
    category: "CI/CD",
    skills: ["Vercel", "GitHub Actions"]
  },
  {
    category: "Performance",
    skills: ["Lighthouse", "Web Vitals", "SEO Optimization"]
  }
];

const StackSection = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className="py-20">
      <div className="padding-container flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          {t('stacks.title')}
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 hover:border-violet-500/50 transition-colors rounded-xl shadow-xl overflow-hidden"
        >
          {skillCategories.map((item, index) => (
            <div 
              key={item.category} 
              className={`flex flex-col md:flex-row md:items-start gap-4 p-5 md:p-6 ${index !== skillCategories.length - 1 ? 'border-b border-zinc-700/50' : ''}`}
            >
              <h3 className="text-base md:text-lg font-bold text-white md:w-48 shrink-0 pt-1">
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-2 w-full">
                {item.skills.map((skill) => {
                  const isHighlighted = [
                    "React", "Next.js", "TypeScript", "Redux Toolkit",
                    "TanStack Query", "Tailwind CSS", "Git", "Express.js",
                    "SQL", "GitHub Actions", "SEO Optimization"
                  ].includes(skill);

                  return (
                    <span 
                      key={skill} 
                      className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 cursor-default shadow-sm border ${
                        isHighlighted
                          ? "bg-violet-600 text-white border-violet-500 hover:bg-violet-500 shadow-violet-500/20 font-semibold"
                          : "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-500/40 shadow-violet-500/5 font-medium"
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StackSection;
