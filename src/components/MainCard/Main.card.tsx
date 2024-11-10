import LeftSide from "./components/leftSide/Left.side";
import RightSide from "./components/rightSide/Right.side";

const MainCard = () => {
  return (
    <div className="min-h-screen bg-slate-100 grid place-content-center p-5">
      <div className="bg-white shadow-lg overflow-hidden rounded-3xl grid grid-cols-2 max-w-4xl m-auto">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default MainCard;
