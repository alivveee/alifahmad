import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-10">
      <div className="navbar py-4 px-4 md:px-20 flex items-center justify-between backdrop-blur-md bg-zinc-900/60">
        <Logo />
        <DesktopMenu />
        <div className="hamburger md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;

const Logo = () => (
  <div className="logo flex gap-2 items-center">
    <img src="/logo.png" alt="Logo" className="w-12" />
    <h1 className="text-2xl text-white">Alif Ahmad</h1>
  </div>
);

const DesktopMenu = () => (
  <ul className="menu hidden md:flex items-center gap-10">
    {menuItems.map((item) => (
      <li key={item.href}>
        <a href={item.href} className="text-lg font-medium">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

import React from "react";

const MobileMenu = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div
    className={`absolute top-full left-0 w-full transition-all duration-500 ease-in-out overflow-hidden backdrop-blur-md bg-zinc-900/60 z-40 ${
      isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <ul className="flex flex-col items-center gap-5 py-10 text-white">
      <li className="text-2xl font-bold">Menus</li>
      {menuItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            onClick={() => setOpen(false)}
            className="text-lg font-medium"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
