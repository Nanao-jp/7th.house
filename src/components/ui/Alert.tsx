"use client"

import { HTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { fadeIn } from '@/constants/animations'

interface AlertProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  variant?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  children?: ReactNode
}

const variants = {
  info: 'bg-blue-500/10 border-blue-500 text-blue-200',
  success: 'bg-green-500/10 border-green-500 text-green-200',
  warning: 'bg-yellow-500/10 border-yellow-500 text-yellow-200',
  error: 'bg-red-500/10 border-red-500 text-red-200',
}

const Alert = ({ 
  variant = 'info',
  title,
  className,
  children,
  ...props 
}: AlertProps) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className={twMerge(
        'p-4 rounded-lg border backdrop-blur-sm',
        variants[variant],
        className
      )}
      role="alert"
      {...props}
    >
      {title && (
        <h4 className="font-semibold mb-2">{title}</h4>
      )}
      <div className="text-sm opacity-90">
        {children}
      </div>
    </motion.div>
  )
}

export default Alert 