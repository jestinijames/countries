import { memo } from "react";
import CountriesList from "@/components/countries/countries-list";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { Country } from "@/types";

import React from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

// Memoize these components to avoid unnecessary re-renders
const MemoizedHeader = memo(Header);
const MemoizedSidebar = memo(Sidebar);
const MemoizedCountriesList = memo(CountriesList);

export default async function HomePage() {
  // No changes here for fetching data
  const countries = (await fetch("https://restcountries.com/v3.1/all").then(
    (res) => res.json()
  )) as Country[];

  return (
    <>
      <MemoizedHeader />
      <div className="flex h-screen overflow-hidden">
        <MemoizedSidebar />
        <main className="flex-1 overflow-scroll pt-16">
          <div className="flex-1 space-y-4 p-5">
            <div className="flex items-center justify-between">
              <Heading title="Countries List" description="Manage Countries" />
            </div>
            <Separator />
            <MemoizedCountriesList countries={countries} />
          </div>
        </main>
      </div>
    </>
  );
}
