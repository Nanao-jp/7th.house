"use client"

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import ActionButton from './ActionButton'

const MainContent = () => {
  return (
    <div className="relative rounded-lg p-10 flex flex-col justify-center items-center gap-8 md:gap-12 lg:gap-16">
      <motion.div 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight relative text-center leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TypeAnimation
          sequence={[
            500,
            'AIが導く、',
            1000,
            'AIが導く、次世代のWeb開発',
          ]}
          wrapper="h1"
          speed={50}
          className="relative inline-block whitespace-nowrap"
          cursor={true}
          repeat={0}
        />
        <motion.span 
          className="absolute -bottom-2 left-0 w-full h-[1px]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <span className="block w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
        </motion.span>
      </motion.div>

      <motion.p 
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-light tracking-[0.2em] relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
      >
        <span className="relative inline-block">
          7th.House
          <motion.span 
            className="absolute -left-4 -right-4 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 3.5, duration: 0.8 }}
          />
        </span>
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.8 }}
        className="relative z-10"
      >
        <ActionButton />
      </motion.div>
    </div>
  )
}

export default MainContent 