'use client'
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import useLoginModal from '../hooks/useLoginModal'
import useRegisterModal from '../hooks/useRegisterModal'
import useUserModal from '../hooks/useUserModal'
import Modal from './Modal'
import { FcGoogle } from 'react-icons/fc'
import Button from '../Button'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { AiFillApple } from 'react-icons/ai'
import Input from '../Input'
import { setCookie } from 'cookies-next'
const UserModal = () => {
  const userModal = useUserModal()
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)
    // if email in database -> LoginModal
    // if email not in database -> RegisterModal
    const response = await axios.post('/api/checkuser', data)

    if (response.data.user_exists === 'true') {
      console.log(response.data)
      setCookie('email', response.data.email)
      loginModal.onOpen()
    } else {
      setCookie('email', response.data.email)

      registerModal.onOpen()
    }
    userModal.onClose()
    setIsLoading(false)
  }

  const body = (
    <div className="flex flex-col items-center gap-4 py-4 w-full">
      <Button cta="Continue with Google" icon={FcGoogle} google />
      <Button cta="Continue with Apple" apple icon={AiFillApple} primary />
      <Button
        cta="Continue with Facebook"
        icon={RiFacebookCircleFill}
        primary
        facebook
      />
      <div className="font-light text-gray-600">or login with email</div>

      <Input
        type="email"
        disabled={isLoading}
        label="Email"
        register={register}
        id="email"
        errors={errors}
        required
      />
    </div>
  )

  const footer = (
    <div className="font-light text-sm">
      Please visit Wolt Privacy Statement to learn more about personal data
      processing at Wolt. You can access the local Privacy Statement related to
      your Wolt account after you have provided the country and language
      preferences applicable to you during registration. This site is protected
      by hCaptcha. The hCaptcha Privacy Policy and Terms of Service apply.
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={userModal.isOpen}
      title="Create an account or log in"
      subtitle="Log in below or create a new Wolt account."
      body={body}
      onClose={userModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      footer={footer}
    />
  )
}
export default UserModal
