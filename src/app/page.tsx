"use client"

import Hero from '@/components/Hero'
import DemoSection from '@/components/DemoSection'
import Features from '@/components/Features'
import Process from '@/components/Process'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <DemoSection />
      <Features />
      <Process />
      <TechStack />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
