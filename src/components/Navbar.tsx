import { useLenis } from "@studio-freight/react-lenis";
import { cubicBezier } from "framer-motion";
import { Turn as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import type { TFunction } from "i18next";

const menuItems = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#portfolio" },
  { key: "projects", href: "#projects" },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const lenis = useLenis();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" && location.hash && lenis) {
      const timeoutId = setTimeout(() => {
        if (typeof lenis.resize === "function") {
          lenis.resize();
        }
        lenis.scrollTo(location.hash, {
          offset: -100,
          easing: cubicBezier(0.65, 0, 0.35, 1),
          duration: 1,
        });
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname, location.hash, lenis]);

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      if (lenis) {
        lenis.scrollTo(target, {
          offset: -100,
          easing: cubicBezier(0.65, 0, 0.35, 1),
          duration: 1,
        });
      }
    } else {
      navigate(`/${target}`);
    }
  };

  // Sync <html lang> attribute with current language for SEO & accessibility
  useEffect(() => {
    document.documentElement.lang = i18n.language.startsWith("id")
      ? "id"
      : "en";
  }, [i18n.language]);

  return (
    <>
      {/* Backdrop Overlay for Mobile Menu */}
      <div
        className={`fixed inset-0 bg-zinc-950/60 backdrop-blur-md z-40 transition-all duration-500 ease-out md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <nav
        aria-label="Main navigation"
        className="fixed left-0 right-0 z-50 transition-all duration-500 ease-out top-4 px-4 md:px-8"
      >
        <div className="mx-auto flex items-center justify-between backdrop-blur-xl transition-all duration-500 ease-out max-w-3xl bg-zinc-950/70 rounded-2xl border border-zinc-800/40 shadow-xl shadow-black/40 py-2 px-5">
          <Logo onNavClick={handleNavClick} />
          <DesktopMenu t={t} onNavClick={handleNavClick} />
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative flex items-center bg-zinc-950/20 backdrop-blur-sm rounded-lg p-1 border border-zinc-800/40 shadow-inner select-none">
              <div
                className="absolute top-1 bottom-1 left-1 w-10 bg-indigo-600/90 rounded-md transition-transform duration-300 ease-out z-0 shadow-md shadow-indigo-500/30"
                style={{
                  transform: `translateX(${i18n.language.startsWith("id") ? "40px" : "0px"})`,
                }}
              />
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={`relative z-10 w-10 h-6 text-xs font-bold transition-colors duration-300 rounded-md cursor-pointer flex items-center justify-center ${!i18n.language.startsWith("id") ? "text-white" : "text-zinc-400 hover:text-zinc-200"}`}
              >
                EN
              </button>
              <button
                onClick={() => i18n.changeLanguage("id")}
                className={`relative z-10 w-10 h-6 text-xs font-bold transition-colors duration-300 rounded-md cursor-pointer flex items-center justify-center ${i18n.language.startsWith("id") ? "text-white" : "text-zinc-400 hover:text-zinc-200"}`}
              >
                ID
              </button>
            </div>
            <div className="hamburger md:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={24}
                color="#fff"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="absolute left-0 right-0 mx-auto transition-all duration-500 ease-out overflow-hidden z-40 top-[75px] max-w-3xl px-4 md:px-8">
          <div
            className={`w-full backdrop-blur-lg bg-zinc-900/95 transition-all duration-500 ease-out rounded-2xl border border-zinc-700/50 shadow-xl
            ${isOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"}`}
          >
            <ul className="flex flex-col items-center gap-5 text-white">
              <li className="text-xl font-bold mb-2 text-indigo-400">
                {t("navbar.menu")}
              </li>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      setOpen(false);
                      handleNavClick(e, item.href);
                    }}
                    className="text-lg font-medium hover:text-indigo-400 transition-colors"
                  >
                    {t(`navbar.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const Logo = ({
  onNavClick,
}: {
  onNavClick: (e: React.MouseEvent, target: string) => void;
}) => (
  <div
    className="logo flex gap-2 items-center cursor-pointer group"
    onClick={(e) => onNavClick(e, "#home")}
  >
    <img
      src="/logo.png"
      alt="Alif Ahmad - Home"
      className="transition-all duration-500 ease-out group-hover:scale-105 w-10"
    />
  </div>
);

const DesktopMenu = ({
  t,
  onNavClick,
}: {
  t: TFunction;
  onNavClick: (e: React.MouseEvent, target: string) => void;
}) => (
  <ul className="menu hidden md:flex items-center gap-8">
    {menuItems.map((item) => (
      <li key={item.href}>
        <a
          href={item.href}
          onClick={(e) => onNavClick(e, item.href)}
          className="text-sm md:text-base font-medium transition-colors cursor-pointer text-zinc-100 hover:text-indigo-300"
        >
          {t(`navbar.${item.key}`)}
        </a>
      </li>
    ))}
  </ul>
);
