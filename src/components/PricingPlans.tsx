"use client"

import { motion } from 'framer-motion'
import { pricingPlans } from '@/constants/pricing'
import Section from '@/components/ui/Section'
import PricingCard from './pricing/PricingCard'
import OperatingCosts from './pricing/OperatingCosts'
import PricingFAQ from './pricing/PricingFAQ'

const PricingPlans = () => {
  return (
    <Section 
      id="pricing"
      className="py-20"
      disableDefaultBackground
      fullWidth
    >
      <div className="relative">
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              料金プラン
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              ビジネスの規模や目的に合わせて、最適なプランをお選びいただけます
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>

          <OperatingCosts />
          <PricingFAQ />
        </div>
      </div>
    </Section>
  )
}

export default PricingPlans 