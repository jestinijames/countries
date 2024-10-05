
import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select';
  import { SortProps } from '@/types'
  import { ArrowDownAZIcon, SlidersHorizontalIcon } from 'lucide-react';
import { Label } from '../ui/label';

const PopulationSort = ({sort, setSort}:SortProps) => {
  return (
    <div className='flex justify-between items-center'>
        <Label>Sort by Population:</Label>
    <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className='w-16'>
            <SelectValue>
              <SlidersHorizontalIcon size={18} />
            </SelectValue>
          </SelectTrigger>
          <SelectContent align='end'>
            <SelectItem value='ascending'>
              <div className='flex items-center gap-4'>
                <ArrowDownAZIcon size={16} />
                <span>Ascending</span>
              </div>
            </SelectItem>
            <SelectItem value='descending'>
              <div className='flex items-center gap-4'>
                <ArrowDownAZIcon size={16} />
                <span>Descending</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        </div>
  )
}

export default PopulationSort