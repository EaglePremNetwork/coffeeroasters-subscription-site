import type { RefObject } from "react";

import bgOrderSummaryDeskImg from "../../../../assets/plan/desktop/bg-order-summary.png";
import bgOrderSummaryMobImg from "../../../../assets/plan/mobile/bg-order-summary.png";

import type { WizardQuestion } from "../../../../data/wizardQuestions";
import { getSelectedOption } from "../../../../utils/wizard";
import Button from "../../../../components/Button";

type OrderSelection = {
  [questionId: number]: string | undefined;
};

type OrderSummaryProps = {
  questions: WizardQuestion[];
  selections: OrderSelection;
  triggerRef: RefObject<HTMLButtonElement | null>;
  onCreatePlan: () => void;
};

export default function OrderSummary({
  questions,
  selections,
  triggerRef,
  onCreatePlan,
}: OrderSummaryProps) {
  const coffeeType = getSelectedOption(questions, selections, 1);
  const beanType = getSelectedOption(questions, selections, 2);
  const quantity = getSelectedOption(questions, selections, 3);
  const grind = getSelectedOption(questions, selections, 4);
  const frequency = getSelectedOption(questions, selections, 5);

  const isComplete = questions.every(
    (question) => selections[question.id] !== undefined,
  );

  return (
    <section>
      <div className="relative overflow-hidden rounded-[10px]">
        <picture className="absolute inset-0">
          <source media="(min-width: 1024px)" srcSet={bgOrderSummaryDeskImg} />
          <img
            className="h-full w-full object-cover"
            src={bgOrderSummaryMobImg}
            alt=""
          />
        </picture>
        <div className="relative flex flex-col gap-2 bg-neutral-900 px-6 py-12">
          <span className="text-neutral-0/50 text-left leading-[1.6] tracking-normal uppercase">
            Order Summary
          </span>
          <p
            aria-live="polite"
            className="font-display text-neutral-0 text-2xl leading-normal font-black tracking-normal"
          >
            “I drink coffee{" "}
            <span className="text-teal-600">
              {coffeeType?.title ?? "_____"}
            </span>
            , with a{" "}
            <span className="text-teal-600">{beanType?.title ?? "_____"}</span>{" "}
            type of bean.{" "}
            <span className="text-teal-600">{quantity?.title ?? "_____"}</span>{" "}
            ground ala{" "}
            <span className="text-teal-600">{grind?.title ?? "_____"}</span>,
            sent to me{" "}
            <span className="text-teal-600">{frequency?.title ?? "_____"}</span>
            .”
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          ref={triggerRef}
          className="mt-8 lg:mt-12"
          disabled={!isComplete}
          onClick={onCreatePlan}
        />
      </div>
    </section>
  );
}
