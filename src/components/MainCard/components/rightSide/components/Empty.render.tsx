import illustrationEmpty from "@/assets/images/illustration-empty.svg";

const EmptyRender = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center">
        <img src={illustrationEmpty} alt="Empty" />
      </div>
      <div className="text-center">
        <h3 className="text-white font-bold my-3">Results shown here</h3>
        <p className="text-slate-100 text-sm opacity-70">
          Complete the form and click "calculate repayments" to see what your monthly repayments
          would be.
        </p>
      </div>
    </div>
  );
};

export default EmptyRender;
