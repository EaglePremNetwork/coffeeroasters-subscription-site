import { forwardRef } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children = "Create your plan", className, disabled = false, onClick },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`font-display h-14.25 w-54.5 rounded-md bg-teal-600 px-8 py-4 text-lg leading-[1.4] font-black tracking-normal whitespace-nowrap text-neutral-50 hover:bg-teal-300 focus-visible:shadow-[0_0_0_3px_var(--color-neutral-0),0_0_0_5px_var(--color-teal-600)] focus-visible:outline-none disabled:bg-neutral-200 ${className ?? ""}`}
    >
      {children}
    </button>
  );
});
