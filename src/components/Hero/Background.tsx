"use client"

import { motion } from 'framer-motion'

const Background = () => {
  return (
    <div className="absolute inset-0">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  )
}

export default Background 