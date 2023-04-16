'use client'
import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { FiChevronDown } from 'react-icons/fi'
const DeliveryTo = () => {
  return (
    <div className="w-full md:w-auto rounded-[8px] py-2 transition ml-8">
      <div className="pl-4 flex flex-row items-center justify-between cursor-pointer">
        <HiLocationMarker
          size={42}
          color="blue"
          className="p-2 bg-cyan-600/20 rounded-[50%] hover:bg-cyan-300/10"
        />

        <div className="flex flex-col pr-1 pl-8 w-max">
          <p className="text-sm">Delivery to</p>
          <p className="text-m font-m text-blue-800 ">Espoo</p>
        </div>
        <div className="pl-4 pr-2">
          <FiChevronDown size={24} color="blue" />
        </div>
      </div>
    </div>
  )
}

export default DeliveryTo
