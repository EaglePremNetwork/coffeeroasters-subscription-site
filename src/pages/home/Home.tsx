import heroImageDesk from "../../assets/home/desktop/image-hero-coffeepress.jpg";
import heroImageTab from "../../assets/home/tablet/image-hero-coffeepress.jpg";
import heroImageMob from "../../assets/home/mobile/image-hero-coffeepress.jpg";
import bgQualityImage from "../../assets/about/desktop/bg-quality.png";

import Button from "../../components/Button";
import Product from "../../components/Product";
import Benefit from "./components/Benefit";
import Step from "./components/Step";

import { products } from "../../data/products";
import { benefits } from "../../data/benefits";
import { steps } from "../../data/steps";

export default function Home() {
  return (
    <div className="mt-8 flex flex-col gap-20 md:mt-10 lg:gap-35">
      <section>
        <div className="relative flex flex-col items-center">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={heroImageDesk}
              width="1280"
              height="600"
            />
            <source
              media="(min-width: 768px)"
              srcSet={heroImageTab}
              width="1378"
              height="1000"
            />
            <img
              className="w-full rounded-[10px] max-[374px]:h-118"
              src={heroImageMob}
              width="654"
              height="1000"
              fetchPriority="high"
              alt=""
            />
          </picture>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-24 max-[324px]:px-3 md:items-start md:pl-12 lg:py-28 lg:pl-20">
            <div className="flex max-w-73.75 flex-col items-center md:max-w-105 md:items-start lg:max-w-123.25">
              <h1
                tabIndex={-1}
                className="font-display text-center leading-none font-black tracking-normal text-neutral-50 max-[299px]:text-[36px] min-[300px]:text-[40px] md:text-left md:text-5xl lg:text-7xl"
              >
                Great coffee made simple.
              </h1>
              <p className="mt-8 text-center leading-[1.6] tracking-normal text-neutral-50/80 md:text-left">
                Start your mornings with the world’s best coffees. Try our
                expertly curated artisan coffees from our best roasters
                delivered directly to your door, at your schedule.
              </p>
              <Button className="mt-10 md:mt-12" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center lg:px-21.25">
        <div className="flex flex-col md:relative">
          {/* Mobile */}
          <div className="relative flex justify-center md:hidden">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-neutral-50"></div>
            <h2 className="font-display text-center text-[40px] leading-none font-black tracking-normal text-neutral-500">
              our collection
            </h2>
          </div>
          {/* Tablet and desktop */}
          <div className="inset-x-0 top-0 hidden md:absolute md:flex md:justify-center">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-neutral-50"></div>
            <h2 className="font-display lg2:text-[182px] px-5 text-[112px] leading-none font-black tracking-normal text-neutral-500 min-[1251px]:text-[150px] lg:text-[110px]">
              our collection
            </h2>
          </div>
          <ul className="flex flex-col gap-8 md:relative md:mt-10 md:items-center lg:mt-32 lg:flex-row">
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </ul>
        </div>
      </section>

      <section className="relative">
        <img
          className="absolute inset-x-0 top-0 h-144.25 rounded-[10px] object-cover"
          src={bgQualityImage}
          alt=""
        />
        <div className="lg2:px-4 relative px-4 pt-16 lg:px-0 lg:pt-24">
          <div className="lg:flex lg:flex-col lg:items-center">
            <div className="lg2:px-92.5 flex flex-col gap-8 md:px-20.5 lg:max-w-7xl">
              <h2 className="font-display text-center leading-[1.2] font-black tracking-normal text-neutral-50 max-[299px]:text-[36px] min-[300px]:text-[40px]">
                Why choose us?
              </h2>
              <p className="text-center leading-[1.6] tracking-normal text-neutral-50/80">
                A large part of our role is choosing which particular coffees
                will be featured in our range. This means working closely with
                the best coffee growers to give you a more impactful experience
                on every level.
              </p>
            </div>
          </div>
          <ul className="lg2:px-21.25 lg2:gap-8 flex flex-col gap-6 px-[15.5px] pt-16 md:px-[65.5px] lg:grid lg:grid-cols-3 lg:gap-4">
            {benefits.map((benefit) => {
              return <Benefit key={benefit.id} benefit={benefit} />;
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto flex flex-col items-center justify-center md:items-start lg:max-w-277.5">
        <div className="lg:max-w-261.75">
          <h2 className="font-display text-center text-2xl leading-normal font-black tracking-normal text-neutral-500 md:text-left">
            How it works
          </h2>
          <div className="md:relative">
            <div
              aria-hidden="true"
              className="absolute top-3.75 right-[calc(33.333%-2.5rem)] left-0 hidden h-px bg-orange-200 md:block"
            ></div>
            <ol className="mt-16 flex flex-col gap-10 md:mt-20 md:grid md:grid-cols-3 md:items-start md:gap-5">
              {steps.map((step) => {
                return <Step key={step.id} step={step} />;
              })}
            </ol>
          </div>
        </div>
        <Button className="mt-10 md:mt-16" />
      </section>
    </div>
  );
}
