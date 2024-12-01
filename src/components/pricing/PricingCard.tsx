"use client"

import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import Card from '@/components/ui/Card'
import { fadeInUp } from '@/constants/animations'
import { PricingPlan } from '@/constants/pricing'

interface PricingCardProps {
  plan: PricingPlan
  index: number
}

const PricingCard = ({ plan, index }: PricingCardProps) => {
  return (
    <motion.div
      {...fadeInUp}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card
        variant="pricing"
        withHover
        padding="large"
        className={`relative ${
          plan.recommended ? 'border-2 border-purple-500' : ''
        }`}
      >
        {plan.recommended && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              おすすめ
            </span>
          </div>
        )}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            {plan.name}
          </h3>
          <p className="text-gray-400 mb-4">{plan.description}</p>
          <div className="flex items-baseline justify-center">
            <span className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-purple-400">
              ¥{plan.price}
            </span>
          </div>
        </div>
        <div className="space-y-4 min-h-[320px]">
          {plan.features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className="flex items-center space-x-3"
            >
              <div className={`p-1 rounded-full bg-gradient-to-r ${plan.accent}`}>
                <FaCheck className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r ${plan.accent} hover:opacity-90 transition-opacity duration-300`}
          >
            お問い合わせ
          </button>
        </div>
      </Card>
    </motion.div>
  )
}

export default PricingCard 