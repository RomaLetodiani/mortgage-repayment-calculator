import calculatorSVG from "@/assets/images/icon-calculator.svg";

const LeftSideFooter = () => {
  return (
    <div>
      <button
        type="submit"
        className="rounded-full w-full sm:w-max bg-lime hover:scale-105 py-2 px-5 flex justify-center items-center font-bold transition-transform duration-300 ease-in-out"
      >
        <img src={calculatorSVG} alt="Calculator" className="w-5 h-5 inline-block mr-2" />
        <span>Calculate Repayments</span>
      </button>
    </div>
  );
};

export default LeftSideFooter;
