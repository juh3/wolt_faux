import React, { useCallback, useState } from 'react'
import LoginButtons from './LoginButtons'
import Avatar from './Avatar'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { User } from '@prisma/client'
import MenuItem from './MenuItem'
import { signOut } from 'next-auth/react'
import { deleteCookie } from 'cookies-next'

interface UserMenuProps {
  currentUser?: User | null
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  const handleSignOut = () => {
    deleteCookie('email')
    signOut()
  }
  return (
    <div>
      {!currentUser && <LoginButtons />}
      {currentUser && (
        <div>
          <div
            className="flex flex-row w-full justify-around items-center bg-neutral-300/80 rounded-full p-2 transition hover:bg-neutral-400/50 cursor-pointer"
            onClick={toggleOpen}
          >
            <Avatar />
            <div className="flex">
              {!isOpen && <FiChevronDown size={28} />}
              {isOpen && <FiChevronUp size={28} />}
            </div>
          </div>
          <div>
            {isOpen && (
              <div className="absolute rounded-xl shadow-md w-[40vw] md:w-1/4 bg-white overflow:hidden right-0 top-20 text-sm">
                <div className="flex flex-col cursor-pointer">
                  <>
                    <MenuItem
                      label="Language: English"
                      onClick={() => console.log('heyyy')}
                    />
                    <MenuItem
                      label="Support"
                      onClick={() => console.log('heyyy')}
                    />
                    <hr />
                    <MenuItem label="Log out" onClick={() => handleSignOut()} />
                  </>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
