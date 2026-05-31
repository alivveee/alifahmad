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

      let activeElement: Element | null = null;

      if (isAtBottom) {
        activeElement = elements[elements.length - 1];
      } else {
        const centerY = clientHeight / 2;
        for (const el of elements) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= centerY && rect.bottom >= centerY) {
            activeElement = el;
            break;
          }
        }
      }

      if (activeElement) {
        const color = activeElement.getAttribute("data-bg-color");
        if (color) {
          setBgColor(color);
        }
      }

      // Apply blur to inactive sections
      elements.forEach((el) => {
        if (!el.classList.contains("transition-all")) {
          el.classList.add("transition-all", "duration-700", "ease-in-out");
        }

        if (el === activeElement) {
          el.classList.remove("blur-sm", "opacity-40", "scale-[0.98]");
          el.classList.add("opacity-100", "scale-100");
        } else {
          el.classList.add("blur-sm", "opacity-40", "scale-[0.98]");
          el.classList.remove("opacity-100", "scale-100");
        }
      });
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
