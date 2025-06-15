import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const BlobCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-48 h-48 bg-violet-500/10 rounded-full blur-xl pointer-events-none z-0"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    />
  );
};

export default BlobCursor;
