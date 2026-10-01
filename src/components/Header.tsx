import logoIcon from "../assets/shared/desktop/logo.svg";
import openMenuIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeMenuIcon from "../assets/shared/mobile/icon-close.svg";
import { Link, useLocation } from "react-router-dom";

import { useEffect, useRef, useState } from "react";

const FOCUSABLE_SELECTOR = "a[href], button:not([disabled])";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const hasOpenedRef = useRef(false);
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      hasOpenedRef.current = true;
      closeButtonRef.current?.focus();
    } else if (hasOpenedRef.current && !isNavigatingRef.current) {
      openButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable =
        menuRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);

      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!hasOpenedRef.current) return;

    isNavigatingRef.current = true;
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="relative flex items-center justify-between">
        <Link to="/" aria-label="Coffeeroasters home">
          <img
            className="h-[16.2px] w-40 md:h-6 md:w-59.25"
            src={logoIcon}
            alt=""
          />
        </Link>
        {!isMenuOpen && (
          <button
            type="button"
            ref={openButtonRef}
            onClick={() => {
              isNavigatingRef.current = false;
              setIsMenuOpen(true);
            }}
            aria-label="Open menu"
            aria-controls="menu-items"
            aria-expanded={isMenuOpen}
            className="block focus-visible:rounded-sm focus-visible:shadow-[0_0_0_3px_var(--color-neutral-0),0_0_0_5px_var(--color-teal-600)] focus-visible:outline-none md:hidden"
          >
            <img src={openMenuIcon} alt="" />
          </button>
        )}
        <nav className="font-display hidden gap-8.25 py-1 text-xs leading-[1.3] font-bold tracking-[0.92px] text-neutral-500 uppercase md:flex">
          <Link
            className="hover:text-neutral-900 focus-visible:rounded-sm focus-visible:shadow-[0_0_0_3px_var(--color-neutral-0),0_0_0_5px_var(--color-teal-600)] focus-visible:outline-none"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-neutral-900 focus-visible:rounded-sm focus-visible:shadow-[0_0_0_3px_var(--color-neutral-0),0_0_0_5px_var(--color-teal-600)] focus-visible:outline-none"
            to="/about"
          >
            About us
          </Link>
          <Link
            className="hover:text-neutral-900 focus-visible:rounded-sm focus-visible:shadow-[0_0_0_3px_var(--color-neutral-0),0_0_0_5px_var(--color-teal-600)] focus-visible:outline-none"
            to="/subscribe"
          >
            Create your plan
          </Link>
        </nav>
      </header>

      {isMenuOpen && (
        <div
          id="menu-items"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-10 bg-neutral-50/95 px-4 py-6"
        >
          <div className="flex justify-between">
            <Link
              className="focus-visible:rounded-sm focus-visible:shadow-[0_0_0_3px_var(--color-neutral-0),0_0_0_5px_var(--color-teal-600)] focus-visible:outline-none"
              to="/"
              aria-label="Coffeeroasters home"
            >
              <img className="h-[16.2px] w-40" src={logoIcon} alt="" />
            </Link>
            <button
              type="button"
              ref={closeButtonRef}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="focus-visible:rounded-sm focus-visible:shadow-[0_0_0_3px_var(--color-neutral-0),0_0_0_5px_var(--color-teal-600)] focus-visible:outline-none"
            >
              <img src={closeMenuIcon} alt="" />
            </button>
          </div>
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col items-center gap-8"
          >
            <Link
              className="font-display mt-20 text-2xl leading-8 font-black tracking-normal focus-visible:rounded-sm focus-visible:shadow-[0_0_0_3px_var(--color-neutral-0),0_0_0_5px_var(--color-teal-600)] focus-visible:outline-none"
              to="/"
            >
              Home
            </Link>
            <Link
              className="font-display text-2xl leading-8 font-black tracking-normal focus-visible:rounded-sm focus-visible:shadow-[0_0_0_3px_var(--color-neutral-0),0_0_0_5px_var(--color-teal-600)] focus-visible:outline-none"
              to="/about"
            >
              About us
            </Link>
            <Link
              className="font-display text-2xl leading-8 font-black tracking-normal focus-visible:rounded-sm focus-visible:shadow-[0_0_0_3px_var(--color-neutral-0),0_0_0_5px_var(--color-teal-600)] focus-visible:outline-none"
              to="/subscribe"
            >
              Create your plan
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
