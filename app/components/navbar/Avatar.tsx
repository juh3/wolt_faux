'use client'
import { User } from '@prisma/client'
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import Image from 'next/image'

const Avatar = () => {
  return (
    <Image
      src="/images/placeholder.jpg"
      alt="Avatar"
      height="30"
      width="30"
      className="rounded-full border-[2px] border-white mr-2 cursor-pointer"
    />
  )
}

export default Avatar
