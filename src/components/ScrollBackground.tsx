import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const ScrollBackground = () => {
  const [bgColor, setBgColor] = useState("#020617"); // Default to zinc-950
  const { pathname } = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateBackground();
          ticking = false;
        });
        ticking = true;
      }
    };

    const updateBackground = () => {
      const elements = Array.from(document.querySelectorAll("[data-bg-color]"));
      if (elements.length === 0) {
        setBgColor("#020617");
        return;
      }

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight || document.documentElement.clientHeight;
      
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
      } else {
        setBgColor("#09090b");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateBackground);
    
    const timer = setTimeout(() => {
      updateBackground();
    }, 50);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateBackground);
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none -z-50"
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  );
};

export default ScrollBackground;
