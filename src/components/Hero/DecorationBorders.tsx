"use client"

import { ShiningBorder } from './decorations/ShiningBorder'
import { PulsingBorder } from './decorations/PulsingBorder'
import { GlowingBackground } from './decorations/GlowingBackground'
import { LightParticles } from './decorations/LightParticles'

export const DecorationBorders = () => {
  return (
    <>
      <ShiningBorder />
      <PulsingBorder />
      <GlowingBackground />
      <LightParticles />
    </>
  )
} 