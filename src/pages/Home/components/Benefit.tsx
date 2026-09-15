import type { Benefit as BenefitType } from "../../../data/benefits";

type BenefitProps = {
  benefit: BenefitType;
};

export default function Benefit({ benefit }: BenefitProps) {
  return (
    <li className="flex flex-col items-center justify-center rounded-lg bg-teal-600 px-5 py-6 md:flex-row md:gap-12 md:px-12 md:py-10">
      <img className="h-18 w-auto pb-6 md:pb-0" src={benefit.icon} alt="" />
      <div className="flex flex-col items-center justify-center gap-3 md:items-start md:gap-5">
        <h3 className="font-display text-left text-2xl leading-normal font-black tracking-normal text-neutral-50">
          {benefit.name}
        </h3>
        <p className="text-center leading-[1.6] tracking-normal text-neutral-50 md:text-left">
          {benefit.description}
        </p>
      </div>
    </li>
  );
}
