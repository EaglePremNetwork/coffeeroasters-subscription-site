import type { Step as StepType } from "../../../data/steps";

type StepProps = {
  step: StepType;
};

export default function Step({ step }: StepProps) {
  return (
    <li className="flex flex-col items-center justify-center gap-6 text-center md:items-start md:gap-10 md:text-left">
      <div className="hidden h-7.75 w-7.75 rounded-full border-2 border-teal-600 bg-neutral-50 md:relative md:block"></div>

      <span
        aria-hidden="true"
        className="font-display text-7xl leading-none font-black tracking-normal text-orange-200 md:pt-10"
      >
        {String(step.id).padStart(2, "0")}
      </span>
      <h3 className="font-display text-[32px] leading-[1.14] font-black tracking-normal whitespace-pre-line text-neutral-900">
        <span className="md:hidden">{step.nameMobile ?? step.name}</span>
        <span className="hidden md:inline">{step.name}</span>
      </h3>
      <p className="leading-[1.6] tracking-normal text-neutral-900">
        {step.description}
      </p>
    </li>
  );
}
