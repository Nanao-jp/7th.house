"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useMousePosition } from '@/utils/mousePosition'
import TextureBackground from './ui/backgrounds/TextureBackground'
import GradientBackground from './ui/backgrounds/GradientBackground'
import LightEffects from './ui/backgrounds/LightEffects'
import Navbar from './navigation/Navbar'
import { slideInFromTop } from '@/constants/animations'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const mousePosition = useMousePosition()

  return (
    <motion.div 
      variants={slideInFromTop}
      initial="initial"
      animate="animate"
      className="min-h-screen relative overflow-hidden bg-gray-900"
    >
      <div className="fixed inset-0 pointer-events-none">
        <TextureBackground />
        <GradientBackground mousePosition={mousePosition} />
        <LightEffects />
      </div>

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