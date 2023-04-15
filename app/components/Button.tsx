'use client'
import React from 'react'
import { IconType } from 'react-icons/lib'

interface ButtonProps {
  primary?: boolean
  cta: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  icon?: IconType
  small?: boolean
}

const Button: React.FC<ButtonProps> = ({
  primary,
  cta,
  disabled,
  outline,
  small,
  onClick,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 transition px-6 ml-4 py-3
        ${primary ? 'bg-blue-400' : 'bg-white'}
        ${primary ? 'rounded-lg' : ''}
        ${primary ? 'font-bold' : ''}
        ${primary ? 'text-white' : 'text-black'}
        ${small ? 'px-0, m-0' : ''}
      `}
    >
      {cta}
    </button>
  )
}

export default Button
