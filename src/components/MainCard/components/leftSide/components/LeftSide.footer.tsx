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
        className="rounded-full w-full md:w-max bg-lime hover:scale-105 py-2 px-5 flex justify-center items-center font-bold transition-transform duration-300 ease-in-out"
      >
        <img src={calculatorSVG} alt="Calculator" className="w-5 h-5 inline-block mr-2" />
        <span>Calculate Repayments</span>
      </button>
    </div>
  );
};

export default LeftSideFooter;
