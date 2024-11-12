import useSearchParams from "@/hooks/useSP";

const LeftSideHeader = () => {
  const { clearSearchParams } = useSearchParams();
  return (
    <div className="flex gap-2 justify-between flex-wrap">
      <h1 className="text-lg font-bold">Mortgage Calculator</h1>

      <button className="text-sm" onClick={clearSearchParams}>
        <span className="underline font-semibold text-slate-500">Clear All</span>
      </button>
    </div>
  );
};

export default LeftSideHeader;
