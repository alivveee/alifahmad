import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const depthLabels = ["Surface", "20m", "50m", "100m", "200m", "Abyss"];

const DepthIndicator = () => {
  const { scrollYProgress } = useScroll();
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let newIndex = 0;
    if (latest < 0.15) newIndex = 0;
    else if (latest < 0.35) newIndex = 1;
    else if (latest < 0.55) newIndex = 2;
    else if (latest < 0.75) newIndex = 3;
    else if (latest < 0.95) newIndex = 4;
    else newIndex = 5;

    setActiveIndex(newIndex);
  });

  return (
    <motion.div
      className="hidden lg:flex flex-col items-end fixed right-8 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
    >
      {/* Track Container */}
      <div className="relative flex flex-col items-center justify-between py-1" style={{ height: "200px", width: "20px" }}>
        
        {/* Background Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-ocean-text/10" />
        
        {/* Progress Vertical Line */}
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-bioluminescent-purple/80"
          initial={false}
          animate={{ height: `${(activeIndex / (depthLabels.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Dots and Labels */}
        {depthLabels.map((label, i) => {
          const isActive = i === activeIndex;
          const isPassed = i <= activeIndex;

          return (
            <div key={i} className="relative flex items-center justify-center w-4 h-4">
              {/* Dot */}
              <div
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-2.5 h-2.5 bg-bioluminescent-purple"
                    : isPassed
                    ? "w-1.5 h-1.5 bg-bioluminescent-purple/50"
                    : "w-1.5 h-1.5 bg-ocean-text/20"
                }`}
              />

              {/* Label (Positioned to the left of the dots to prevent screen clipping) */}
              <span
                className={`absolute right-full mr-3 text-[10px] font-mono tracking-widest text-right whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "text-bioluminescent-purple font-semibold"
                    : isPassed
                    ? "text-bioluminescent-purple/60"
                    : "text-ocean-text/30"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Depth readout text */}
      <motion.div
        className="flex flex-col items-center mt-4 mr-[5px] opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span className="text-[8px] font-mono text-ocean-text tracking-[0.3em] uppercase [writing-mode:vertical-lr] rotate-180">
          Depth
        </span>
      </motion.div>
    </motion.div>
  );
};

export default DepthIndicator;
