'use client'
import React, { useState } from 'react'
import Modal from './Modal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import useRegisterModal from '../hooks/useRegisterModal'
import { getCookie, hasCookie } from 'cookies-next'
import Input from '../Input'

const RegisterModal = () => {
  const registerModal = useRegisterModal()
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
      password: '',
      firstname: '',
      lastname: '',
      dob: '',
    },
  })
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)
    const response = await axios.post('/api/register', data)
  }
  const body = (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-2 w-full">
        <Input
          type="text"
          small
          disabled={isLoading}
          label="First name"
          register={register}
          id="firstname"
          errors={errors}
          required
        />
        <Input
          type="text"
          small
          disabled={isLoading}
          label="Last name"
          register={register}
          id="lastname"
          errors={errors}
          required
        />
      </div>
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
        small
        disabled={isLoading}
        label="Password"
        register={register}
        id="password"
        errors={errors}
        required
      />
      <Input
        type="date"
        small
        disabled={isLoading}
        label="Date of Birth"
        register={register}
        id="dob"
        errors={errors}
        required
      />
    </div>
  )
  const footer = (
    <div>
      Do note that this is a learning project and thus a fake site of Wolt. Do
      NOT share sensitive information
    </div>
  )
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register below"
      subtitle="Create a new Wolt account."
      body={body}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      footer={footer}
    />
  )
}

export default RegisterModal
