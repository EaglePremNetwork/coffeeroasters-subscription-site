import type { WizardQuestion } from "../data/wizardQuestions";

export function getSelectedOption(
  questions: WizardQuestion[],
  selections: Record<number, string | undefined>,
  questionId: number,
) {
  const selectedOptionId = selections[questionId];

  return questions
    .find((question) => question.id === questionId)
    ?.options.find((option) => option.id === selectedOptionId);
}
