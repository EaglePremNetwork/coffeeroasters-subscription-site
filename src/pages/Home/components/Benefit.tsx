import type { Benefit as BenefitType } from "../../../data/benefits";

type BenefitProps = {
  benefit: BenefitType;
};

export default function Benefit({ benefit }: BenefitProps) {
  return (
    <li className="flex flex-col items-center justify-center px-5 py-6 rounded-lg bg-teal-600">
      <img className="w-auto h-18 pb-6" src={benefit.icon} alt="" />
      <h3 className="font-display font-black text-2xl leading-normal tracking-normal text-neutral-50">
        {benefit.name}
      </h3>
      <p className="pt-3 text-center leading-[1.6] tracking-normal text-neutral-50">
        {benefit.description}
      </p>
    </li>
  );
}
