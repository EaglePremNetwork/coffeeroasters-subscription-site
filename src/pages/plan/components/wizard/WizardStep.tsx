import { useState } from "react";

import arrowIcon from "../../../../assets/plan/desktop/icon-arrow.svg";

import type { WizardQuestion } from "../../../../data/wizardQuestions";

type WizardStepProps = {
  questions: WizardQuestion[];
  openStep: number;
  onStepChange: (step: number) => void;
  selections: Record<number, string>;
  onOptionSelect: (questionId: number, optionId: string) => void;
  isCapsule: boolean;
};

export default function WizardStep({
  questions,
  openStep,
  onStepChange,
  selections,
  onOptionSelect,
  isCapsule,
}: WizardStepProps) {
  const [focusedOption, setFocusedOption] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-8">
      {questions.map((question) => {
        const isOpen = openStep === question.id;

        return (
          <section key={question.id} className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                disabled={isCapsule && question.id === 4}
                aria-disabled={isCapsule && question.id === 4}
                onClick={() => onStepChange(question.id)}
                aria-expanded={isOpen}
                aria-controls={`wizard-options-${question.id}`}
                className="flex w-full items-center justify-between gap-4 py-2 text-left"
              >
                <h2
                  id={`question-${question.id}`}
                  className="font-display text-[28px] leading-[1.2] font-black tracking-normal text-neutral-500"
                >
                  {question.question}
                </h2>

                <img
                  src={arrowIcon}
                  alt=""
                  className={`h-[11.92px] w-[18.19px] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {isOpen && (
              <div
                id={`wizard-options-${question.id}`}
                role="radiogroup"
                aria-labelledby={`question-${question.id}`}
                className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6"
              >
                {question.options.map((option) => {
                  const isSelected = selections[question.id] === option.id;

                  return (
                    <label
                      key={option.id}
                      onFocus={() => setFocusedOption(option.id)}
                      onBlur={() => setFocusedOption(null)}
                      className={`flex flex-col items-start gap-4 rounded-lg px-5 py-5 text-left lg:gap-6 lg:px-6 lg:py-8 ${
                        focusedOption === option.id
                          ? "shadow-[0_0_0_3px_var(--color-neutral-50),0_0_0_6px_var(--color-teal-600)]"
                          : isSelected
                            ? "shadow-[inset_0_0_0_2px_var(--color-neutral-0)]"
                            : ""
                      } ${
                        isSelected
                          ? "bg-teal-600"
                          : "bg-neutral-100 hover:bg-orange-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option.id}
                        checked={isSelected}
                        onChange={() => onOptionSelect(question.id, option.id)}
                        className="sr-only"
                      />

                      <h3
                        className={`font-display text-2xl leading-normal font-black tracking-normal ${isSelected ? "text-neutral-0" : "text-neutral-900"}`}
                      >
                        {option.title}
                      </h3>

                      <p
                        className={`leading-[1.6] tracking-normal ${isSelected ? "text-neutral-50" : "text-neutral-900"}`}
                      >
                        {option.description}
                      </p>
                    </label>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
