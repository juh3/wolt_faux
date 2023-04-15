'use client'
import React, { useCallback, useState } from 'react'
import Button from '../Button'

const LoginButtons = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  return (
    <div>
      <Button
        cta="Log in"
        onClick={() => {
          toggleOpen()
        }}
        small
      />
      <Button
        primary
        cta="Sign up"
        onClick={() => {
          toggleOpen()
        }}
      />
    </div>
  )
}

export default LoginButtons
