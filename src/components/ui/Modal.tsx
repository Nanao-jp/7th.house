"use client"

import { HTMLAttributes, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { zIndex } from '@/constants/theme'

interface ModalProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  isOpen: boolean
  onClose: () => void
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children?: ReactNode
}

const sizes = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const modalVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 300,
    },
  },
}

const Modal = ({ 
  isOpen,
  onClose,
  size = 'md',
  className,
  children,
  ...props 
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (typeof window === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            style={{ zIndex: zIndex.modal }}
            onClick={onClose}
          />
          <div
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{ zIndex: zIndex.modal }}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={twMerge(
                'w-full bg-gray-800/90 border border-gray-700 rounded-lg backdrop-blur-sm',
                'p-6 shadow-xl',
                sizes[size],
                className
              )}
              onClick={e => e.stopPropagation()}
              {...props}
            >
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default Modal 