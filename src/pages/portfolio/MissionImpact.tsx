import { motion } from "framer-motion";
import type { TFunction } from "i18next";
import { useEffect, useRef, useState } from "react";

interface Metric {
  label: string;
  value: string;
  numericValue: number;
  suffix: string;
}

function getMetrics(slug: string, t: TFunction): Metric[] {
  if (slug === "pt-node-solusi-teknologi") {
    return [
      { label: t("experience.metric_systems", "Systems Delivered"), value: "4+", numericValue: 4, suffix: "+" },
      { label: t("experience.metric_projects", "Projects Contributed"), value: "7+", numericValue: 7, suffix: "+" },
      { label: t("experience.metric_tech", "Technologies Used"), value: "10+", numericValue: 10, suffix: "+" },
      { label: t("experience.metric_features", "Production Features"), value: "50+", numericValue: 50, suffix: "+" },
    ];
  }
  if (slug === "pt-azlogistik-dot-com") {
    return [
      { label: t("experience.metric_systems", "Systems Delivered"), value: "1", numericValue: 1, suffix: "" },
      { label: t("experience.metric_tech", "Technologies Used"), value: "6+", numericValue: 6, suffix: "+" },
      { label: t("experience.metric_features", "Production Features"), value: "10+", numericValue: 10, suffix: "+" },
    ];
  }
  if (slug === "pt-aksamedia") {
    return [
      { label: t("experience.metric_systems", "Systems Delivered"), value: "1", numericValue: 1, suffix: "" },
      { label: t("experience.metric_tech", "Technologies Used"), value: "5+", numericValue: 5, suffix: "+" },
      { label: t("experience.metric_features", "Production Features"), value: "20+", numericValue: 20, suffix: "+" },
    ];
  }
  if (slug === "idcamp-indosat") {
    return [
      { label: t("experience.metric_courses", "Courses Completed"), value: "3", numericValue: 3, suffix: "" },
      { label: t("experience.metric_tech", "Technologies Learned"), value: "4+", numericValue: 4, suffix: "+" },
    ];
  }
  return [];
}

function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function MissionImpact({ slug, t }: { slug: string; t: TFunction }) {
  const metrics = getMetrics(slug, t);
  if (metrics.length === 0) return null;

  return (
    <section className="py-4 md:py-6">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-bioluminescent-purple/40" />
            <h2 className="text-sm tracking-[0.2em] uppercase text-bioluminescent-purple/80 font-semibold">
              {t("experience.mission_impact", "Mission Impact")}
            </h2>
          </div>
        </motion.div>

        <div className={`grid gap-4 ${metrics.length <= 2 ? "grid-cols-1 md:grid-cols-2" : metrics.length === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}>
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-glow-blue/20 transition-colors duration-500 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-glow-blue/5 via-bioluminescent-purple/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 font-mono tracking-tight">
                  <AnimatedCounter target={metric.numericValue} suffix={metric.suffix} />
                </div>
                <p className="text-xs font-mono font-semibold tracking-[0.15em] uppercase text-ocean-text/40">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
