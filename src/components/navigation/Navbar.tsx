"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { navigationLinks } from '@/constants/navigation'
import Container from '@/components/ui/Container'
import { slideInFromTop, hoverScale, hoverLift } from '@/constants/animations'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <Container className="py-4">
        <motion.div 
          variants={slideInFromTop}
          initial="initial"
          animate="animate"
          className="flex justify-between items-center"
        >
          <motion.div 
            variants={hoverScale}
            whileHover="hover"
            className="flex flex-col items-start"
          >
            <div className="relative w-[150px] h-[40px]">
              <Image
                src="/logo.jpg"
                alt="7th.house"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </motion.div>
          
          <div className="space-x-6">
            {navigationLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                variants={hoverLift}
                whileHover="hover"
                className="text-white hover:text-blue-400 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Container>
    </nav>
  )
}

export default Navbar 