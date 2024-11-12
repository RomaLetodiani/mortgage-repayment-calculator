import useSearchParams from "@/hooks/useSearchParams";
import CompletedRender from "./components/Completed.render";
import EmptyRender from "./components/Empty.render";

const RightSide = () => {
  const [searchParams] = useSearchParams();
  const completed = searchParams.completed === "true";

  return (
    <div className="px-5 py-6 sm:p-10 bg-slate-900 sm:rounded-bl-[4.5rem]">
      {completed ? <CompletedRender /> : <EmptyRender />}
    </div>
  );
};

export default RightSide;
