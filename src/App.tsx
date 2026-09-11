import heroImageDesk from "./assets/home/desktop/image-hero-coffeepress.jpg";
import heroImageTab from "./assets/home/tablet/image-hero-coffeepress.jpg";
import heroImageMob from "./assets/home/mobile/image-hero-coffeepress.jpg";

import { products } from "./products";

import Header from "./Header";
import Product from "./Product";

function App() {
  return (
    <main className="flex flex-col min-h-dvh px-4 py-6 gap-20 md:px-8 md:py-10 lg:px-20 lg:py-10">
      <section className="flex flex-col gap-8">
        <Header />
        <div className="relative">
          <picture>
            <source media="(min-width: 1024px)" srcSet={heroImageDesk} />
            <source media="(min-width: 768px)" srcSet={heroImageTab} />
            <img
              className="w-85.75 h-126.5 rounded-[10px] md:w-176 md:h-142 lg:w-317.5 lg:h-162"
              src={heroImageMob}
              alt=""
            />
          </picture>
          <div className="flex flex-col absolute inset-0 px-6 py-24 gap-10 items-center">
            <div className="flex flex-col gap-8">
              <h1 className="font-display font-black leading-none tracking-normal text-[40px] text-center text-neutral-50">
                Great coffee made simple.
              </h1>
              <p className="leading-[1.6] tracking-normal text-center text-neutral-50">
                Start your mornings with the world’s best coffees. Try our
                expertly curated artisan coffees from our best roasters
                delivered directly to your door, at your schedule.
              </p>
            </div>
            <button
              type="button"
              className="w-54.5 h-14.25 px-8 py-4 font-display font-black text-lg leading-[1.4] tracking-normal rounded-md text-neutral-50 bg-teal-600"
            >
              Create your plan
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-neutral-50"></div>
          <h2 className="font-display font-black leading-none tracking-normal text-[40px] text-neutral-500">
            our collection
          </h2>
        </div>
        <ul className="flex flex-col gap-8">
          {products.map((product) => {
            return <Product product={product} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;
