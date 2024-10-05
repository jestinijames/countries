"use client";
import { Country } from "@/types";
import { useEffect, useState } from "react";

const useFetchCountries = (url: string) => {
  const [data, setData] = useState<Country[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const cachedData = localStorage.getItem("countriesData");
        if (cachedData) {
          setData(JSON.parse(cachedData));
        } else {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const result = await response.json();
          localStorage.setItem("countriesData", JSON.stringify(result));
          setData(result);
        }
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchCountries;
