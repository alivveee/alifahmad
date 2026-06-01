import { useLenis } from "@studio-freight/react-lenis";
import { cubicBezier, motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

/* ─── Stagger animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

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
    <section
      id="hero"
      data-bg-color="#020617"
      className="relative w-full min-h-screen lg:h-screen flex items-center overflow-hidden bg-transparent"
    >
      {/* ══════ CONTENT ══════ */}
      <motion.div
        className="relative z-10 max-container padding-container w-full flex flex-col justify-center items-center pt-20 md:pt-28 pb-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col justify-center items-center text-center w-full max-w-5xl mx-auto">
          {/* ── Main Headline ── */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tight text-ocean-text"
            variants={fadeUp}
          >
            {t("hero.hello")}{" "}
            <span className="bio-gradient-text">Alif Ahmad Mukhtar Darma Hidayat</span>
          </motion.h1>

          {/* ── Typing Role ── */}
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl text-ocean-text/50 mt-4 font-light"
            variants={fadeUp}
          >
            <span>{t("hero.a")} </span>
            <span className="font-semibold text-ocean-text/90">
              <TypeAnimation
                key={i18n.language}
                sequence={roles}
                wrapper="span"
                repeat={Infinity}
                cursor={true}
                style={{ display: "inline-block" }}
              />
            </span>
          </motion.h2>

          {/* ── Description ── */}
          <motion.p
            className="mt-8 text-sm/relaxed md:text-base/relaxed text-ocean-text/40 max-w-2xl leading-relaxed"
            variants={fadeUp}
          >
            {t("hero.description_1")}
            <b className="text-ocean-text/70">{t("hero.description_bold")}</b>
            {t("hero.description_2")}
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            className="flex gap-4 mt-10 justify-center"
            variants={fadeUp}
          >
            {/* Primary CTA */}
            <a
              href="/CV_Alif Ahmad Mukhtar Darma Hidayat_Frontend Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #5B5BF7 0%, #7C8CFF 100%)",
              }}
            >
              {/* Glow effect on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
              <span className="relative z-10 flex items-center gap-2">
                {t("hero.see_cv")}{" "}
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>

            {/* Secondary CTA */}
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
              className="group flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-ocean-text/80 border border-ocean-text/10 bg-ocean-text/[0.03] backdrop-blur-md hover:bg-ocean-text/[0.08] hover:border-ocean-text/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("hero.portfolio")}{" "}
              <FaArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll Down ── */}
      <ScrollDown t={t} />
    </section>
  );
};

export default HeroSection;

/* ─── Scroll Down Indicator ─── */
function ScrollDown({ t }: { t: TFunction }) {
  return (
    <motion.div
      className="hidden lg:flex flex-col items-center absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
    >
      <div className="scroll-bob">
        <IoChevronDownSharp size={20} className="text-glow-blue/50" />
      </div>
      <p className="text-[11px] mt-2 tracking-[0.15em] uppercase text-ocean-text/30 font-light">
        {t("hero.scroll_down")}
      </p>
    </motion.div>
  );
}
