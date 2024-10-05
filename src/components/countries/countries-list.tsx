/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, useRef } from "react";

import { Input } from "@/components/ui/input";

import CountryCard from "./country-card";
import PopulationSort from "./population-sort";
import SelectRegion from "./select-region";
import { Separator } from "@/components/ui/separator";

import { Country, CountryProps } from "@/types";

const CountriesList = ({ countries }: CountryProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("All");
  const [sort, setSort] = useState("ascending");
  const [visibleCount, setVisibleCount] = useState(9); // Number of countries to display initially
  const loadMoreRef = useRef(null); // Reference for the "load more" trigger

  // Filter countries by region
  const countriesByRegion = countries.filter((country) => {
    if (region === "All") {
      return true;
    }
    return country.region === region;
  });

  // Filter countries by search term to match name or capital
  const filteredCountries = countriesByRegion.filter((country) => {
    if (searchTerm === "") {
      return true;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const matchesName = country.name.common
      .toLowerCase()
      .includes(searchTermLower);
    const matchesCapital = country.capital?.some((cap) =>
      cap.toLowerCase().includes(searchTermLower)
    ); // Check if any capital matches

    return matchesName || matchesCapital;
  });

  // Sort countries by population based on the sort state (ascending or descending)
  const sortedCountries = [...filteredCountries].sort((a, b) => {
    if (sort === "ascending") {
      return a.population - b.population; // Sort by ascending population
    }
    return b.population - a.population; // Sort by descending population
  });

  // Get only the visible countries based on the current visibleCount
  const visibleCountries = sortedCountries.slice(0, visibleCount);

  // Infinite Scroll: Load more countries when the user scrolls to the bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prevCount) => prevCount + 9); // Load 9 more countries when the bottom is reached
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loadMoreRef]);

  if (visibleCountries.length === 0) {
    return (
      <section className="flex flex-col gap-y-4">
        {/* Filters */}
        <div className="my-4 flex items-end justify-between sm:my-0 sm:items-center">
          <div className="flex flex-col gap-4 sm:my-4 sm:flex-row">
            <Input
              placeholder="Filter countries..."
              className="h-9 w-40 lg:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SelectRegion region={region} setRegion={setRegion} />
          </div>
          <PopulationSort sort={sort} setSort={setSort} />
        </div>
        {/* Content */}
        <Separator className="shadow" />
        <p className="flex justify-center items-center">No countries found</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-y-4">
      {/* Filters */}
      <div className="my-4 flex items-end justify-between sm:my-0 sm:items-center">
        <div className="flex flex-col gap-4 sm:my-4 sm:flex-row">
          <Input
            placeholder="Filter countries..."
            className="h-9 w-40 lg:w-[250px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SelectRegion region={region} setRegion={setRegion} />
        </div>
        <PopulationSort sort={sort} setSort={setSort} />
      </div>
      {/* Content */}
      <Separator className="shadow" />
      <ul className="faded-bottom no-scrollbar grid gap-4 overflow-auto pb-16 pt-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleCountries.map((country: Country) => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </ul>
      {/* Load more trigger */}
      <div ref={loadMoreRef} className="h-4" />
    </section>
  );
};

export default CountriesList;
