const Label = ({ htmlFor, label }: { htmlFor: string; label: string }) => {
  return (
    <label className="text-slate-500 block text-sm font-semibold" htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default Label;
