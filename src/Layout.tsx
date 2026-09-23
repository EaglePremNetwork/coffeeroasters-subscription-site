import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-360 px-4 py-6 md:px-8 md:py-10 lg:px-20 lg:py-10">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
