import useSearchParams from "@/hooks/useSP";
import CompletedRender from "./components/Completed.render";
import EmptyRender from "./components/Empty.render";

const RightSide = () => {
  const { searchParams } = useSearchParams();
  const completed = searchParams.get("completed") === "true";

  return (
    <div className="px-5 py-6 md:p-9 bg-slate-900 md:rounded-bl-[4.5rem]">
      {completed ? <CompletedRender /> : <EmptyRender />}
    </div>
  );
};

export default RightSide;
