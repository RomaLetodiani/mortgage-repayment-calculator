import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  wrapperClassName?: string;
  labelClassName?: string;
}

const Radio = ({
  label,
  className,
  labelClassName,
  wrapperClassName,
  ...props
}: RadioProps) => {
  return (
    <div className={twMerge("my-2", wrapperClassName)}>
      <label
        htmlFor={props.id}
        className={twMerge(
          "flex items-center gap-5 rounded px-4 py-2",
          "border border-slate-700",
          props.checked ? "border-lime bg-lime/10" : "cursor-pointer",
        )}
      >
        <input
          type="radio"
          className={twMerge("text-lime focus:ring-lime", className)}
          {...props}
        />
        <span
          className={twMerge(
            "text-sm font-semibold text-slate-900",
            labelClassName,
          )}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export default Radio;
