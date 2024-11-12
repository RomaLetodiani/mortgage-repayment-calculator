import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Label from "./Label";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  wrapperClassName?: string;
  prefix?: string;
  suffix?: string;
  hasError?: boolean;
}

const Input = ({
  label,
  wrapperClassName,
  suffix,
  prefix,
  hasError,
  ...props
}: InputProps) => {
  return (
    <div className={twMerge("", wrapperClassName)}>
      <Label htmlFor={props.id ?? ""} label={label} />
      <div
        className={twMerge(
          "mt-1 flex overflow-hidden rounded border",
          hasError ? "border-red" : "border-slate-700",
        )}
      >
        {prefix && (
          <span
            className={twMerge(
              "flex items-center px-4 font-semibold",
              hasError ? "bg-red text-white" : "bg-slate-100 text-slate-500",
            )}
          >
            {prefix}
          </span>
        )}

        <input
          className={twMerge(
            "w-full flex-1 border-0 px-4 py-2 focus:outline-none focus:ring-0",
            props.className,
          )}
          {...props}
        />
        {suffix && (
          <span
            className={twMerge(
              "flex items-center px-4 font-semibold",
              hasError ? "bg-red text-white" : "bg-slate-100 text-slate-500",
            )}
          >
            {suffix}
          </span>
        )}
      </div>
      {hasError && (
        <p className="mt-1 text-xs text-red">This field is required</p>
      )}
    </div>
  );
};

export default Input;
