"use client"

import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface DropdownItemProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  children?: ReactNode
  icon?: ReactNode
  disabled?: boolean
  danger?: boolean
}

const DropdownItem = ({ 
  children,
  icon,
  disabled = false,
  danger = false,
  className,
  onClick,
  ...props 
}: DropdownItemProps) => {
  return (
    <motion.button
      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      whileTap={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      className={twMerge(
        'w-full px-4 py-2 flex items-center gap-2 text-sm transition-colors',
        disabled && 'opacity-50 cursor-not-allowed',
        danger && 'text-red-400 hover:text-red-300',
        !disabled && !danger && 'text-gray-200 hover:text-white',
        className
      )}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {icon && (
        <span className="w-4 h-4 flex items-center justify-center">
          {icon}
        </span>
      )}
      {children}
    </motion.button>
  )
}

export default DropdownItem 