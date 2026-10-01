import type { WizardNavStep } from "../../../../data/wizardNavSteps";

type WizardNavProps = {
  steps: WizardNavStep[];
  openStep: number;
  onStepChange: (step: number) => void;
};

export default function WizardNav({
  steps,
  openStep,
  onStepChange,
}: WizardNavProps) {
  return (
    <nav>
      <ol className="font-display flex flex-col items-start gap-5 text-2xl leading-normal font-black tracking-normal">
        {steps.map((step) => {
          return (
            <li key={step.id} className="group flex gap-6">
              <span
                className={`group-hover:text-neutral-500 ${openStep === step.id ? "text-teal-600" : "text-neutral-500/40"}`}
              >
                {String(step.id).padStart(2, "0")}
              </span>
              <button
                type="button"
                aria-current={openStep === step.id ? "step" : undefined}
                onClick={() => onStepChange(step.id)}
                className={`whitespace-nowrap group-hover:text-neutral-900 focus-visible:rounded-sm focus-visible:shadow-[0_0_0_3px_var(--color-neutral-0),0_0_0_5px_var(--color-teal-600)] focus-visible:outline-none ${
                  openStep === step.id
                    ? "text-neutral-900"
                    : "text-neutral-900/40"
                }`}
              >
                {step.title}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
