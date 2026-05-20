import { useLenis } from "@studio-freight/react-lenis";
import { cubicBezier } from "framer-motion";
import { Turn as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

const menuItems = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
];

type LenisType = {
  scrollTo: (
    target: string,
    options?: {
      offset?: number;
      easing?: (t: number) => number;
      duration?: number;
    }
  ) => void;
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis();
  const { t, i18n } = useTranslation();

  // Sync <html lang> attribute with current language for SEO & accessibility
  useEffect(() => {
    document.documentElement.lang = i18n.language.startsWith('id') ? 'id' : 'en';
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav aria-label="Main navigation" className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled ? 'top-4 px-4 md:px-8' : 'top-0 px-0'}`}>
      <div 
        className={`mx-auto flex items-center justify-between backdrop-blur-xl transition-all duration-500 ease-out
          ${isScrolled 
            ? 'py-2 px-5 sm:px-8 max-w-3xl bg-zinc-950/70 rounded-full border border-zinc-800/40 shadow-xl shadow-black/40' 
            : 'py-4 px-4 sm:px-16 w-full max-w-none bg-zinc-900/30 rounded-none border-b border-transparent'
          }`}
      >
        <Logo lenis={lenis} isScrolled={isScrolled} />
        <DesktopMenu lenis={lenis} t={t} isScrolled={isScrolled} />
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative flex items-center bg-zinc-950/20 backdrop-blur-sm rounded-full p-1 border border-zinc-800/40 shadow-inner select-none">
            <div 
              className="absolute top-1 bottom-1 left-1 w-10 bg-violet-600/90 rounded-full transition-transform duration-300 ease-out z-0 shadow-md shadow-violet-500/30"
              style={{
                transform: `translateX(${i18n.language.startsWith('id') ? '40px' : '0px'})`
              }}
            />
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={`relative z-10 w-10 h-6 text-xs font-bold transition-colors duration-300 rounded-full cursor-pointer flex items-center justify-center ${!i18n.language.startsWith('id') ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage('id')}
              className={`relative z-10 w-10 h-6 text-xs font-bold transition-colors duration-300 rounded-full cursor-pointer flex items-center justify-center ${i18n.language.startsWith('id') ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              ID
            </button>
          </div>
          <div className="hamburger md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#fff" />
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`absolute left-0 right-0 mx-auto transition-all duration-500 ease-out overflow-hidden z-40
        ${isScrolled ? 'top-[75px] max-w-3xl px-4 md:px-8' : 'top-full w-full px-0'}`}
      >
        <div className={`w-full backdrop-blur-lg bg-zinc-900/95 transition-all duration-500 ease-out
          ${isScrolled ? 'rounded-2xl border border-zinc-700/50 shadow-xl' : 'rounded-none border-t border-zinc-800'}
          ${isOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"}`}
        >
          <ul className="flex flex-col items-center gap-5 text-white">
            <li className="text-xl font-bold mb-2 text-violet-400">{t('navbar.menu')}</li>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    if (lenis) {
                      lenis.scrollTo(item.href, {
                        offset: -100,
                        easing: cubicBezier(0.65, 0, 0.35, 1),
                        duration: 1,
                      });
                    }
                  }}
                  className="text-lg font-medium hover:text-violet-400 transition-colors"
                >
                  {t(`navbar.${item.key}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Logo = ({ lenis, isScrolled }: { lenis: LenisType | undefined, isScrolled: boolean }) => (
  <div
    className="logo flex gap-2 items-center cursor-pointer group"
    onClick={() =>
      lenis &&
      lenis.scrollTo("#home", {
        offset: -100,
        easing: cubicBezier(0.65, 0, 0.35, 1),
        duration: 1,
      })
    }
  >
    <img
      src="/logo.png"
      alt="Alif Ahmad - Home"
      className={`transition-all duration-500 ease-out group-hover:scale-105 ${isScrolled ? 'w-10' : 'w-12'}`}
    />
  </div>
);

const DesktopMenu = ({ lenis, t, isScrolled }: { lenis: LenisType | undefined; t: TFunction; isScrolled: boolean }) => (
  <ul className="menu hidden md:flex items-center gap-8">
    {menuItems.map((item) => (
      <li key={item.href}>
        <a
          onClick={() =>
            lenis &&
            lenis.scrollTo(item.href, {
              offset: -100,
              easing: cubicBezier(0.65, 0, 0.35, 1),
              duration: 1,
            })
          }
          className={`text-sm md:text-base font-medium transition-colors cursor-pointer ${
            isScrolled 
              ? "text-zinc-100 hover:text-violet-300" 
              : "text-zinc-300 hover:text-violet-400"
          }`}
        >
          {t(`navbar.${item.key}`)}
        </a>
      </li>
    ))}
  </ul>
);
