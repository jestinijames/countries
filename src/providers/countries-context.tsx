"use client";
/* eslint-disable react-hooks/exhaustive-deps */
// CountriesProvider.tsx

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { CountriesContextType, Country } from "@/types";
import { debounce } from "lodash";

// Create the context
const CountriesContext = createContext<CountriesContextType | undefined>(
  undefined
);

// Context provider component
export const CountriesProvider = ({
  children,
  initialCountries,
}: {
  children: React.ReactNode;
  initialCountries: Country[];
}) => {
  const [countries, setCountries] = useState(initialCountries);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("All");
  const [sort, setSort] = useState("ascending");
  const [visibleCount, setVisibleCount] = useState(9); // Pagination

  // Memoized region filter
  const filterByRegion = useCallback(
    (country: Country) => {
      if (region === "All") return true;
      return country.region === region;
    },
    [region]
  );

  // Memoized search filter with debouncing
  const handleSearchTermChange = useCallback(
    debounce((term: string) => setSearchTerm(term), 50), // 50ms delay
    []
  );

  const filterBySearchTerm = useCallback(
    (country: Country) => {
      if (searchTerm === "") return true;

      const searchTermLower = searchTerm.toLowerCase();
      const matchesName = country.name.common
        .toLowerCase()
        .includes(searchTermLower);
      const matchesCapital = country.capital?.some((cap) =>
        cap.toLowerCase().includes(searchTermLower)
      );

      return matchesName || matchesCapital;
    },
    [searchTerm]
  );

  // Memoized sorting logic
  const sortCountries = useCallback(
    (a: Country, b: Country) => {
      if (sort === "ascending") return a.population - b.population;
      return b.population - a.population;
    },
    [sort]
  );

  // Memoized filtered and sorted countries
  const filteredCountries = useMemo(() => {
    return countries.filter(filterByRegion).filter(filterBySearchTerm);
  }, [countries, filterByRegion, filterBySearchTerm]);

  const sortedCountries = useMemo(() => {
    return [...filteredCountries].sort(sortCountries);
  }, [filteredCountries, sortCountries]);

  // Load more countries
  const loadMoreCountries = () => {
    setVisibleCount((prevCount) => prevCount + 9); // Pagination
  };

  // Reset function to clear search, region, and sort
  const resetFilters = useCallback(() => {
    setSearchTerm("");
    setRegion("All");
    setSort("ascending");
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        filteredCountries: sortedCountries.slice(0, visibleCount),
        searchTerm,
        region,
        sort,
        visibleCount,
        setSearchTerm: handleSearchTermChange, // Use debounced search handler
        setRegion,
        setSort,
        loadMoreCountries,
        resetFilters, // Provide the reset function
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

// Custom hook for consuming the context
export const useCountriesContext = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error(
      "useCountriesContext must be used within a CountriesProvider"
    );
  }
  return context;
};
