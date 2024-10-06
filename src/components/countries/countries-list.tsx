"use client";

import { Input } from "@/components/ui/input";

import CountryCard from "./country-card";
import PopulationSort from "./population-sort";
import SelectRegion from "./select-region";
import { Separator } from "@/components/ui/separator";

import { Country } from "@/types";
import { useCountriesContext } from "@/providers/countries-context";
import { Button } from "@/components/custom/button";

const CountriesList = () => {
  const {
    filteredCountries,
    searchTerm,
    region,
    sort,
    setSearchTerm,
    setRegion,
    setSort,
    resetFilters,
    loadMoreCountries,
  } = useCountriesContext();

  if (filteredCountries.length === 0) {
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
          {(region !== "All" || searchTerm !== "" || sort !== "ascending") && (
            <Button onClick={resetFilters}>Reset</Button>
          )}
        </div>
        <PopulationSort sort={sort} setSort={setSort} />
      </div>
      {/* Content */}
      <Separator className="shadow" />
      <ul className="faded-bottom no-scrollbar grid gap-4 overflow-auto pb-16 pt-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCountries.map((country: Country) => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </ul>
      {/* Load more trigger */}
      <div className="flex justify-center items-center">
        <Button onClick={loadMoreCountries}>Load more</Button>
      </div>
    </section>
  );
};

export default CountriesList;
