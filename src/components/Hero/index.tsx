"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MainBorders, ShiningEffect } from './BorderEffects'
import { GlowEffect } from './GlowEffect'
import { Title } from './Title'
import { Subtitle } from './Subtitle'
import { ActionButton } from './ActionButton'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-10 pb-10 relative overflow-hidden">
      <Image
        src="/hero-gradient.png"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />
      
      <div className="w-full max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center relative"
        >
          <GlowEffect />
          <MainBorders />
          <ShiningEffect />
          
          <div className="relative rounded-lg p-10 bg-black/5">
            <Title />
            <Subtitle />
            <ActionButton />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 