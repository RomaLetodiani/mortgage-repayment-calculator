const Label = ({ htmlFor, label }: { htmlFor: string; label: string }) => {
  return (
    <label
      className="block text-sm font-semibold text-slate-500"
      htmlFor={htmlFor}
    >
      {label}
    </label>
  );
};

export default Label;
