"use client"

import { HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'pills' | 'underline'
}

const variantStyles = {
  default: 'flex gap-2 border-b border-gray-700',
  pills: 'flex gap-1',
  underline: 'flex gap-8 border-b border-gray-700',
}

const TabList = ({ 
  variant = 'default',
  className,
  ...props 
}: TabListProps) => {
  return (
    <div
      role="tablist"
      className={twMerge(
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
}

export default TabList 