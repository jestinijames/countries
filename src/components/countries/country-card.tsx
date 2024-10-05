import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Country } from '@/types'
import { formatPopulation } from "@/lib/utils";

const CountryCard = ({country}: {country: Country}) => {
  return (
    <li>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-md">
        <Link href={`/countries/${country.cca2}`} passHref>
          <div className="w-full h-[200px] relative">
            {/* Ensure the image fits uniformly in the container */}
            <Image 
              fill={true} 
              className="rounded-t-lg object-cover object-center" // Use object-cover and object-center to maintain aspect ratio and crop if needed
              src={country.flags.svg} 
              alt={country.name.common} 
            />
          </div>
        </Link>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {country.name.common}
          </h5>
          <div className="flex flex-col mt-6 mb-6">
            <div className="flex items-center gap-1">
              <strong>Population: </strong>
              <span>{formatPopulation(country.population)}</span>
            </div>
            {country.region && (
              <div className="flex items-center gap-1">
                <strong>Region: </strong>
                <span>{country.region}</span>
              </div>
            )}
            {country.capital && (
              <div className="flex items-center gap-1">
                <strong>Capital: </strong>
                <span>{country.capital}</span>
              </div>
            )}
          </div>
          <Link
            href={`/countries/${country.cca2}`}
            passHref
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default CountryCard;