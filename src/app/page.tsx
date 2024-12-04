"use client"

import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import DemoSection from '@/components/DemoSection'

// 動的インポートに変更
const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <div className="min-h-screen" />
})

const Process = dynamic(() => import('@/components/Process'), {
  loading: () => <div className="min-h-screen" />
})

const TechAndFlow = dynamic(() => import('@/components/TechAndFlow'), {
  loading: () => <div className="min-h-screen" />
})

const PricingPlans = dynamic(() => import('@/components/PricingPlans'), {
  loading: () => <div className="min-h-screen" />
})

const AboutContact = dynamic(() => import('@/components/AboutContact'), {
  loading: () => <div className="min-h-screen" />
})

const DesignAccents = dynamic(() => import('@/components/AboutContact/DesignAccents'), {
  loading: () => <div className="h-24 relative" />
})

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
