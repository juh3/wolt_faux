'use client'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
  id: string
  label: string
  type?: string
  required: boolean
  disabled?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  register,
  errors,
  required,
  disabled,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        disabled={disabled}
        className={`
        peer 
        w-full 
        rounded-lg 
        py-3 
        pl-2 
        border-[2px] 
        border-gray-400 
        transition
        outline-none
        focus:outline-none
        focus:border-[3px]
        ${errors[id] ? 'border-rose-500' : ''}
        ${errors[id] ? 'focus:border-rose-500' : 'focus:border-blue-400'}
        `}
      />
      <label
        className={`
        absolute 
        text-md 
        duration-150 
        top-4 
        left-4 
        -translate-y-3 
        transform 
        origin-[0] 
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75 
        peer-focus:-translate-y-4
        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}`}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
