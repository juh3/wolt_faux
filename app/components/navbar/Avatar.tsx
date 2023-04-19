'use client'
import { User } from '@prisma/client'
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import Image from 'next/image'

const Avatar = () => {
  return (
    <div
      className="flex flex-row w-full justify-around items-center bg-neutral-300/80 rounded-full p-2 transition hover:bg-neutral-400/50 cursor-pointer"
      onClick={() => console.log('iwork')}
    >
      <Image
        src="/images/placeholder.jpg"
        alt="Avatar"
        height="30"
        width="30"
        className="rounded-full border-[2px] border-white mr-2 cursor-pointer"
      />
      <div className="flex">
        <FiChevronDown size={28} />
      </div>
    </div>
  )
}

export default Avatar
