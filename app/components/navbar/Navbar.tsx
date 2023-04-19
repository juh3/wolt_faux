'use client'

import React, { useCallback, useState } from 'react'
import Container from '../Container'
import Logo from './Logo'
import DeliveryTo from '../DeliveryTo'
import Search from './Search'
import LoginButtons from './LoginButtons'
import { User } from '@prisma/client'
import Avatar from './Avatar'
import { FiChevronDown } from 'react-icons/fi'
import UserMenu from './UserMenu'

interface NavbarProps {
  currentUser?: User | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])
  return (
    <div className="fixed w-full bg-white z-10 border-b-2 border-light-grey">
      <div className="py-1">
        <Container>
          <div
            className="
          flex
          flex-row
          items-center
          justify-between 
          gap-3
          md:gap-0"
          >
            <div className="flex 0.33 flex-row justify-items-start items-center justify-stretch left">
              <Logo />
              <DeliveryTo />
            </div>
            <div className="flex 0.33 flex-row items-center">
              <Search />
            </div>
            <div className="flex md:order-3">
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
