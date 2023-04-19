'use client'
import React, { useState } from 'react'
import Modal from './Modal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import useLoginModal from '../hooks/useLoginModal'
import Input from '../Input'
import { getCookie, hasCookie } from 'cookies-next'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const LoginModal = () => {
  const router = useRouter()
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)
  let email
  if (hasCookie('email')) {
    email = getCookie('email')
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: `${email}`,
    },
  })
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)
    //POST to /login
    //const response = await axios.post('/login', data)
    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        console.log('success signing in!')
        setIsLoading(false)
        router.refresh()
        loginModal.onClose()
      }
      if (callback?.error) {
        console.error('could not sign in :(')
      }
    })
  }

  const body = (
    <div className="flex flex-col gap-3">
      <Input
        type="email"
        disabled={isLoading}
        label="Email"
        register={register}
        id="email"
        errors={errors}
        required
      />
      <Input
        type="password"
        disabled={isLoading}
        label="Password"
        register={register}
        id="password"
        errors={errors}
        required
      />
    </div>
  )
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Log in below"
      subtitle="Log in below with your Wolt account."
      body={body}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}

export default LoginModal
