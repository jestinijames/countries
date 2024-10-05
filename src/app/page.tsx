import CountriesList from "@/components/countries/countries-list";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Country } from "@/types";
import React from "react";

export default async function HomePage() {


  const countries = (await fetch("https://restcountries.com/v3.1/all").then(
    (res) => res.json()
  )) as Country[];


  return (
    <>
    <Header />
      <div className='flex h-screen overflow-hidden'>
        <Sidebar />
        <main className='flex-1 overflow-scroll pt-16'>
        <div className='flex-1 space-y-4 p-5'>
      
      <div className='flex items-center justify-between'>
        <Heading title='Countries List' description='Manage Countries' />
      </div>

      <Separator />
          <CountriesList countries={countries}/>
          </div>
        </main>
      </div>
    </>
  );
}
