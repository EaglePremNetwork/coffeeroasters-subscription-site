type ButtonProps = {
  className?: string;
};

export default function Button({ className }: ButtonProps) {
  return (
    <button
      type="button"
      className={`w-54.5 h-14.25 px-8 py-4 font-display font-black text-lg leading-[1.4] tracking-normal rounded-md text-neutral-50 bg-teal-600 ${className}`}
    >
      Create your plan
    </button>
  );
}
