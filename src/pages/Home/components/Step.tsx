import type { Step as StepType } from "../../../data/steps";

type StepProps = {
  step: StepType;
};

export default function Step({ step }: StepProps) {
  return (
    <li className="flex flex-col items-center justify-center text-center gap-6">
      <span
        aria-hidden="true"
        className="font-display font-black text-7xl leading-none tracking-normal text-orange-200"
      >
        {String(step.id).padStart(2, "0")}
      </span>
      <h3 className="whitespace-pre-line font-display font-black text-[32px] leading-[1.14] tracking-normal text-neutral-900">
        {step.name}
      </h3>
      <p className="leading-[1.6] tracking-normal text-neutral-900">
        {step.description}
      </p>
    </li>
  );
}
