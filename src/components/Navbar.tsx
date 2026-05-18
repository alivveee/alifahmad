import { useLenis } from "@studio-freight/react-lenis";
import { cubicBezier } from "framer-motion";
import { Turn as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
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
    <div className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled ? 'top-4 px-4 md:px-8' : 'top-0 px-0'}`}>
      <div 
        className={`mx-auto flex items-center justify-between backdrop-blur-md transition-all duration-500 ease-out
          ${isScrolled 
            ? 'py-2 px-5 sm:px-8 max-w-3xl bg-zinc-900/80 rounded-full border border-zinc-700/50 shadow-xl shadow-black/40' 
            : 'py-4 px-4 sm:px-16 w-full max-w-none bg-zinc-900/60 rounded-none border-b border-transparent'
          }`}
      >
        <Logo lenis={lenis} isScrolled={isScrolled} />
        <DesktopMenu lenis={lenis} />
        <div className="hamburger md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#fff" />
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
            <li className="text-xl font-bold mb-2 text-violet-400">Menu</li>
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
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
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
      alt="Logo" 
      className={`transition-all duration-500 ease-out group-hover:scale-105 ${isScrolled ? 'w-10' : 'w-12'}`} 
    />
  </div>
);

const DesktopMenu = ({ lenis }: { lenis: LenisType | undefined }) => (
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
          className="text-sm md:text-base font-medium text-gray-300 hover:text-violet-400 transition-colors cursor-pointer"
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);
