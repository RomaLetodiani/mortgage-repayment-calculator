import CompletedRender from "./components/Completed.render";
import EmptyRender from "./components/Empty.render";

const RightSide = () => {
  return (
    <div>
      <CompletedRender />
      <EmptyRender />
    </div>
  );
};

export default RightSide;
