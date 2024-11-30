import { Variants } from 'framer-motion'

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

export const slideInFromTop: Variants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
}

export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
}

export const hoverLift: Variants = {
  initial: { y: 0 },
  hover: { y: -2 },
}

export const transition = {
  duration: 0.3,
  ease: 'easeOut',
} 