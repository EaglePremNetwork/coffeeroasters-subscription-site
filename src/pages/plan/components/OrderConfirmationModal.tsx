import { useEffect, useRef } from "react";

import bgModalTopImg from "../../../assets/plan/desktop/bg-modal-top.png";

import OrderSummaryText from "./OrderSummaryText";
import { shipmentPrices } from "../../../data/shipmentPrices";
import type { WizardQuestion } from "../../../data/wizardQuestions";
import { getSelectedOption } from "../../../utils/wizard";
import Button from "../../../components/Button";

type OrderSelection = {
  [questionId: number]: string | undefined;
};

type OrderConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  questions: WizardQuestion[];
  selections: OrderSelection;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

const shipmentsPerMonth: Record<string, number> = {
  "Every week": 4,
  "Every 2 weeks": 2,
  "Every month": 1,
};

export default function OrderConfirmationModal({
  isOpen,
  onClose,
  questions,
  selections,
  triggerRef,
}: OrderConfirmationModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;

    if (!modal) return;

    const focusable = modal.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    focusable[0]?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const modal = modalRef.current;

      if (!modal) return;

      const focusableSelector = [
        "button:not([disabled])",
        "a[href]",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
      ].join(",");

      const focusable = modal.querySelectorAll<HTMLElement>(focusableSelector);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) return;

    triggerRef.current?.focus();
  }, [isOpen, triggerRef]);

  if (!isOpen) {
    return null;
  }

  const quantity = getSelectedOption(questions, selections, 3);
  const frequency = getSelectedOption(questions, selections, 5);

  const selectedQuantity = quantity?.title;
  const selectedFrequency = frequency?.title;

  const shipmentPrice =
    selectedQuantity && selectedFrequency
      ? (shipmentPrices[selectedQuantity]?.[selectedFrequency] ?? 0)
      : 0;

  const monthlyPrice = selectedFrequency
    ? shipmentPrice * (shipmentsPerMonth[selectedFrequency] ?? 0)
    : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/70"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-confirmation-title"
    >
      <div
        ref={modalRef}
        className="my-auto max-h-[calc(100vh-4rem)] w-full max-w-77.75 overflow-hidden overflow-y-auto rounded-lg md:max-w-135"
      >
        <div className="relative">
          <img
            src={bgModalTopImg}
            alt=""
            className="h-20.5 w-full object-cover md:h-34"
          />

          <h1
            id="order-confirmation-title"
            className="font-display text-neutral-0 absolute inset-0 flex items-center px-4 py-6 text-[28px] leading-[1.2] font-black tracking-normal md:px-12 md:py-10 md:text-[40px]"
          >
            Order Summary
          </h1>
        </div>
        <div className="flex flex-col gap-8 bg-neutral-50 px-4 py-6 md:gap-12 md:px-12 md:py-12">
          <div className="flex flex-col gap-5">
            <p className="font-display text-2xl leading-normal font-black tracking-normal text-neutral-500">
              <OrderSummaryText questions={questions} selections={selections} />
            </p>

            <p className="leading-[1.6] text-neutral-900">
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-display text-[32px] leading-[1.14] font-black tracking-normal text-neutral-900">
              ${monthlyPrice.toFixed(2)}/mo
            </p>

            <Button className="w-full text-left md:w-fit" onClick={onClose}>
              <span className="font-display text-lg leading-[1.4] font-black tracking-normal text-neutral-50">
                Checkout
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
