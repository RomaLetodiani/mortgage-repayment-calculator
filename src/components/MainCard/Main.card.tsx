import LeftSide from "./components/leftSide/Left.side";
import RightSide from "./components/rightSide/Right.side";

const MainCard = () => {
  return (
    <div className="min-h-screen min-w-80 bg-slate-100 grid sm:place-content-center sm:p-5">
      <div className="bg-white shadow-lg h-full overflow-hidden sm:rounded-3xl grid sm:grid-cols-2 max-w-4xl m-auto">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default MainCard;
