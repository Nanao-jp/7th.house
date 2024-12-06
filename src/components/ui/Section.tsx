import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/constants/animations'
import { viewportConfig } from '@/constants/viewport'
import { twMerge } from 'tailwind-merge'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  disableDefaultBackground?: boolean
  fullWidth?: boolean
}

const Section = ({ 
  children, 
  className,
  id,
  disableDefaultBackground = false,
  fullWidth = false
}: SectionProps) => {
  return (
    <section id={id} className={twMerge(
      'relative',
      !disableDefaultBackground && 'bg-gray-900/50',
      className
    )}>
      <motion.div 
        variants={fadeIn}
        viewport={viewportConfig}
        className={twMerge(
          'mx-auto',
          !fullWidth && 'max-w-6xl px-4'
        )}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default Section 