const CompletedRender = () => {
  return (
    <div>
      <h3 className="text-white font-semibold text-lg">Your Results</h3>
      <p className="text-slate-100 opacity-70 text-xs my-5">
        Your results are shown below based on the information you provided. To adjust the results,
        edit the form and click “calculate repayments” again.
      </p>
      <div className="rounded-lg border-t-4 bg-lime-900 p-7 border-lime">
        <h6 className="text-sm text-slate-50 opacity-80">Your Monthly Repayments</h6>
        <h4 className="text-lime font-bold leading-relaxed text-4xl">₾ 1,797.74</h4>
        <hr className="h-[1] bg-slate-700 my-5 w-full" />
        <h6 className="text-slate-50 opacity-80 text-sm">Total you'll repay over the term</h6>
        <h5 className="text-white font-semibold text-lg">₾ 539,322.94</h5>
      </div>
    </div>
  );
};

export default CompletedRender;
