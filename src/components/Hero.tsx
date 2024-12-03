"use client"

import { motion } from 'framer-motion'
import Background from './Hero/Background'
import { GlowEffect } from './Hero/GlowEffect'
import { MainBorders, ShiningEffect } from './Hero/BorderEffects'
import MainContent from './Hero/MainContent'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <Background />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center relative flex items-center justify-center"
        >
          <GlowEffect />
          <div className="relative h-80 w-full flex items-center justify-center">
            <MainBorders />
            <div className="relative z-10">
              <MainContent />
            </div>
          </div>
          <ShiningEffect />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero