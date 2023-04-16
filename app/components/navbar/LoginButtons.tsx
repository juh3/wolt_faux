'use client'
import React, { useCallback, useState } from 'react'
import Button from '../Button'
import useRegisterModal from '../hooks/useRegisterModal'

const LoginButtons = () => {
  const registerModal = useRegisterModal()

  return (
    <div className="flex flex-row p-6">
      <Button cta="Log in" onClick={registerModal.onOpen} small login />
      <Button primary cta="Sign up" onClick={registerModal.onOpen} login />
    </div>
  )
}

export default LoginButtons
