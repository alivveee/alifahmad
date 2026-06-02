import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const DeepSeaCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth springs for fluid, trailing movement of the outer ring
  const smoothX = useSpring(mouseX, { stiffness: 220, damping: 28, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 220, damping: 28, mass: 0.6 });

  useEffect(() => {
    // Check if device is touch-based (no fine pointer)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsTouchDevice(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(!e.matches);
    };
    
    // Fallback for older browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, []);

  useEffect(() => {
    let hoverTimeout: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = !!target.closest("a, button, [role='button'], .cursor-pointer, [data-cursor='sonar']");
      
      if (isInteractive) {
        clearTimeout(hoverTimeout);
        setIsHovering(true);
      } else {
        // Debounce leaving interactive elements to prevent rapid flickering on inner gaps
        clearTimeout(hoverTimeout);
        hoverTimeout = window.setTimeout(() => {
          setIsHovering(false);
        }, 100); // 100ms is highly stable for bridging transitions
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(hoverTimeout);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Sonar Ring (Trails behind with physics spring) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
        }}
      >
        {/* Main Probe Ring */}
        <motion.div
          animate={{
            width: isHovering ? 48 : 24,
            height: isHovering ? 48 : 24,
            borderColor: isHovering ? "rgba(124, 140, 255, 0.8)" : "rgba(91, 91, 247, 0.4)",
            borderWidth: isHovering ? "2px" : "1px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="rounded-full border border-solid shadow-[0_0_20px_rgba(91,91,247,0.2)] flex items-center justify-center relative pointer-events-none"
        />

        {/* Sonar pulses container (Fades in/out smoothly to prevent flickering/popping) */}
        <motion.div
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{
              scale: [0.9, 2.2],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute w-12 h-12 rounded-full border border-[#7C8CFF]/50 pointer-events-none"
            style={{ willChange: "transform, opacity" }}
          />
        </motion.div>
      </motion.div>

      {/* Inner Probe Core */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-[#EAF2FF]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
        }}
      >
        <div 
          className="absolute inset-[-4px] rounded-full bg-[#7C8CFF] opacity-80 blur-[2px] pointer-events-none" 
        />
      </motion.div>
    </>
  );
};

export default DeepSeaCursor;
