import { motion } from "framer-motion";
import type { TFunction } from "i18next";

interface TechGroup {
  label: string;
  items: string[];
}

function getTechGroups(slug: string, t: TFunction): TechGroup[] {
  if (slug === "pt-node-solusi-teknologi") {
    return [
      { label: t("experience.tech_frontend", "Frontend"), items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Shadcn UI", "Material UI"] },
      { label: t("experience.tech_state", "State Management"), items: ["Redux Toolkit", "Zustand"] },
      { label: t("experience.tech_backend", "Backend Integration"), items: ["REST API", "React Query"] },
      { label: t("experience.tech_tools", "Tools"), items: ["Git", "Figma", "Postman"] },
    ];
  }
  if (slug === "pt-azlogistik-dot-com") {
    return [
      { label: t("experience.tech_frontend", "Frontend"), items: ["React", "Next.js", "TypeScript", "TailwindCSS"] },
      { label: t("experience.tech_state", "State Management"), items: ["Zustand", "React Hook Form"] },
      { label: t("experience.tech_backend", "Backend Integration"), items: ["REST API"] },
      { label: t("experience.tech_tools", "Tools"), items: ["Git", "Figma"] },
    ];
  }
  if (slug === "pt-aksamedia") {
    return [
      { label: t("experience.tech_frontend", "Frontend"), items: ["React.js", "TypeScript", "Chakra UI"] },
      { label: t("experience.tech_backend", "Backend Integration"), items: ["REST API"] },
      { label: t("experience.tech_tools", "Tools"), items: ["Git", "Figma"] },
    ];
  }
  if (slug === "idcamp-indosat") {
    return [
      { label: t("experience.tech_frontend", "Frontend"), items: ["React", "JavaScript", "CSS"] },
      { label: t("experience.tech_backend", "Backend Integration"), items: ["REST API"] },
    ];
  }
  return [];
}

export default function TechStackSection({ slug, t }: { slug: string; t: TFunction }) {
  const groups = getTechGroups(slug, t);
  if (groups.length === 0) return null;

  return (
    <section className="py-4 md:py-6">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-glow-blue/40" />
            <h2 className="text-sm tracking-[0.2em] uppercase text-glow-blue/80 font-semibold">
              {t("experience.tech_stack", "Technology Stack")}
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-5 border border-white/5 hover:border-glow-blue/20 transition-colors duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-glow-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <h3 className="relative z-10 text-xs font-mono font-bold tracking-[0.2em] uppercase text-ocean-text/40 mb-5">{group.label}</h3>
              <div className="relative z-10 flex flex-wrap gap-2">
                {group.items.map((tech, ti) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.3, delay: gi * 0.1 + ti * 0.05 }}
                    className="px-4 py-2 rounded-xl text-sm font-medium text-ocean-text/80 bg-white/[0.03] border border-white/5 hover:border-glow-blue/30 hover:text-white transition-colors duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
