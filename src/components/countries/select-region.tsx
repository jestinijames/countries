
import React from 'react'
import {   Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue, } from '@/components/ui/select';


const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const SelectRegion = ({region, setRegion}: {
    region: string;
    setRegion: React.Dispatch<React.SetStateAction<string>>;
}) => {



  return (
    <Select value={region} onValueChange={(val) => setRegion(val)}>
        <SelectTrigger>
          <SelectValue placeholder="Filter countries by region" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {regions.map((region) => (
              <SelectItem className="border-none" key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
  )
}

export default SelectRegion


