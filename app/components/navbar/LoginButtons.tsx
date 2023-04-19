'use client'
import React, { useCallback, useState } from 'react'
import Button from '../Button'
import useUserModal from '../hooks/useUserModal'

const LoginButtons = () => {
  const userModal = useUserModal()

  return (
    <div className="flex flex-row pr-2">
      <Button cta="Log in" onClick={userModal.onOpen} small login />
      <Button primary cta="Sign up" onClick={userModal.onOpen} login />
    </div>
  )
}

export default LoginButtons
