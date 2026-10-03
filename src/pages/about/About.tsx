import heroMobImage from "../../assets/about/mobile/image-hero-whitecup.jpg";
import heroTabImage from "../../assets/about/tablet/image-hero-whitecup.jpg";
import heroDeskImage from "../../assets/about/desktop/image-hero-whitecup.jpg";
import commitmentMobImage from "../../assets/about/mobile/image-commitment.jpg";
import commitmentTabImage from "../../assets/about/tablet/image-commitment.jpg";
import commitmentDeskImage from "../../assets/about/desktop/image-commitment.jpg";
import bgQualityMobImage from "../../assets/about/mobile/bg-quality.png";
import bgQualityTabImage from "../../assets/about/tablet/bg-quality.png";
import bgQualityDeskImage from "../../assets/about/desktop/bg-quality.png";
import QualityMobImage from "../../assets/about/mobile/image-quality.jpg";
import QualityTabImage from "../../assets/about/tablet/image-quality.jpg";
import QualityDeskImage from "../../assets/about/desktop/image-quality.jpg";
import { headquarters } from "../../data/headquarters";

export default function About() {
  return (
    <div className="mt-10 flex flex-col gap-20 md:gap-24 lg:gap-35">
      <section>
        <div className="relative flex flex-col items-center overflow-hidden">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={heroDeskImage}
              width="1280"
              height="450"
            />
            <source
              media="(min-width: 768px)"
              srcSet={heroTabImage}
              width="1378"
              height="800"
            />
            <img
              className="w-full rounded-[10px] max-[374px]:h-90"
              src={heroMobImage}
              width="654"
              height="800"
              alt=""
            />
          </picture>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 py-20 md:items-start md:pl-12 lg:pl-20">
            <div className="flex max-w-75.75 flex-col items-center gap-6 text-center md:max-w-111.25 md:items-start md:text-left">
              <h1
                tabIndex={-1}
                className="font-display text-[28px] leading-[1.2] font-black tracking-normal text-neutral-50 md:text-[32px] md:leading-[1.4] lg:text-[40px]"
              >
                About Us
              </h1>
              <p className="leading-[1.6] tracking-normal text-neutral-50">
                Coffeeroasters began its journey of exotic discovery in 1999,
                highlighting stories of coffee from around the world. We have
                since been dedicated to bring the perfect cup - from bean to
                brew - in every shipment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg2:gap-31.25 lg2:px-21.25 flex flex-col gap-12 md:flex-row md:justify-center lg:items-center lg:gap-16 lg:px-10">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={commitmentDeskImage}
              width="445"
              height="520"
            />
            <source
              media="(min-width: 768px)"
              srcSet={commitmentTabImage}
              width="281"
              height="470"
            />
            <img
              className="w-full rounded-[10px]"
              src={commitmentMobImage}
              width="654"
              height="800"
              alt=""
            />
          </picture>

          <div className="flex flex-col items-center md:justify-center">
            <div className="flex max-w-85.75 flex-col gap-5 text-center md:max-w-94 md:text-left lg:max-w-135">
              <h2 className="font-display text-[28px] leading-[1.2] font-black tracking-normal text-neutral-900 md:text-[40px]">
                Our commitment
              </h2>
              <p className="leading-[1.6] tracking-normal text-neutral-900/80">
                We’re built on a simple mission and a commitment to doing good
                along the way. We want to make it easy for you to discover and
                brew the world’s best coffee at home. It all starts at the
                source. To locate the specific lots we want to purchase, we
                travel nearly 60 days a year trying to understand the challenges
                and opportunities in each of these places. We collaborate with
                exceptional coffee growers and empower a global community of
                farmers through with well above fair-trade benchmarks. We also
                offer training, support farm community initiatives, and invest
                in coffee plant science. Curating only the finest blends, we
                roast each lot to highlight tasting profiles distinctive to
                their native growing region.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative">
          <div className="lg:quality-img-pr relative z-10 px-8 md:px-16.5">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={QualityDeskImage}
                width="445"
                height="474"
              />
              <source
                media="(min-width: 768px)"
                srcSet={QualityTabImage}
                width="573"
                height="320"
              />
              <img
                className="lg:quality-img-width w-full rounded-[10px] lg:ml-auto"
                src={QualityMobImage}
                width="558"
                height="312"
                alt=""
              />
            </picture>
          </div>

          <div className="lg:quality-bg-margin relative -mt-18.5 overflow-hidden rounded-[10px] md:-mt-19">
            <picture>
              <source media="(min-width: 1024px)" srcSet={bgQualityDeskImage} />
              <source media="(min-width: 768px)" srcSet={bgQualityTabImage} />
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={bgQualityMobImage}
                alt=""
              />
            </picture>

            <div className="lg:quality-bg-vertical-padding lg:quality-bg-horizontal-padding relative flex flex-col items-center px-5 pt-28 pb-10 md:px-21.25 md:pt-35 md:pb-16 lg:items-start lg:justify-center">
              <div className="lg:quality-bg-max-w flex max-w-75.75 flex-col gap-8 text-center md:max-w-135">
                <h2 className="font-display items-center text-[32px] leading-[1.4] font-black tracking-normal text-neutral-50 max-[320px]:text-[26px]">
                  Uncompromising quality
                </h2>
                <p className="leading-[1.6] tracking-normal text-neutral-50/80">
                  Although we work with growers who pay close attention to all
                  stages of harvest and processing, we employ, on our end, a
                  rigorous quality control program to avoid over-roasting or
                  baking the coffee dry. Every bag of coffee is tagged with a
                  roast date and batch number. Our goal is to roast consistent,
                  user-friendly coffee, so that brewing is easy and enjoyable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:flex md:flex-row md:justify-center">
        <div className="lg2:px-[117.5px] md:w-176 md:max-w-176 lg:w-261.25 lg:max-w-261.25 lg:px-25">
          <h2 className="font-display pb-16 text-center text-2xl leading-normal font-black tracking-normal text-neutral-500 md:text-left">
            Our headquarters
          </h2>
          <ul className="flex flex-col gap-6 md:flex-row md:justify-between">
            {headquarters.map((headquarter) => {
              return (
                <li
                  key={headquarter.id}
                  className="flex flex-col items-center gap-8 md:items-start"
                >
                  <img src={headquarter.image} alt="" />
                  <div className="flex flex-col items-center gap-6 md:items-start">
                    <h3 className="font-display text-center text-[32px] leading-[1.14] font-black tracking-normal text-neutral-900">
                      {headquarter.country}
                    </h3>
                    <div className="flex flex-col items-center leading-[1.6] tracking-normal text-neutral-900 md:items-start">
                      <span>{headquarter.address[0]}</span>
                      <span>{headquarter.address[1]}</span>
                      <span>{headquarter.address[2]}</span>
                      <span>{headquarter.phone}</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
