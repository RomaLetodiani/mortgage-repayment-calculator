import Label from "@/components/ui/Label";
import Radio from "@/components/ui/Radio";
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
    <div className="my-8 flex-1">
      <div>
        <Label htmlFor="amount" label="Mortgage Amount" />
        <input
          type="number"
          id="amount"
          onChange={handleAmountChange}
          value={amount}
        />
      </div>
      <div>
        <Label htmlFor="term" label="Mortgage Term" />
        <input
          type="number"
          id="term"
          onChange={handleTermChange}
          value={term}
        />
      </div>
      <div>
        <Label htmlFor="rate" label="Interest Rate" />
        <input
          type="number"
          id="rate"
          onChange={handleRateChange}
          value={rate}
        />
      </div>
      <div>
        <Label htmlFor="repayment" label="Mortgage Type" />

        <Radio
          label="Repayment"
          id="repayment"
          value="repayment"
          onChange={handleTypeChange}
          checked={type === "repayment"}
        />
        <Radio
          label="Interest Only"
          id="interest-only"
          value="interest-only"
          onChange={handleTypeChange}
          checked={type === "interest-only"}
        />
      </div>
    </div>
  );
};

export default LeftSideMain;
