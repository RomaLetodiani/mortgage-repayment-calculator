import { useState, useEffect } from "react";

// Define a type for the search parameters
type SearchParams = Record<string, string | null>;

// Define the custom hook with TypeScript
const useSearchParams = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>(() => {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
  });

  const updateSearchParams = (newParams: Partial<SearchParams>) => {
    const params = new URLSearchParams(window.location.search);

    // Update or add new parameters
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    // Update the URL without refreshing the page
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);

    // Update the state to reflect the new parameters
    setSearchParams(Object.fromEntries(params.entries()));
  };

  const clearSearchParams = () => {
    const params = new URLSearchParams(window.location.search);
    params.forEach((_, key) => params.delete(key));
    window.history.pushState({}, "", window.location.pathname);
    setSearchParams({});
  };

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setSearchParams(Object.fromEntries(params.entries()));
    };

    // Listen for browser navigation changes
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return { searchParams, updateSearchParams, clearSearchParams };
};

export default useSearchParams;
