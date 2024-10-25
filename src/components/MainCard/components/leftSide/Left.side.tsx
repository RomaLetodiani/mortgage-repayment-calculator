import LeftSideFooter from "./components/LeftSide.footer";
import LeftSideHeader from "./components/LeftSide.header";
import LeftSideMain from "./components/LeftSide.main";

const LeftSide = () => {
  return (
    <div>
      <LeftSideHeader />
      <LeftSideMain />
      <LeftSideFooter />
    </div>
  );
};

export default LeftSide;
