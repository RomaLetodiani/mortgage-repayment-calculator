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
          "flex cursor-pointer items-center gap-5 rounded border border-slate-900 px-4 py-2",
          props.checked ? "border-lime bg-lime/10" : "",
          labelClassName,
        )}
      >
        <input
          type="radio"
          className={twMerge(
            "cursor-pointer text-lime focus:ring-lime",
            className,
          )}
          {...props}
        />
        <span className="text-sm font-semibold text-slate-900">{label}</span>
      </label>
    </div>
  );
};

export default Radio;
