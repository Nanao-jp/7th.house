"use client"

import { ButtonHTMLAttributes } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { useTabs } from './TabsContext'

interface TabProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  id: string
  variant?: 'default' | 'pills' | 'underline'
  children?: React.ReactNode
}

const variantStyles = {
  default: {
    base: 'px-4 py-2 text-sm font-medium transition-colors rounded-t-lg',
    active: 'bg-gray-800/50 text-white border-x border-t border-gray-700',
    inactive: 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/30',
  },
  pills: {
    base: 'px-4 py-2 text-sm font-medium transition-colors rounded-lg',
    active: 'bg-gray-800/90 text-white',
    inactive: 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50',
  },
  underline: {
    base: 'px-1 py-2 text-sm font-medium transition-colors border-b-2',
    active: 'text-white border-blue-500',
    inactive: 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700',
  },
}

const Tab = ({ 
  id,
  variant = 'default',
  className,
  children,
  ...props 
}: TabProps) => {
  const { activeTab, setActiveTab } = useTabs()
  const isActive = activeTab === id

  return (
    <motion.button
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      id={`tab-${id}`}
      className={twMerge(
        variantStyles[variant].base,
        isActive ? variantStyles[variant].active : variantStyles[variant].inactive,
        className
      )}
      onClick={() => setActiveTab(id)}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Tab 