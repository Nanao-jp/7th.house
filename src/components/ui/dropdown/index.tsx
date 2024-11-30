"use client"

import { ReactNode, useState, useRef, useEffect } from 'react'
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface DropdownProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  trigger: ReactNode
  children?: ReactNode
  align?: 'left' | 'right'
  width?: 'auto' | 'trigger' | number
}

const menuVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
    y: -4,
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.2,
      stiffness: 300,
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -4,
    transition: {
      duration: 0.15,
    }
  }
}

const Dropdown = ({ 
  trigger,
  children,
  align = 'left',
  width = 'auto',
  className,
  ...props 
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={twMerge(
              'absolute mt-2 py-2 bg-gray-800/90 border border-gray-700 rounded-lg shadow-xl backdrop-blur-sm',
              'min-w-[12rem]',
              align === 'right' ? 'right-0' : 'left-0',
              className
            )}
            style={{
              width: width === 'trigger' 
                ? dropdownRef.current?.firstElementChild?.clientWidth 
                : width === 'auto' ? 'auto' : width,
              zIndex: 1000,
            }}
            {...props}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Dropdown 