import { useLenis } from "@studio-freight/react-lenis";
import { cubicBezier, motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import Image from "../../utils/data";

const HeroSection = () => {
  const lenis = useLenis();
  const { t, i18n } = useTranslation();
  
  const roles = [
    t('hero.roles.0'),
    1500,
    t('hero.roles.1'),
    1500,
    t('hero.roles.2'),
    1500,
    t('hero.roles.3'),
    1500,
  ];
  return (
    <div className="hero relative max-container padding-container pb-18 h-screen grid lg:grid-cols-[2fr_1fr]">
      <div className="flex flex-col justify-center text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tight">
          {t('hero.hello')}{" "}
          <span className="text-transparent bg-clip-text bg-violet-600">
            Alif Ahmad Mukhtar D.H.
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300">
          <span>{t('hero.a')} </span>
          <span className="font-semibold text-white">
            <TypeAnimation
              key={i18n.language}
              sequence={roles}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              style={{ display: "inline-block" }}
            />
          </span>
        </h2>
        <p className="mt-5 text-sm/relaxed md:text-base/relaxed opacity-70">
          {t('hero.description_1')}<b>{t('hero.description_bold')}</b>{t('hero.description_2')}
        </p>
        <div className="flex gap-3 mt-5 justify-center lg:justify-start">
          <a
            href="/CV_Alif Ahmad Mukhtar D.H._Frontend Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-violet-700 hover:bg-violet-600 text-white px-4 py-2 rounded"
          >
            {t('hero.see_cv')}
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
            {t('hero.projects')} <FaArrowDown />
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end items-end lg:items-center order-first lg:order-last">
        <img
          src={Image.HeroImage}
          alt="Hero Image"
          className="w-1/2 lg:w-3/4 rounded-2xl aspect-[3/4] object-cover filter grayscale hover:grayscale-25 shadow-2xl"
        />
      </div>
      <ScrollDown t={t} />
    </div>
  );
};

export default HeroSection;

function ScrollDown({ t }: { t: TFunction }) {
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
      <h1 className="text-sm mt-2 tracking-wide">{t('hero.scroll_down')}</h1>
    </div>
  );
}
