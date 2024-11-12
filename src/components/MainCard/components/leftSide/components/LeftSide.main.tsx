import Label from "@/components/ui/Label";
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
        <Label htmlFor="amount" label="Mortgage Amount" />
        <input type="number" id="amount" onChange={handleAmountChange} value={amount} />
      </div>
      <div>
        <Label htmlFor="term" label="Mortgage Term" />
        <input type="number" id="term" onChange={handleTermChange} value={term} />
      </div>
      <div>
        <Label htmlFor="rate" label="Interest Rate" />
        <input type="number" id="rate" onChange={handleRateChange} value={rate} />
      </div>
      <div>
        <Label htmlFor="repayment" label="Mortgage Type" />
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
