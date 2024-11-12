import calculatorSVG from "@/assets/images/icon-calculator.svg";
import useSearchParams from "@/hooks/useSP";

const LeftSideFooter = () => {
  const { searchParams, updateSearchParams } = useSearchParams();

  const amount = searchParams.get("amount");
  const term = searchParams.get("term");
  const rate = searchParams.get("rate");
  const type = searchParams.get("type");

  const handleCalculateRepayments = () => {
    if (!amount || !term || !rate || !type) {
      return;
    }
    updateSearchParams({ completed: "true" });
  };

  return (
    <div>
      <button
        onClick={handleCalculateRepayments}
        className="flex w-full items-center justify-center rounded-full bg-lime px-5 py-2 font-bold transition-transform duration-300 ease-in-out hover:scale-105 md:w-max"
      >
        <img
          src={calculatorSVG}
          alt="Calculator"
          className="mr-2 inline-block h-5 w-5"
        />
        <span>Calculate Repayments</span>
      </button>
    </div>
  );
};

export default LeftSideFooter;
