import logoIconWhite from "../assets/shared/mobile/logo-white.svg";
import logoFacebook from "../assets/shared/desktop/icon-facebook.svg";
import logoTwitter from "../assets/shared/desktop/icon-twitter.svg";
import logoInstagram from "../assets/shared/desktop/icon-instagram.svg";
import logoFacebookHover from "../assets/shared/desktop/icon-facebook-hover.svg";
import logoTwitterHover from "../assets/shared/desktop/icon-twitter-hover.svg";
import logoInstagramHover from "../assets/shared/desktop/icon-instagram-hover.svg";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 flex flex-col items-center gap-6 overflow-hidden bg-neutral-900 px-5 py-10 md:flex-row md:justify-between md:gap-0 lg:mt-35">
      <img
        className="text-neutral-0 h-[16.2px] lg:h-6"
        src={logoIconWhite}
        alt="Coffeeroasters"
      />
      <nav
        aria-label="Footer navigation"
        className="font-display flex gap-5 text-xs leading-[1.3] font-bold tracking-normal text-neutral-500 uppercase max-[374px]:pl-3"
      >
        <Link className="hover:text-neutral-0" to="/">
          Home
        </Link>
        <Link className="hover:text-neutral-0" to="/about">
          About us
        </Link>
        <Link className="hover:text-neutral-0" to="/subscribe">
          Create your plan
        </Link>
      </nav>
      <div className="flex gap-5">
        <a
          href="https://www.facebook.com"
          aria-label="Facebook"
          className="group"
        >
          <img
            className="h-5 w-auto group-hover:hidden lg:h-6"
            src={logoFacebook}
            alt=""
          />
          <img
            className="hidden h-5 w-auto group-hover:block lg:h-6"
            src={logoFacebookHover}
            alt=""
          />
        </a>

        <a href="https://x.com" aria-label="X" className="group">
          <img
            className="h-5 w-auto group-hover:hidden lg:h-6"
            src={logoTwitter}
            alt=""
          />
          <img
            className="hidden h-5 w-auto group-hover:block lg:h-6"
            src={logoTwitterHover}
            alt=""
          />
        </a>

        <a
          href="https://www.instagram.com"
          aria-label="Instagram"
          className="group"
        >
          <img
            className="h-5 w-auto group-hover:hidden lg:h-6"
            src={logoInstagram}
            alt=""
          />
          <img
            className="hidden h-5 w-auto group-hover:block lg:h-6"
            src={logoInstagramHover}
            alt=""
          />
        </a>
      </div>
    </footer>
  );
}
