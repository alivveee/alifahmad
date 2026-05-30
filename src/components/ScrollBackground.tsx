import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollBackground = () => {
  const [bgColor, setBgColor] = useState("#09090b"); // Default to zinc-950

  useEffect(() => {
    const handleScroll = () => {
      const elements = Array.from(document.querySelectorAll("[data-bg-color]"));
      if (elements.length === 0) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Check if we are scrolled to the bottom (within a 50px threshold)
      const isAtBottom = clientHeight + scrollTop >= scrollHeight - 50;

      if (isAtBottom) {
        const lastEl = elements[elements.length - 1];
        const color = lastEl.getAttribute("data-bg-color");
        if (color) {
          setBgColor(color);
          return;
        }
      }

      const centerY = clientHeight / 2;

      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        // Check if the element occupies the vertical center of the screen
        if (rect.top <= centerY && rect.bottom >= centerY) {
          const color = el.getAttribute("data-bg-color");
          if (color) {
            setBgColor(color);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Also trigger on resize and initially
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none -z-50"
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  );
};

export default ScrollBackground;
