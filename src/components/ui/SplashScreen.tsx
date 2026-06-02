import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

const loadingSteps = [
  "Loading Explorer Profile",
  "Scanning Projects",
  "Preparing Navigation System",
];

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "exit">("loading");

  const handleComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const TOTAL = 3300;
    const STEP_PHASE = TOTAL - 1100;
    const stepInterval = STEP_PHASE / loadingSteps.length;

    const start = Date.now();

    // Smooth progress
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min((elapsed / STEP_PHASE) * 100, 100);
      setProgress(p);
      if (p >= 100) clearInterval(tick);
    }, 16);

    // Step sequence
    const stepTimers = loadingSteps.map((_, i) =>
      setTimeout(() => setCurrentStep(i), stepInterval * i)
    );

    // Reveal phase
    const revealTimer = setTimeout(() => setPhase("reveal"), STEP_PHASE);

    // Exit phase
    const exitTimer = setTimeout(() => {
      setPhase("exit");
      setTimeout(handleComplete, 700);
    }, TOTAL);

    return () => {
      clearInterval(tick);
      stepTimers.forEach(clearTimeout);
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
    };
  }, [handleComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {/* ── Background: matches GlobalAtmosphere base ── */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 0%, #0A1B34 0%, #071426 40%, #020617 100%)",
            }}
          />

          {/* ── Subtle top light glow (matches surface-light) ── */}
          <div
            className="absolute top-0 left-0 right-0 h-[280px] pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(124, 140, 255, 0.07) 0%, rgba(91, 91, 247, 0.02) 40%, transparent 100%)",
            }}
          />

          {/* ── Vignette (matches depth fog) ── */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#020617_150%)]" />

          {/* ── Content ── */}
          <div className="relative z-10 flex flex-col items-center px-6">
            <AnimatePresence mode="wait">
              {phase === "loading" && (
                <motion.div
                  key="loading"
                  className="flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {/* Sonar Ping — clean, minimal */}
                  <div className="relative w-20 h-20 flex items-center justify-center mb-10">
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: "1px solid rgba(124, 140, 255, 0.25)",
                      }}
                      animate={{ scale: [1, 2.8], opacity: [0.6, 0] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                    <motion.div
                      className="absolute inset-2 rounded-full"
                      style={{
                        border: "1px solid rgba(124, 140, 255, 0.15)",
                      }}
                      animate={{ scale: [1, 2.2], opacity: [0.4, 0] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.5,
                      }}
                    />
                    {/* Center dot */}
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: "#7C8CFF",
                        boxShadow: "0 0 12px rgba(124, 140, 255, 0.6)",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <p
                    className="text-xs tracking-[0.25em] uppercase mb-8"
                    style={{ color: "rgba(124, 140, 255, 0.5)" }}
                  >
                    Initializing Dive Sequence...
                  </p>

                  {/* Progress bar */}
                  <div
                    className="w-64 sm:w-80 h-px relative overflow-hidden rounded-full mb-6"
                    style={{ backgroundColor: "rgba(217, 231, 255, 0.06)" }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{
                        width: `${progress}%`,
                        backgroundColor: "#7C8CFF",
                        boxShadow: "0 0 8px rgba(124, 140, 255, 0.5)",
                      }}
                    />
                  </div>

                  {/* Step text */}
                  <div className="h-5 flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentStep}
                        className="text-[11px] tracking-wider"
                        style={{ color: "rgba(217, 231, 255, 0.35)" }}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                      >
                        {loadingSteps[currentStep]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}

              {phase === "reveal" && (
                <motion.div
                  key="reveal"
                  className="flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  <h2
                    className="text-2xl md:text-3xl font-light tracking-wide text-center leading-relaxed py-1 text-white"
                  >
                    Diving Into Digital Depths
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
