import heroImageDesk from "../../assets/home/desktop/image-hero-coffeepress.jpg";
import heroImageTab from "../../assets/home/tablet/image-hero-coffeepress.jpg";
import heroImageMob from "../../assets/home/mobile/image-hero-coffeepress.jpg";
import bgQualityImg from "../../assets/about/desktop/bg-quality.png";

import Header from "../../components/Header";
import Product from "../../components/Product";
import Benefit from "./components/Benefit";
import Step from "./components/Step";

import { products } from "../../data/products";
import { benefits } from "../../data/benefits";
import { steps } from "../../data/steps";

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col px-4 py-6 gap-20 md:px-8 md:py-10 lg:px-20 lg:py-10">
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
          <div className="absolute flex flex-col inset-0 px-6 py-24 gap-10 items-center">
            <div className="flex flex-col gap-8">
              <h1 className="font-display font-black leading-none tracking-normal text-[40px] text-center text-neutral-50">
                Great coffee made simple.
              </h1>
              <p className="leading-[1.6] tracking-normal text-center text-neutral-50/80">
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
      <section className="relative">
        <img
          className="absolute inset-x-0 top-0 w-176 h-144.25 rounded-[10px] object-cover"
          src={bgQualityImg}
          alt=""
        />
        <div className="relative px-4">
          <div className="flex flex-col gap-8">
            <h2 className="pt-16 font-display font-black text-[40px] text-center leading-[1.2] tracking-normal text-neutral-50">
              Why choose us?
            </h2>
            <p className="text-center leading-[1.6] tracking-normal text-neutral-50/80">
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </p>
          </div>
          <ul className="flex flex-col pt-16 gap-6 px-[15.5px]">
            {benefits.map((benefit) => {
              return <Benefit key={benefit.id} benefit={benefit} />;
            })}
          </ul>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <h2 className="pb-16 font-display font-black text-2xl leading-normal tracking-normal text-neutral-500">
          How it works
        </h2>
        {steps.map((step) => {
          return <Step key={step.id} step={step} />;
        })}
      </section>
    </main>
  );
}
