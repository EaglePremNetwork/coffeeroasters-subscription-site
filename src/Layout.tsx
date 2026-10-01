import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const heading = mainRef.current?.querySelector<HTMLElement>("h1");

    heading?.focus();
  }, [location.pathname]);

  return (
    <div className="mx-auto min-h-dvh w-full max-w-360 px-4 py-6 md:px-8 md:py-10 lg:px-20 lg:py-10">
      <Header />
      <main ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
