import useSearchParams from "@/hooks/useSP";

const LeftSideMain = () => {
  const { searchParams, updateSearchParams } = useSearchParams();

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchParams({ amount: event.target.value });
  };

  const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchParams({ term: event.target.value });
  };

  const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchParams({ rate: event.target.value });
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchParams({ type: event.target.value });
  };

  const amount = searchParams.get("amount") || "";
  const term = searchParams.get("term") || "";
  const rate = searchParams.get("rate") || "";
  const type = searchParams.get("type") || "";

  return (
    <div className="flex-1">
      <div>
        <label htmlFor="amount">Mortgage Amount</label>
        <input type="number" id="amount" onChange={handleAmountChange} value={amount} />
      </div>
      <div>
        <label htmlFor="term">Mortgage Term</label>
        <input type="number" id="term" onChange={handleTermChange} value={term} />
      </div>
      <div>
        <label htmlFor="rate">Interest Rate</label>
        <input type="number" id="rate" onChange={handleRateChange} value={rate} />
      </div>
      <div>
        <label htmlFor="repayment">Mortgage Type</label>
        <div>
          <input
            type="radio"
            id="repayment"
            value="repayment"
            onChange={handleTypeChange}
            checked={type === "repayment"}
          />
          <label htmlFor="repayment">Repayment</label>
        </div>
        <div>
          <input
            type="radio"
            id="interest-only"
            value="interest-only"
            onChange={handleTypeChange}
            checked={type === "interest-only"}
          />
          <label htmlFor="interest-only">Interest Only</label>
        </div>
      </div>
    </div>
  );
};

export default LeftSideMain;
