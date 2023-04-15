'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import Button from '../Button'
interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: string
  footer?: string
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
          md:w-2/6
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
                <div className="flex flex-col absolute left-8 top-12">
                  <div className="text-lg font-semibold">{title}</div>
                  <div className="text-md font-light">{subtitle}</div>
                </div>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">{body}</div>

              {/*Footer */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-col items-center gap-4 w-full">
                  <Button cta="login" primary icon={FcGoogle} />
                  <Button cta="login" primary />
                  <Button cta="login" primary />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Modal
