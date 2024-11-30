"use client"

import { motion } from 'framer-motion'
import { hoverScale } from '@/constants/animations'

interface LogoProps {
  onClick: () => void
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <motion.button 
      onClick={onClick}
      variants={hoverScale}
      whileHover="hover"
      className="relative group cursor-pointer mx-auto md:mx-0"
    >
      <motion.div
        className="absolute -inset-x-4 -inset-y-2 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity"
        animate={{
          background: [
            'radial-gradient(100% 100% at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 100%)',
            'radial-gradient(100% 100% at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 100%)',
            'radial-gradient(100% 100% at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 100%)'
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="text-2xl font-bold text-white font-[family-name:var(--font-orbitron)] tracking-wider relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="relative">
          7th.House
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.span 
            className="absolute -top-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </span>
      </motion.div>
    </motion.button>
  )
}

export default Logo 