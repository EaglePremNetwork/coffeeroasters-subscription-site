import type { Benefit as BenefitType } from "../../../data/benefits";

type BenefitProps = {
  benefit: BenefitType;
};

export default function Benefit({ benefit }: BenefitProps) {
  return (
    <li className="lg2:px-12 flex flex-col items-center justify-center gap-6 rounded-lg bg-teal-600 px-5 py-6 md:flex-row md:gap-12 md:px-12 md:py-10 lg:flex-col lg:px-0">
      <img className="h-18 w-auto" src={benefit.icon} alt="" />
      <div className="lg2:gap-6 flex flex-col items-center justify-center gap-3 md:items-start md:gap-5 lg:items-center">
        <h3 className="font-display text-center text-2xl leading-normal font-black tracking-normal text-neutral-50 lg:text-center">
          {benefit.name}
        </h3>
        <p className="text-center leading-[1.6] tracking-normal text-neutral-50 md:text-left lg:text-center">
          {benefit.description}
        </p>
      </div>
    </li>
  );
}
