"use client"

import Hero from '@/components/Hero'
import DemoSection from '@/components/DemoSection'
import Features from '@/components/Features'
import Process from '@/components/Process'
import TechAndFlow from '@/components/TechAndFlow'
import PricingPlans from '@/components/PricingPlans'
import AboutContact from '@/components/AboutContact'
import DesignAccents from '@/components/AboutContact/DesignAccents'

export default function Home() {
  return (
    <>
      <Hero />
      <DemoSection />
      <Features />
      <Process />
      <TechAndFlow />
      <PricingPlans />
      <AboutContact />
      <div className="h-24 relative">
        <DesignAccents />
      </div>
    </>
  )
}
