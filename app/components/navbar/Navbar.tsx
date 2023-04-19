'use client'

import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import DeliveryTo from '../DeliveryTo'
import Search from './Search'
import Button from '../Button'
import LoginButtons from './LoginButtons'
import { User } from '@prisma/client'
import Avatar from './Avatar'

interface NavbarProps {
  currentUser?: User | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
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
              {!currentUser && <LoginButtons />}
              {currentUser && <Avatar />}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
