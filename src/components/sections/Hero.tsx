import { useLenis } from "@studio-freight/react-lenis";
import { cubicBezier, motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import Image from "../../utils/data";

const HeroSection = () => {
  const lenis = useLenis();
  return (
    <div className="hero relative max-container padding-container pb-18 h-screen md:-mt-16 grid lg:grid-cols-[2fr_1fr]">
      <div className="flex flex-col justify-center text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tight">
          Hello, I'm{" "}
          <span className="text-transparent bg-clip-text bg-violet-600">
            Alif Ahmad Mukhtar D.H.
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300">
          <span>A </span>
          <span className="font-semibold text-white">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1500,
                "Web Developer",
                1500,
                "Fullstack-Capable Developer",
                1500,
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              style={{ display: "inline-block" }}
            />
          </span>
        </h2>
        <p className="mt-5 text-sm/relaxed md:text-base/relaxed opacity-70">
          Passionate about building user-friendly web applications, I specialize
          in building accessible user interfaces. As a <b>developer</b>, I
          constantly explore modern technologies and ready to collaborate on
          building reliable and impactful products.
        </p>
        <div className="flex gap-3 mt-5 justify-center lg:justify-start">
          <a
            href="https://drive.google.com/file/d/1akPKrUWCu6uaV1xb34q2cfpmvy45uE-_/view?usp=sharing"
            target="_blank"
            className="flex bg-violet-700 hover:bg-violet-600 text-white px-4 py-2 rounded"
          >
            See My CV
          </a>
          <a
            onClick={() =>
              lenis &&
              lenis.scrollTo("#projects", {
                offset: -100,
                easing: cubicBezier(0.65, 0, 0.35, 1),
                duration: 1,
              })
            }
            className="flex items-center gap-1 bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded"
          >
            Projects <FaArrowDown />
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end items-end lg:items-center order-first lg:order-last">
        <img
          src={Image.HeroImage}
          alt="Hero Image"
          className="w-1/2 lg:w-3/4 rounded-full aspect-square object-cover lg:aspect-auto filter grayscale hover:grayscale-25"
        />
      </div>
      <ScrollDown />
    </div>
  );
};

export default HeroSection;

function ScrollDown() {
  return (
    <div className="flex flex-col items-center absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white opacity-100">
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <IoChevronDownSharp size={24} />
      </motion.div>
      <h1 className="text-sm mt-2 tracking-wide">Scroll Down</h1>
    </div>
  );
}
