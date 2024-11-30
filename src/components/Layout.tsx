"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useMousePosition } from '@/utils/mousePosition'
import TextureBackground from './ui/backgrounds/TextureBackground'
import GradientBackground from './ui/backgrounds/GradientBackground'
import LightEffects from './ui/backgrounds/LightEffects'
import Navbar from './navigation/Navbar'
import { fadeIn } from '@/constants/animations'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const mousePosition = useMousePosition()

  return (
    <motion.div 
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="min-h-screen relative overflow-hidden"
    >
      <TextureBackground />
      <GradientBackground mousePosition={mousePosition} />
      <LightEffects />

      <div className="relative z-10">
        <Navbar />
        <main className="pt-2.5">
          {children}
        </main>
      </div>
    </motion.div>
  )
}

export default Layout