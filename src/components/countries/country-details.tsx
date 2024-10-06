import React from "react";
import Image from "next/image";
import { Country } from "@/types";
import { formatPopulation } from "@/lib/utils";
const CountryDetails = ({ country }: { country: Country }) => {
  return (
    <div className="mt-8 w-11/12 mx-auto">
      <div className="mt-16 md:grid md:grid-cols-2 md:items-center md:gap-16">
        <Image
          src={country.flags.svg}
          alt={country.name.common}
          className="object-contain"
          width={600}
          height={400}
        />

        <div>
          <h2 className="font-bold mt-8 text-2xl">{country.name.common}</h2>

          <div className="md:grid md:grid-cols-2 md:items-start md:mt-12 md:justify-between">
            <div className="flex flex-col gap-4 mt-10 md:mt-0">
              <div>
                <strong>Native name: </strong>
                <span>{country.name.official}</span>
              </div>
              {country.population && (
                <div>
                  <strong>Population: </strong>
                  <span>{formatPopulation(country.population)}</span>
                </div>
              )}
              <div>
                <strong>Region: </strong>
                <span>{country.region}</span>
              </div>
              {country.subregion && (
                <div>
                  <strong>Sub Region: </strong>
                  <span>{country.subregion}</span>
                </div>
              )}
              {country.capital && (
                <div>
                  <strong>Capital: </strong>
                  <span>{country.capital}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4 mt-16 md:mt-0">
              {country.tld && (
                <div>
                  <strong>Top level Domain: </strong>
                  <span>{country.tld[0]}</span>
                </div>
              )}
              {country.currencies && (
                <div>
                  <strong>Currencies: </strong>
                  <span>
                    {Object.values(country.currencies)
                      .map((currency) => currency.name)
                      .join(", ")}
                  </span>
                </div>
              )}
              {country.languages && (
                <div>
                  <strong>Languages: </strong>
                  <span>
                    {Object.values(country.languages)
                      .map((currency) => currency)
                      .join(", ")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
