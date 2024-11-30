"use client"

import { ReactNode, useState, useRef, useEffect } from 'react'
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface TooltipProps extends Omit<HTMLMotionProps<"div">, 'children' | 'content'> {
  children: ReactNode
  content: ReactNode
  placement?: 'top' | 'right' | 'bottom' | 'left'
  trigger?: 'hover' | 'click'
  delay?: number
  offset?: number
}

const tooltipVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.15,
      stiffness: 300,
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
    }
  }
}

const placementStyles = {
  top: {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: '8px',
  },
  right: {
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginLeft: '8px',
  },
  bottom: {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '8px',
  },
  left: {
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginRight: '8px',
  },
}

const Tooltip = ({
  children,
  content,
  placement = 'top',
  trigger = 'hover',
  delay = 0,
  offset = 8,
  className,
  ...props
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const tooltipRef = useRef<HTMLDivElement>(null)

  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true)
    }, delay)
  }

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsVisible(false)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (trigger === 'click') {
      const handleClickOutside = (event: MouseEvent) => {
        if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
          hideTooltip()
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [trigger])

  const handlers = trigger === 'hover'
    ? {
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip,
      }
    : {
        onClick: () => setIsVisible(!isVisible),
      }

  return (
    <div 
      className="relative inline-block"
      ref={tooltipRef}
      {...handlers}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={twMerge(
              'absolute z-50 px-3 py-2 text-sm text-white bg-gray-900/95 border border-gray-700',
              'rounded-lg shadow-xl backdrop-blur-sm whitespace-nowrap',
              className
            )}
            style={{
              ...placementStyles[placement],
              marginBottom: placement === 'top' ? offset : undefined,
              marginTop: placement === 'bottom' ? offset : undefined,
              marginLeft: placement === 'right' ? offset : undefined,
              marginRight: placement === 'left' ? offset : undefined,
            }}
            {...props}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Tooltip 