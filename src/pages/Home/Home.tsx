import heroImageDesk from "../../assets/home/desktop/image-hero-coffeepress.jpg";
import heroImageTab from "../../assets/home/tablet/image-hero-coffeepress.jpg";
import heroImageMob from "../../assets/home/mobile/image-hero-coffeepress.jpg";
import bgQualityImage from "../../assets/about/desktop/bg-quality.png";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Product from "../../components/Product";
import Footer from "../../components/Footer";
import Benefit from "./components/Benefit";
import Step from "./components/Step";

import { products } from "../../data/products";
import { benefits } from "../../data/benefits";
import { steps } from "../../data/steps";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col gap-20 px-4 py-6 md:px-8 md:py-10 lg:px-20 lg:py-10">
      <section className="flex flex-col gap-8">
        <Header />
        <div className="relative flex flex-col items-center">
          <picture>
            <source media="(min-width: 1024px)" srcSet={heroImageDesk} />
            <source media="(min-width: 768px)" srcSet={heroImageTab} />
            <img
              className="rounded-[10px] md:h-142 md:w-176 lg:h-162 lg:w-317.5"
              src={heroImageMob}
              alt=""
            />
          </picture>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-24 md:items-start md:py-24 md:pr-59 md:pl-12 lg:w-1/2 lg:px-20 lg:py-28">
            <div className="flex flex-col gap-8">
              <h1 className="font-display text-center text-[40px] leading-none font-black tracking-normal text-neutral-50 md:text-left md:text-5xl lg:text-7xl">
                Great coffee made simple.
              </h1>
              <p className="text-center leading-[1.6] tracking-normal text-neutral-50/80 md:text-left">
                Start your mornings with the world’s best coffees. Try our
                expertly curated artisan coffees from our best roasters
                delivered directly to your door, at your schedule.
              </p>
            </div>
            <Button className="mt-10 md:mt-12" />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:relative">
        {/* Home */}
        <div className="relative flex justify-center md:hidden">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-neutral-50"></div>
          <h2 className="font-display text-[40px] leading-none font-black tracking-normal text-neutral-500">
            our collection
          </h2>
        </div>
        {/* Tablet and desktop */}
        <div className="inset-x-0 top-0 hidden md:absolute md:block">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-neutral-50"></div>
          <h2 className="font-display x-5 px-5 text-[112px] leading-none font-black tracking-normal text-neutral-500">
            our collection
          </h2>
        </div>
        <ul className="flex flex-col gap-8 md:relative md:mt-10">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </ul>
      </section>

      <section className="relative">
        <img
          className="absolute inset-x-0 top-0 h-144.25 w-176 rounded-[10px] object-cover"
          src={bgQualityImage}
          alt=""
        />
        <div className="relative px-4 pt-16">
          <div className="flex flex-col gap-8 md:px-20.5">
            <h2 className="font-display text-center text-[40px] leading-[1.2] font-black tracking-normal text-neutral-50">
              Why choose us?
            </h2>
            <p className="text-center leading-[1.6] tracking-normal text-neutral-50/80">
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </p>
          </div>
          <ul className="flex flex-col gap-6 px-[15.5px] pt-16 md:px-[65.5px]">
            {benefits.map((benefit) => {
              return <Benefit key={benefit.id} benefit={benefit} />;
            })}
          </ul>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center md:items-start">
        <h2 className="font-display text-2xl leading-normal font-black tracking-normal text-neutral-500">
          How it works
        </h2>
        <ol className="mt-16 flex flex-col gap-10 md:relative md:mt-20 md:grid md:grid-cols-3 md:items-start md:gap-5">
          <div
            aria-hidden="true"
            className="absolute top-3.75 right-[calc(33.333%-2.5rem)] left-0 hidden h-px bg-orange-200 md:block"
          ></div>
          {steps.map((step) => {
            return <Step key={step.id} step={step} />;
          })}
        </ol>

        <Button className="mt-10 md:mt-16" />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
