"use client"

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { hoverScale, transition } from '@/constants/animations'

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline'
  children?: ReactNode
}

const variantStyles = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white',
  secondary: 'bg-purple-500 hover:bg-purple-600 text-white',
  outline: 'border-2 border-blue-500 hover:bg-blue-500/10 text-blue-500',
}

const Button = ({ 
  children, 
  className, 
  variant = 'primary',
  ...props 
}: ButtonProps) => {
  return (
    <motion.button
      variants={hoverScale}
      initial="initial"
      whileHover="hover"
      transition={transition}
      className={twMerge(
        'px-6 py-2 rounded-lg font-medium transition-colors',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button 