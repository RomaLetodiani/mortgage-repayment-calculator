const CompletedRender = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white">Your Results</h3>
      <p className="my-5 text-xs text-slate-100 opacity-70">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="rounded-lg border-t-4 border-lime bg-lime-900 p-7">
        <h6 className="text-sm text-slate-50 opacity-80">
          Your Monthly Repayments
        </h6>
        <h4 className="text-4xl font-bold leading-relaxed text-lime">
          ₾ 1,797.74
        </h4>
        <hr className="my-5 h-[1] w-full bg-slate-700" />
        <h6 className="text-sm text-slate-50 opacity-80">
          Total you'll repay over the term
        </h6>
        <h5 className="text-lg font-semibold text-white">₾ 539,322.94</h5>
      </div>
    </div>
  );
};

export default CompletedRender;
