import useSearchParams from "@/hooks/useSP";

const LeftSideHeader = () => {
  const { clearSearchParams } = useSearchParams();
  return (
    <div className="flex flex-wrap justify-between gap-2">
      <h1 className="text-lg font-bold">Mortgage Calculator</h1>

      <button className="text-sm" onClick={clearSearchParams}>
        <span className="font-semibold text-slate-500 underline">
          Clear All
        </span>
      </button>
    </div>
  );
};

export default LeftSideHeader;
