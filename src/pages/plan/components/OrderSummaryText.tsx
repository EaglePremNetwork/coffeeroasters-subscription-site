import type { WizardQuestion } from "../../../data/wizardQuestions";
import { getSelectedOption } from "../../../utils/wizard";

type OrderSelection = {
  [questionId: number]: string | undefined;
};

type OrderSummaryTextProps = {
  questions: WizardQuestion[];
  selections: OrderSelection;
};

export default function OrderSummaryText({
  questions,
  selections,
}: OrderSummaryTextProps) {
  const coffeeType = getSelectedOption(questions, selections, 1);
  const beanType = getSelectedOption(questions, selections, 2);
  const quantity = getSelectedOption(questions, selections, 3);
  const grind = getSelectedOption(questions, selections, 4);
  const frequency = getSelectedOption(questions, selections, 5);

  const isCapsule = coffeeType?.id === "capsule";

  return (
    <>
      “I drink my coffee{" "}
      {isCapsule ? (
        <>
          <span className="text-teal-600">using Capsules</span>, with a{" "}
        </>
      ) : (
        <>
          as{" "}
          <span className="text-teal-600">{coffeeType?.title ?? "_____"}</span>,
          with a{" "}
        </>
      )}
      <span className="text-teal-600">{beanType?.title ?? "_____"}</span> type
      of bean.{" "}
      <span className="text-teal-600">{quantity?.title ?? "_____"}</span>
      {isCapsule ? (
        <>
          , sent to me{" "}
          <span className="text-teal-600">{frequency?.title ?? "_____"}</span>
        </>
      ) : (
        <>
          {" "}
          ground ala{" "}
          <span className="text-teal-600">{grind?.title ?? "_____"}</span>, sent
          to me{" "}
          <span className="text-teal-600">{frequency?.title ?? "_____"}</span>
        </>
      )}
      .”
    </>
  );
}
