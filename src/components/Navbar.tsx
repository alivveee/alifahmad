import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative w-full z-50">
      {/* Navbar */}
      <div className="navbar py-7 flex items-center justify-between z-50 px-4 rounded-b-2xl backdrop-blur-md bg-zinc-900/60">
        <div className="logo flex gap-2 items-center">
          <img src="/logo.png" alt="Logo" className="w-12" />
          <h1 className="text-2xl text-white">Alif Ahmad</h1>
        </div>
        <ul className="menu hidden md:flex items-center gap-10">
          <li>
            <a href="#home" className="text-lg font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-lg font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg font-medium">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg font-medium">
              Contact
            </a>
          </li>
        </ul>
        <div className="hamburger md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full transition-all duration-500 ease-in-out overflow-hidden backdrop-blur-md bg-zinc-900/60 z-40 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-10 text-white">
          <li className="text-2xl font-bold">Menus</li>
          <li>
            <a href="#home" className="text-lg font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-lg font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg font-medium">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg font-medium">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
