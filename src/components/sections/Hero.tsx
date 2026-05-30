import { useLenis } from "@studio-freight/react-lenis";
import { cubicBezier, motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import DarkVeil from "../DarkVeil";

const HeroSection = () => {
  const lenis = useLenis();
  const { t, i18n } = useTranslation();

  const roles = [
    t("hero.roles.0"),
    1500,
    t("hero.roles.1"),
    1500,
    t("hero.roles.2"),
    1500,
    t("hero.roles.3"),
    1500,
  ];
  return (
    <section className="relative w-full min-h-screen lg:h-screen flex items-center overflow-hidden">
      {/* Interactive DarkVeil Background */}
      <div className="absolute inset-0 w-full h-full -z-10 bg-zinc-950">
        <DarkVeil />
      </div>

      <div className="hero max-container padding-container w-full flex flex-col justify-center items-center pt-20 md:pt-28 pb-10">
        <div className="flex flex-col justify-center items-center text-center w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tight">
            {t("hero.hello")}{" "}
            <span className="text-indigo-500">Alif Ahmad Mukhtar Darma Hidayat</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mt-4">
            <span>{t("hero.a")} </span>
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
          <p className="mt-6 text-sm/relaxed md:text-base/relaxed opacity-70 w-full">
            {t("hero.description_1")}
            <b>{t("hero.description_bold")}</b>
            {t("hero.description_2")}
          </p>
          <div className="flex gap-4 mt-8 justify-center">
            <a
              href="/CV_Alif Ahmad Mukhtar Darma Hidayat_Frontend Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white px-6 py-3 rounded-lg font-medium"
            >
              {t("hero.see_cv")}
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                if (lenis) {
                  lenis.scrollTo("#portfolio", {
                    offset: -100,
                    easing: cubicBezier(0.65, 0, 0.35, 1),
                    duration: 1,
                  });
                }
              }}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 text-white px-6 py-3 rounded-lg font-medium"
            >
              {t("hero.portfolio")} <FaArrowDown />
            </a>
          </div>
        </div>
        <ScrollDown t={t} />
      </div>
    </section>
  );
};

export default HeroSection;

function ScrollDown({ t }: { t: TFunction }) {
  return (
    <div className="hidden lg:flex flex-col items-center absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white opacity-100">
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
      <p className="text-sm mt-2 tracking-wide">{t("hero.scroll_down")}</p>
    </div>
  );
}
