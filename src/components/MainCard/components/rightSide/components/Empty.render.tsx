import illustrationEmpty from "@/assets/images/illustration-empty.svg";

const EmptyRender = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex justify-center">
        <img src={illustrationEmpty} alt="Empty" />
      </div>
      <div className="text-center">
        <h3 className="my-3 font-bold text-white">Results shown here</h3>
        <p className="text-sm text-slate-100 opacity-70">
          Complete the form and click "calculate repayments" to see what your
          monthly repayments would be.
        </p>
      </div>
    </div>
  );
};

export default EmptyRender;
