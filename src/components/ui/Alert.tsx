"use client"

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { fadeIn } from '@/constants/animations'
import { viewportConfig } from '@/constants/viewport'

interface AlertProps {
  children: ReactNode
  variant?: 'info' | 'success' | 'warning' | 'error'
  className?: string
  onClose?: () => void
}

const variants = {
  info: 'bg-blue-500/10 text-blue-200 border-blue-500/20',
  success: 'bg-green-500/10 text-green-200 border-green-500/20',
  warning: 'bg-yellow-500/10 text-yellow-200 border-yellow-500/20',
  error: 'bg-red-500/10 text-red-200 border-red-500/20'
}

const Alert = ({ 
  children, 
  variant = 'info',
  className,
  onClose 
}: AlertProps) => {
  return (
    <motion.div
      variants={fadeIn}
      viewport={viewportConfig}
      className={twMerge(
        'relative rounded-lg border p-4',
        variants[variant],
        className
      )}
    >
      {children}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-current opacity-50 hover:opacity-100 transition-opacity"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      )}
    </motion.div>
  )
}

export default Alert 