"use client"

import { HTMLAttributes } from 'react'
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { useTabs } from './TabsContext'

interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  children?: React.ReactNode
}

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode
}

const panelVariants = {
  hidden: { 
    opacity: 0,
    x: -20,
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 0.3,
      bounce: 0,
    }
  },
  exit: { 
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.2,
    }
  }
}

const TabPanel = ({ 
  id,
  className,
  children,
  ...props 
}: TabPanelProps) => {
  const { activeTab } = useTabs()
  const isActive = activeTab === id

  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      hidden={!isActive}
      className={twMerge(
        'outline-none',
        className
      )}
      tabIndex={0}
      {...props}
    >
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            key={id}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TabPanel 