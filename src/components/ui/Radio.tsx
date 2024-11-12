import { InputHTMLAttributes } from "react";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Radio = ({ label, ...props }: RadioProps) => {
  return (
    <div>
      <label htmlFor={props.id} className="flex gap-5 rounded border px-3 py-1">
        <input type="radio" {...props} />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Radio;
