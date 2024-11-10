import CompletedRender from "./components/Completed.render";
import EmptyRender from "./components/Empty.render";

const RightSide = () => {
  return (
    <div className="p-10 bg-slate-900 rounded-bl-[4.5rem]">
      <CompletedRender />
      <EmptyRender />
    </div>
  );
};

export default RightSide;
