"use client";
/* eslint-disable react-hooks/exhaustive-deps */

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { CountriesContextType, Country } from "@/types";
import { debounce } from "lodash";

const CountriesContext = createContext<CountriesContextType | undefined>(
  undefined
);

// Provider component to wrap around components
export const CountriesProvider = ({
  children,
  initialCountries,
}: {
  children: React.ReactNode;
  initialCountries: Country[];
}) => {
  // Local state for storing countries data and UI-related states
  const memoizedCountries = useMemo(() => initialCountries, [initialCountries]);
  const [countries, setCountries] = useState(memoizedCountries); // Fetched countries
  const [searchTerm, setSearchTerm] = useState(""); // Search filter
  const [region, setRegion] = useState("All"); // Region filter
  const [sort, setSort] = useState("ascending"); // Sorting order
  const [visibleCount, setVisibleCount] = useState(9); // Pagination count
  const [loading, setLoading] = useState(countries === null); // Check if countries are loaded
  const [error, setError] = useState<string | null>(null);

  // Filter function to filter countries by region, memoized for performance
  const filterByRegion = useCallback(
    (country: Country) => {
      if (region === "All") return true; // No region filter applied
      return country.region === region; // Match country region
    },
    [region]
  );

  // Debounced function to update the search term, reducing frequent updates
  const handleSearchTermChange = useCallback(
    debounce((term: string) => setSearchTerm(term), 100), // 50ms debounce
    []
  );

  // Filter function to match countries by name or capital, memoized for performance
  const filterBySearchTerm = useCallback(
    (country: Country) => {
      if (searchTerm === "") return true; // No search filter applied

      // Match country name or capital to the search term
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

  // Sorting function for countries, based on population, memoized for performance
  const sortCountries = useCallback(
    (a: Country, b: Country) => {
      if (sort === "ascending") return a.population - b.population;
      return b.population - a.population;
    },
    [sort]
  );

  // Filter and sort countries based on current filters, memoized for optimization
  const filteredCountries = useMemo(() => {
    return countries.filter(filterByRegion).filter(filterBySearchTerm);
  }, [countries, filterByRegion, filterBySearchTerm]);

  const sortedCountries = useMemo(() => {
    return [...filteredCountries].sort(sortCountries);
  }, [filteredCountries, sortCountries]);

  // Function to load more countries for pagination
  const loadMoreCountries = () => {
    setVisibleCount((prevCount) => prevCount + 9); // Show 9 more countries
  };

  // Reset filters function to clear search, region, and sort states
  const resetFilters = useCallback(() => {
    setSearchTerm(""); // Clear search input
    setRegion("All"); // Reset region to 'All'
    setSort("ascending"); // Reset sort to default
  }, []);

  const contextValue = useMemo(
    () => ({
      countries,
      setCountries,
      filteredCountries: sortedCountries.slice(0, visibleCount),
      searchTerm,
      region,
      sort,
      visibleCount,
      setSearchTerm: handleSearchTermChange,
      setRegion,
      setSort,
      loadMoreCountries,
      resetFilters,
      loading, // Provide loading state
      error, // Provide error state
      setLoading, // Allow components to control loading state
      setError, // Allow components to control error state
    }),
    [
      countries,
      sortedCountries,
      visibleCount,
      searchTerm,
      region,
      sort,
      loading,
      error,
    ]
  );
  return (
    // Provide state and functions via context to consuming components
    <CountriesContext.Provider value={contextValue}>
      {children}
    </CountriesContext.Provider>
  );
};

// Custom hook for consuming the CountriesContext, throwing error if used outside provider
export const useCountriesContext = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error(
      "useCountriesContext must be used within a CountriesProvider"
    );
  }
  return context;
};
