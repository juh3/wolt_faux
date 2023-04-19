'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import { RiFacebookCircleFill } from 'react-icons/ri'
import Button from '../Button'
import Input from '../Input'
interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  disabled?: boolean
  subtitle?: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  disabled,
  subtitle,
}) => {
  const [showModal, setShowModal] = useState(isOpen)
  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) {
      return
    }
    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return
    }
    onSubmit()
  }, [disabled, onSubmit])

  if (!isOpen) {
    return null
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus: outine-none bg-neutral-800/70">
        <div
          className="
          relative
          w-full
          md:w-1/3
          lg: w-3/6
          xl: w-2/5
          my-6
          mx-auto
          h-full
          lg:h-auto
          md:h-auto
        "
        >
          {/* CONTENT */}
          <div
            className={`
          translate 
          duration-300 
          h-full 
          ${showModal ? 'translate-y-0' : 'translate-y-full'}
          ${showModal ? 'opacity-100' : 'opacity-0'}
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0
              rounded-lg
              shadow-lg
              relative
              flex
              flex-col
              w-full
              bg-white
              outline-none
              focus:outline-none
            "
            >
              {/*Header */}
              <div className="flex items-center p-6 rounded-t justify-center relative">
                <button
                  onClick={handleClose}
                  className="border-0 rounded-full bg-gray-200 mt-4 px-2 py-2 transition hover:bg-gray-300 absolute right-9"
                >
                  <AiOutlineClose size={28} />
                </button>
              </div>
              {/*body */}
              <div className="relative pl-6 flex-auto">
                <div className="text-3xl font-semibold pb-2">{title}</div>
                <div className="text-sm font-light">{subtitle}</div>
              </div>
              {/*body*/}

              <div className="flex flex-col gap-2 p-6">{body}</div>
              <div className="gap-2 wrap px-6 pb-4">
                <div className="">
                  <Button cta="Next" primary onClick={handleSubmit} />
                </div>
                <div>{footer}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Modal
