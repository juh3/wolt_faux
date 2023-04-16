'use client'
import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const Search = () => {
  return (
    <div className="w-full relative flex flex-row items-center align-items">
      <input
        placeholder="Search in Wolt..."
        className="peer fontsize-sm py-2 border-box pl-8 pr-2 pt-2 font-light rounded-full shadow-sm hover:shadow-md transition cursor-pointer bg-neutral-300/80 border-[1px] hover:bg-neutral-300 focus:border-[2px] focus:border-blue-700 active:border-[2px] active:border-blue-700"
      />
      <HiOutlineSearch className="absolute top-50% left-2" size={18} />
    </div>
  )
}

export default Search
