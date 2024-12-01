import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const staggerChildren = (delay: number = 0.2): Variants => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: delay }
});

export const slideInFromTop: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  transition: { duration: 0.3 }
};

export const hoverLift: Variants = {
  initial: { y: 0 },
  hover: { y: -2 },
}

export const transition = {
  duration: 0.3,
  ease: 'easeOut',
}

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
}; 