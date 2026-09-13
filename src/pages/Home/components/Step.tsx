import type { Step as StepType } from "../../../data/steps";

type StepProps = {
  step: StepType;
};

export default function Step({ step }: StepProps) {
  return (
    <ol className="flex flex-col items-center justify-center">
      <li>{step.id}</li>
      <h3>{step.name}</h3>
      <p>{step.description}</p>
    </ol>
  );
}
