import illustrationEmpty from "@/assets/images/illustration-empty.svg";

const EmptyRender = () => {
  return (
    <div>
      <div>
        <img src={illustrationEmpty} alt="Empty" />
      </div>
      <div>
        <h3>Results shown here</h3>
        <p>
          Complete the form and click "calculate repayments" to see what your monthly repayments
          would be.
        </p>
      </div>
    </div>
  );
};

export default EmptyRender;
