const Label = ({ htmlFor, label }: { htmlFor: string; label: string }) => {
  return <label htmlFor={htmlFor}>{label}</label>;
};

export default Label;
