import { useSearchParams } from "react-router-dom";

const useSP = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (
    newParams: Record<string, string | number | boolean>,
  ) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      value ? params.set(key, String(value)) : params.delete(key);
    });

    window.history.pushState({}, "", `${window.location.pathname}?${params}`);
    setSearchParams(params);
  };

  const clearSearchParams = () => {
    const params = new URLSearchParams();
    window.history.pushState({}, "", window.location.pathname);
    setSearchParams(params);
  };

  return { searchParams, updateSearchParams, clearSearchParams };
};

export default useSP;
