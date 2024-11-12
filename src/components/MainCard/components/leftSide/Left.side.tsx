import LeftSideFooter from "./components/LeftSide.footer";
import LeftSideHeader from "./components/LeftSide.header";
import LeftSideMain from "./components/LeftSide.main";

const LeftSide = () => {
  return (
    <div className="px-5 py-6 md:p-9 flex flex-1 flex-col">
      <LeftSideHeader />
      <LeftSideMain />
      <LeftSideFooter />
    </div>
  );
};

export default LeftSide;
