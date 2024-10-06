import CountryDetails from "@/components/countries/country-details";
import LayoutWrapper from "@/components/layout";
import { Country } from "@/types";

import { Metadata } from "next";
import { memo } from "react";

async function getCountryByCode(countryCode: string) {
  const country = (await fetch(
    `https://restcountries.com/v3.1/alpha/${countryCode}`
  ).then((res) => res.json())) as Country[];

  return country[0];
}

export async function generateMetadata({
  params,
}: {
  params: { country_code: string };
}): Promise<Metadata> {
  const country = await getCountryByCode(params.country_code);

  return {
    title: `${country.flag} ${country.name.common} `,
  };
}

const MemoizedCountryDetails = memo(CountryDetails);

export default async function CountryPage({
  params,
}: {
  params: { country_code: string };
}) {
  const country = await getCountryByCode(params.country_code);

  if (!country) {
    return <p>Country not found</p>;
  }

  return (
    <LayoutWrapper
      heading={country.name.common}
      description="Additional Details"
    >
      <MemoizedCountryDetails country={country} />
    </LayoutWrapper>
  );
}
