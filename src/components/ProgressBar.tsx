import { motion, useScroll } from "framer-motion";
const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-violet-600 origin-left"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
};

export default ProgressBar;
