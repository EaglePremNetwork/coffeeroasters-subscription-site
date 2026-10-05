import type { Step as StepType } from "../../../data/steps";
import { cva, type VariantProps } from "class-variance-authority";

const stepVariants = cva(
  "flex flex-col items-center justify-center gap-6 text-center md:items-start md:gap-10 md:text-left",
  {
    variants: {
      variant: {
        default: "",
        dark: ["[&_h3]:text-neutral-50", "[&_p]:text-neutral-50"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type StepProps = {
  step: StepType;
} & VariantProps<typeof stepVariants>;

export default function Step({ step, variant }: StepProps) {
  return (
    <li className={stepVariants({ variant })}>
      <div className="hidden h-7.75 w-7.75 rounded-full border-2 border-teal-600 md:relative md:block"></div>

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
