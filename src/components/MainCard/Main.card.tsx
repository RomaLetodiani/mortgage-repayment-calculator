import LeftSide from "./components/leftSide/Left.side";
import RightSide from "./components/rightSide/Right.side";

const MainCard = () => {
  return (
    <div className="min-h-screen min-w-80 bg-slate-100 grid md:place-content-center md:p-5">
      <div className="bg-white shadow-lg h-full overflow-hidden md:rounded-3xl grid md:grid-cols-2 max-w-4xl m-auto">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default MainCard;
