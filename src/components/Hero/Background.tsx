"use client"

import Image from 'next/image'

const Background = () => {
  return (
    <>
      <Image
        src="/hero-gradient.png"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />
    </>
  )
}

export default Background 