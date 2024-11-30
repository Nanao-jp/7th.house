import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { fadeIn } from '@/constants/animations'
import Container from './Container'

interface SectionProps extends Omit<HTMLMotionProps<"section">, 'children'> {
  children?: ReactNode
  id?: string
}

const Section = ({ children, className, id, ...props }: SectionProps) => {
  return (
    <motion.section
      id={id}
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={twMerge('py-16', className)}
      {...props}
    >
      <Container>
        {children}
      </Container>
    </motion.section>
  )
}

export default Section 