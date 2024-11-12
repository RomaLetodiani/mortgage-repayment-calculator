import useSP from "@/hooks/useSP";

const CompletedRender = () => {
  const { searchParams } = useSP();
  const amount = parseFloat(searchParams.get("amount") || "0");
  const term = parseInt(searchParams.get("term") || "0", 10);
  const rate = parseFloat(searchParams.get("rate") || "0");
  const type = searchParams.get("type") || "";

  const isInterestOnly = type === "interest-only";

  const calculateMonthlyRepayment = () => {
    if (isInterestOnly) {
      return (amount * rate) / 100 / 12;
    }
    if (rate > 0) {
      const monthlyRate = rate / 100 / 12;
      return (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
    }
    return amount / term;
  };

  const calculateTotalRepayment = () => {
    return isInterestOnly
      ? amount + calculateMonthlyRepayment() * term
      : calculateMonthlyRepayment() * term;
  };

  const monthlyRepayment = calculateMonthlyRepayment().toFixed(2);
  const totalRepayment = calculateTotalRepayment().toFixed(2);

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
          ₾ {monthlyRepayment}
        </h4>
        <hr className="my-5 h-[1px] w-full bg-slate-700" />
        <h6 className="text-sm text-slate-50 opacity-80">
          Total you'll repay over the term
        </h6>
        <h5 className="text-lg font-semibold text-white">₾ {totalRepayment}</h5>
      </div>
    </div>
  );
};

export default CompletedRender;
