import logoIconWhite from "../assets/shared/mobile/logo-white.svg";
import logoFacebook from "../assets/shared/desktop/icon-facebook.svg";
import logoTwitter from "../assets/shared/desktop/icon-twitter.svg";
import logoInstagram from "../assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="md: relative flex flex-col items-center gap-6 bg-neutral-900 px-5 py-10 md:flex-row md:justify-between md:gap-0">
      <img className="text-neutral-0 h-[16.2px]" src={logoIconWhite} />
      <div className="font-display flex gap-5 text-xs leading-[1.3] font-bold tracking-normal text-neutral-500 uppercase">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Create your plan</a>
      </div>
      <div className="flex gap-5">
        <img className="h-5 w-auto" src={logoFacebook} alt="" />
        <img className="h-5 w-auto" src={logoTwitter} alt="" />
        <img className="h-5 w-auto" src={logoInstagram} alt="" />
      </div>
    </footer>
  );
}
