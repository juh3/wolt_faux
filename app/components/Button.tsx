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
  google?: boolean
  apple?: boolean
  facebook?: boolean
  login?: boolean
}

const Button: React.FC<ButtonProps> = ({
  primary,
  cta,
  disabled,
  outline,
  small,
  onClick,
  icon: Icon,
  google,
  apple,
  facebook,
  login,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative w-full disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 transition py-3 border-[2px] rounded-lg font-bold
        ${primary ? 'bg-blue-400' : 'bg-white'}
        ${primary ? 'text-white' : 'text-black'}
        ${small ? 'px-0, m-0' : ''}
        ${google ? 'bg-white' : ''}
        ${apple ? 'bg-black' : ''}
        ${facebook ? 'bg-blue-800' : ''}
        ${login ? 'w-fit-content' : ''}
        ${login ? 'px-6' : ''}
        ${login ? 'py-1' : ''}


      `}
    >
      {Icon && (
        <Icon
          size={24}
          className={`absolute left-4 top-3 ${apple && 'color-white'}`}
        />
      )}
      {cta}
    </button>
  )
}

export default Button
