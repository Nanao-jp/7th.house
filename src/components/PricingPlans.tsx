"use client"

import { motion } from 'framer-motion'
import { fadeInUp, staggerChildren } from '@/constants/animations'
import { pricingPlans } from '@/constants/pricing'
import Section from '@/components/ui/Section'
import PricingCard from './pricing/PricingCard'
import OperatingCosts from './pricing/OperatingCosts'
import PricingFAQ from './pricing/PricingFAQ'

const PricingPlans = () => {
  return (
    <Section className="py-32 md:py-40" disableDefaultBackground>
      <div className="relative">
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              料金プラン
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              ビジネスの規模や目的に合わせて、最適なプランをお選びいただけます
            </p>
          </motion.div>

          <motion.div
            {...staggerChildren()}
            className="grid md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </motion.div>

          <OperatingCosts />
          <PricingFAQ />
        </div>
      </div>
    </Section>
  )
}

export default PricingPlans 