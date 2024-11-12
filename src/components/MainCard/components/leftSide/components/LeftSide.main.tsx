import Input from "@/components/ui/Input";
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
      <Input
        type="number"
        min={0}
        label="Mortgage Amount"
        id="amount"
        onChange={handleAmountChange}
        value={amount}
        prefix="₾"
      />

      <div className="my-5 grid grid-cols-2 gap-5">
        <Input
          type="number"
          min={0}
          label="Mortgage Term"
          id="term"
          onChange={handleTermChange}
          value={term}
          suffix="years"
        />
        <Input
          type="number"
          min={0}
          label="Interest Rate"
          id="rate"
          onChange={handleRateChange}
          value={rate}
          suffix="%"
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
