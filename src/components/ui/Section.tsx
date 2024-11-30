import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { fadeIn } from '@/constants/animations'
import Container from './Container'

interface SectionProps extends Omit<HTMLMotionProps<"section">, 'children'> {
  children?: ReactNode
  id?: string
  disableDefaultBackground?: boolean
  fullWidth?: boolean
}

const Section = ({ 
  children, 
  className, 
  id, 
  disableDefaultBackground = false,
  fullWidth = false,
  ...props 
}: SectionProps) => {
  const content = fullWidth ? children : <Container>{children}</Container>;

  return (
    <motion.section
      id={id}
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={twMerge(
        'py-16 relative',
        disableDefaultBackground && 'bg-transparent',
        className
      )}
      {...props}
    >
      {content}
    </motion.section>
  )
}

export default Section 