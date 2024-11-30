"use client"

import { ReactNode, useState } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { TabsProvider } from './TabsContext'

interface TabsProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  children: ReactNode
  defaultTab: string
  variant?: 'default' | 'pills' | 'underline'
}

const variantStyles = {
  default: {
    container: 'border-b border-gray-700',
    list: 'gap-2',
  },
  pills: {
    container: '',
    list: 'gap-1',
  },
  underline: {
    container: 'border-b border-gray-700',
    list: 'gap-8',
  },
}

const Tabs = ({ 
  children,
  defaultTab,
  variant = 'default',
  className,
  ...props 
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <TabsProvider value={{ activeTab, setActiveTab }}>
      <div 
        className={twMerge(
          variantStyles[variant].container,
          className
        )}
        {...props}
      >
        {children}
      </div>
    </TabsProvider>
  )
}

export default Tabs 