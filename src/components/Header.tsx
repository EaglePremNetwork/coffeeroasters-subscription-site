import logoIcon from "../assets/shared/desktop/logo.svg";
import openMenuIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeMenuIcon from "../assets/shared/mobile/icon-close.svg";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="relative z-50 flex items-center justify-between">
        <img
          className="w-40 h-[16.2px] md:w-59.25 md:h-6"
          src={logoIcon}
          alt="Coffeeroasters logo"
        />
        {!isMenuOpen ? (
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-controls="menu-items"
            aria-expanded={isMenuOpen}
            className="block md:hidden"
          >
            <img src={openMenuIcon} alt="" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <img src={closeMenuIcon} alt="" />
          </button>
        )}
        <nav className="hidden md:flex py-1 gap-8.25 uppercase font-display font-bold text-xs leading-[1.3] tracking-[0.92px] text-neutral-500">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Create your plan</a>
        </nav>
      </header>

      {isMenuOpen && (
        <nav
          id="menu-items"
          aria-label="Navigation menu"
          className="fixed z-40 inset-0 flex flex-col items-center gap-8 px-4 py-6 bg-neutral-50/95"
        >
          <a
            className="mt-20 font-display font-black leading-8 tracking-normal text-2xl"
            href="#"
          >
            Home
          </a>
          <a
            className="font-display font-black leading-8 tracking-normal text-2xl"
            href="#"
          >
            About us
          </a>
          <a
            className="font-display font-black leading-8 tracking-normal text-2xl"
            href="#"
          >
            Create your plan
          </a>
        </nav>
      )}
    </>
  );
}
