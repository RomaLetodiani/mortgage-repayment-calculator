import LeftSide from "./components/leftSide/Left.side";
import RightSide from "./components/rightSide/Right.side";

const MainCard = () => {
  return (
    <div className="grid min-h-screen min-w-80 bg-slate-100 md:place-content-center md:p-5">
      <div className="m-auto grid h-full max-w-4xl overflow-hidden bg-white shadow-lg md:grid-cols-2 md:rounded-3xl">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default MainCard;
