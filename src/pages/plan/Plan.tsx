import heroBlackcupDeskImg from "../../assets/plan/desktop/image-hero-blackcup.jpg";
import heroBlackcupTabImg from "../../assets/plan/tablet/image-hero-blackcup.jpg";
import heroBlackcupMobImg from "../../assets/plan/mobile/image-hero-blackcup.jpg";
import bgStepsDeskImg from "../../assets/plan/desktop/bg-steps.png";
import bgStepsTabImg from "../../assets/plan/tablet/bg-steps.png";
import bgStepsMobImg from "../../assets/plan/mobile/bg-steps.png";

import { steps } from "../../data/steps";
import Step from "../home/components/Step";
import WizardNav from "./components/wizard/WizardNav";
import WizardStep from "./components/wizard/WizardStep";
import OrderSummary from "./components/wizard/OrderSummary";
import { wizardNavSteps } from "../../data/wizardNavSteps";
import { wizardQuestions } from "../../data/wizardQuestions";

import { useEffect, useRef, useState } from "react";
import OrderConfirmationModal from "./components/OrderConfirmationModal";

export default function Plan() {
  const [openStep, setOpenStep] = useState(1);
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalTriggerRef = useRef<HTMLButtonElement | null>(null);

  const isCapsule = selections[1] === "capsule";

  const handleOptionSelect = (questionId: number, optionId: string) => {
    setSelections((current) => {
      const next = {
        ...current,
        [questionId]: optionId,
      };

      if (questionId === 1 && optionId === "capsule") {
        delete next[4];
        setOpenStep((currentStep) => (currentStep === 4 ? 1 : currentStep));
      }

      return next;
    });
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  return (
    <div className="mt-10 -mb-4 flex flex-col gap-16 md:gap-20 lg:gap-35">
      <section>
        <div className="relative">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={heroBlackcupDeskImg}
              width="1280"
              height="450"
            />
            <source
              media="(min-width: 768px)"
              srcSet={heroBlackcupTabImg}
              width="1378"
              height="800"
            />
            <img
              className="w-full rounded-[10px]"
              src={heroBlackcupMobImg}
              width="654"
              height="800"
              alt=""
            />
          </picture>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 py-20 text-center max-[311px]:px-3 md:items-start md:gap-8 md:px-12 md:py-35 lg:px-20">
            <h1
              tabIndex={-1}
              className="font-display text-[40px] leading-none font-black tracking-normal text-neutral-50 max-[287px]:text-[36px] md:text-[72px]"
            >
              Create plan
            </h1>
            <p className="max-w-73.75 leading-[1.6] tracking-normal text-neutral-50/80 md:max-w-111.25 md:text-left">
              Build a subscription plan that best fits your needs. We offer an
              assortment of the best artisan coffees from around the globe
              delivered fresh to your door.
            </p>
          </div>
        </div>
      </section>
      <section className="relative mx-auto flex w-full flex-col items-center justify-center overflow-hidden md:items-start">
        <picture className="absolute inset-0">
          <source media="(min-width: 1024px)" srcSet={bgStepsDeskImg} />
          <source media="(min-width: 768px)" srcSet={bgStepsTabImg} />
          <img
            className="h-full w-full object-cover"
            src={bgStepsMobImg}
            alt=""
          />
        </picture>
        <div className="px-4 py-12 md:px-8 md:py-16 lg:w-full lg:px-20 lg:py-24">
          <div className="md:relative">
            <div
              aria-hidden="true"
              className="absolute top-3.75 right-[calc(33.333%-2.5rem)] left-[15.5px] hidden h-px bg-orange-200 md:block lg:w-[min(calc(66.6667%+63.333px),760px)]"
            ></div>
            <ol className="relative flex flex-col gap-10 md:grid md:grid-cols-3 md:items-start md:gap-8 lg:max-w-261.25 lg:gap-23.75">
              {steps.map((step) => {
                return <Step key={step.id} step={step} variant="dark" />;
              })}
            </ol>
          </div>
        </div>
      </section>
      <section className="lg:flex lg:justify-center">
        <div className="lg2:max-w-277.5 lg2:gap-32 flex flex-col gap-16 lg:w-full lg:flex-row">
          <div className="">
            <WizardNav
              steps={wizardNavSteps}
              openStep={openStep}
              onStepChange={setOpenStep}
              isCapsule={isCapsule}
            />
          </div>
          <div className="flex flex-col gap-16 lg:gap-20">
            <WizardStep
              questions={wizardQuestions}
              openStep={openStep}
              onStepChange={setOpenStep}
              selections={selections}
              onOptionSelect={handleOptionSelect}
              isCapsule={isCapsule}
            />
            <OrderSummary
              questions={wizardQuestions}
              selections={selections}
              triggerRef={modalTriggerRef}
              onCreatePlan={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </section>
      <OrderConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        questions={wizardQuestions}
        selections={selections}
        triggerRef={modalTriggerRef}
      />
    </div>
  );
}
