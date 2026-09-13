import logoIconWhite from "../assets/shared/mobile/logo-white.svg";
import logoFacebook from "../assets/shared/desktop/icon-facebook.svg";
import logoTwitter from "../assets/shared/desktop/icon-twitter.svg";
import logoInstagram from "../assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center px-5 py-10 gap-6 bg-neutral-900">
      <img className="text-neutral-0" src={logoIconWhite} />
      <div className="flex uppercase gap-5 font-display font-bold text-xs leading-[1.3] tracking-normal text-neutral-500">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Create your plan</a>
      </div>
      <div className="flex gap-5">
        <img src={logoFacebook} alt="" />
        <img src={logoTwitter} alt="" />
        <img src={logoInstagram} alt="" />
      </div>
    </footer>
  );
}
